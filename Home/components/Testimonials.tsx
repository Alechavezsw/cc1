'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    text: 'Trabajar con Cosecha Creativa fue un antes y un después para nuestra marca. Resultados reales y un equipo que entiende de verdad el negocio.',
    author: 'Cliente Satisfecho',
  },
  {
    text: 'Profesionales, creativos y con resultados medibles. Exactamente lo que necesitábamos para hacer crecer nuestro negocio.',
    author: 'Empresa Cliente',
  },
  {
    text: 'El mejor equipo con el que trabajamos. Estrategias inteligentes, contenido de calidad y un servicio impecable.',
    author: 'Emprendedor',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.children
        
        gsap.from(cards, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotationX: 90,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Hover and parallax effects
        Array.from(cards).forEach((card, index) => {
          const cardElement = card as HTMLElement
          
          // Parallax
          gsap.to(cardElement, {
            y: -20,
            scrollTrigger: {
              trigger: cardElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })

          // Hover
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              y: -12,
              scale: 1.02,
              rotationX: 0,
              duration: 0.5,
              ease: 'power2.out',
            })
          })

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              y: 0,
              scale: 1,
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
    <section ref={sectionRef} id="testimonios" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
            Lo que dicen los que{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              trabajan con nosotros
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Spoiler: hablan bien. No los sobornamos… todavía.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 relative border border-gray-100 hover:border-primary/30"
            >
              <div className="absolute -top-6 -left-6 text-7xl text-primary/10 font-serif z-0">"</div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 italic relative z-10 text-lg">
                {testimonial.text}
              </p>
              <p className="text-gray-600 font-semibold text-lg relative z-10">
                — {testimonial.author}
              </p>
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
