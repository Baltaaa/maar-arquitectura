import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'

const pasos = [
  {
    num: '01',
    titulo: 'Escucha',
    desc: 'Todo empieza con una conversación. Entendemos el programa, el presupuesto y las aspiraciones antes de trazar una sola línea.',
  },
  {
    num: '02',
    titulo: 'Proyecto',
    desc: 'Desarrollamos el anteproyecto y el proyecto ejecutivo con toda la documentación técnica necesaria para construir.',
  },
  {
    num: '03',
    titulo: 'Obra',
    desc: 'Dirigimos la construcción con presencia permanente. Coordinamos gremios, controlamos calidad y respetamos los plazos.',
  },
  {
    num: '04',
    titulo: 'Entrega',
    desc: 'Entregamos el proyecto terminado y acompañamos la puesta en uso. El trabajo no termina en la firma del acta.',
  },
]

export const Proceso = () => {
  return (
    <section
      id="proceso"
      className="bg-[#0A0A0A] py-14 md:py-24 lg:py-32 px-6 md:px-16 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">

        <ScrollReveal>
          <div className="mb-12 md:mb-16 flex items-start gap-6 md:gap-10">
            {/* Logo animado */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent border border-white/20 flex items-center justify-center"
            >
              <img
                src="/images/faviconlogoBlanco.png"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 opacity-60"
              />
            </motion.div>

            <div>
              <span className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-sans block mb-3">
                Nuestro_Proceso // 02
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-white leading-tight">
                Cómo trabajamos
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {pasos.map((paso, i) => (
            <ScrollReveal key={paso.num} delay={i * 0.1}>
              <div className="bg-[#0A0A0A] p-6 md:p-8 hover:bg-white/[0.02] transition-all duration-300 border border-white/5 hover:border-white/15">
                <span className="text-white/30 text-[11px] font-sans tracking-widest block mb-6 font-medium">
                  {paso.num}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-serif font-light mb-4 group-hover:text-white/90 transition-colors">
                  {paso.titulo}
                </h3>
                <div className="w-8 h-px bg-gradient-to-r from-white/30 to-white/0 mb-4" />
                <p className="text-white/50 text-sm font-sans leading-relaxed group-hover:text-white/60 transition-colors">
                  {paso.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
