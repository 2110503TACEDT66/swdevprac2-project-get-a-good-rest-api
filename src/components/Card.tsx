"use client"

import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { SyntheticEvent, useState } from 'react';

export default function Card({hospitalName, imgSrc, onRate} : {hospitalName: string, imgSrc: string, onRate?: Function}) {

    const [rating, setRating] = useState(5);

    return (
        <InteractiveCard hospitalName={hospitalName}>
            <div className="w-full h-[70%] relative">
                <Image src={imgSrc}
                alt = 'Product Picture'
                fill = {true}/>
            </div>
            <div className="h-[30%] flex flex-col justify-center items-center">
                <h1 className="text-xl mb-2">{hospitalName}</h1>

                {
                    onRate ? <><Typography component="legend">Rating</Typography><Rating
                        name={hospitalName + ' Rating'}
                        id={hospitalName + ' Rating'}
                        value={rating}
                        data-testid={hospitalName + ' Rating'}
                        onChange={(event, newValue) => {
                            event.stopPropagation();
                            if (newValue !== null) {
                                setRating(newValue);
                                onRate(newValue);
                            }
                        } }
                        onClick={(event: SyntheticEvent) => event.stopPropagation()} /></> : ''

                }
                
                {/* <p className='text-white p-1 bg-black rounded-xl w-[110px] flex justify-center items-center cursor-pointer'>Read more</p> */}
            </div>
        </InteractiveCard>
    );
}