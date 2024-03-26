"use client"
import Image from "next/image"
import { useAppSelector } from "@/redux/store";

export default async function MassageDetailPage({ params }: { params: { mid: string } }) {

    const massageItem = useAppSelector(state => state.massageSlice.massageItems)
    const massage = massageItem.find(massage => massage.id === params.mid)

    return (
        <>
        {
            massage !== undefined ? (
                <main className="p-5">
                    <div className="flex flex-row my-5">
                        <Image src={massage.picture == "no-photo" ? "/img/massage-default.jpg" : massage.picture}
                            alt="Product Picture"
                            width={0} height={0} sizes="100vw"
                            className="rounded-lg w-[30%] bg-black"
                        />
                        <div className="flex flex-col text-left text-lg m-5">
                            <h1>{massage.name}</h1>
                            <h1>{massage.description}</h1>
                            <h1>{massage.address}</h1>
                            <h1>{massage.district}</h1>
                            <h1>{massage.province}</h1>
                            <h1>{massage.postalcode}</h1>
                            <h1>{massage.tel}</h1>
                        </div>
                    </div>
                </main>
            ) : <h1>This massage id not availble </h1>
        }
        </>
    )
}