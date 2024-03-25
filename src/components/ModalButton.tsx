"use client"

import { useState } from "react"
import { Modal } from "@mui/material";

export default function ModalButton({ text, children }: { text:string, children: React.ReactNode }) {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <button className="p-4 bg-green-200" onClick={handleOpen}>{text}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {children as React.ReactElement}
            </Modal>
        </div>
    )
}