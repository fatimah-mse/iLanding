'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import close from '../images/x-black.png'
import menu from '../images/IconNav.png'
import { NavLinks } from '../data/NavLinks'

export default function Navbar() {

    const [show, setShow] = useState(false)
    const [active, setActive] = useState('/')
    const [header, setHeader] = useState(false)

    function handleScroll() {
        if (window.scrollY > 50) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    function ActiveHandel (href : string ) {
        setShow(!show) 
        setActive(href)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    return (
        <nav className={`${header ? 'bg-[#92b5db] w-screen px-20 max-[1366px]:px-14 max-[768px]:px-5 top-0' : 'bg-white w-[calc(100vw-160px)] max-[1366px]:w-[calc(100vw-112px)] max-[768px]:w-[calc(100vw-40px)] max-[1366px]:left-14 max-[768px]:left-5 left-20 top-5 px-6 rounded-full'} py-3 max-[992px]:py-2 flex justify-between items-center fixed z-10 transition-all duration-600 ease-in-out`}>
            <Link href="/" className={`${header ? '' : 'text-[#f15936]'} text-2xl font-bold `}>iLanding</Link>
            <div className={`relative bg-transparent backdrop-blur-xl max-[992px]:w-screen max-[992px]:h-screen transition-all duration-300 ease-in-out flex items-center lg:justify-between max-[992px]:justify-evenly max-[992px]:fixed max-[992px]:left-0 max-[992px]:top-0 max-[992px]:flex-col max-[992px]:items-center ${show ? 'translate-x-0' : 'max-[992px]:-translate-x-full'}`}>
                <Link href="/" className='text-[#f15936] font-bold text-4xl hidden max-[992px]:block'>iLanding</Link>
                <ul className='flex justify-between gap-x-2 max-[992px]:gap-y-10 max-[992px]:flex-col max-[992px]:items-center'>
                    {NavLinks.map((e, index) => {
                        return (
                            <li key={index}><a className={` px-3 py-1.5 font-bold rounded-md ${active == e.href ? 'bg-[#f15936] text-white' : ''}`} href={e.href} onClick={() => ActiveHandel(e.href)}>{e.link}</a></li>
                        )
                    })}
                </ul>
                <Image onClick={() => setShow(!show)} className='hidden cursor-pointer absolute z-10 top-5 right-10 max-[992px]:block w-8 h-8' src={close} alt="close" />
            </div>
            <Image onClick={() => setShow(!show)} className='hidden max-[992px]:block w-8 h-8 cursor-pointer' src={menu} alt="menu" />
        </nav>
    )
}
