"use client"

import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialSignin = () => {
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect')
    const session = useSession();
    const router = useRouter();
    const handleSocialLogin = (provider) => {
        const resp = signIn(provider, { redirect: true, callbackUrl: path ? path : '/',});
    }
    if (session.status === "authenticated") {
        router.push('/');
        Swal.fire({
            icon: "success",
            title: "Social login Successful",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div className='flex gap-6 '>
            <button onClick={() => handleSocialLogin('google')} className='btn btn-circle btn-outline btn-primary text-2xl'>
                <FaGoogle className='text-green-600' />
            </button>
            <button onClick={() => handleSocialLogin('facebook')} className='btn btn-circle btn-outline btn-primary text-2xl'>
                <FaFacebook className='text-blue-500' />
            </button>
            <button onClick={() => handleSocialLogin('github')} className='btn btn-circle btn-outline btn-primary text-2xl'>
                <FaGithub className='text-black' />
            </button>
        </div>
    );
}

export default SocialSignin;
