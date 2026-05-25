import { useState } from 'react'
import { motion } from 'framer-motion'

export const ProjectCard = ({ proyecto }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group terminal-border bg-surface-container-low overflow-hidden transition-all shadow-[0_12px_60px_rgba(0,0,0,0.5)]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ borderColor: '#2C2C2C' }}
    >
      {/* Header with metadata */}
      <div className="p-2 border-b border-outline-variant flex justify-between items-center bg-surface-container">
        <span className="text-mono-ui text-[10px] uppercase opacity-60">
          {proyecto.ref}
        </span>
        <span className="text-mono-ui text-[10px] opacity-60">
          {proyecto.year}
        </span>
      </div>

      {/* Image Container */}
      <div className="aspect-[5/5] overflow-hidden relative bg-surface">
        <motion.img
          alt={proyecto.nombre}
          className="w-full h-full object-cover"
          src={proyecto.imagen}
          loading="lazy"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Description Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col justify-end p-5"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          pointerEvents={isHovered ? 'auto' : 'none'}
        >
          <p className="text-sm md:text-body-sm text-white leading-relaxed font-light">
            {proyecto.descripcion}
          </p>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-body-lg font-serif font-bold mb-1 text-on-surface">
          {proyecto.nombre}
        </h3>
        <p className="text-mono-ui text-on-surface-variant text-[13px]">
          {proyecto.location}
        </p>
      </div>
    </motion.div>
  )
}
