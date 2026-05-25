import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { siteContent } from '../../data/content'

export const Manifiesto = () => {
  return (
    <section className="bg-[#0A0A0A] py-14 md:py-24 lg:py-32 px-6 md:px-16 select-none">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-start gap-8 md:gap-12">
          <ScrollReveal delay={0}>

            <div className="w-12 h-12 md:w-20 md:h-20 p-1 flex items-center justify-center text-primary-container flex-shrink-0">
              <span className="text-4xl">🏛️</span>
            </div>

          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-2xl md:text-4xl lg:text-display-lg font-serif font-light text-white leading-tight md:max-w-[80%]">
              {siteContent.manifiesto.texto}
              {siteContent.manifiesto.texto.includes('pertenecen') && (
                <span className="italic font-serif"> al paisaje que las rodea.</span>
              )}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
