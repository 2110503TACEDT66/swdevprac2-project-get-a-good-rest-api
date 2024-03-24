"use client"

import getMassages from "@/libs/getMassages";
import MassageCatalog from "@/components/MassageCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { MassageJson } from "../../../../interface";

export default function Massage() {

    const [massages, setMassages] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await getMassages();
            setMassages(res)
        }

        fetchData()
    }, [])

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Massage</h1>
            <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
                {massages && <MassageCatalog massagesJson={massages} />}
            </Suspense>
        </main>
    )
}