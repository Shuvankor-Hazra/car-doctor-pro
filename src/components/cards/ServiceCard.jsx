import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, title, price, _id } = service || {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <Image src={img} alt="title" height={'400'} width={'400'} />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex-1">{title}</h2>
                <div className="card-actions items-center justify-between ">
                    <h6 className='text-lg text-primary font-semibold'>Price: ${price}</h6>
                    <Link href={`/services/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
