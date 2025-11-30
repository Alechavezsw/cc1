'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: '🎨',
    title: 'Diseño & Branding',
    description: 'Identidad visual, piezas gráficas, logos, campañas y todo lo que tu marca necesita para verse irresistible.',
  },
  {
    icon: '📱',
    title: 'Social Media & Contenido',
    description: 'Gestión completa de redes, copywriting, fotografía, video, reels, podcast, estrategias de crecimiento y contenidos con propósito.',
  },
  {
    icon: '💻',
    title: 'Desarrollo Web',
    description: 'Landing pages, webs institucionales, e-commerce y sistemas a medida. Diseño moderno, rápido y optimizado.',
  },
  {
    icon: '📊',
    title: 'Publicidad Digital',
    description: 'Campañas en Meta Ads, Google Ads y segmentación inteligente. Más alcance, menos derroche.',
  },
  {
    icon: '🖨️',
    title: 'Impresión & Gráfica',
    description: 'Cartelería, ploteos, vía pública, imprenta digital y soluciones visuales para empresas y constructoras.',
  },
  {
    icon: '📋',
    title: 'Encuestas & Consultoría Política',
    description: 'Relevamientos online, análisis de opinión pública, estrategias de comunicación y gestión integral de campañas.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Cards animation with stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.children
        
        gsap.from(cards, {
          opacity: 0,
          y: 80,
          scale: 0.8,
          rotation: -5,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Hover animations
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement
          const icon = cardElement.querySelector('[data-icon]')
          
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              y: -12,
              scale: 1.02,
              duration: 0.4,
              ease: 'power2.out',
            })
            if (icon) {
              gsap.to(icon, {
                y: -15,
                scale: 1.1,
                rotation: 5,
                duration: 0.4,
                ease: 'back.out(1.7)',
              })
            }
          })

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            })
            if (icon) {
              gsap.to(icon, {
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out',
              })
            }
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="servicios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20 text-gray-900 leading-tight"
        >
          Lo que hacemos{' '}
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            (y hacemos muy bien)
          </span>
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 overflow-hidden cursor-pointer"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div
                  data-icon
                  className="text-6xl mb-8 inline-block"
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
