import React from 'react'

interface TitleType {
    txt: string,
    desc: string,
    dir: string
}

export default function Title({txt , desc , dir} : TitleType) {
    return (
        <>
            <h2 className={`${dir == 'left' ? 'text-start' : 'text-center' } text-[#2d465e] font-bold text-6xl max-[576px]:text-5xl`}>{txt}</h2>
            <div className={`${dir == 'left' ? 'me-auto' : 'mx-auto' } w-28 h-1 bg-[#0d83fd] rounded-2xl my-4`}></div>
            <p className={`${dir == 'left' ? 'text-start' : 'text-center' }`}>{desc}</p>
        </>
    )
}
