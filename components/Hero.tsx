import Link  from 'next/link'
import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='min-h-[70vh] md:min-[60vh] lg:min-h-[90vh]
     flex flex-col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black'>
    
    <div className="max-w-2xl">
        <h1 className='text-5xl pt-6 md:pt-0 leading-tight md:text-7xl'>Timeless Elegance on Your Wrist</h1>
        <p>Discover our curated collection of premium watches, crafted for those who appreciate the finer things in life.</p>
        <Link href='#product'>
          <button className='bg-black text-white py-2 px-4 bg-[#212529] rounded'>Shop Now</button>
        </Link>
    </div>
    <div>
      <Image src="/reloj.png" alt="Watch" width={500} height={500} className="object-cover" />
    </div>
    </div>
  )
}

export default Hero