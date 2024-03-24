import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetailPage({ params }: { params: { hid: string } }) {

    /**
     * Mock Data for Demonstration Only
     */

    // const mockHospitalRepo = new Map()
    // mockHospitalRepo.set('001', { name: "Chulalongkorn Hospital", img: "/img/chula.jpg" })
    // mockHospitalRepo.set('002', { name: "Rajavithi Hospital", img: "/img/rajavithi.jpg" })
    // mockHospitalRepo.set('003', { name: "Thammasat University Hospital", img: "/img/thammasat.jpg" })
    const hospital = await getHospital(params.hid);

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={hospital.data.picture}
                    alt="Product Picture"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black"
                />
                <div className="flex flex-col text-left text-lg m-5">
                    <h1>{hospital.data.name}</h1>
                    <h1>{hospital.data.address}</h1>
                    <h1>{hospital.data.tel}</h1>
                </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{ cid: '001' }, { cid: '002' }, { cid: '003' }]
// }