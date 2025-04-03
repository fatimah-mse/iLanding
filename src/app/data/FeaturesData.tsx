import { faCode, faEye, faFeather, faMobile, faTelevision } from "@fortawesome/free-solid-svg-icons"
import { CommonCardType } from "../components/CommonCard"
import { FilterCardType } from "../components/FilterCard"
import feature1 from '../images/features-illustration-1.webp'
import feature2 from '../images/features-illustration-2.webp'
import feature3 from '../images/features-illustration-3.webp'
import client1 from '../images/client-1.png'
import client2 from '../images/client-2.png'
import client3 from '../images/client-3.png'
import client4 from '../images/client-4.png'
import client5 from '../images/client-5.png'
import client6 from '../images/client-6.png'
import client7 from '../images/client-7.png'
import client8 from '../images/client-8.png'
import { faChrome } from "@fortawesome/free-brands-svg-icons"
import { StaticImageData } from "next/image"

export const FilterBtnData: string[] = [
    'Modisit', 'Praesenti', 'Explica',
]
export const FilterCardData: FilterCardType[] = [
    {
        category: 'Modisit',
        title: 'Voluptatem dignissimos provident',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        list: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur'
        ],
        img: feature1
    },
    {
        category: 'Praesenti',
        title: 'Neque exercitationem debitis',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        list: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur'
        ],
        img: feature2
    },
    {
        category: 'Explica',
        title: 'Voluptatibus commodi accusamu',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        list: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur'
        ],
        img: feature3
    },
]

export const CommonCardData : CommonCardType [] = [
    {
        title: 'Use On Any Device',
        desc: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.',
        icon: faTelevision
    },
    {
        title: 'Feather Icons',
        desc: 'Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.',
        icon: faFeather
    },
    {
        title: 'Retina Ready',
        desc: 'Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.',
        icon: faEye
    },
    {
        title: 'W3c Valid Code',
        desc: 'Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.',
        icon: faCode
    },
    {
        title: 'Fully Responsive',
        desc: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.',
        icon: faMobile
    },
    {
        title: 'Browser Compatibility',
        desc: 'Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.',
        icon: faChrome
    }
]

export const ClientsImgs : StaticImageData [] = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
]