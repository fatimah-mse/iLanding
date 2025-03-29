'use client'

import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
    const [showScrollTo, setShowScrollTo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTo(true)
            } else {
                setShowScrollTo(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <FontAwesomeIcon icon={faArrowCircleUp} onClick={handleScrollToTop} className={`${showScrollTo ? "translate-x-0" : "translate-x-40"} bg-white w-10 2xl:w-14 cursor-pointer rounded-full transition-all duration-300 ease-in-out fixed bottom-6 right-6 z-40 flex justify-center items-center text-[#f15936] text-4xl`}/>
    )
}
