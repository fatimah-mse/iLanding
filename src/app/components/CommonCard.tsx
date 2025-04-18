import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface CommonCardType {
    reverse?: boolean,
    width?: string,
    icon: IconProp,
    title?: string,
    desc?: string,
}

export default function CommonCard({reverse , width , icon , title , desc} : CommonCardType) {
    return (
        <div className={`max-[576px]:w-full pb-3 flex items-center gap-4 ${width} ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
            <FontAwesomeIcon icon={icon} className="fa-fw py-5 px-4 bg-[#ecf5ff] rounded-full text-[#0d83fd] text-2xl hover:text-[#ecf5ff] hover:bg-[#0d83fd] transition-all ease-in-out" />
            <div>
                <h3 className={`text-[#2d465e] text-xl tracking-[2px] font-medium mb-1 ${reverse ? 'text-end' : 'text-start'}`}>{title}</h3>
                <p className={`tracking-[2px] text-[0.8rem] opacity-65 ${reverse ? 'text-end' : 'text-start'}`}>{desc}</p>
            </div>
        </div>
    )
}
