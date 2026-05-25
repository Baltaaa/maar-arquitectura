import { HelmetProvider } from 'react-helmet-async'
import { Hero } from './components/sections/Hero'
import { Manifiesto } from './components/sections/Manifiesto'
import { Proyectos } from './components/sections/Proyectos'
import { Proceso } from './components/sections/Proceso'
import { Sobre } from './components/sections/Sobre'
import { Servicios } from './components/sections/Servicios'
import { Contacto } from './components/sections/Contacto'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { siteContent } from './data/content'
import './index.css'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background text-on-surface">
        {/* Meta Tags */}
        <head>
          <title>{siteContent.meta.title}</title>
          <meta name="description" content={siteContent.meta.description} />
          <meta name="theme-color" content={siteContent.meta.themeColor} />
          <meta property="og:title" content={siteContent.meta.title} />
          <meta property="og:description" content={siteContent.meta.description} />
          <meta property="og:type" content="website" />
        </head>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <Manifiesto />
          <Proyectos />
          <Proceso />
          <Sobre />
          <Servicios />
          <Contacto />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App
