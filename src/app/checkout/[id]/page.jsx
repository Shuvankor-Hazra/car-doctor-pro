'use client'
import { getServicesDetails } from '@/services/getServices';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutPage = ({ params }) => {
    const { data } = useSession();
    const [service, setService] = useState({});

    const loadService = async () => {
        const details = await getServicesDetails(params.id);
        setService(details);
    }
    const { title, description, facility, price, img, _id } = service || {};

    const handleBooking = async (e) => {
        e.preventDefault();
        const newBooking = {
            email: data?.user?.email,
            name: data?.user?.name,
            price: price,
            address: e.target.address.value,
            phone: e.target.phone.value,
            date: e.target.date.value,
            serviceTitle: title,
            serviceId: _id,

        }
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout/api/new-booking`, newBooking);
        const response = await resp.data;
        Swal.fire({
            icon: "success",
            title: "Your booking has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        e.target.reset();
    }

    useEffect(() => {
        loadService();
    }, [params]);

    // Helper function to get today's date in YYYY-MM-DD format
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className='container mx-auto'>
            <div className='relative h-72 rounded-lg'>
                <Image src={img}
                    alt={'checkout'}
                    width={1920}
                    height={1080}
                    className=' h-72 w-full left-0 top-0 object-cover rounded-lg '
                    style={{ width: '90vw' }} />
                <div className='absolute h-full left-0 top-0 flex items-center justify-center '>
                    <h1 className='text-white text-3xl font-bold flex items-center justify-center ps-28 bg-gradient-to-r to-gray-500 from-[#ff3811] p-5 rounded-r-xl'>
                        Checkout of {title}
                    </h1>
                </div>
            </div>

            <div className='my-12 bg-base-200 p-12'>
                <form onSubmit={handleBooking} action="">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your Name</span>
                            </div>
                            <input defaultValue={data?.user?.name} required type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Date</span>
                            </div>
                            <input defaultValue={getCurrentDate()} required type="date" name='date' placeholder="Date" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your Email</span>
                            </div>
                            <input defaultValue={data?.user?.email} required type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Due Amount</span>
                            </div>
                            <input defaultValue={price} readOnly type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Phone Number</span>
                            </div>
                            <input required type="tel" name='phone' placeholder="Phone" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Present Address</span>
                            </div>
                            <input required type="text" name='address' placeholder="Present Address" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className='form-control mt-6'>
                        <input className='btn btn-primary btn-block' type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckoutPage;
