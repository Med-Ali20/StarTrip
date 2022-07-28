import Link from 'next/link'
import { FaCompass } from 'react-icons/fa'
import { FaDollarSign } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'

const index = () => {
  return (
    <div className='bg-yellow flex pl-64 pr-64 pb-0 items-center' >
        <Link href="/" ><h1 className='text-9xl cursor-pointer mt-9 mb-3 mr-auto leading-10' >*</h1></Link>
        <ul className='flex flex-row' >
            <li>
                <Link href="/guide" ><a className='text-xl ml-12 flex flex-row-reverse items-center' > <span className='ml-1'> Guide </span> <FaCompass className='text-base' /> </a></Link>
            </li>
            <li>
                <Link href="/pricing" ><a className='text-xl ml-12 flex flex-row-reverse items-center ' > <span> Pricing </span> <FaDollarSign className='text-base' /> </a></Link>
            </li>
            <li>
                <Link href="/signup" ><a className='text-xl ml-12 flex flex-row-reverse items-center ' > <span className='ml-1'> Sign Up </span> <FaUserPlus className='text-base'  /></a></Link>
            </li>
        </ul>
    </div>
  )
}


export default index