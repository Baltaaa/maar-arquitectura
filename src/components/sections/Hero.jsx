import { motion } from 'framer-motion'
import { siteContent } from '../../data/content'

export const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative select-none h-[90vh] md:h-screen min-h-[300px] max-h-[750px] flex flex-col justify-end overflow-hidden md:m-16 md:mb-10 md:mt-0 p-1 rounded-t-md md:rounded-md md:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          alt="MAAR Arquitectura"
          className="w-full h-full object-cover"
          src={siteContent.hero.image}
          fetchpriority="high"
          loading="eager"
        />
        {/* Degradado: transparente arriba → negro intenso abajo */}
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      {/* Contenido — anclado al fondo izquierdo */}
      <div className="relative z-10 px-6 md:px-16 pb-12 md:pb-20 w-full">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-white/60 text-[11px] uppercase tracking-[0.2em] font-sans mb-4 md:mb-5"
        >
          Estudio de Arquitectura · Mar del Plata
        </motion.p>

        {/* Nombre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-sans text-white font-thin leading-none tracking-[0.15em]
                     text-[clamp(4rem,8vw,8rem)]
                     mb-4 md:mb-6"
        >
          {siteContent.hero.nombre}
        </motion.h1>

        {/* Línea divisora animada */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="w-16 md:w-24 h-px bg-white/50 mb-5 md:mb-7"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="text-white/75 font-sans font-light text-xs md:text-base
                     tracking-[0.08em] max-w-xs md:max-w-md mb-8 md:mb-12 leading-relaxed"
        >
          Espacios que dialogan con quienes los habitan.
        </motion.p>

        {/* Scroll CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={scrollToNext}
          className="flex items-center gap-3 group cursor-pointer bg-slate-100/70 md:bg-[#010101]/50 px-8 py-4 rounded-full backdrop-blur-sm md:shadow-[10px_10px_100px_-10px_rgba(245,243,239,0.5)]"
        >
          <span className="text-[#010101]/50 md:text-white/50 text-[11px] uppercase tracking-[0.18em] font-sans
                           group-hover:text-[#010101]/80 md:group-hover:text-white/80 transition-colors duration-300">
            {siteContent.hero.scrollLabel}
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#010101]/50 md:text-white/50 group-hover:text-[#010101]/80 md:group-hover:text-white/80 transition-colors duration-300 text-xs"
          >
            ↓
          </motion.span>
        </motion.button>
      </div>

      {/* Número de sección — esquina superior derecha, solo desktop */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-8 right-6 md:right-16 text-white/25 text-[11px]
                   font-sans tracking-widest hidden md:block"
      >
        01 / M A A R
      </motion.span>

    </section>
  )
}
