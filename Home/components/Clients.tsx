'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const clients = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Cliente ${i + 1}`,
}))

export default function Clients() {
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

      // Grid animation
      if (gridRef.current) {
        const items = gridRef.current.children
        
        gsap.from(items, {
          opacity: 0,
          scale: 0.5,
          rotation: -180,
          duration: 1,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Hover animations
        Array.from(items).forEach((item) => {
          const itemElement = item as HTMLElement
          
          itemElement.addEventListener('mouseenter', () => {
            gsap.to(itemElement, {
              y: -8,
              scale: 1.05,
              rotation: 0,
              duration: 0.4,
              ease: 'back.out(1.7)',
            })
          })

          itemElement.addEventListener('mouseleave', () => {
            gsap.to(itemElement, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="clientes" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
            Confían en nosotros
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Empresas, estudios jurídicos, constructoras, comercios, políticos y emprendedores que hoy están comunicando mejor.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center min-h-[140px] border border-gray-100 hover:border-primary/30"
            >
              <span className="text-gray-500 font-semibold text-center group-hover:text-primary transition-colors duration-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
