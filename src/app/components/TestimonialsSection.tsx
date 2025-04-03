"use client"

import React from 'react'
import Title from './Title'
import Slider from 'react-slick'
import { TestimonialsData } from '../data/TestimonialsData'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'

export default function TestimonialsSection() {

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section className='px-20 max-[1366px]:px-14 max-[768px]:px-5 py-10 bg-white' id='testimonials'>
            <Title txt='Testimonials' desc='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' dir='center' />

            <Slider {...settings} className='my-10'>
                {TestimonialsData.map((test, index) => {
                    return (
                        <div key={index} className='my-5'>
                            <div className='flex mb-5'>
                                <Image className='w-22 rounded-full me-6 ' src={test.img} alt='test-img' />
                                <div>
                                    <h4 className='text-xl font-bold text-[#0d83fd]'>{test.name}</h4>
                                    <h5 className='text-sm opacity-65 mb-4 '>{test.job}</h5>
                                    {Array.from({ length: 5 }).map((_, i) => {
                                        return (
                                            <FontAwesomeIcon className='text-yellow-500 me-[2px]' key={i} icon={faStar} />
                                        )
                                    })}
                                </div>
                            </div>
                            <p className='px-4'>
                                <FontAwesomeIcon className='text-3xl text-[#f15936] me-2' icon={faQuoteLeft}/>
                                {test.desc}
                                <FontAwesomeIcon className='text-3xl text-[#f15936] ms-2' icon={faQuoteRight}/>
                            </p>
                        </div>
                    )
                })}
            </Slider>

        </section>
    )
}
