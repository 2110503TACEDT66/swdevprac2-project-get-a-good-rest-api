import Image from 'next/image';
import Link from 'next/link';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu() {

    const session = await getServerSession(authOptions);

    return (
        <div className="h-[75px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row justify-between">
            <div className='flex'>
                {
                    session ? <Link href='/api/auth/signout' className='flex justify-center items-center m-3 underline'><p>Sign-Out</p></Link>
                        : <Link href='/api/auth/signin' className='flex justify-center items-center m-3 underline'><p>Sign-In</p></Link>
                }
                <Link href='/mybooking' className='flex justify-center items-center m-3 underline'><p>My Booking</p></Link>
            </div>
            <div className='flex'>
                <TopMenuItem title='Booking' pageRef='/booking' />
                <Link href='/' className='flex justify-center items-center m-3'>
                    <Image src={'/img/logo.png'} className="h-[100%] w-auto"
                    alt='logo' width={0} height={0} sizes='100vh' />
                </Link>
            </div>
        </div>
    )
}