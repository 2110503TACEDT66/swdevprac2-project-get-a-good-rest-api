import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReservationItem, ReservationJson } from "../../../interface";
import { store } from "../store";

import getReservations from "@/libs/getReservations";
import getReservation from "@/libs/getReservation";
import createReservation from "@/libs/createReservation";
import updateReservation from "@/libs/updateReservation";
import deleteReservation from "@/libs/deleteReservation";

type ReservationState = {
    reservationItems: ReservationItem[]
}

const initialState: ReservationState = {
    reservationItems: []
}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setReservationReducer: (state, action: PayloadAction<ReservationItem[]>) => {
            state.reservationItems = action.payload
        },
        addReservationReducer: (state, action: PayloadAction<ReservationItem>) => {
            createReservation(action.payload).then((res) => {
                getReservations().then((res:ReservationJson) => {
                    store.dispatch(setReservationReducer(res.data))
                })
            })
        },
        updateReservationReducer: (state, action: PayloadAction<ReservationItem>) => {
            state.reservationItems = state.reservationItems.map((reservation) => {
                if (reservation.id === action.payload.id) {
                    updateReservation(reservation._id, action.payload)
                    return action.payload
                }
                return reservation
            })
        },
        deleteReservationReducer: (state, action: PayloadAction<string>) => {
            state.reservationItems = state.reservationItems.filter((reservation) => reservation._id !== action.payload)
            deleteReservation(action.payload)
        }
    },
});

export const { setReservationReducer, addReservationReducer, updateReservationReducer, deleteReservationReducer } = reservationSlice.actions

export default reservationSlice.reducer

// Fetch data and update initialState
getReservations().then((res:ReservationJson) => {
    store.dispatch(setReservationReducer(res.data))
})