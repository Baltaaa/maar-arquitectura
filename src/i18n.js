import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      nav: {
        proyectos: 'Proyectos',
        sobre: 'Sobre mí',
        servicios: 'Servicios',
        contacto: 'Contacto',
      },
      hero: {
        label: 'Arquitecta · Mar del Plata',
        scrollLabel: 'Ver proyectos',
      },
      manifesto: {
        texto: 'Cada obra es una conversación entre la forma y el lugar. Proyectamos viviendas que pertenecen al paisaje que las rodea.',
      },
      projects: {
        title: 'Proyectos Destacados',
        label: 'Selected_Works // 01',
      },
      about: {
        label: 'Estudio_Profile // MAAR.ARQS',
        title: 'M A A R Arquitectura',
        bio: 'Somos un estudio de arquitectura con base en Mar del Plata. Trabajamos en proyectos residenciales y comerciales desde el diseño hasta la dirección de obra. Nos interesa la arquitectura precisa: la que resuelve bien, se construye bien y dura.',
        credentials: 'Proyectos residenciales y comerciales · Dirección de obra · Mar del Plata y Costa Atlántica.',
      },
      services: {
        design: {
          label: '&gt; PROYECTO',
          title: 'Desarrollo Integral',
          description: 'Concepción creativa y técnica de viviendas unifamiliares y complejos residenciales desde la primera idea.',
        },
        construction: {
          label: '&gt; DIRECCION',
          title: 'Dirección de Obra',
          description: 'Supervisión exhaustiva para garantizar que la ejecución material respete la integridad del diseño original.',
        },
        interior: {
          label: '&gt; INTERIORISMO',
          title: 'Interiorismo Curado',
          description: 'Diseño de mobiliario y selección de texturas que completan la experiencia sensorial del espacio arquitectónico.',
        },
      },
      cta: {
        title: 'Tu proyecto empieza con una conversación',
        btnProject: 'Comenzar Proyecto',
        btnPortfolio: 'Ver Proyectos',
      },
      footer: {
        copyright: '© 2024 MAAR ARQUITECTURA // ARCHITECTURAL STUDIO',
        location: 'Mar del Plata · Buenos Aires',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
