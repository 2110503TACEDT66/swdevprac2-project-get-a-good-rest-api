"use client"

import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { SyntheticEvent, useState } from 'react';

export default function Card({ massageName, imgSrc }: { massageName: string, imgSrc: string }) {

    const [rating, setRating] = useState(5);

    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative">
                <Image src={imgSrc}
                alt = 'Product Picture'
                fill = {true}/>
            </div>
            <div className="h-[30%] flex flex-col justify-center items-center">
                <h1 className="text-xl mb-2">{massageName}</h1>
                
                {/* <p className='text-white p-1 bg-black rounded-xl w-[110px] flex justify-center items-center cursor-pointer'>Read more</p> */}
            </div>
        </InteractiveCard>
    );
}