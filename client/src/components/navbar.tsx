import React from 'react'

export const Navbar = () => {
  return (
    <div className=' w-full py-5  lg:px-0 px-8 bg-gray-50 border border-b-black/85  '>
        <nav className=' font-semibold max-w-[600px] text-black flex mx-auto justify-between items-center '>
            <div className=' flex justify-between w-2/3 mr-5 font-semibold'>
            <a href="/">
             <div>
                Home
             </div>
           </a>
           <a href="/about">
             <div>
                About
             </div>
           </a>
           <a href="/profile">
             <div>
                profile
             </div>
           </a>
            </div>
           <input 
           type="text"
           className=' py-2 px-4 font-mono bg-white border border-zinc-800/85 rounded-md'
           placeholder='Search....'
           />
        </nav> 
    </div>
  )
}
