import next from 'next';
import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full mt-8">
                {
                    banners.map((banner, index) => (
                        <div
                            style={{ backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)` }}
                            key={index}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full h-[90vh] bg-top bg-cover rounded-3xl text-white">
                            <div className='w-full h-full flex items-center ps-24'>
                                <div className='space-y-6'>
                                    <h1 className='text-5xl font-bold'>{banner.title}</h1>
                                    <p>{banner.description}</p>
                                    <button className='btn btn-primary px-8 me-6'>Discover More</button>
                                    <button className='btn btn-outline btn-primary px-8'>Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute flex justify-between bottom-12 right-12 gap-6">
                                <a href={banner.prev} className="btn btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

const banners = [
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide2',
        prev: '#slide4'
    },
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide3',
        prev: '#slide1'
    },
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide4',
        prev: '#slide2'
    },
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide1',
        prev: '#slide3'
    },
]

export default Banner;
