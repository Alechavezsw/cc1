'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, MessageCircle } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const whatsappRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        const titleWords = titleRef.current.textContent?.split(' ') || []
        titleRef.current.innerHTML = ''
        titleWords.forEach((word, i) => {
          const span = document.createElement('span')
          span.textContent = word + ' '
          span.style.display = 'inline-block'
          titleRef.current?.appendChild(span)
        })

        gsap.from(titleRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Form animation
      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll('input, textarea, button')
        gsap.from(inputs, {
          opacity: 0,
          x: -60,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // WhatsApp section
      if (whatsappRef.current) {
        gsap.from(whatsappRef.current.children, {
          opacity: 0,
          x: 60,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: whatsappRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    console.log('Formulario enviado:', formData)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ nombre: '', telefono: '', email: '', mensaje: '' })
      alert('¡Mensaje enviado! Te contactaremos pronto.')
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} id="contacto" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20 text-gray-900 leading-tight"
        >
          Hablemos. Tu marca tiene potencial, nosotros ganas.
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white text-lg hover:border-gray-300"
              />
            </div>
            <div>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white text-lg hover:border-gray-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white text-lg hover:border-gray-300"
              />
            </div>
            <div>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={5}
                required
                className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white resize-none text-lg hover:border-gray-300"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-5 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  Enviar y comenzar a crecer
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* WhatsApp Info */}
          <div ref={whatsappRef} className="flex flex-col justify-center space-y-8">
            <p className="text-2xl text-gray-600 leading-relaxed font-light">
              ¿Preferís WhatsApp? También somos fans de las respuestas rápidas.
            </p>
            <a
              href="https://wa.me/549XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#25d366] text-white rounded-full font-semibold text-lg hover:bg-[#20ba5a] hover:shadow-2xl hover:shadow-[#25d366]/30 transition-all duration-500 hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
