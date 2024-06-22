import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";


const Navbar = () => {

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
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
    ]

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
                            navItems?.map((item)=>(
                                <Link className='text-base font-semibold hover:text-primary duration-200' key={item.path} href={item.path}>{item.title}</Link>
                            ))
                        }
                        </div>
                    </div>
                    <Link href={'/'} className="text-xl">
                        <Image src={'/assets/logo.svg'} alt='logo' height={70} width={70} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal gap-5">
                        {
                            navItems?.map((item)=>(
                                <Link className='text-base font-semibold hover:text-primary duration-200' key={item.path} href={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end gap-5">
                <div className='flex gap-5 text-2xl'>
                <HiOutlineShoppingBag />
                <GoSearch />
                </div>
                    <a className="btn btn-outline btn-primary px-8">Appointment</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
