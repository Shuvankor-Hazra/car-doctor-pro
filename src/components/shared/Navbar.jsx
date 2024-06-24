'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';


const Navbar = () => {
    const session = useSession();
    return (
        <div className='py-6 bg-white'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <div tabIndex={0} className="menu menu-sm dropdown-content gap-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItems?.map((item) => (
                                    <Link className='text-base font-semibold hover:text-primary duration-200' key={item.path} href={item.path}>{item.title}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <Link href={'/'} className="flex items-end gap-1">
                        <Image src={'/assets/logo.svg'} alt='logo' height={70} width={70} />
                        <span className='text-4xl font-bold text-primary '>Pro</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal gap-5">
                        {
                            navItems?.map((item) => (
                                <Link className='text-base font-semibold hover:text-primary duration-200' key={item.path} href={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end gap-2">
                    <div className='flex gap-2 text-3xl'>
                        <HiOutlineShoppingBag />
                        <GoSearch />
                    </div>
                    <a className="btn btn-outline btn-primary">Appointment</a>
                    <div title={session?.data?.user?.name}>
                        {
                            session?.data &&
                            <Image src={session?.data?.user?.image} alt={session?.data?.user?.name} height={50} width={50} className='rounded-full border-2 bg-[#ff3811] border-[#ff3811]' />
                        }
                    </div>
                    {
                        session?.status === "loading" &&
                        <h6>Loading...</h6>
                    }
                    {
                        !session?.data &&
                        <Link href={'/login'} className="btn btn-primary">Login</Link>}
                    {
                        session?.data &&
                        <button onClick={() => signOut()} className="btn btn-primary">Log Out</button>
                    }
                </div>
            </div>
        </div>
    );
}



const navItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Services',
        path: '/services'
    },
    {
        title: 'My Bookings',
        path: '/my-bookings'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contacts',
        path: '/contacts'
    },
]

export default Navbar;
