import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { siteContent } from '../../data/content'

export const Contacto = () => {
  return (
    <section
      id="contacto"
      className="bg-[#0A0A0A] py-20 md:py-28 px-10 md:px-16 border-t border-white/10 relative overflow-hidden m-4 mb-12 md:m-16 md:mb-12 md:mt-0 p-1 rounded-[15px] md:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
    >
      {/* Decorative background element — Logo grande semitransparente */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <img
          src="/images/maarFaviconNegro.png"
          alt=""
          aria-hidden="true"
          className="w-48 md:w-[380px] select-none pointer-events-none"
        />
      </div>

      {/* M A A R + Logo — Encabezado decorativo */}
      <div className="justify-center z-20 flex items-center gap-3 mb-6">
        <img
          src="/images/faviconlogoBlanco.png"
          alt=""
          className="w-10 h-10 md:w-12 md:h-12 opacity-40"
        />
        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono font-bold">
          M A A R
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-display-lg-mobile font-serif font-normal mb-8 md:mb-12 leading-tight text-white">
            {siteContent.contacto.frase}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href={`https://wa.me/${siteContent.contacto.whatsapp}?text=${encodeURIComponent(
                siteContent.contacto.whatsappTexto
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all text-center font-sans"
            >
              {siteContent.contacto.ctaLabel}
            </motion.a>

            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center font-sans"
            >
              {siteContent.contacto.ctaLabelSecondary}
            </motion.a>
          </div>
        </ScrollReveal>

       
      </div>
    </section>
  )
}
