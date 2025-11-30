'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const portfolioItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Proyecto ${i + 1}`,
}))

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Grid items animation
      if (gridRef.current) {
        const items = gridRef.current.children
        
        gsap.from(items, {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: 10,
          duration: 0.8,
          stagger: {
            amount: 0.6,
            from: 'random',
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Parallax and hover effects
        Array.from(items).forEach((item) => {
          const itemElement = item as HTMLElement
          
          // Parallax on scroll
          gsap.to(itemElement, {
            y: -30,
            scrollTrigger: {
              trigger: itemElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })

          // Hover animation
          itemElement.addEventListener('mouseenter', () => {
            gsap.to(itemElement, {
              scale: 1.03,
              y: -8,
              rotation: 0,
              duration: 0.5,
              ease: 'power2.out',
            })
          })

          itemElement.addEventListener('mouseleave', () => {
            gsap.to(itemElement, {
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
            })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="portfolio" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
            Resultados que hablan solos{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              (y por suerte, bien).
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Proyectos reales, marcas reales y logros medibles. Nada de humo.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary flex items-center justify-center">
                <span className="text-white text-3xl font-bold z-10 relative">
                  {item.title}
                </span>
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
