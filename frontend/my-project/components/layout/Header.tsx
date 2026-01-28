"use client"

import Image from "next/image"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { usePathname } from "next/navigation"


const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"


  return (
    <header  className={`absolute top-0 left-0 w-full z-50 transition-colors duration-300 shadow-xl
    ${isHome ? "bg-transparent" : "bg-black/70 shadow-lg"}
  `}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={60}
            priority
            className="w-20 md:w-26"
          />

          <ul className="hidden md:flex font-semibold items-center space-x-10 text-white">
            <li><a href="/" className="hover:opacity-80">Home</a></li>
            <li><a href="#about" className="hover:opacity-80">About</a></li>
            <li><a href="#about" className="hover:opacity-80">Classes</a></li>
            <li><a href="#booking" className="hover:opacity-80">Booking</a></li>
          </ul>

          <div className="hidden md:block">
            <button className="py-2 px-4 text-xs border rounded-lg text-white font-semibold hover:bg-white hover:text-black transition">
              Contact
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white text-xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <ul className="flex flex-col items-center gap-6 py-8 text-white font-semibold">
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#booking">Booking</a></li>
            <li>
              <button className="mt-2 py-2 px-6 border rounded-lg text-sm">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
