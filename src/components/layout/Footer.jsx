import { siteContent } from '../../data/content'


export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8 bg-surface-container-lowest border-t border-outline-variant">
      <div className="text-label-caps font-label-caps text-primary-fixed text-center md:text-left text-[11px]">
        {siteContent.contacto.frase ? (
          <>
            {siteContent.contacto.frase.split(' ').slice(0, 3).join(' ')}
          </>
        ) : (
          siteContent.contacto.ctaLabel
        )}
      </div>

      <div className="flex gap-8 items-center text-center md:text-left">
        <a
          href={`https://instagram.com/${siteContent.contacto.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-on-surface-variant transition-colors text-mono-ui font-mono-ui text-[13px] flex align-middle justify-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
            fill={"#6b6b6b"} viewBox={"0 0 24 24"}>
            {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008M16.806 6.129a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156" /><path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 2.99 2.99 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 2.99 2.99 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z" />
          </svg> Instagram
        </a>
        <a
          href={`https://wa.me/${siteContent.contacto.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-on-surface-variant transition-colors text-mono-ui font-mono-ui text-[13px] flex align-middle justify-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
            fill={"#6b6b6b"} viewBox={"0 0 24 24"}>
            {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
            <path fill-rule="evenodd" d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.41 7.41 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263" clip-rule="evenodd" />
          </svg> WhatsApp
        </a>
        <a
          href={`mailto:${siteContent.contacto.email}`}
          className="text-on-surface-variant hover:text-on-surface-variant transition-colors text-mono-ui font-mono-ui text-[13px] flex align-middle justify-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
            fill={"#6b6b6b"} viewBox={"0 0 24 24"}>
            {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
            <path d="m21.55,8.17l-2.55-1.7v-1.46c0-.55-.45-1-1-1h-2.7l-2.75-1.83c-.34-.22-.77-.22-1.11,0l-2.75,1.83h-2.7c-.55,0-1,.45-1,1v1.46l-2.55,1.7c-.28.19-.45.5-.45.83v11c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-11c0-.33-.17-.65-.45-.83Zm-14.55-2.17h10v4.46l-5,3.33-5-3.33v-4.46Zm-3,14v-9.13l1.45.96,6,4c.17.11.36.17.55.17s.39-.06.55-.17l6-4,1.45-.96v9.13H4Z" />
          </svg> Email
        </a>
      </div>

      <div className="flex items-center gap-2 opacity-60 text-mono-ui text-[11px] uppercase tracking-tighter">
        📍 Mar del Plata, Argentina
      </div>
    </footer>
  )
}
