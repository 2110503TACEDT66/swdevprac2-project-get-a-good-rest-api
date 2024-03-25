"use client"
import DateReserve from "@/components/DateReserve"
import { Select, MenuItem, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";

export default function Reservation() {

  const { data: session } = useSession();
  if (!session || !session.user.token) return null

  const massageItems = useAppSelector(state => state.massageSlice.massageItems)
  const dispatch = useDispatch<AppDispatch>()

  const [massage, setMassage] = useState<string>("")
  const [datePicker, setDatePicker] = useState<Dayjs | null>(null)

  const onSumbit = async () => {
    if (!massage || !datePicker) return
    
  }

  return (
    <>
      <div className="h-[calc(100vh-75px)] grid justify-center items-center">
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-4 px-10 py-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold">Massage Reservation</h1>
          <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[200px]" value={massage} onChange={(event) => setMassage(event.target.value)}>
            {
              massageItems.map((massage) => (
                <MenuItem key={massage.id} value={massage.id}>{massage.name}</MenuItem>
              ))
            }
          </Select>
          <DateReserve onDateChange={(value: Dayjs) => {
            setDatePicker(value)
          }} />
          <h1>{"massage = " + massage + " And date = " + datePicker}</h1>

          <button name="Book Vaccine" className="bg-white p-2 rounded-lg shadow-lg">Book Vaccine</button>
        </div>
      </div>
    </>
  )
}