"use client"
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {

    const [index, setIndex] = useState(0);
    const coverList = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
    const router = useRouter();
    
    const { data: session } = useSession();
    console.log(session?.user)

    return (
        <div className="block m-0 w-full h-[500px] relative" onClick={() => setIndex(index+1)}>
            
            <Image src={coverList[index%4]}
            alt = 'cover'
            sizes='100vw'
            width={0}
            height={0}
            className="absolute w-full h-[500px] object-cover z-10 filter brightness-[70%]"
            priority
            />

            <div className="relative top-[175px] z-20 text-center text-white text-2xl drop-shadow-[5px_5px_5px_#000000]">
                <h1 className='text-6xl font-bold mb-4'>Vaccine Service Center</h1>
                <h3 className='text-3xl'>ข้อความประชาสัมพันธ์การให้บริการวัคซีน</h3>
            </div>
            {/* {
                session ? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-300 text-xl'>Welcome {session.user?.data.name}</div>
                    : null
            } */}
            <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:text-white hover:border-transparent'
                onClick={(e) => { e.stopPropagation(); router.push('/massage') }}>
                Select Your Massage
            </button>
        </div>
    )
}