import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteContent } from '../../data/content'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed md:sticky top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-5 bg-background/60 md:bg-background/70 border-b-black/20 border-b md:border-none backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <img
          src="/images/maarLogoNegro.webp"
          alt="MAAR logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {siteContent.nav.links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-black hover:text-on-surface-variant transition-colors text-mono-ui text-[10px] font-mono-ui normalcase tracking-wider"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <button className="text-[#010101] border-[1.5px] border-[#010101] md:text-on-primary md:bg-primary-container px-6 py-2 rounded-md text-mono-ui font-mono-ui font-medium md:font-bold hover:opacity-80 transition-all block">
        Consultas
      </button>

    </header>
  )
}
