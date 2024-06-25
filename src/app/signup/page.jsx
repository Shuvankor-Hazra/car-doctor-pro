'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SignUpPage = () => {
    const router = useRouter()
    const handleSignup = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/signup/api`, newUser)
        if (resp.status === 200) {
            e.target.reset();
            router.push('/')
            Swal.fire({
                icon: "success",
                title: "Sign Up Successful",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className='container mx-auto p-24'>
            <div className='grid grid-cols-2 gap-12 items-center'>
                <div>
                    <Image src={'/assets/images/login/login.svg'} alt='login image' width={'540'} height={'540'} />
                </div>
                <div className='border-2 rounded-lg p-12'>
                    <h2 className='text-2xl font-semibold text-center text-primary'>Sign Up</h2>
                    <br />
                    <form onSubmit={handleSignup} action="">
                        <label htmlFor="name">Name</label><br />
                        <input type="name" name='name' placeholder='Your Name' className="input input-bordered w-full max-w-md mt-3" />
                        <br /><br />
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name='email' placeholder='Your Email' className="input input-bordered w-full max-w-md mt-3" />
                        <br /><br />
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name='password' placeholder='Your Password' className="input input-bordered w-full max-w-md mt-3" />
                        <br /><br />
                        <button type='submit' className='btn btn-primary w-full'>Sign Up</button>
                    </form>
                    <div className='flex flex-col items-center'>
                        <h6 className='my-6 font-semibold'>Or Sign Up with</h6>
                        <div className='flex gap-6 '>
                            <button className='btn btn-circle btn-outline btn-primary text-2xl'><FaGoogle className='text-green-600' /></button>
                            <button className='btn btn-circle btn-outline btn-primary text-2xl'><FaFacebook className='text-blue-500' /></button>
                            <button className='btn btn-circle btn-outline btn-primary text-2xl'><FaGithub className='text-black' /></button>
                        </div>
                        <h6 className='mt-10 font-medium'>Already Have an account? <Link href={'/login'} className='text-primary font-bold'>Log In</Link></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
