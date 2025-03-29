import React from 'react'
import illustration from '../images/illustration.webp'
import Image from 'next/image'
import CommonCard from './CommonCard'
import { HeroCardData } from '../data/HeroCard'

export default function Hero() {
    return (
        <section className='min-h-screen pt-[100px] pb-10 px-20 max-[1366px]:px-14 max-[768px]:px-5 bg-[#acd5fc73]'>
            <div className='flex justify-between items-center gap-5 max-[768px]:flex-col max-[768px]:justify-evenly'>
                <div className='w-1/2 max-[768px]:w-full max-[768px]:text-center'>
                    <h1 className='font-extrabold tracking-[2px] leading-[3rem] max-[768px]:leading-[2rem] mb-4 text-[#2d465e] text-5xl max-[1366px]:text-4xl max-[768px]:text-2xl'>Maecenas Vitae Consectetur Led <span className='text-[#0d83fd]'>Vestibulum Ante</span></h1>
                    <p className='text-xl max-[768px]:text-sm mb-5'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                    <a href='#about' className='tracking-[2px] px-4 py-1.5 rounded-full bg-[#f15936] text-white'>Get Started</a>
                </div>
                <Image src={illustration} alt="illustration" className='w-[40%] object-cover max-[768px]:w-full ms-auto' />
            </div>
            <div className='flex flex-wrap justify-between items-center mt-6 gap-4 p-6 rounded-2xl bg-white'>
                {HeroCardData.map((e, index) => {
                    return (
                        <CommonCard
                            key={index}
                            width='max-[768px]:w-[50%] '
                            reverse={false}
                            icon={e.icon}
                            title={e.title}
                            desc={e.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}
