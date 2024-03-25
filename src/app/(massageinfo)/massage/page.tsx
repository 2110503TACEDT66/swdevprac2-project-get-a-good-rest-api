"use client"
import getMassages from "@/libs/getMassages";
import MassageCatalog from "@/components/MassageCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { MassageJson } from "../../../../interface";
import { useSession } from "next-auth/react";

export default function Massage() {

    const [massages, setMassages] = useState(null)

    const {data:session} = useSession()

    useEffect(() => {
        const fetchData = async () => {
            const res = await getMassages();
            setMassages(res)
        }

        fetchData()
    }, [])

    return (
        <main className="text-center p-5">
            {
                session?.user.data.role === "admin"
                ? <button className="p-4 bg-green-200">Create Massage</button>
                : null
            }
            <h1 className="text-xl font-medium">Select Your Massage</h1>
            <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
                {massages && <MassageCatalog massagesJson={massages} />}
            </Suspense>
        </main>
    )
}