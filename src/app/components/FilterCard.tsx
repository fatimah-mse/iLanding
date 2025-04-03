import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

export interface FilterCardType {
    category?: string,
    img: StaticImageData
    title: string,
    desc: string,
    list: string [],
}

export default function FilterCard({title, desc, list, img} : FilterCardType) {
    return (
        <div className='flex justify-between items-center flex-wrap gap-y-2.5'>
            <div className='w-[45%] max-[992px]:w-full'>
                <Title txt={title} desc={desc} dir='left' />
                {
                    list.map((e, index) => {
                        return (
                            <p key={index} className='my-4'>
                                <FontAwesomeIcon className='text-[#f15936] me-2' icon={faCheckDouble} />
                                {e}
                            </p>
                        )
                    })
                }
            </div>
            <Image className='w-[50%] h-full object-cover max-[992px]:w-full rounded-4xl shadow' src={img} alt='feature-img' />
        </div>
    )
}
