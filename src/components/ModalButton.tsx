"use client"

import { useState } from "react"
import { Modal } from "@mui/material";

export default function ModalButton({ text, children }: { text:string, children: React.ReactNode }) {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <button className="px-4 py-2 bg-[#426B1F] text-[#FFFFFF] rounded-xl transition hover:bg-[#DBE7C9] hover:text-[#426B1F]" onClick={(e) => {e.preventDefault(); handleOpen()}}>{text}</button>
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