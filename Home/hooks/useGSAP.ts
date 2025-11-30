import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = (callback: () => void, deps: React.DependencyList = []) => {
  const scope = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(callback, scope)
    return () => ctx.revert()
  }, deps)

  return scope
}
