import Link from "next/link";
import Card from "./Card";

export default async function HospitalCatalog( { hospitalsJson } : {hospitalsJson: HospitalJson} ) {

    const hospitals = await hospitalsJson;

    return (
        <>
            <div className="flex flex-row content-around flex-wrap gap-20 justify-center mt-8">
                {
                    hospitals.data.map((hospital: HospitalItem) => (
                        <Link href={`/hospital/${hospital.id}`} key={hospital.id} className="w-1/5">
                            <Card key={hospital.id} hospitalName={hospital.name} imgSrc={hospital.picture} />                 
                        </Link>
                    ))
                }
            </div>
        </>
    )

}