import Link from 'next/link'
import React from 'react'
import {Search} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='px-4 md:px-12 py-4 md:py-6 bg-white text-black'>
      <div className="flex items-center justify-between w-full">
        <Link href="/" className='hidden md:inline-block text-lg font-semibold'>
          Watches
        </Link>
        <div className="flex items-center gap-2 max-w-[300px] md:w-[400px]">
          <Search />
          <input type="text" placeholder='search' className="border rounded px-2 py-1 w-full" />
        </div>
        <Link href="/add-product">
          <button className="bg-black text-white px-4 py-2 rounded">Add Products</button>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar