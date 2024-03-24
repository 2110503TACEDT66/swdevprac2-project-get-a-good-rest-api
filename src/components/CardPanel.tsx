"use client"
import Card from "./Card";
import Link from "next/link";
import { useReducer } from 'react';

export default function CardPanel() {

    const ratingReducer = (state: Map<string, number>, action: {type: string, hospitalName: string, rating: number}) => {
        switch (action.type) {
            case 'update':
                return new Map(state.set(action.hospitalName, action.rating));
            case 'delete':
                state.delete(action.hospitalName);
                return new Map(state);
            default:
                return state;
        }
    }

    const initMap = new Map([['Chulalongkorn Hospital', 5], ['Rajavithi Hospital', 5], ['Thammasat University Hospital', 5]]); 
    const [state, dispatchState] = useReducer(ratingReducer, initMap);

    const mockHospital = [
        {hid: "001", name: "Chulalongkorn Hospital", img: "/img/chula.jpg"},
        {hid: "002", name: "Rajavithi Hospital", img: "/img/rajavithi.jpg"},
        {hid: "003", name: "Thammasat University Hospital", img: "/img/thammasat.jpg"}
    ]

    return (
        <div>
            <div className="flex flex-row content-around flex-wrap gap-20 justify-center mt-8">
                {
                    mockHospital.map((hospital) => 
                    <Link href={`/hospital/${hospital.hid}`} key={hospital.hid}>
                        <Card key={hospital.hid} hospitalName={hospital.name} imgSrc={hospital.img}
                        onRate={(rating: number) => dispatchState({ type: 'update', hospitalName: hospital.name, rating: rating })}
                        />
                    </Link>
                )}
            </div>
            <div className="mt-5">
                {Array.from(state).map(([hospitalName, rating]) => <div key={hospitalName}
                    onClick={() => dispatchState({ type: 'delete', hospitalName: hospitalName, rating: rating })}
                    data-testid={hospitalName}
                    className="cursor-pointer mt-2 text-lg">{hospitalName + " Rating: " + rating}</div>)}
            </div>
        </div>
    );
}