'use client'

import React, { useState } from 'react'
import Title from './Title'
import { ClientsImgs, CommonCardData, FilterBtnData, FilterCardData } from '../data/FeaturesData'
import FilterCard from './FilterCard'
import CommonCard from './CommonCard'
import Image from 'next/image'
import mobile from '../images/phone-app-screen.webp'
import Slider from "react-slick"

export default function FeaturesSection() {

    const [active, setActive] = useState('Modisit')
    const [filterBtn, setFilterBtn] = useState('Modisit')

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section className='bg-[#ecf5ff] px-20 max-[1366px]:px-14 max-[768px]:px-5 py-10' id='features'>
            <Title txt='Features' desc='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' dir='center' />

            <div className='mx-auto my-12 p-3 bg-white rounded-4xl w-max max-[576px]:w-full shadow-2xl flex flex-col overflow-hidden'>
                <div className='FM-Filter flex gap-2 overflow-x-scroll'>
                    {FilterBtnData.map((btn, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    setFilterBtn(btn)
                                    setActive(btn)
                                }}
                                className={`${active == btn ? 'bg-[#0d83fd] text-white' : 'text-[#2d465e]'} cursor-pointer px-8 py-2 font-bold rounded-full flex justify-center items-center flex-shrink-0`}
                            >   {btn}
                            </button>
                        )
                    })}
                </div>
            </div>

            {FilterCardData.map((card, index) => {
                return (
                    card.category === filterBtn && (
                        <FilterCard
                            key={index}
                            category={card.category}
                            title={card.title}
                            desc={card.desc}
                            list={card.list}
                            img={card.img}
                        />
                    )
                )
            })}

            <div className='flex flex-wrap justify-between items-center gap-y-15 gap-x-3 my-15'>
                <div className='w-1/3 max-[992px]:w-full flex flex-wrap gap-6'>
                    {CommonCardData.slice(0, 3).map((e, index) => {
                        return (
                            <CommonCard
                                key={index}
                                title={e.title}
                                desc={e.desc}
                                icon={e.icon}
                                width='w-full bg-white p-4 rounded-2xl shadow-2xl'
                                reverse={true}
                            />
                        )
                    }
                    )}
                </div>
                <Image src={mobile} alt='mobile' className='w-fit h-[600px] mx-auto max-[768px]:h-fit max-[768px]:w-full' />
                <div className='w-1/3 max-[992px]:w-full flex flex-wrap gap-6'>
                    {CommonCardData.slice(-3).map((e, index) => {
                        return (
                            <CommonCard
                                key={index}
                                title={e.title}
                                desc={e.desc}
                                icon={e.icon}
                                width='w-full bg-white p-4 rounded-2xl shadow-2xl'
                                reverse={false}
                            />
                        )
                    }
                    )}
                </div>
            </div>

            <Slider {...settings} className='my-10'>
                {ClientsImgs.map((img, index) => {
                    return (
                        <Image key={index} src={img} alt='client-img' className='grayscale-100 hover:grayscale-0 my-6 h-10 object-contain transition-all duration-200 ease-in-out'/>
                    )
                })}
            </Slider>


        </section>
    )
}
