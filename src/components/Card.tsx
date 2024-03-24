"use client"

import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { useSession } from 'next-auth/react';
import { Role } from '../../interface';
import deleteMassage from '@/libs/deleteMassage';
import editMassage from '@/libs/editMassage';

export default function Card({ massageName, imgSrc, massageId }: { massageName: string, imgSrc: string, massageId: string }) {

    const {data:session} = useSession();
    
    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative">
                <Image src={imgSrc}
                alt = 'Product Picture'
                fill = {true}/>
            </div>
            <div className="h-[30%] flex flex-col justify-center items-center">
                <h1 className="text-xl mb-2">{massageName}</h1>
                { session?.user.data.role === Role.Admin ?
                    <div className='flex gap-2'>
                        <p className='p-2 bg-yellow-400 rounded-xl w-[75px]' onClick={(e) => {e.preventDefault();alert("Edit!")}}>Edit</p>
                        <p className='p-2 bg-red-500 rounded-xl w-[75px]' onClick={(e) => { e.preventDefault(); 
                            e.currentTarget.closest("a")?.remove(); deleteMassage(massageId)}} >Delete</p>
                    </div>
                    : null
                }
            </div>
        </InteractiveCard>
    );
}