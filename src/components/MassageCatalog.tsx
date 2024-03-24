import Link from "next/link";
import Card from "./Card";

import { MassageItem, MassageJson } from "../../interface";

export default async function HospitalCatalog( { massagesJson } : {massagesJson: MassageJson} ) {

    const massages = await massagesJson;

    return (
        <>
            <div className="flex flex-row content-around flex-wrap gap-20 justify-center mt-8">
                {
                    massages.data.map((massage: MassageItem) => (
                        <Link href={`/massage/${massage.id}`} key={massage.id} className="w-1/5">
                            <Card key={massage.id} massageName={massage.name} imgSrc={massage.picture == "no-photo" ? "/img/massage-default.jpg" : massage.picture} />                 
                        </Link>
                    ))
                }
            </div>
        </>
    )

}