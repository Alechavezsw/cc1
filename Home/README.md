# Cosecha Creativa - Next.js Website

Sitio web moderno y dinámico para Cosecha Creativa, construido con Next.js 14, Tailwind CSS y Framer Motion. Diseñado con un estilo similar a Webflow: animaciones sofisticadas, diseño limpio y premium.

## 🚀 Características

- ⚡ Next.js 14 con App Router
- 🎨 Tailwind CSS con utilidades personalizadas (glassmorphism, gradientes)
- 🎬 **GSAP (GreenSock)** para animaciones profesionales de nivel Webflow
- 📜 **ScrollTrigger** para animaciones basadas en scroll
- ✨ Framer Motion (complementario)
- 🎭 Efectos de scroll-triggered animations avanzados
- 💎 Diseño premium estilo Webflow
- 📱 Diseño completamente responsive
- 🎯 Optimizado para SEO
- 🚀 Rendimiento optimizado
- 🌈 Microinteracciones refinadas
- 🎪 Animaciones con timelines, staggers y easing avanzados

## 📦 Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales
├── components/
│   ├── Navbar.tsx      # Navegación (GSAP)
│   ├── Hero.tsx        # Sección hero (GSAP + ScrollTrigger)
│   ├── About.tsx       # Sobre nosotros (GSAP + text split)
│   ├── Services.tsx    # Servicios (GSAP + hover effects)
│   ├── Portfolio.tsx   # Portfolio (GSAP + parallax)
│   ├── Clients.tsx     # Clientes (GSAP + elastic animations)
│   ├── Testimonials.tsx # Testimonios (GSAP + 3D effects)
│   ├── Contact.tsx     # Contacto (GSAP + word split)
│   └── Footer.tsx      # Footer
├── hooks/
│   └── useGSAP.ts      # Hook personalizado para GSAP
└── public/             # Archivos estáticos
```

## 🎨 Personalización

Los colores principales están definidos en `tailwind.config.js`:

- Primary: `#2d8659` (verde)
- Secondary: `#f4a261` (naranja)

Puedes modificar estos valores según tus necesidades.

## 🎬 Animaciones GSAP Implementadas

- **Hero**: Timeline con animaciones secuenciales, elementos flotantes continuos, parallax scroll
- **About**: Text split animation con efecto 3D (rotateX)
- **Services**: Stagger animations, hover effects con scale y rotation
- **Portfolio**: Parallax scroll, random stagger, shine effects
- **Clients**: Elastic animations con rotation (-180°)
- **Testimonials**: 3D rotation effects (rotateX), parallax
- **Contact**: Word split animation, form inputs stagger
- **Navbar**: Scroll-based backdrop blur, mobile menu animations

## 📝 Notas

- Asegúrate de actualizar los enlaces de WhatsApp y redes sociales en los componentes correspondientes.
- El formulario de contacto actualmente solo muestra una alerta. Necesitarás configurar un backend o servicio de email para procesar los envíos.
- GSAP está configurado con ScrollTrigger para todas las animaciones basadas en scroll.

## 🚀 Deploy

Para desplegar en Vercel:

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El deploy se realizará automáticamente

