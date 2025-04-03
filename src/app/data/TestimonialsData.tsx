import test1 from '../images/testimonials-1.jpg'
import test2 from '../images/testimonials-2.jpg'
import test3 from '../images/testimonials-3.jpg'
import test4 from '../images/testimonials-4.jpg'
import { StaticImageData } from 'next/image'

export interface TestimonialsType {
    img: StaticImageData,
    name: string,
    job: string,
    desc: string,
}
export const TestimonialsData : TestimonialsType[] = [
    {
        img: test1,
        name: 'Saul Goodman',
        job: 'Ceo & Founder',
        desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
        img: test2,
        name: 'Sara Wilsson',
        job: 'Designer',
        desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
        img: test3,
        name: 'Jena Karlis',
        job: 'Store Owner',
        desc: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. '
    },
    {
        img: test4,
        name: 'Matt Brandon',
        job: 'Freelancer',
        desc: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    }
]