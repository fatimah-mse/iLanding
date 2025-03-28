import React from 'react'
import { AboutCardData, MoreAboutData } from '../data/AboutData'
import CommonCard from './CommonCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import img_1 from '../images/about-2.webp'
import img_2 from '../images/about-5.webp'

export default function AboutSection() {
    return (
        <section className='px-20 max-[1366px]:px-14 max-[768px]:px-5 py-10' id='about'>
            <div className='flex flex-wrap justify-between items-center mb-5'>
                {AboutCardData.map((e, index) => {
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
            <div className="flex justify-between items-center flex-wrap">
                <div className='w-[40%] max-[768px]:w-full'>
                    <h5 className='text-[#0d83fd] text-md tracking-tighter font-bold'>MORE ABOUT US</h5>
                    <h3 className='text-[#2d465e] tracking-[1px] font-bold text-2xl my-3'>Voluptas enim suscipit temporibus</h3>
                    <p className='opacity-75 leading-6 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div className='columns-2 max-[992px]:columns-1 my-4'>
                        {MoreAboutData.map((e, index) => {
                            return (
                                <p key={index} className='mb-4'>
                                    <span><FontAwesomeIcon icon={faCheckCircle} className='text-[#0d83fd] text-xl me-3'/></span>
                                    <span className=''>{e}</span>
                                </p>
                            )
                        })}
                    </div>
                </div>

                <div className='w-[55%] max-[768px]:w-full relative'>
                    <Image src={img_2} alt='about-img' className='w-[85%] object-cover ms-auto rounded-xl'/>
                    <Image src={img_1} alt='about-img' className='absolute top-12 start-0 w-[40%] rounded-xl border-10 border-white' />
                    <p className='FM-top-bottom-animate max-[768px]:static max-[768px]:w-full max-[768px]:mt-5 absolute bottom-5 end-5 text-white bg-[#0d83fd] px-4 py-3 rounded-xl w-[45%] text-center'>
                        <span className='text-4xl'>15+ </span>Years Of experience in business service
                    </p>
                </div>
            </div>

        </section>
    )
}
