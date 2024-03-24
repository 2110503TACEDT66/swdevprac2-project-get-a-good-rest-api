import getMassages from "@/libs/getMassages";
import MassageCatalog from "@/components/MassageCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Hospital() {
    const massages = await getMassages();

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Massage</h1>
            <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
                <MassageCatalog massagesJson={massages} />
            </Suspense>
        </main>
    )
}