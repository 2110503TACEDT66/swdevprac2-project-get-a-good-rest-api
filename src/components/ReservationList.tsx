"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList() {

    const bookItems = useAppSelector(state => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="m-5">
        {
            bookItems.length > 0 ? (
                bookItems.map((booking) => (
                    <div className="bg-slate-200 rounded p-8 mx-5 my-2 h-[250px]" key={booking.id}>
                        <div className="text-2xl">Message Name : {booking.hospital}</div>
                        <div className="text-md">{booking.bookDate}</div>
                        <div className="text-sm text-gray-400 mb-5">Citizen-ID : {booking.id}</div>
                        <div className="text-xl">Reservation name : {booking.name}</div>
                        <button className="rounded-md bg-red-600 hover:bg-red-800 transition px-3 py-1 text-white shadow-sm relative mt-10" onClick={() => dispatch(removeBooking(booking.id))}>Cancel Reservation</button>
                    </div>
                ))
            ) : <h1>No Vaccine Booking</h1>
        }
        </div>
    )

}