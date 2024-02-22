import React from 'react'

type NavbarProps = {}

export default function Navbar({ }: NavbarProps) {
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
      <div className='h-[5rem] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto'>
        <p className='flex items-center justify-center gap-2'>
          <h2 className='text-gray-500 text-3xl'>Weather </h2>
        </p>
      </div>
    </nav>
  )
}