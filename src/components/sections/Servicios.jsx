import { ScrollReveal } from '../ui/ScrollReveal'
import { siteContent } from '../../data/content'

export const Servicios = () => {
  return (
    <section
      id="servicios"
      className="py-24 md:py-32 px-4 md:px-margin-desktop bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
          {siteContent.servicios.map((servicio, index) => (
            <ScrollReveal key={servicio.titulo} delay={index * 0.1}>
              <div className="terminal-border p-6 md:p-8 hover:bg-surface-container-low transition-colors">
                <span className="font-mono-ui text-primary-container text-[11px] mb-4 block uppercase tracking-wider">
                  {servicio.label}
                </span>

                <h4 className="text-headline-md font-serif font-bold mb-4">
                  {servicio.titulo}
                </h4>

                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
