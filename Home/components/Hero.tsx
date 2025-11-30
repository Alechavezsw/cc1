'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)
  const bg1Ref = useRef<HTMLDivElement>(null)
  const bg2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada del contenido
      const tl = gsap.timeline()
      
      tl.from(badgeRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5')
      .from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .from(buttonsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.4')

      // Animación de elementos visuales
      gsap.from(visualRef.current, {
        opacity: 0,
        scale: 0.8,
        rotate: -5,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      })

      // Animaciones continuas de las tarjetas
      if (card1Ref.current) {
        gsap.to(card1Ref.current, {
          y: -20,
          rotate: 2,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        })
      }

      if (card2Ref.current) {
        gsap.to(card2Ref.current, {
          y: -30,
          rotate: -5,
          scale: 1.05,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: 0.5,
        })
      }

      if (card3Ref.current) {
        gsap.to(card3Ref.current, {
          y: 25,
          rotate: 4,
          scale: 1.08,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: 1,
        })
      }

      // Animaciones de fondo
      if (bg1Ref.current) {
        gsap.to(bg1Ref.current, {
          x: 200,
          y: -200,
          scale: 1.2,
          duration: 25,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }

      if (bg2Ref.current) {
        gsap.to(bg2Ref.current, {
          x: -150,
          y: 150,
          scale: 1.3,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1,
        })
      }

      // Parallax effect on scroll
      if (visualRef.current) {
        gsap.to(visualRef.current, {
          y: -100,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bg1Ref}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"
        />
        <div
          ref={bg2Ref}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/20 via-secondary/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div
              ref={badgeRef}
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-8"
            >
              Agencia de Marketing & Diseño
            </div>
            
            <h1
              ref={titleRef}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-8 text-gray-900 tracking-tight"
            >
              Cosechamos ideas.
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Cultivamos marcas.
              </span>
            </h1>
            
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl font-light"
            >
              Marketing, diseño, contenido, desarrollo web y estrategias que hacen crecer tu negocio… sin magia, pero con mucho método.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1"
              >
                Quiero impulsar mi marca
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-3 px-8 py-5 glass rounded-full font-semibold text-lg hover:bg-white transition-all duration-300"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Visual Elements - Webflow Style */}
          <div
            ref={visualRef}
            className="relative h-[600px] lg:h-[700px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Card */}
              <div
                ref={card1Ref}
                className="relative w-80 h-80 bg-gradient-to-br from-primary via-primary-light to-primary rounded-[3rem] shadow-2xl shadow-primary/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[3rem]" />
              </div>
              
              {/* Floating Card 1 */}
              <div
                ref={card2Ref}
                className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-secondary to-secondary-dark rounded-[2rem] shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[2rem]" />
              </div>
              
              {/* Floating Card 2 */}
              <div
                ref={card3Ref}
                className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-secondary-dark to-secondary rounded-[2rem] shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[2rem]" />
              </div>
              
              {/* Accent Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
