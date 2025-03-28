import React from 'react'
import { DotStream } from 'ldrs/react'
import 'ldrs/react/DotStream.css'

export default function Preloader() {
    return (
        <div className="fixed bg-[#0d83fd] h-screen w-screen top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
            <DotStream
                size="80"
                speed="2.5"
                color="white"
            />
        </div>
    )
}
