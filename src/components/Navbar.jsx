import React from 'react'


const Navbar = () => {
    return (
        <nav className='flex w-full h-12 bg-slate-900 text-white font-["Montserrat"]'>
            <ul className=' logo flex  items-center w-full justify-between mx-5'>
                <div className='w-1/2'>
                    <span className='font-bold text-3xl cursor-default hover:text-red-300'>Taskly</span>
                </div>
                <div className='gap-9 font-semibold mr-2 md:flex hidden'>
                    <li className='hover:text-red-300 cursor-pointer'>Home</li>
                    <li className='hover:text-red-300 cursor-pointer'>About</li>
                    <li className='hover:text-red-300 cursor-pointer'>Contact Us</li>
                </div>
                
            </ul>
        </nav>
    )
}

export default Navbar
