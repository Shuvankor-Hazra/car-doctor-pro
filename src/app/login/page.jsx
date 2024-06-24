'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import SocialSignin from '@/components/shared/SocialSignin';
import Swal from 'sweetalert2';

const Page = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect')
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const resp = await signIn('credentials', {
            email, password, redirect: true, callbackUrl: path ? path : '/',
        })
        if (resp.status === 200) {
            router.push('/')
            Swal.fire({
                icon: "success",
                title: "Sign In Successful",
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
                    <h2 className='text-2xl font-semibold text-center text-primary'>Login</h2>
                    <br />
                    <form onSubmit={handleLogin} action="">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name='email' placeholder='Your Email' className="input input-bordered w-full max-w-md mt-3" />
                        <br /><br />
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name='password' placeholder='Your Password' className="input input-bordered w-full max-w-md mt-3" />
                        <br /><br />
                        <button type='submit' className='btn btn-primary w-full'>Sign in</button>
                    </form>
                    <div className='flex flex-col items-center'>
                        <h6 className='my-6 font-semibold'>Or Sign In with</h6>
                        <SocialSignin />
                        <h6 className='mt-10 font-medium'>Don{"'"}t Have an account? <Link href={'/signup'} className='text-primary font-bold'>Sign Up</Link></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
