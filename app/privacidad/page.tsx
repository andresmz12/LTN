import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Privacidad y tus datos</h1>
        <p className="text-gray-500 mb-8">Última actualización: agosto 2026</p>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">Lo más importante primero</h2>
            <p>
              Compa no comparte tu información con agencias de gobierno, ICE, ni con nadie fuera de Compa.
              No necesitas crear una cuenta ni dar tu ubicación para usar la app — la mayoría del contenido
              (trámites, noticias, consulados, trabajos) es público y anónimo.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">Ubicación ("Usar mi ubicación")</h2>
            <p>
              Si tocas el botón "Usar mi ubicación", tu navegador te pide permiso directamente — Compa nunca
              accede a tu ubicación sin que tú lo autorices explícitamente. Esa ubicación se convierte solo en
              un estado de EE.UU. (por ejemplo "Texas") y se guarda como una cookie en tu propio dispositivo,
              no en una base de datos ligada a tu identidad. La usamos únicamente para mostrarte el consulado
              y los anuncios más cercanos a ti. Puedes borrarla en cualquier momento con el botón "Cambiar"
              junto a tu ubicación, o borrando las cookies de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">Si creas una cuenta</h2>
            <p>
              Guardamos tu nombre, email, y opcionalmente tu país de origen y estado en EE.UU. — solo lo que
              tú decides escribir al registrarte. Esto se usa para personalizar tu experiencia (por ejemplo,
              guardar consulados favoritos) y no se vende ni se comparte con terceros.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">Anuncios</h2>
            <p>
              Los anuncios que ves están patrocinados por negocios que le pagan a Compa por aparecer.
              Contamos cuántas veces se muestra un anuncio y cuántos clics recibe, de forma anónima y
              agregada — no asociamos esos clics a tu identidad personal.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">Este sitio no es asesoría legal</h2>
            <p>
              El contenido de Compa (trámites, "Conoce tus Derechos", noticias) es información general para
              orientarte, no un sustituto de asesoría legal profesional. Para tu situación específica,
              siempre recomendamos hablar con un abogado de inmigración acreditado.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">¿Preguntas o quieres que borremos tus datos?</h2>
            <p>
              Escríbenos a{' '}
              <a href="mailto:contacto@compa.app" className="text-brand-700 hover:underline">
                contacto@compa.app
              </a>{' '}
              y respondemos tu solicitud.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
