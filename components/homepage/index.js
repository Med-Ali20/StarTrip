import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import spaceman from '../../public/spaceman.jpg'

export default function index() {
  return (
    <main className="h-screen w-full bg-spaceBlack overflow-hidden flex pl-64 relative ">
      <span className='w-4/12 border-r-7 border-blue h-[1500px] bg-pink z-10 absolute left-[10%] rotate-[25deg] top-[-25%] ' ></span>
      <div className='text-white z-50 min-w-max'>
        <div className='mb-16'>
          <h1 className='text-8xl mb-3 mt-24 relative z-10 '>StarTrip <span className='absolute left-0.5 top-0.5 text-blue -z-50' >StarTrip</span> <span className='absolute left-1 top-1 text-blue -z-50' >StarTrip</span>  </h1>
          <h2 className='text-5xl relative z-10 '>For Galactic Vacations <span className='absolute left-0.5 top-0.5 text-blue -z-50 w-full' >For Galactic Vacations</span></h2>
        </div>
        <h3 className='text-4xl font-light mb-28 z-50 tracking-widest leading-snug'>Explore space on <br /> weekends at plausible <br /> prices</h3>
        <div>
          <p className='text-3xl font-light mb-6 text-center' >Get Your Ticket To <br /> <span className='text-5xl font-bold text-blue after:content-["Mars"] relative after:absolute after:top-1 after:left-0.5 after:text-white after:-z-50 z-10 ' >Mars</span></p>
          <Link href='/signup'><a className='flex bg-pink text-spaceBlack text-4xl justify-center font-medium rounded items-center pt-6 pb-8 tracking-widest text-darkGrey relative z-10 ml-1 mt-1 ' > BOOK NOW <FaArrowRight className='font-light ml-3 mt' /><span className='absolute bottom-1 right-1 rounded bg-yellow w-full h-full -z-50' ></span> </a></Link>
        </div>
      </div>
      <span className='mt-32 ml-12 block animate-float opacity-[0.7] ' ><Image src={spaceman} alt="spaceman" /></span>
    </main>
  )
}
