import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Admin user
  const hash = await bcrypt.hash('changeme123', 12)
  await prisma.user.upsert({
    where: { email: 'admin@compa.app' },
    update: {},
    create: { email: 'admin@compa.app', passwordHash: hash, nombre: 'Admin', apellido: 'Compa', role: 'admin' },
  })

  // Consulados
  const consulados = [
    { pais: 'MX', ciudad: 'Los Angeles', nombre: 'Consulado General de México en Los Ángeles', direccion: '2401 W 6th St, Los Angeles, CA 90057', telefono: '(213) 351-6800', email: 'cglosangeles@sre.gob.mx', horarioLunes: '8:00am – 3:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Matrícula Consular', 'Actas de nacimiento', 'Poderes notariales'] },
    { pais: 'MX', ciudad: 'Houston', nombre: 'Consulado General de México en Houston', direccion: '4506 Caroline St, Houston, TX 77004', telefono: '(713) 271-6800', email: 'cghouston@sre.gob.mx', horarioLunes: '8:00am – 2:30pm', horarioSabado: 'Cita especial', servicios: ['Pasaporte', 'Visa', 'Actas'] },
    { pais: 'MX', ciudad: 'Chicago', nombre: 'Consulado General de México en Chicago', direccion: '204 S Ashland Ave, Chicago, IL 60607', telefono: '(312) 738-2383', email: 'cgchicago@sre.gob.mx', horarioLunes: '8:00am – 3:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Matrícula Consular'] },
    { pais: 'MX', ciudad: 'Nueva York', nombre: 'Consulado General de México en Nueva York', direccion: '27 E 39th St, New York, NY 10016', telefono: '(212) 217-6400', email: 'cgnuevayork@sre.gob.mx', horarioLunes: '9:00am – 2:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Matrícula Consular', 'Notarial'] },

    { pais: 'CO', ciudad: 'Miami', nombre: 'Consulado de Colombia en Miami', direccion: '280 Aragon Ave, Coral Gables, FL 33134', telefono: '(305) 441-1369', email: 'cmiami@cancilleria.gov.co', horarioLunes: '8:30am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Cédula', 'Registro civil'] },
    { pais: 'CO', ciudad: 'Nueva York', nombre: 'Consulado de Colombia en Nueva York', direccion: '10 E 46th St, New York, NY 10017', telefono: '(212) 949-9898', email: 'cnewyork@cancilleria.gov.co', horarioLunes: '9:00am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Poderes notariales'] },
    { pais: 'CO', ciudad: 'Los Angeles', nombre: 'Consulado de Colombia en Los Ángeles', direccion: '8383 Wilshire Blvd #420, Beverly Hills, CA 90211', telefono: '(323) 653-4299', email: 'closangeles@cancilleria.gov.co', horarioLunes: '9:00am – 3:30pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Cédula'] },
    { pais: 'CO', ciudad: 'Houston', nombre: 'Consulado de Colombia en Houston', direccion: '5851 San Felipe St #300, Houston, TX 77057', telefono: '(713) 527-8919', email: 'chouston@cancilleria.gov.co', horarioLunes: '8:30am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Documentos'] },

    { pais: 'VE', ciudad: 'Houston', nombre: 'Consulado de Venezuela en Houston', direccion: '2925 Briarpark Dr #900, Houston, TX 77042', telefono: '(713) 974-0028', email: 'chouston@mppre.gob.ve', horarioLunes: '8:00am – 12:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Documentos consulares'] },
    { pais: 'VE', ciudad: 'Miami', nombre: 'Consulado de Venezuela en Miami', direccion: '7373 N Kendall Dr, Miami, FL 33156', telefono: '(305) 271-1212', email: 'cmiami@mppre.gob.ve', horarioLunes: '8:00am – 12:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Apostilla'] },
    { pais: 'VE', ciudad: 'Nueva York', nombre: 'Consulado de Venezuela en Nueva York', direccion: '7 E 51st St, New York, NY 10022', telefono: '(212) 826-1660', email: 'cnewyork@mppre.gob.ve', horarioLunes: '9:00am – 12:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte'] },
    { pais: 'VE', ciudad: 'Chicago', nombre: 'Consulado de Venezuela en Chicago', direccion: '20 N Michigan Ave, Chicago, IL 60602', telefono: '(312) 236-9655', email: 'cchicago@mppre.gob.ve', horarioLunes: '9:00am – 12:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Documentos'] },

    { pais: 'SV', ciudad: 'Los Angeles', nombre: 'Consulado de El Salvador en Los Ángeles', direccion: '3550 Wilshire Blvd #1030, Los Angeles, CA 90010', telefono: '(213) 383-5776', email: 'cgelosangeles@rree.gob.sv', horarioLunes: '8:00am – 4:00pm', horarioSabado: '8:00am – 12:00pm', servicios: ['Pasaporte', 'Carnet de residente', 'Actas', 'DUI'] },
    { pais: 'SV', ciudad: 'Houston', nombre: 'Consulado de El Salvador en Houston', direccion: '6420 Hillcroft St #100, Houston, TX 77081', telefono: '(713) 270-6239', email: 'cghouston@rree.gob.sv', horarioLunes: '8:00am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'DUI'] },
    { pais: 'SV', ciudad: 'Washington DC', nombre: 'Embajada de El Salvador en Washington DC', direccion: '1400 16th St NW #100, Washington, DC 20036', telefono: '(202) 265-9671', email: 'embajada@rree.gob.sv', horarioLunes: '9:00am – 5:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Visa', 'Documentos'] },
    { pais: 'SV', ciudad: 'Nueva York', nombre: 'Consulado de El Salvador en Nueva York', direccion: '46 Park Ave, New York, NY 10016', telefono: '(212) 889-3608', email: 'cgnewyork@rree.gob.sv', horarioLunes: '9:00am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'DUI', 'Actas'] },
  ]

  for (const c of consulados) {
    await prisma.consulado.create({ data: c as any })
  }
  console.log(`✅ ${consulados.length} consulados creados`)

  // Trámites
  const tramites = [
    {
      pais: 'MX', titulo: 'Renovación de Pasaporte Mexicano', slug: 'pasaporte-mx',
      descripcion: 'Guía completa para renovar tu pasaporte mexicano en EE.UU.',
      contenidoHtml: '<p>El pasaporte mexicano se puede renovar en cualquier consulado de México en EE.UU. sin necesidad de regresar a México.</p>',
      pasos: ['Agenda tu cita en el consulado más cercano', 'Reúne los documentos necesarios', 'Asiste a tu cita con todos los documentos', 'Paga las tarifas correspondientes', 'Espera entre 3-4 semanas para recibir tu pasaporte'],
      documentosNecesarios: ['Pasaporte anterior (original y copia)', 'Acta de nacimiento (original y copia)', 'Identificación con foto', 'Comprobante de pago de derechos'],
      tiempoPromedio: '3-4 semanas', costo: '$110-$140 USD',
      linksExternos: [{ texto: 'Portal de citas consulares', url: 'https://mexitel.sre.gob.mx' }],
    },
    {
      pais: 'MX', titulo: 'Matrícula Consular', slug: 'matricula-consular-mx',
      descripcion: 'Obtén tu Matrícula Consular, identificación oficial para mexicanos en EE.UU.',
      contenidoHtml: '<p>La Matrícula Consular es una identificación emitida por el gobierno de México a sus ciudadanos que residen en el extranjero.</p>',
      pasos: ['Agenda cita en el consulado', 'Presenta identificación mexicana', 'Presenta comprobante de domicilio en EE.UU.', 'Proporciona fotografías tamaño pasaporte', 'Paga la tarifa ($27 USD)'],
      documentosNecesarios: ['Acta de nacimiento o pasaporte mexicano', 'Comprobante de domicilio en EE.UU.', '2 fotografías recientes', 'Pago de $27 USD'],
      tiempoPromedio: 'Mismo día', costo: '$27 USD',
      linksExternos: [],
    },
    {
      pais: 'MX', titulo: 'Carta de No Antecedentes Penales', slug: 'no-antecedentes-mx',
      descripcion: 'Solicita tu carta de no antecedentes penales para trámites migratorios.',
      contenidoHtml: '<p>Este documento es frecuentemente requerido en trámites de visa y residencia en EE.UU.</p>',
      pasos: ['Agenda cita consular', 'Presenta identificación oficial', 'Llena el formulario de solicitud', 'Paga derechos correspondientes', 'Recibe el documento en 15 días hábiles'],
      documentosNecesarios: ['Pasaporte o INE vigente', 'Huellas dactilares', 'Pago de derechos'],
      tiempoPromedio: '15 días hábiles', costo: '$45 USD',
      linksExternos: [],
    },

    {
      pais: 'CO', titulo: 'Renovación de Pasaporte Colombiano', slug: 'pasaporte-co',
      descripcion: 'Cómo renovar tu pasaporte colombiano desde EE.UU.',
      contenidoHtml: '<p>Los colombianos en EE.UU. pueden renovar su pasaporte en los consulados de Colombia.</p>',
      pasos: ['Agenda cita online', 'Descarga y completa el formulario', 'Paga las tarifas online', 'Asiste a la cita con documentos', 'Recibe el pasaporte por correo o en consulado'],
      documentosNecesarios: ['Pasaporte anterior', 'Cédula de ciudadanía', 'Foto fondo blanco', 'Comprobante de pago'],
      tiempoPromedio: '2-3 semanas', costo: '$153 USD',
      linksExternos: [{ texto: 'Cancillería Colombia', url: 'https://www.cancilleria.gov.co' }],
    },
    {
      pais: 'CO', titulo: 'Registro Civil de Matrimonio', slug: 'registro-matrimonio-co',
      descripcion: 'Registra tu matrimonio celebrado en EE.UU. ante el Consulado de Colombia.',
      contenidoHtml: '<p>Si te casaste en EE.UU. y eres colombiano, debes registrar tu matrimonio en el consulado.</p>',
      pasos: ['Apostillar el certificado de matrimonio', 'Obtener traducción oficial al español', 'Agendar cita consular', 'Presentar documentos', 'Esperar registro en Colombia'],
      documentosNecesarios: ['Certificado de matrimonio apostillado', 'Traducción oficial', 'Cédulas de ambos cónyuges', 'Registro civil de nacimiento'],
      tiempoPromedio: '30 días', costo: '$35 USD',
      linksExternos: [],
    },
    {
      pais: 'CO', titulo: 'Cédula de Ciudadanía', slug: 'cedula-co',
      descripcion: 'Tramita o renueva tu cédula de ciudadanía colombiana en EE.UU.',
      contenidoHtml: '<p>La cédula de ciudadanía puede tramitarse en los consulados de Colombia en EE.UU.</p>',
      pasos: ['Agenda cita online', 'Reúne documentos', 'Asiste a la cita', 'Toma de huellas y foto', 'Recibe la cédula en 4-6 semanas'],
      documentosNecesarios: ['Registro civil de nacimiento', 'Foto reciente', 'Comprobante de pago'],
      tiempoPromedio: '4-6 semanas', costo: '$20 USD',
      linksExternos: [],
    },

    {
      pais: 'VE', titulo: 'Pasaporte Venezolano', slug: 'pasaporte-ve',
      descripcion: 'Información para solicitar o renovar el pasaporte venezolano en EE.UU.',
      contenidoHtml: '<p>Los trámites de pasaporte venezolano son limitados en EE.UU. Verifica disponibilidad en tu consulado.</p>',
      pasos: ['Consulta disponibilidad en el consulado', 'Agenda cita si está disponible', 'Presenta documentos de identidad', 'Paga los aranceles', 'Espera notificación'],
      documentosNecesarios: ['Cédula de identidad venezolana', 'Partida de nacimiento', 'Pasaporte anterior (si aplica)', 'Pago de aranceles'],
      tiempoPromedio: 'Variable (3-6 meses)', costo: 'Variable',
      linksExternos: [],
    },
    {
      pais: 'VE', titulo: 'Apostilla de Documentos', slug: 'apostilla-ve',
      descripcion: 'Cómo apostillar documentos venezolanos para su uso en EE.UU.',
      contenidoHtml: '<p>La apostilla certifica la autenticidad de documentos para su uso internacional.</p>',
      pasos: ['Contacta el consulado venezolano', 'Presenta el documento original', 'Completa el formulario de solicitud', 'Paga los aranceles', 'Recoge el documento apostillado'],
      documentosNecesarios: ['Documento original a apostillar', 'Copia del documento', 'Identificación personal', 'Pago correspondiente'],
      tiempoPromedio: '15-30 días', costo: 'Variable',
      linksExternos: [],
    },
    {
      pais: 'VE', titulo: 'Registro de Nacimiento en el Exterior', slug: 'nacimiento-ve',
      descripcion: 'Registra a tu hijo nacido en EE.UU. ante el Consulado de Venezuela.',
      contenidoHtml: '<p>Los hijos de venezolanos nacidos en EE.UU. tienen derecho a la ciudadanía venezolana y deben registrarse consulalmente.</p>',
      pasos: ['Obtener certificado de nacimiento americano', 'Apostillar el documento', 'Traducirlo al español', 'Agendar cita consular', 'Presentar documentos de los padres'],
      documentosNecesarios: ['Certificado de nacimiento apostillado y traducido', 'Cédulas de los padres', 'Pasaportes de los padres', 'Partidas de nacimiento de los padres'],
      tiempoPromedio: '30-45 días', costo: 'Gratuito',
      linksExternos: [],
    },

    {
      pais: 'SV', titulo: 'Pasaporte Salvadoreño', slug: 'pasaporte-sv',
      descripcion: 'Tramita o renueva tu pasaporte salvadoreño desde EE.UU.',
      contenidoHtml: '<p>El pasaporte salvadoreño puede tramitarse en los consulados de El Salvador en EE.UU.</p>',
      pasos: ['Agenda cita en consularnet.rree.gob.sv', 'Reúne documentos necesarios', 'Asiste a la cita puntualmente', 'Realiza el pago correspondiente', 'Recibe tu pasaporte en 4-6 semanas'],
      documentosNecesarios: ['DUI vigente o vencido', 'Partida de nacimiento', 'Pasaporte anterior (si aplica)', 'Comprobante de pago ($30)'],
      tiempoPromedio: '4-6 semanas', costo: '$30 USD',
      linksExternos: [{ texto: 'Agenda tu cita', url: 'https://consularnet.rree.gob.sv' }],
    },
    {
      pais: 'SV', titulo: 'Carnet de Residente en el Exterior (DUI)', slug: 'dui-sv',
      descripcion: 'Obtén o renueva tu DUI (Documento Único de Identidad) desde EE.UU.',
      contenidoHtml: '<p>El DUI es el documento oficial de identidad de El Salvador. Los salvadoreños en EE.UU. pueden tramitarlo consulalmente.</p>',
      pasos: ['Agenda cita en el consulado', 'Lleva tu partida de nacimiento', 'Presenta huellas dactilares', 'Paga los $7 USD', 'Recibe el DUI en 3-4 semanas'],
      documentosNecesarios: ['Partida de nacimiento original', 'DUI anterior (si aplica)', 'Comprobante de pago $7'],
      tiempoPromedio: '3-4 semanas', costo: '$7 USD',
      linksExternos: [],
    },
    {
      pais: 'SV', titulo: 'Acta de Nacimiento Salvadoreña', slug: 'acta-nacimiento-sv',
      descripcion: 'Solicita tu acta de nacimiento salvadoreña desde EE.UU.',
      contenidoHtml: '<p>Puedes solicitar tu acta de nacimiento en el consulado, quienes la tramitarán ante el RNPN en El Salvador.</p>',
      pasos: ['Agenda cita consular', 'Presenta identificación', 'Llena el formulario de solicitud', 'Paga el costo', 'Espera envío por correo'],
      documentosNecesarios: ['DUI o pasaporte salvadoreño', 'Formulario de solicitud', 'Datos del acta (nombre completo, fecha y lugar de nacimiento)', 'Pago de derechos'],
      tiempoPromedio: '30-60 días', costo: '$15 USD',
      linksExternos: [],
    },
  ]

  for (const t of tramites) {
    await prisma.tramite.create({ data: t as any })
  }
  console.log(`✅ ${tramites.length} trámites creados`)

  // Noticias
  const noticias = [
    { titulo: 'Nueva política de USCIS para renovación de EAD', slug: 'uscis-ead-renovacion-2024', resumen: 'USCIS anuncia extensión automática de 540 días para renovaciones de Permiso de Trabajo.', contenidoHtml: '<p>El Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) ha ampliado la extensión automática para renovaciones de Permiso de Trabajo (EAD) de 180 a 540 días para ciertos solicitantes elegibles.</p><p>Esta medida beneficia a miles de inmigrantes que dependen del EAD para trabajar legalmente en EE.UU.</p>', categoria: 'Inmigración', paises: ['MX', 'CO', 'VE', 'SV'], publicado: true, fuente: 'USCIS' },
    { titulo: 'Consulados mexicanos amplían horarios de atención', slug: 'consulados-mx-horarios-2024', resumen: 'Los consulados de México en EE.UU. extienden su horario de atención para reducir tiempos de espera.', contenidoHtml: '<p>La Secretaría de Relaciones Exteriores de México anunció que todos sus consulados en EE.UU. ampliarán sus horarios de atención en respuesta a la alta demanda.</p>', categoria: 'Comunidad', paises: ['MX'], publicado: true, fuente: 'SRE México' },
    { titulo: 'Programa de acción diferida DACA celebra aniversario', slug: 'daca-aniversario-2024', resumen: 'El programa DACA continúa protegiendo a más de 500,000 jóvenes inmigrantes mientras continúan batallas legales.', contenidoHtml: '<p>El programa de Acción Diferida para los Llegados en la Infancia (DACA) sigue siendo vital para cientos de miles de jóvenes inmigrantes conocidos como Dreamers.</p>', categoria: 'Inmigración', paises: ['MX', 'CO', 'VE', 'SV'], publicado: true, fuente: 'Politico' },
    { titulo: 'Clínicas de salud gratuitas para inmigrantes en California', slug: 'salud-inmigrantes-california-2024', resumen: 'California amplía acceso a servicios de salud para inmigrantes sin importar estatus migratorio.', contenidoHtml: '<p>El estado de California ha expandido el programa Medi-Cal para cubrir a todos los adultos sin importar su estatus migratorio, convirtiéndose en el primer estado en hacerlo.</p>', categoria: 'Salud', paises: ['MX', 'CO', 'VE', 'SV'], publicado: true, fuente: 'California Health' },
    { titulo: 'Nuevos requisitos para visa de turista B1/B2', slug: 'visa-turista-b1-b2-2024', resumen: 'El Departamento de Estado actualiza los requisitos y procedimientos para visa de turista.', contenidoHtml: '<p>El Departamento de Estado de EE.UU. ha actualizado los procedimientos para solicitar la visa de turista B1/B2, incluyendo nuevas preguntas en el formulario DS-160.</p>', categoria: 'Inmigración', paises: ['MX', 'CO', 'VE', 'SV'], publicado: true, fuente: 'State Dept' },

    { titulo: 'Colombia lanza app para trámites consulares', slug: 'colombia-app-consular-2024', resumen: 'La Cancillería de Colombia lanza aplicación móvil para facilitar trámites desde el exterior.', contenidoHtml: '<p>La Cancillería colombiana ha lanzado una nueva aplicación móvil que permite a los colombianos en el exterior gestionar sus trámites consulares de forma más eficiente.</p>', categoria: 'Comunidad', paises: ['CO'], publicado: true, fuente: 'Cancillería Colombia' },
    { titulo: 'Festival cultural colombiano en Miami', slug: 'festival-colombiano-miami-2024', resumen: 'Gran festival celebra la cultura y tradiciones colombianas en la Florida.', contenidoHtml: '<p>Miami se prepara para celebrar el festival cultural colombiano más grande del sur de Florida, con música, gastronomía y arte de todas las regiones de Colombia.</p>', categoria: 'Comunidad', paises: ['CO'], publicado: true, fuente: 'MiamiHerald' },

    { titulo: 'Venezuela: nuevas medidas para pasaportes en el exterior', slug: 've-pasaportes-exterior-2024', resumen: 'El gobierno venezolano anuncia nuevas disposiciones para la emisión de pasaportes fuera del país.', contenidoHtml: '<p>El Ministerio de Relaciones Exteriores de Venezuela anunció nuevas medidas para facilitar la emisión de pasaportes a venezolanos en el exterior.</p>', categoria: 'Inmigración', paises: ['VE'], publicado: true, fuente: 'MPPRE' },
    { titulo: 'Organizaciones apoyan a venezolanos con TPS en EE.UU.', slug: 've-tps-organizaciones-2024', resumen: 'Organizaciones de la sociedad civil brindan apoyo a venezolanos bajo el Estatus de Protección Temporal.', contenidoHtml: '<p>Diversas organizaciones sin fines de lucro están ofreciendo asistencia legal y orientación a los venezolanos que califican para el Estatus de Protección Temporal (TPS) en EE.UU.</p>', categoria: 'Legal', paises: ['VE'], publicado: true, fuente: 'UNHCR' },

    { titulo: 'El Salvador digitaliza más trámites consulares', slug: 'sv-tramites-digitales-2024', resumen: 'La Cancillería de El Salvador avanza en la digitalización de servicios consulares para salvadoreños en EE.UU.', contenidoHtml: '<p>El Ministerio de Relaciones Exteriores de El Salvador ha implementado nuevas plataformas digitales para facilitar los trámites a los compatriotas en el exterior.</p>', categoria: 'Comunidad', paises: ['SV'], publicado: true, fuente: 'RREE El Salvador' },
    { titulo: 'Remesas familiares rompen récord en 2024', slug: 'remesas-record-2024', resumen: 'Las remesas enviadas desde EE.UU. hacia Latinoamérica alcanzan cifras históricas en 2024.', contenidoHtml: '<p>El Banco Interamericano de Desarrollo reportó que las remesas enviadas desde EE.UU. hacia países de América Latina y el Caribe alcanzaron niveles récord en 2024.</p>', categoria: 'Economía', paises: ['MX', 'CO', 'VE', 'SV'], publicado: true, fuente: 'BID' },
  ]

  for (const n of noticias) {
    await prisma.noticia.create({ data: n as any })
  }
  console.log(`✅ ${noticias.length} noticias creadas`)

  // Clientes
  const clientes = await Promise.all([
    prisma.cliente.create({ data: { nombreEmpresa: 'García & Associates Law', tipo: 'abogado', emailContacto: 'info@garcialaw.com', telefono: '(213) 555-0100', sitioWeb: 'https://garcialaw.example.com', descripcion: 'Firma de abogados especializada en inmigración', paisServicio: ['MX', 'CO', 'VE', 'SV'] } }),
    prisma.cliente.create({ data: { nombreEmpresa: 'Notaría Hispana LA', tipo: 'notaria', emailContacto: 'info@notariahispana.com', telefono: '(323) 555-0200', descripcion: 'Servicios notariales en español', paisServicio: ['MX', 'SV'] } }),
    prisma.cliente.create({ data: { nombreEmpresa: 'Remesas Rápidas', tipo: 'remesas', emailContacto: 'soporte@remesasrapidas.com', telefono: '(800) 555-0300', sitioWeb: 'https://remesasrapidas.example.com', descripcion: 'Envío de dinero a Latinoamérica', paisServicio: ['MX', 'CO', 'VE', 'SV'] } }),
  ])
  console.log(`✅ ${clientes.length} clientes creados`)

  // Anuncios
  await prisma.anuncio.createMany({
    data: [
      { tipo: 'card', titulo: '¿Necesitas un abogado de inmigración?', descripcion: 'García & Associates Law ofrece consultas gratis. Más de 15 años de experiencia.', enlaceDestino: 'https://garcialaw.example.com', clienteId: clientes[0].id, paisesTarget: ['MX', 'CO', 'VE', 'SV'], activo: true, presupuesto: 500 },
      { tipo: 'banner', titulo: 'Notaría Hispana – Servicios en Español', descripcion: 'Apostillas, poderes notariales y más. Atendemos en tu idioma.', enlaceDestino: 'https://notariahispana.example.com', clienteId: clientes[1].id, paisesTarget: ['MX', 'SV'], activo: true, presupuesto: 300 },
      { tipo: 'card', titulo: 'Envía dinero a tu familia hoy', descripcion: 'Remesas Rápidas: las mejores tasas para envíos a México, Colombia y más.', enlaceDestino: 'https://remesasrapidas.example.com', clienteId: clientes[2].id, paisesTarget: ['MX', 'CO', 'VE', 'SV'], activo: true, presupuesto: 1000 },
    ],
  })
  console.log('✅ 3 anuncios creados')

  console.log('\n🎉 Seed completado!')
  console.log('👤 Admin: admin@compa.app / changeme123')
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
