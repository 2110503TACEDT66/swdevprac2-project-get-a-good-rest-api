"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList() {

    const bookItems = useAppSelector(state => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            bookItems.length > 0 ? (
                bookItems.map((booking) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={booking.id}>
                        <div className="text-xl">Name {booking.name}</div>
                        <div className="text-sm">Surname {booking.surname}</div>
                        <div className="text-sm">Citizen-ID {booking.id}</div>
                        <div className="text-md">Hospital {booking.hospital}</div>
                        <div className="text-md">Date {booking.bookDate}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" onClick={() => dispatch(removeBooking(booking.id))}>Cancel vaccine booking</button>
                    </div>
                ))
            ) : <h1>No Vaccine Booking</h1>
        }
        </>
    )

}