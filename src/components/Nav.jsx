import { useState, useEffect } from 'react'
import { headerLogo } from '../assets/images/index.js'
import { navLinks } from '../constant/index.js'
import { TfiAlignRight, TfiClose } from "react-icons/tfi";

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`padding-x py-4 sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-3xl'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="flex items-center justify-between max-container">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-coral-red rounded">
            <img src={headerLogo} alt="Nike" width={120} height={27} />
          </a>

          {/* Desktop nav links */}
          <ul className="flex-1 flex justify-center items-center gap-1 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 font-montserrat text-sm font-medium text-slate-gray
                             rounded-full hover:bg-primary hover:text-gray-900
                             transition-all duration-200 focus-visible:outline-none
                             focus-visible:ring-2 focus-visible:ring-coral-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="flex items-center gap-2 max-lg:hidden wide:mr-24">
            <a
              href="/"
              className="px-4 py-2 font-montserrat text-sm font-semibold text-slate-gray
                         rounded-full hover:bg-primary hover:text-gray-900
                         transition-all duration-200"
            >
              Sign in
            </a>
            <a
              href="/"
              className="px-5 py-2.5 font-montserrat text-sm font-semibold text-white
                         bg-coral-red rounded-full shadow-sm
                         hover:shadow-md hover:brightness-105 active:scale-95
                         transition-all duration-200"
            >
              Explore now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="hidden max-lg:flex items-center justify-center w-10 h-10 rounded-full
                       text-slate-gray hover:bg-primary transition-colors duration-200"
          >
            <TfiAlignRight className="text-xl" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open ? 'visible' : 'invisible pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Scrim */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer panel */}
        <aside
          className={`absolute top-0 right-0 h-full w-72 bg-white flex flex-col
                      shadow-2xl transition-transform duration-300 ease-in-out ${
                        open ? 'translate-x-0' : 'translate-x-full'
                      }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-pale-blue">
            <img src={headerLogo} alt="Nike" width={100} height={22} />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="flex items-center justify-center w-9 h-9 rounded-full
                         text-slate-gray hover:bg-primary transition-colors duration-200"
            >
              <TfiClose className="text-lg" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col px-3 py-4 gap-0.5 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-4 py-3 font-montserrat text-sm font-medium
                           text-slate-gray rounded-xl hover:bg-primary hover:text-gray-900
                           transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Drawer footer CTAs */}
          <div className="flex flex-col gap-3 px-6 py-6 border-t border-pale-blue">
            <a
              href="/"
              className="flex items-center justify-center py-2.5 font-montserrat text-sm font-semibold
                         text-slate-gray border border-pale-blue rounded-full
                         hover:border-slate-gray hover:text-gray-900 transition-all duration-200"
            >
              Sign in
            </a>
            <a
              href="/"
              className="flex items-center justify-center py-2.5 font-montserrat text-sm font-semibold
                         text-white bg-coral-red rounded-full shadow-sm
                         hover:brightness-105 active:scale-95 transition-all duration-200"
            >
              Explore now
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Nav
