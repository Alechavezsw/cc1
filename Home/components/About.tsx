'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const text1Ref = useRef<HTMLParagraphElement>(null)
  const text2Ref = useRef<HTMLParagraphElement>(null)
  const text3Ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation
      if (titleRef.current) {
        const titleChars = titleRef.current.textContent?.split('') || []
        titleRef.current.innerHTML = ''
        titleChars.forEach((char, i) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          titleRef.current?.appendChild(span)
        })

        gsap.from(titleRef.current.children, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Text animations
      const textElements = [text1Ref.current, text2Ref.current, text3Ref.current].filter(Boolean)
      
      textElements.forEach((el, index) => {
        if (el) {
          gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.2,
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="sobre-nosotros" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20 text-gray-900 leading-tight"
        >
          Somos la agencia que rinde… como campaña bien segmentada.
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          <p
            ref={text1Ref}
            className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center font-light"
          >
            En Cosecha Creativa transformamos ideas en resultados.
          </p>
          
          <p
            ref={text2Ref}
            className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center font-light"
          >
            Creamos estrategias inteligentes, contenido que engancha y diseños que venden.
          </p>
          
          <p
            ref={text3Ref}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed text-center max-w-4xl mx-auto"
          >
            Trabajamos con pymes, emprendedores, políticos, profesionales y empresas que buscan crecer en serio, con un equipo que combina creatividad, datos y un toque de picardía.
          </p>
        </div>
      </div>
    </section>
  )
}
