import Image from 'next/image';
import Link from 'next/link';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu() {

    const session = await getServerSession(authOptions);

    return (
        <div className="h-[75px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row justify-between">
                <Link href='/' className='flex justify-center items-center m-3'>
                    <Image src={'/img/logo1.png'} className="h-[100%] w-auto"
                        alt='logo' width={0} height={0} sizes='100vh' />
                    <div className='px-8 text-xl text-green-800'>Massage with Girl</div>
                    <div>
                        {
                            session ? <p className='text-gray-400'>Welcome, {session.user.data.name}</p>:null
                        }
                    </div>
                </Link>
                <div className='flex'>
                    <div className='flex'>
                    <TopMenuItem title='Booking' pageRef='/booking'/>
                    <TopMenuItem title='My Booking' pageRef='/mybooking'/>
                    {
                        session ? <Link href='/api/auth/signout' className='flex justify-center items-center m-3 bg-green-600 text-stone-50 px-5 py-2 rounded-xl no-underline'><p>Sign-Out</p></Link>
                            : <Link href='/api/auth/signin' className='flex justify-center items-center m-3 bg-green-600 text-stone-50 px-5 py-2 rounded-xl no-underline'><p>Sign-In</p></Link>
                    }
                    </div>
            
                    
                </div>
                
        </div>
    )
}