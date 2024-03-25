"use client"
import DateReserve from "@/components/DateReserve"
import { Select, MenuItem } from "@mui/material";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addReservationReducer, updateReservationReducer } from "@/redux/features/reservationSlice";

import dayjs, { Dayjs } from "dayjs";
import { ReservationItem } from "../../interface";

export default function ReservationForm({ isUpdate, id }: { isUpdate: boolean, id: string | null }) {

    const { data: session } = useSession();
    if (!session || !session.user.token) return null

    const massageItems = useAppSelector(state => state.massageSlice.massageItems)
    const reservationItems = useAppSelector(state => state.reservationSlice.reservationItems)
    const dispatch = useDispatch<AppDispatch>()

    const [massage, setMassage] = useState<string>("")
    const [datePicker, setDatePicker] = useState<Dayjs | null>(null)

    useEffect(() => {
        if (isUpdate) {
            if (id === null) return;
            const reservationTarget = reservationItems.find((reservation) => reservation.id === id)
            if (reservationTarget) {
                setMassage(reservationTarget.massage.id)
                setDatePicker(dayjs(reservationTarget.apptDate))
            }
        }
    }, [])

    const onSumbit = async () => {

        if (!massage || !datePicker) return

        const data: ReservationItem = {
            apptDate: dayjs(datePicker).format("YYYY-MM-DD"),
            user: session.user.data._id,
            massage: {
                _id: massage,
                name: "",
                province: "",
                tel: "",
                id: massage
            },
            id: "",
            _id: "",
            __v: 0
        }

        if (isUpdate) {
            if (id === null) return console.log("id is null while editing reservation");
            dispatch(updateReservationReducer(data))
        } else dispatch(addReservationReducer(data))

    }

    return (
        <>
            <div className="h-[calc(100vh-75px)] grid justify-center items-center">
                <div className="bg-slate-100 rounded-lg space-x-5 space-y-4 px-10 py-10 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-semibold">Massage Reservation</h1>
                    <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[200px]" value={massage} onChange={(event) => setMassage(event.target.value)}>
                        {
                            massageItems.map((massageItem) => (
                                <MenuItem key={massageItem.id} value={massageItem.id}>{massageItem.name}</MenuItem>
                            ))
                        }
                    </Select>
                    <DateReserve onDateChange={(value: Dayjs) => {
                        setDatePicker(value)
                    }} />

                    <button name="Book Vaccine" className="bg-white p-2 rounded-lg shadow-lg" onClick={onSumbit}>Reserve Massage</button>
                </div>
            </div>
        </>
    )

}