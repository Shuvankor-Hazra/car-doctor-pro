'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Page = () => {
    const session = useSession();
    const [myBookings, setMyBookings] = useState([]);
    const loadData = async () => {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/api/${session?.data?.user?.email}`)
        const data = await resp.json();
        setMyBookings(data);
    }

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deleted = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/my-bookings/api/booking/${id}`,{
                        method: "DELETE",
                    })
                const resp = await deleted.json();
                if (resp?.response?.deletedCount > 0) {
                    loadData();
                    Swal.fire({
                        icon: "success",
                        title: "Deleted!",
                        text: "Your file has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    useEffect(() => {
        loadData();
    }, [session]);

    return (
        <div className='container mx-auto'>
            <div className='relative h-72 rounded-lg'>
                <Image src={'/assets/images/about_us/parts.jpg'}
                    alt={'service'}
                    width={1920}
                    height={1080}
                    className=' h-72 w-full left-0 top-0 object-cover rounded-lg '
                    style={{ width: '90vw' }} />
                <div className='absolute h-full left-0 top-0 flex items-center justify-center '>
                    <h1 className='text-white text-3xl font-bold flex items-center justify-center ps-28 bg-gradient-to-r to-gray-500 from-[#ff3811] p-5 rounded-r-xl'>
                        My Bookings
                    </h1>
                </div>
            </div>

            <div className='my-12'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                myBookings?.map(({ serviceTitle, date, price, _id }, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{serviceTitle}</td>
                                        <td>{price}</td>
                                        <td>{date}</td>
                                        <td>
                                            <div className='flex items-center gap-3'>
                                                <Link href={`/my-bookings/update/${_id}`} className='btn btn-sm btn-neutral'>Edit</Link>

                                                <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-primary'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Page;
