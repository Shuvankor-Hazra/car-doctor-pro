'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Page = ({ params }) => {
    const { data } = useSession();
    const [booking, setBooking] = useState([]);

    const loadBookings = async () => {
        const bookingDetail = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/api/booking/${params.id}`)
        const data = await bookingDetail.json();
        setBooking(data.data)
    }

    const handleUpdateBooking = async (e) => {
        e.preventDefault();
        const updatedBooking = {
            date: e.target.date.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
        }
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/api/booking/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedBooking),
            headers: {
                "content-type": "application/json",
            },
        })
        if (resp.status === 200) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Update Successful",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    useEffect(() => {
        loadBookings()
    }, [params]);

    return (
        <div className='container mx-auto'>
            <div className='relative h-72 rounded-lg'>
                <Image src={'/assets/images/about_us/parts.jpg'}
                    alt={'checkout'}
                    width={1920}
                    height={1080}
                    className=' h-72 w-full left-0 top-0 object-cover rounded-lg '
                    style={{ width: '90vw' }} />
                <div className='absolute h-full left-0 top-0 flex items-center justify-center '>
                    <h1 className='text-white text-3xl font-bold flex items-center justify-center ps-28 bg-gradient-to-r to-gray-500 from-[#ff3811] p-5 rounded-r-xl'>
                        Update Booking {booking.title}
                    </h1>
                </div>
            </div>

            <div className='my-12 bg-base-200 p-12'>
                <form onSubmit={handleUpdateBooking} action="">
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
                            <input defaultValue={booking?.date} required type="date" name='date' placeholder="Date" className="input input-bordered w-full" />
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
                            <input defaultValue={booking?.price} readOnly type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Phone Number</span>
                            </div>
                            <input defaultValue={booking?.phone} required type="tel" name='phone' placeholder="Phone" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Present Address</span>
                            </div>
                            <input defaultValue={booking?.address} required type="text" name='address' placeholder="Present Address" className="input input-bordered w-full" />
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

export default Page;
