import Image from "next/image"
import getMassage from "@/libs/getMassage"
import { MassageOne } from "../../../../../interface";

export default async function HospitalDetailPage({ params }: { params: { mid: string } }) {

    const massage:MassageOne = await getMassage(params.mid);

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={massage.data.picture == "no-photo" ? "/img/massage-default.jpg" : massage.data.picture}
                    alt="Product Picture"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black"
                />
                <div className="flex flex-col text-left text-lg m-5">
                    <h1>{massage.data.name}</h1>
                    <h1>{massage.data.description}</h1>
                    <h1>{massage.data.address}</h1>
                    <h1>{massage.data.district}</h1>
                    <h1>{massage.data.province}</h1>
                    <h1>{massage.data.postalcode}</h1>
                    <h1>{massage.data.tel}</h1>
                </div>
                <button></button>
            </div>
        </main>
    )
}