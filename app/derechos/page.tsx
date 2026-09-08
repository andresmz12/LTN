import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShareButton from '@/components/ShareButton'
import { IconShield, IconArrowRight } from '@/components/icons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conoce tus Derechos — Qué hacer si la policía o ICE te paran',
  description: 'Tus derechos ante la policía o ICE, sin importar tu estatus migratorio: en la calle, en tu carro, si tocan tu puerta o si eres detenido.',
}

const SECCIONES = [
  {
    titulo: 'Si la policía o ICE te paran en la calle o en tu carro',
    puntos: [
      'Tienes derecho a permanecer en silencio. Puedes decir: "Quiero ejercer mi derecho a permanecer en silencio."',
      'Pregunta: "¿Estoy siendo detenido, o soy libre de irme?" Si te dicen que eres libre, aléjate con calma.',
      'No tienes que responder preguntas sobre tu estatus migratorio, dónde naciste o cómo entraste a EE.UU.',
      'No mientas ni muestres documentos falsos. Si tienes documentos de inmigración reales, no es obligatorio mostrarlos a la policía local (sí a un agente de inmigración que te lo pida directamente).',
      'Si estás manejando, debes mostrar licencia, registro y seguro si te lo piden en un alto de tránsito.',
    ],
  },
  {
    titulo: 'Si ICE toca la puerta de tu casa',
    puntos: [
      'No abras la puerta a menos que te muestren una orden firmada por un juez (judicial warrant), no una orden administrativa de ICE (Formulario I-200 o I-205, que NO te obliga a abrir la puerta).',
      'Puedes hablar a través de la puerta cerrada y pedir que desliyen la orden por debajo para verla.',
      'Tienes derecho a permanecer en silencio y a no firmar nada sin hablar primero con un abogado.',
      'Si entran sin tu permiso, no te resistas físicamente — di en voz alta "No doy mi consentimiento a esta búsqueda" para que quede claro.',
    ],
  },
  {
    titulo: 'Si te detienen o arrestan',
    puntos: [
      'Tienes derecho a hacer una llamada telefónica.',
      'Tienes derecho a un abogado. Si no puedes pagar uno en un caso criminal, el gobierno debe asignarte uno — en casos de inmigración esto no siempre aplica, pero igual puedes pedir contactar a un abogado de inmigración o a tu consulado.',
      'Tienes derecho a contactar al consulado de tu país. Puedes pedir explícitamente que se le informe a tu consulado dónde estás.',
      'No firmes ningún documento que no entiendas completamente, especialmente algo que diga "salida voluntaria" o que renuncie a tus derechos, sin hablar antes con un abogado.',
      'Memoriza o lleva contigo los teléfonos de tu abogado, un familiar de confianza y el consulado de tu país.',
    ],
  },
]

export default function DerechosPage() {
  return (
    <>
      <Navbar />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-display font-semibold text-gray-900 flex items-center gap-3">
            <IconShield className="w-8 h-8 text-brand-500" /> Conoce tus Derechos
          </h1>
          <p className="text-gray-500 mt-1">
            Estos derechos te protegen sin importar tu estatus migratorio. Guárdalos, compártelos con tu familia.
          </p>
        </div>
      </div>

      <main id="main-content" className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-900">
          Esta página es información general, no asesoría legal. Cada caso es distinto — para tu situación
          específica, habla con un abogado de inmigración acreditado.
        </div>

        <div className="mb-8">
          <ShareButton text="Conoce tus derechos — información importante de Compa:" path="/derechos" />
        </div>

        <div className="space-y-10">
          {SECCIONES.map((s) => (
            <section key={s.titulo} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{s.titulo}</h2>
              <ul className="space-y-3">
                {s.puntos.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="text-brand-500 shrink-0 mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Tarjeta de derechos para llevar / compartir */}
        <div className="mt-10 bg-brand-900 text-white rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-3">Tarjeta rápida — di esto si te detienen</h2>
          <div className="bg-white/10 rounded-xl p-4 space-y-2 text-sm font-medium">
            <p>"No deseo hablar, firmar ni responder preguntas sin mi abogado presente."</p>
            <p>"No doy mi consentimiento para que registren mis pertenencias o mi casa."</p>
            <p>"Quiero contactar al consulado de mi país."</p>
          </div>
          <p className="text-brand-200 text-xs mt-3">
            Tómale una captura de pantalla a esta tarjeta o compártela con tu familia por WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <Link
            href="/general/tramites/plan-emergencia-familiar"
            className="flex items-center justify-between bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-brand-100 transition"
          >
            <div>
              <p className="font-semibold text-gray-900 text-sm">Plan de emergencia familiar</p>
              <p className="text-xs text-gray-500">Prepárate antes de que pase algo</p>
            </div>
            <IconArrowRight className="w-4 h-4 text-brand-500 shrink-0" />
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-brand-100 transition"
          >
            <div>
              <p className="font-semibold text-gray-900 text-sm">Más recursos generales</p>
              <p className="text-xs text-gray-500">ITIN, cuentas bancarias, licencias y más</p>
            </div>
            <IconArrowRight className="w-4 h-4 text-brand-500 shrink-0" />
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">Organizaciones de ayuda legal</h2>
          <div className="space-y-2 text-sm">
            <a href="https://www.ilrc.org/" target="_blank" rel="noopener noreferrer" className="block text-brand-700 hover:underline">
              Immigrant Legal Resource Center (ILRC) →
            </a>
            <a href="https://www.nilc.org/" target="_blank" rel="noopener noreferrer" className="block text-brand-700 hover:underline">
              National Immigration Law Center (NILC) →
            </a>
            <a href="https://www.aclu.org/know-your-rights" target="_blank" rel="noopener noreferrer" className="block text-brand-700 hover:underline">
              ACLU — Conoce tus derechos →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
