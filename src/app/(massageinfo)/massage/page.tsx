"use client"
import getMassages from "@/libs/getMassages";
import MassageCatalog from "@/components/MassageCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import ModalButton from "@/components/ModalButton";
import MassageForm from "@/components/MassageForm";

import { useAppSelector } from "@/redux/store";

export default function Massage() {
    
    const { data: session } = useSession()
    const massageItems = useAppSelector(state => state.massageSlice.massageItems)    

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Massage</h1>
            {
                session?.user.data.role === "admin"
                ? (
                    <div className="mt-5">
                       <ModalButton text="Create new massage">
                        {<MassageForm isUpdate={false} id={null}/>}
                        </ModalButton> 
                    </div>
                    
                )
                : null
            }
            <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
                {massageItems && <MassageCatalog massages={massageItems} />}
            </Suspense>
        </main>
    )
}