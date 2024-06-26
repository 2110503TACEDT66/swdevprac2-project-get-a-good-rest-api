"use client"
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { useSession } from 'next-auth/react';
import { Role } from '../../interface';
import ModalButton from './ModalButton';
import MassageForm from './MassageForm';

import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';

import { deleteMassageReducer } from '@/redux/features/massageSlice';

export default function Card({ massageName, imgSrc, massageId,masssageDescription,massageDistricts }: { massageName: string, imgSrc: string, massageId: string, masssageDescription: string, massageDistricts: string}) {

    const {data:session} = useSession();
    const dispatch = useDispatch<AppDispatch>()
    
    return (
        <InteractiveCard>
            <div className="w-full h-[60%] relative ">
                <Image src={imgSrc}
                alt = 'Product Picture'
                fill = {true}
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white text-lg font-semibold">{massageName}</p>
                    <p className="text-gray-200 text-sm">
                        {massageDistricts}
                    </p>
                </div>
            </div>
            <div className="h-[40%] p-4 break-words relative">
                <p className="text-gray-600 text-sm">
                    {masssageDescription}
                </p>
                { session?.user.data.role === Role.Admin ?
                <div className='absolute bottom-0 right-0 p-4'>
                    <div className='flex gap-2 h-5/6'>
                        <ModalButton text='Edit' color='yellow'>
                            <MassageForm isUpdate={true} id={massageId}/>
                        </ModalButton>
                        <div>
                             <button className="rounded-md bg-red-600 hover:bg-red-800 transition px-3 py-1 text-white shadow-sm relative mt-10" onClick={(e) => { e.preventDefault(); 
                            dispatch(deleteMassageReducer(massageId))}} >Delete</button>
                        </div>
                       
                    </div>
                </div>: null
                }
            </div>
        </InteractiveCard>
    );
}