import { faAward, faBriefcase, faChartLine, faTrophy } from "@fortawesome/free-solid-svg-icons";

export interface AboutCard {
    reverse?: boolean,
    width?: string,
    icon?: any,
    title?: string,
    desc?: string,
}

export const AboutCardData : AboutCard [] = [
    {
        icon: faTrophy,
        title: '3x Won Awards',
        desc: 'Vestibulum ante ipsum'
    },
    {
        icon: faBriefcase,
        title: '6.5k Faucibus',
        desc: 'Nullam quis ante'
    },
    {
        icon: faChartLine,
        title: '80k Mauris',
        desc: 'Etiam sit amet orci'
    },
    {
        icon: faAward,
        title: '6x Phasellus',
        desc: 'Vestibulum ante ipsum'
    }
]

export const MoreAboutData : string [] = [
    'Lorem ipsum dolor sit amet',
    'Incididunt ut labore et',
    'Consectetur adipiscing elit',
    'Dolore magna aliqua',
    'Sed do eiusmod tempor',
    'Ut enim ad minim veniam'
]