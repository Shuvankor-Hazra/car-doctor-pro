import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='my-32'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='relative h-[500px]'>
                        <Image src={'/assets/images/about_us/person.jpg'} alt='about' height={800} width={500} className='w-4/5 h-4/5 rounded-lg' />
                        <Image src={'/assets/images/about_us/parts.jpg'} alt='about' height={300} width={300} className='w-3/5 absolute bottom-0 right-0 rounded-lg border-8 border-white' />
                    </div>
                    <div className='flex items-center'>
                        <div className='p-10 space-y-6'>
                            <p className='text-xl font-bold text-[#FF3811]'>About Us</p>
                            <h1 className="text-3xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
                            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                            <p className=''>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                            <button className="btn btn-primary px-8">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
