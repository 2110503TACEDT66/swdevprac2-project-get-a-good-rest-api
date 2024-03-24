"use client"
import DateReserve from "@/components/DateReserve"
import { Select, MenuItem, TextField} from "@mui/material";
import getUserProfile from "@/libs/getUserProfile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";

import { addBooking } from "@/redux/features/bookSlice";
import dayjs, { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";

export default function Booking() {

  const { data: session } = useSession();
  if (!session || !session.user.token) return null

  const dispatch = useDispatch<AppDispatch>()

  const [name, setName] = useState<string>("")
  const [citizenID, setCitizenID] = useState<string>("")
  const [hospital, setHospital] = useState<string>("Chula")
  const [datePicker, setDatePicker] = useState<Dayjs | null>(null)

  const makeBooking = () => {
    if (name && citizenID && hospital && datePicker) {
      
      const item: BookingItem = {
        name: name.split(' ')[0],
        surname: name.split(' ')[1] || "",
        id: citizenID,
        hospital: hospital,
        bookDate: dayjs(datePicker).format("YYYY-MM-DD")
      }
      dispatch(addBooking(item))
    }
  }

  return (
    <>
    <div className="h-[calc(100vh-75px)] grid justify-center items-center">
      <div className="bg-slate-100 rounded-lg space-x-5 space-y-4 px-10 py-10 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold">Book Vaccine</h1>

        <TextField id="Name-Lastname" label="Name-Lastname" variant="standard" value={name} onChange={(event) => setName(event.target.value)}/>
          <TextField id="Citizen ID" label="Citizen ID" variant="standard" value={citizenID} onChange={(event) => setCitizenID(event.target.value)} />
          <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[200px]" value={hospital} onChange={(event) => setHospital(event.target.value)}>
          <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
        </Select>
        <DateReserve onDateChange={(value: Dayjs) => {
          setDatePicker(value)
        }}/>
        
        <button name="Book Vaccine" className="bg-white p-2 rounded-lg shadow-lg" onClick={makeBooking}>Book Vaccine</button>
      </div>
    </div>
    </>
  )
}