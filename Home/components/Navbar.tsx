'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Logo animation on load
    if (logoRef.current) {
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power3.out',
      })
    }

    // Menu items animation
    if (menuRef.current) {
      gsap.from(menuRef.current.children, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3,
      })
    }
  }, [])

  useEffect(() => {
    // Mobile menu animation
    if (menuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(menuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
        gsap.from(menuRef.current.children, {
          opacity: 0,
          x: -20,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out',
        })
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        })
      }
    }
  }, [isMobileMenuOpen])

  // Navbar scroll animation
  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.6)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [isScrolled])

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#testimonios', label: 'Testimonios' },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            ref={logoRef}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
          >
            Cosecha Creativa
          </div>

          {/* Desktop Menu */}
          <ul ref={menuRef} className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="px-6 py-2 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={menuRef}
        className="md:hidden bg-white border-t overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-primary font-medium py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-2 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold text-center"
            >
              Contacto
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}
