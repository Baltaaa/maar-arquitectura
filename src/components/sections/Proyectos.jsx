import { ScrollReveal } from '../ui/ScrollReveal'
import { ProjectCard } from '../ui/ProjectCard'
import { siteContent } from '../../data/content'

export const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="py-14 md:py-24 lg:py-32 px-6 md:px-16 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="font-mono-ui text-primary-container uppercase text-xs mb-2 block tracking-tighter">
                Selected_Works // 01
              </span>
              <h2 className="text-3xl md:text-headline-md font-serif font-bold">
                Proyectos Destacados
              </h2>
            </div>
            <div className="hidden md:block h-[1px] flex-grow mx-8 bg-outline-variant opacity-30"></div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {siteContent.proyectos.map((proyecto, index) => (
            <ScrollReveal key={proyecto.id} delay={index * 0.1}>
              <ProjectCard proyecto={proyecto} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
