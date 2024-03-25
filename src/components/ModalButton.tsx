"use client"

import { useState } from "react"
import { Modal } from "@mui/material";

export default function ModalButton({ text, children }: { text:string, children: React.ReactNode }) {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <button className="rounded-md bg-yellow-600 hover:bg-yellow-800 transition px-3 py-1 text-white shadow-sm relative mt-10" onClick={(e) => {e.preventDefault(); handleOpen()}}>{text}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="flex justify-center items-center rounded-xl"
            >
                {children as React.ReactElement}
            </Modal>
        </div>
    )
}