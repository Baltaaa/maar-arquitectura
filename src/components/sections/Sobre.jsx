import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { siteContent } from '../../data/content'

export const Sobre = () => {
  return (
    <section
      id="estudio"
      className="py-24 md:py-32 px-4 md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Image */}
        <ScrollReveal>
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-2 terminal-border opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <img
              alt="Estudio MAAR Arquitectura"
              className="w-full  border border-outline-variant"
              src={siteContent.sobre.imagen}
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <span className="font-mono-ui text-primary-container text-xs tracking-tighter uppercase block">
              Estudio_Profile // MAAR.ARQS
            </span>

            <h2 className="text-4xl md:text-display-lg-mobile font-serif font-normal leading-tight">
              {siteContent.sobre.nombre}
            </h2>

            <div className="w-12 h-[2px] bg-primary-container"></div>

            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {siteContent.sobre.bio}
            </p>

            <p className="text-body-md text-on-surface-variant opacity-80 leading-relaxed">
              {siteContent.sobre.credenciales[0]}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
