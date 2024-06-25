import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { getServices } from '@/services/getServices';

const Services = async () => {
    const services = await getServices();

    return (
        <div className='container mx-auto mb-20'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-primary '>Services</h3>
                <h2 className='text-5xl font-semibold py-3'>Our Service Area</h2>
                <p className='text-[#737373] lg:w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. </p>
            </div>
            <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    services?.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))
                }
            </div>
        </div>
    );
}

export default Services;
