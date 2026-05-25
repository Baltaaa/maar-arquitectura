import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteContent } from '../../data/content'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-5 bg-background/70 backdrop-blur-md">
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
            className="text-black hover:text-on-surface-variant transition-colors text-mono-ui font-mono-ui text-[13px] uppercase tracking-wider"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <button className="bg-primary-container text-on-primary px-6 py-2 rounded-lg text-mono-ui font-mono-ui font-bold hover:opacity-80 transition-all hidden md:block">
        Consultas
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50"
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-5 h-0.5 bg-on-surface"
        />
        <motion.div
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-5 h-0.5 bg-on-surface"
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-5 h-0.5 bg-on-surface"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-outline-variant md:hidden"
          >
            <nav className="flex flex-col gap-4 p-6">
              {siteContent.nav.links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-mono-ui"
                >
                  {link}
                </a>
              ))}
              <button className="bg-primary-container text-on-primary px-6 py-2 rounded-lg text-mono-ui font-mono-ui font-bold hover:opacity-80 transition-all w-full mt-4">
                Consultas
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
