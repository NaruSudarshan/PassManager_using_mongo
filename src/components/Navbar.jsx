import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 shadow-lg px-6 py-4 flex justify-between items-center">
      <div className="logo text-2xl font-extrabold text-blue-400 tracking-wide drop-shadow-lg select-none">
        PassManager
      </div>
    </nav>
  )
}

export default Navbar