"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

import { deleteReservationReducer } from "@/redux/features/reservationSlice"
import ModalButton from "./ModalButton"
import ReservationForm from "./ReservationForm"
import getReservations from "@/libs/getReservations"
import { setReservationReducer } from "@/redux/features/reservationSlice"
import { useEffect } from "react"
import { ReservationJson } from "../../interface"

export default function BookingList() {

    const reservationItems = useAppSelector(state => state.reservationSlice.reservationItems)
    const dispatch = useDispatch<AppDispatch>()

    // console.log(reservationItems)
    useEffect(() => {
        const fetchReservations = async () => {
            const reservations:ReservationJson = await getReservations();
            dispatch(setReservationReducer(reservations.data))
        }
        fetchReservations();
    }, [])

    return (
        <div className="m-5">
        {
            reservationItems.length > 0 ? (
                reservationItems.map((reservation) => (
                    <div className="bg-slate-200 rounded p-8 mx-5 my-2 h-[250px]" key={reservation._id}>
                        <div className="text-2xl">Date of Reservation : {reservation.apptDate}</div>
                        <div className="text-xl">Massage : {reservation.massage.name}</div>
                        <ModalButton text="Edit Reservation">
                            <ReservationForm isUpdate={true} id={reservation.id} />
                        </ModalButton>
                        <button className="rounded-md bg-red-600 hover:bg-red-800 transition px-3 py-1 text-white shadow-sm relative mt-10" onClick={() => dispatch(deleteReservationReducer(reservation._id))}>Cancel Reservation</button>
                    </div>
                ))
            ) : <h1>No Reservation data</h1>
        }
        </div>
    )

}