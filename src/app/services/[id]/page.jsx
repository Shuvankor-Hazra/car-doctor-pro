import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Service Details',
    description: 'Service details page'
}

const Page = async ({ params }) => {
    const details = await getServicesDetails(params.id);
    const { title, description, facility, price, img, _id } = details;
    return (
        <div className='container mx-auto mb-20'>
            <div className='relative h-72 rounded-lg'>
                <Image src={img}
                    alt={'service'}
                    width={1920}
                    height={1080}
                    className=' h-72 w-full left-0 top-0 object-cover rounded-lg '
                    style={{ width: '90vw' }} />
                <div className='absolute h-full left-0 top-0 flex items-center justify-center '>
                    <h1 className='text-white text-3xl font-bold flex items-center justify-center ps-28 bg-gradient-to-r to-gray-500 from-[#ff3811] p-5 rounded-r-xl'>
                        Details of {title}
                    </h1>
                </div>
            </div>
            <div className="hero rounded-lg mt-10 bg-gray-200">
                <div className="hero-content flex-col lg:flex-row gap-5" >
                    <Image
                        alt='services'
                        width={350}
                        height={200}
                        src={img}
                        className="w-full rounded-lg shadow-2xl" />
                    <div className='p-5'>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="pt-3">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='col-span-2 grid grid-cols-2 gap-5'>
                        {facility.map((item, index) => (
                            <div
                                key={index}
                                className='bg-[#fed6ce] p-5 border-t-4 border-[#ff3811] rounded-xl'>
                                <h2 className='text-lg font-bold'>{item.name}</h2>
                                <p>{item.details}</p>
                            </div>
                        ))}
                    </div>

                    <div className='p-5 bg-gray-200 rounded-lg'>
                        <Image
                            alt='services'
                            width={500}
                            height={100}
                            src={'/assets/images/checkout/checkout.png'}
                            className="w-full object-cover h-40" />
                        <div className='flex items-center gap-3 my-4'>
                            <h2 className='text-lg font-bold'>Price: </h2>
                            <p className='text-2xl font-semibold text-rose-500'> ${price}</p>
                        </div>
                        <Link href={`/checkout/${_id}`}>
                            <button className='btn btn-primary px-8 w-full'>Check Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
