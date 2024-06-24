import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <footer className="footer p-20 pb-10 container mx-auto border-b">
                <aside>
                <Link href={'/'} className="flex items-end gap-1">
                        <Image src={'/assets/logo.svg'} alt='logo' height={70} width={70} />
                        <span className='text-4xl font-bold text-primary '>Pro</span>
                    </Link>
                    <p>Car Doctor Pro Ltd.<br />Providing reliable technology since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className='text-center py-10'>All Rights reserved@copyright 2024 Car Doctor Pro</div>
        </div>
    );
}

export default Footer;
