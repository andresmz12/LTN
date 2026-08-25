import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { splitCiudadEstado } from './data/helpers'
import { consuladosCO, tramitesCO, noticiasCO } from './data/co'
import { consuladosVE, tramitesVE, noticiasVE } from './data/ve'
import { consuladosSV, tramitesSV, noticiasSV } from './data/sv'
import { consuladosGT, tramitesGT, noticiasGT } from './data/gt'
import { consuladosHN, tramitesHN, noticiasHN } from './data/hn'

const prisma = new PrismaClient()

// Datos verificados con fuentes oficiales (cancillerías / consulados). Reemplazan
// por completo lo que había para estos 5 países en consulados y trámites.
const CONSULADOS_VERIFICADOS = [consuladosCO, consuladosVE, consuladosSV, consuladosGT, consuladosHN]
  .flat()
  .map((c: any) => {
    const { ciudad, estadoUS } = splitCiudadEstado(c.ciudad)
    return { ...c, ciudad, estadoUS }
  })
const TRAMITES_VERIFICADOS = [tramitesCO, tramitesVE, tramitesSV, tramitesGT, tramitesHN].flat()
const NOTICIAS_VERIFICADAS = [noticiasCO, noticiasVE, noticiasSV, noticiasGT, noticiasHN]
  .flat()
  .map((n: any) => ({ ...n, publicado: true }))

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
    { pais: 'MX', ciudad: 'Los Angeles', estadoUS: 'CA', nombre: 'Consulado General de México en Los Ángeles', direccion: '2401 W 6th St, Los Angeles, CA 90057', telefono: '(213) 351-6800', email: 'cglosangeles@sre.gob.mx', horarioLunes: '8:00am – 3:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Matrícula Consular', 'Actas de nacimiento', 'Poderes notariales'] },
    { pais: 'MX', ciudad: 'Houston', estadoUS: 'TX', nombre: 'Consulado General de México en Houston', direccion: '4506 Caroline St, Houston, TX 77004', telefono: '(713) 271-6800', email: 'cghouston@sre.gob.mx', horarioLunes: '8:00am – 2:30pm', horarioSabado: 'Cita especial', servicios: ['Pasaporte', 'Visa', 'Actas'] },
    { pais: 'MX', ciudad: 'Chicago', estadoUS: 'IL', nombre: 'Consulado General de México en Chicago', direccion: '204 S Ashland Ave, Chicago, IL 60607', telefono: '(312) 738-2383', email: 'cgchicago@sre.gob.mx', horarioLunes: '8:00am – 3:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Matrícula Consular'] },
    { pais: 'MX', ciudad: 'Nueva York', estadoUS: 'NY', nombre: 'Consulado General de México en Nueva York', direccion: '27 E 39th St, New York, NY 10016', telefono: '(212) 217-6400', email: 'cgnuevayork@sre.gob.mx', horarioLunes: '9:00am – 2:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Matrícula Consular', 'Notarial'] },

    // CO, VE, SV, GT, HN: ver CONSULADOS_VERIFICADOS más abajo (datos oficiales verificados).

    { pais: 'NI', ciudad: 'Miami', estadoUS: 'FL', nombre: 'Consulado de Nicaragua en Miami', direccion: '8532 SW 8th St, Miami, FL 33144', telefono: '(305) 265-1415', email: 'cgmiami@cancilleria.gob.ni', horarioLunes: '9:00am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Cedula', 'Actas'] },
    { pais: 'NI', ciudad: 'Los Angeles', estadoUS: 'CA', nombre: 'Consulado de Nicaragua en Los Ángeles', direccion: '3550 Wilshire Blvd #1430, Los Angeles, CA 90010', telefono: '(213) 252-1170', email: 'cglosangeles@cancilleria.gob.ni', horarioLunes: '8:30am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Documentos'] },

    { pais: 'CU', ciudad: 'Washington DC', estadoUS: 'DC', nombre: 'Seccion de Intereses de Cuba en Washington', direccion: '2630 16th St NW, Washington, DC 20009', telefono: '(202) 797-8518', email: 'recepcion@cubadiplomatica.cu', horarioLunes: '9:00am – 1:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Documentos consulares', 'Poderes notariales'] },

    { pais: 'DO', ciudad: 'Nueva York', estadoUS: 'NY', nombre: 'Consulado General de Rep. Dominicana en Nueva York', direccion: '1501 Broadway #410, New York, NY 10036', telefono: '(212) 768-2480', email: 'cgnewyork@mirex.gob.do', horarioLunes: '9:00am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Cedula', 'Actas', 'Apostillas'] },
    { pais: 'DO', ciudad: 'Miami', estadoUS: 'FL', nombre: 'Consulado de Rep. Dominicana en Miami', direccion: '1038 Brickell Ave, Miami, FL 33131', telefono: '(305) 358-3221', email: 'cgmiami@mirex.gob.do', horarioLunes: '8:30am – 4:30pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Cedula', 'Documentos'] },

    { pais: 'EC', ciudad: 'Nueva York', estadoUS: 'NY', nombre: 'Consulado del Ecuador en Nueva York', direccion: '800 2nd Ave #600, New York, NY 10017', telefono: '(212) 808-0170', email: 'cgnewyork@cancilleria.gob.ec', horarioLunes: '9:00am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Cedula', 'Actas', 'Apostillas'] },
    { pais: 'EC', ciudad: 'Los Angeles', estadoUS: 'CA', nombre: 'Consulado del Ecuador en Los Ángeles', direccion: '3450 Wilshire Blvd #550, Los Angeles, CA 90010', telefono: '(213) 628-3014', email: 'cglosangeles@cancilleria.gob.ec', horarioLunes: '9:00am – 4:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'Cedula', 'Documentos'] },

    { pais: 'PE', ciudad: 'Nueva York', estadoUS: 'NY', nombre: 'Consulado del Peru en Nueva York', direccion: '241 E 49th St, New York, NY 10017', telefono: '(212) 481-7410', email: 'cgnewyork@consulado.pe', horarioLunes: '9:00am – 1:00pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'DNI', 'Actas', 'Apostillas'] },
    { pais: 'PE', ciudad: 'Los Angeles', estadoUS: 'CA', nombre: 'Consulado del Peru en Los Ángeles', direccion: '3450 Wilshire Blvd #1010, Los Angeles, CA 90010', telefono: '(213) 252-5765', email: 'cglosangeles@consulado.pe', horarioLunes: '8:30am – 4:30pm', horarioSabado: 'Cerrado', servicios: ['Pasaporte', 'DNI', 'Documentos'] },
    ...CONSULADOS_VERIFICADOS,
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

    // Tramites Generales (para todos los latinos)
    {
      pais: 'GENERAL', titulo: 'Como Solicitar el ITIN', slug: 'itin-como-solicitarlo',
      descripcion: 'El ITIN (Individual Taxpayer Identification Number) te permite pagar impuestos, abrir cuentas bancarias y acceder a servicios financieros sin necesidad de numero de Seguro Social.',
      contenidoHtml: `<h2>¿Qué es el ITIN?</h2><p>El ITIN es un número de identificación tributaria emitido por el IRS para personas que no califican para un Número de Seguro Social (SSN) pero tienen obligación fiscal en EE.UU.</p><h2>¿Quién lo necesita?</h2><ul><li>Inmigrantes sin estatus legal que trabajan o tienen ingresos en EE.UU.</li><li>Personas con visa que no son elegibles para SSN</li><li>Dependientes o cónyuges de ciudadanos o residentes</li></ul><h2>Pasos para solicitarlo</h2><ol><li>Completa el formulario W-7 del IRS</li><li>Reúne documentos de identidad originales o certificados</li><li>Adjunta tu declaración de impuestos (Form 1040)</li><li>Envía todo por correo certificado al IRS</li><li>Espera 7-11 semanas para recibirlo</li></ol><p><strong>Alternativa:</strong> Puedes ir a un Agente de Aceptación Certificado (CAA) que puede procesar tu ITIN sin necesidad de enviar documentos originales.</p>`,
      pasos: ['Completa el formulario W-7 del IRS', 'Reune documentos de identidad (pasaporte extranjero es suficiente)', 'Adjunta declaracion de impuestos o excepcion', 'Envia por correo al IRS o visita un CAA certificado', 'Espera 7-11 semanas para recibir tu ITIN por correo'],
      documentosNecesarios: ['Formulario W-7 completado', 'Pasaporte extranjero (original o copia certificada)', 'Declaracion de impuestos Form 1040 (o documentacion de excepcion)', 'Documentos adicionales si tienes dependientes'],
      tiempoPromedio: '7-11 semanas', costo: 'Gratis (si lo haces solo) / $50-150 USD con CAA',
      linksExternos: [{ texto: 'Formulario W-7 del IRS', url: 'https://www.irs.gov/es/individuals/individual-taxpayer-identification-number' }, { texto: 'Buscar un CAA certificado', url: 'https://www.irs.gov/individuals/acceptance-agent-program' }],
    },
    {
      pais: 'GENERAL', titulo: 'Declaracion de Impuestos sin SSN', slug: 'declaracion-impuestos',
      descripcion: 'Aprende como declarar tus impuestos en EE.UU. usando tu ITIN o SSN. Disponible para todos, sin importar tu estatus migratorio.',
      contenidoHtml: `<h2>¿Debo declarar impuestos si soy inmigrante?</h2><p>Si trabajas en EE.UU. o tienes ingresos aqui, tienes la obligacion legal de declarar impuestos, independientemente de tu estatus migratorio.</p><h2>¿Cómo declarar con ITIN?</h2><p>Puedes usar tu ITIN en lugar del SSN en todos los formularios fiscales. El proceso es el mismo que para ciudadanos.</p><h2>Opciones gratuitas para declarar</h2><ul><li><strong>VITA (Voluntary Income Tax Assistance):</strong> El IRS ofrece este servicio gratuito para personas con ingresos bajos. Hay centros en toda la ciudad.</li><li><strong>Free File del IRS:</strong> Si ganas menos de $73,000 al año, puedes declarar gratis en linea.</li><li><strong>MyFreeTaxes.com:</strong> Servicio gratuito para ingresos hasta $66,000.</li></ul><h2>Beneficios de declarar</h2><ul><li>Posible reembolso de impuestos</li><li>Credito tributario por hijos (ACTC)</li><li>Historial fiscal que puede ayudar en tramites migratorios futuros</li><li>Acceso a hipotecas y prestamos</li></ul>`,
      pasos: ['Reune todos tus W-2 o 1099 del año', 'Ten tu ITIN o SSN a la mano', 'Busca un centro VITA gratuito cerca de ti', 'Presenta tu declaracion antes del 15 de abril', 'Guarda una copia de tu declaracion'],
      documentosNecesarios: ['ITIN o SSN', 'Formularios W-2 de cada empleador', 'Formularios 1099 si trabajas independiente', 'Identificacion valida', 'Comprobante de cuenta bancaria para deposito directo'],
      tiempoPromedio: '1-3 dias (en persona con VITA)', costo: 'Gratis con VITA / $150-300 USD con contador privado',
      linksExternos: [{ texto: 'Buscar centro VITA gratuito', url: 'https://www.irs.gov/es/individuals/free-tax-return-preparation-for-qualifying-taxpayers' }, { texto: 'Free File del IRS', url: 'https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free' }],
    },
    {
      pais: 'GENERAL', titulo: 'Como Crear una LLC', slug: 'crear-llc',
      descripcion: 'Forma tu propio negocio en EE.UU. abriendo una LLC, incluso sin ser ciudadano o residente. Protege tus bienes personales y abre puertas a nuevos clientes.',
      contenidoHtml: `<h2>¿Qué es una LLC?</h2><p>Una LLC (Limited Liability Company) es una estructura de negocio que separa tus bienes personales de las deudas y obligaciones de tu empresa. No necesitas ser ciudadano ni residente para formar una.</p><h2>¿Por qué formar una LLC?</h2><ul><li>Protege tu casa, carro y ahorros personales si el negocio tiene deudas o demandas</li><li>Da una imagen mas profesional ante clientes y bancos</li><li>Permite abrir cuenta bancaria de negocio y aceptar pagos con tarjeta</li><li>Facilita declarar impuestos de negocio por separado</li></ul><h2>Pasos para formar tu LLC</h2><ol><li>Elige el estado donde registraras (usualmente donde vives o trabajas)</li><li>Escoge un nombre disponible para tu LLC</li><li>Designa un "registered agent" (agente registrado) en ese estado</li><li>Presenta el "Articles of Organization" ante la oficina del Secretario de Estado</li><li>Solicita un EIN (numero de identificacion patronal) gratis en el IRS</li><li>Abre una cuenta bancaria de negocio con tu LLC y EIN</li></ol><p><strong>Nota:</strong> El EIN se puede solicitar con tu ITIN o incluso sin numero de Seguro Social, usando el formulario SS-4.</p>`,
      pasos: ['Elige el estado donde vas a registrar tu LLC', 'Escoge un nombre disponible para tu negocio', 'Designa un registered agent en ese estado', 'Presenta los Articles of Organization y paga la tarifa estatal', 'Solicita tu EIN gratis en el IRS (formulario SS-4)', 'Abre una cuenta bancaria de negocio con tu LLC y EIN'],
      documentosNecesarios: ['Identificacion valida (pasaporte o ID extranjero)', 'ITIN (opcional, util para el EIN)', 'Nombre del negocio y direccion', 'Informacion del registered agent'],
      tiempoPromedio: '1-3 semanas', costo: '$50-500 USD (varia por estado)',
      linksExternos: [{ texto: 'Solicitar EIN gratis en el IRS', url: 'https://www.irs.gov/es/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online' }, { texto: 'Formulario SS-4 del IRS', url: 'https://www.irs.gov/forms-pubs/about-form-ss-4' }],
    },
    {
      pais: 'GENERAL', titulo: 'Licencia de Conducir para Inmigrantes', slug: 'licencia-conducir',
      descripcion: 'Varios estados de EE.UU. permiten a inmigrantes sin documentos obtener una licencia de conducir. Conoce los requisitos en tu estado.',
      contenidoHtml: `<h2>Estados que permiten licencia sin SSN</h2><p>Actualmente mas de 19 estados y Washington DC permiten a inmigrantes sin estatus legal obtener una licencia de conducir:</p><ul><li>California, Colorado, Connecticut, Delaware</li><li>Hawaii, Illinois, Maryland, Massachusetts</li><li>Minnesota, Nevada, New Jersey, New Mexico</li><li>New York, Oregon, Utah, Virginia</li><li>Washington, DC y Puerto Rico</li></ul><h2>Documentos generalmente requeridos</h2><ul><li>Prueba de identidad (pasaporte extranjero)</li><li>Prueba de presencia en el estado (facturas, contrato de arrendamiento)</li><li>Prueba de numero de seguro social o carta del SSA</li><li>Pago de la tarifa</li></ul><h2>Pasos generales</h2><ol><li>Verifica los requisitos especificos de tu estado</li><li>Reune todos los documentos necesarios</li><li>Agenda una cita en el DMV</li><li>Pasa el examen escrito y de manejo</li><li>Recibe tu licencia en 2-4 semanas</li></ol>`,
      pasos: ['Verifica si tu estado permite licencia sin SSN', 'Reune documentos de identidad y residencia', 'Agenda cita en tu DMV local', 'Estudia el manual de manejo del estado', 'Pasa el examen escrito', 'Pasa el examen de manejo', 'Recibe tu licencia por correo'],
      documentosNecesarios: ['Pasaporte extranjero vigente', 'Comprobante de residencia en el estado (2 documentos)', 'Comprobante de ITIN o carta del SSA', 'Pago de tarifas del DMV'],
      tiempoPromedio: '2-6 semanas', costo: '$20-50 USD (varia por estado)',
      linksExternos: [{ texto: 'Lista de estados con licencia para inmigrantes', url: 'https://www.ncsl.org/transportation/states-that-allow-undocumented-immigrants-to-get-a-drivers-license' }],
    },
    {
      pais: 'GENERAL', titulo: 'Como Abrir una Cuenta Bancaria', slug: 'cuenta-bancaria',
      descripcion: 'Abre tu cuenta bancaria en EE.UU. con o sin SSN. Muchos bancos aceptan ITIN o pasaporte extranjero.',
      contenidoHtml: `<h2>¿Puedo abrir una cuenta sin SSN?</h2><p>Si. Muchos bancos aceptan el ITIN o el pasaporte extranjero como identificacion para abrir una cuenta.</p><h2>Bancos que aceptan ITIN</h2><ul><li><strong>Bank of America:</strong> Acepta ITIN y pasaporte extranjero</li><li><strong>Wells Fargo:</strong> Acepta matricula consular mexicana</li><li><strong>Chase:</strong> Acepta ITIN con ID extranjero</li><li><strong>Citibank:</strong> Acepta pasaporte extranjero</li><li><strong>Self-Help Credit Union:</strong> Especializado en inmigrantes</li></ul><h2>Alternativas si no tienes ITIN</h2><ul><li><strong>Cuentas CLABE:</strong> Algunos bancos mexicanos operan en EE.UU.</li><li><strong>Chime:</strong> No requiere SSN ni ITIN</li><li><strong>Prepaid Debit Cards:</strong> Green Dot, Netspend</li><li><strong>Remittance services:</strong> Wise, Remitly para recibir pagos</li></ul>`,
      pasos: ['Obtener tu ITIN si no tienes SSN', 'Busca un banco que acepte ITIN en tu ciudad', 'Lleva pasaporte vigente y comprobante de domicilio', 'Deposita el minimo requerido (generalmente $25-100)', 'Activa tu tarjeta de debito cuando llegue por correo'],
      documentosNecesarios: ['Pasaporte extranjero vigente', 'ITIN o SSN (algunos bancos no lo requieren)', 'Comprobante de domicilio en EE.UU.', 'Deposito inicial'],
      tiempoPromedio: 'Mismo dia', costo: 'Gratis (muchas cuentas no tienen cuota minima)',
      linksExternos: [{ texto: 'FDIC - Como escoger un banco', url: 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/' }],
    },
    ...TRAMITES_VERIFICADOS,
  ]

  for (const t of tramites) {
    await prisma.tramite.create({ data: t as any })
  }
  console.log(`✅ ${tramites.length} trámites creados`)

  // Noticias
  const noticias = [
    { titulo: 'Nueva política de USCIS para renovación de EAD', slug: 'uscis-ead-renovacion-2024', resumen: 'USCIS anuncia extensión automática de 540 días para renovaciones de Permiso de Trabajo.', contenidoHtml: '<p>El Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) ha ampliado la extensión automática para renovaciones de Permiso de Trabajo (EAD) de 180 a 540 días para ciertos solicitantes elegibles.</p><p>Esta medida beneficia a miles de inmigrantes que dependen del EAD para trabajar legalmente en EE.UU.</p>', categoria: 'Inmigración', paises: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'], publicado: true, fuente: 'USCIS' },
    { titulo: 'Consulados mexicanos amplían horarios de atención', slug: 'consulados-mx-horarios-2024', resumen: 'Los consulados de México en EE.UU. extienden su horario de atención para reducir tiempos de espera.', contenidoHtml: '<p>La Secretaría de Relaciones Exteriores de México anunció que todos sus consulados en EE.UU. ampliarán sus horarios de atención en respuesta a la alta demanda.</p>', categoria: 'Comunidad', paises: ['MX'], publicado: true, fuente: 'SRE México' },
    { titulo: 'Programa de acción diferida DACA celebra aniversario', slug: 'daca-aniversario-2024', resumen: 'El programa DACA continúa protegiendo a más de 500,000 jóvenes inmigrantes mientras continúan batallas legales.', contenidoHtml: '<p>El programa de Acción Diferida para los Llegados en la Infancia (DACA) sigue siendo vital para cientos de miles de jóvenes inmigrantes conocidos como Dreamers.</p>', categoria: 'Inmigración', paises: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'], publicado: true, fuente: 'Politico' },
    { titulo: 'Clínicas de salud gratuitas para inmigrantes en California', slug: 'salud-inmigrantes-california-2024', resumen: 'California amplía acceso a servicios de salud para inmigrantes sin importar estatus migratorio.', contenidoHtml: '<p>El estado de California ha expandido el programa Medi-Cal para cubrir a todos los adultos sin importar su estatus migratorio, convirtiéndose en el primer estado en hacerlo.</p>', categoria: 'Salud', paises: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'], publicado: true, fuente: 'California Health' },
    { titulo: 'Nuevos requisitos para visa de turista B1/B2', slug: 'visa-turista-b1-b2-2024', resumen: 'El Departamento de Estado actualiza los requisitos y procedimientos para visa de turista.', contenidoHtml: '<p>El Departamento de Estado de EE.UU. ha actualizado los procedimientos para solicitar la visa de turista B1/B2, incluyendo nuevas preguntas en el formulario DS-160.</p>', categoria: 'Inmigración', paises: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'], publicado: true, fuente: 'State Dept' },

    { titulo: 'Colombia lanza app para trámites consulares', slug: 'colombia-app-consular-2024', resumen: 'La Cancillería de Colombia lanza aplicación móvil para facilitar trámites desde el exterior.', contenidoHtml: '<p>La Cancillería colombiana ha lanzado una nueva aplicación móvil que permite a los colombianos en el exterior gestionar sus trámites consulares de forma más eficiente.</p>', categoria: 'Comunidad', paises: ['CO'], publicado: true, fuente: 'Cancillería Colombia' },
    { titulo: 'Festival cultural colombiano en Miami', slug: 'festival-colombiano-miami-2024', resumen: 'Gran festival celebra la cultura y tradiciones colombianas en la Florida.', contenidoHtml: '<p>Miami se prepara para celebrar el festival cultural colombiano más grande del sur de Florida, con música, gastronomía y arte de todas las regiones de Colombia.</p>', categoria: 'Comunidad', paises: ['CO'], publicado: true, fuente: 'MiamiHerald' },

    { titulo: 'Venezuela: nuevas medidas para pasaportes en el exterior', slug: 've-pasaportes-exterior-2024', resumen: 'El gobierno venezolano anuncia nuevas disposiciones para la emisión de pasaportes fuera del país.', contenidoHtml: '<p>El Ministerio de Relaciones Exteriores de Venezuela anunció nuevas medidas para facilitar la emisión de pasaportes a venezolanos en el exterior.</p>', categoria: 'Inmigración', paises: ['VE'], publicado: true, fuente: 'MPPRE' },
    { titulo: 'Organizaciones apoyan a venezolanos con TPS en EE.UU.', slug: 've-tps-organizaciones-2024', resumen: 'Organizaciones de la sociedad civil brindan apoyo a venezolanos bajo el Estatus de Protección Temporal.', contenidoHtml: '<p>Diversas organizaciones sin fines de lucro están ofreciendo asistencia legal y orientación a los venezolanos que califican para el Estatus de Protección Temporal (TPS) en EE.UU.</p>', categoria: 'Legal', paises: ['VE'], publicado: true, fuente: 'UNHCR' },

    { titulo: 'El Salvador digitaliza más trámites consulares', slug: 'sv-tramites-digitales-2024', resumen: 'La Cancillería de El Salvador avanza en la digitalización de servicios consulares para salvadoreños en EE.UU.', contenidoHtml: '<p>El Ministerio de Relaciones Exteriores de El Salvador ha implementado nuevas plataformas digitales para facilitar los trámites a los compatriotas en el exterior.</p>', categoria: 'Comunidad', paises: ['SV'], publicado: true, fuente: 'RREE El Salvador' },
    { titulo: 'Remesas familiares rompen récord en 2024', slug: 'remesas-record-2024', resumen: 'Las remesas enviadas desde EE.UU. hacia Latinoamérica alcanzan cifras históricas en 2024.', contenidoHtml: '<p>El Banco Interamericano de Desarrollo reportó que las remesas enviadas desde EE.UU. hacia países de América Latina y el Caribe alcanzaron niveles récord en 2024.</p>', categoria: 'Economía', paises: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'], publicado: true, fuente: 'BID' },
    { titulo: 'Guatemaltecos en EE.UU.: Guía de recursos consulares', slug: 'gt-recursos-consulares-2024', resumen: 'El Consulado de Guatemala publica nueva guía de servicios para la comunidad guatemalteca en EE.UU.', contenidoHtml: '<p>El Ministerio de Relaciones Exteriores de Guatemala ha publicado una guía actualizada con todos los servicios disponibles para los guatemaltecos residentes en Estados Unidos.</p>', categoria: 'Comunidad', paises: ['GT'], publicado: true, fuente: 'MINEX Guatemala' },
    { titulo: 'Honduras amplía programa de asistencia consular', slug: 'hn-asistencia-consular-2024', resumen: 'La Secretaría de Relaciones Exteriores de Honduras amplia los servicios consulares para hondureños en EE.UU.', contenidoHtml: '<p>Miles de hondureños en Estados Unidos podrán acceder a más servicios consulares gracias a la expansión del programa de asistencia anunciado por la Cancillería.</p>', categoria: 'Comunidad', paises: ['HN'], publicado: true, fuente: 'SRE Honduras' },
    { titulo: 'Comunidad dominicana celebra en Nueva York', slug: 'do-comunidad-ny-2024', resumen: 'La comunidad dominicana en Nueva York celebra su desfile anual con record de asistencia.', contenidoHtml: '<p>El Desfile Dominicano en Nueva York reunió a miles de personas en una celebración de la cultura e identidad dominicana en EE.UU.</p>', categoria: 'Comunidad', paises: ['DO'], publicado: true, fuente: 'NY1' },
    ...NOTICIAS_VERIFICADAS,
  ]

  for (const n of noticias) {
    await prisma.noticia.create({ data: n as any })
  }
  console.log(`✅ ${noticias.length} noticias creadas`)

  // Clientes
  const clientes = await Promise.all([
    prisma.cliente.create({ data: { nombreEmpresa: 'García & Associates Law', tipo: 'abogado', emailContacto: 'info@garcialaw.com', telefono: '(213) 555-0100', sitioWeb: 'https://garcialaw.example.com', descripcion: 'Firma de abogados especializada en inmigración. Más de 15 años de experiencia sirviendo a la comunidad latina en EE.UU.', paisServicio: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'] } }),
    prisma.cliente.create({ data: { nombreEmpresa: 'Notaría Hispana LA', tipo: 'notaria', emailContacto: 'info@notariahispana.com', telefono: '(323) 555-0200', descripcion: 'Servicios notariales en español: apostillas, poderes notariales, traducciones certificadas.', paisServicio: ['MX', 'SV', 'GT', 'HN', 'NI'] } }),
    prisma.cliente.create({ data: { nombreEmpresa: 'Remesas Rápidas', tipo: 'remesas', emailContacto: 'soporte@remesasrapidas.com', telefono: '(800) 555-0300', sitioWeb: 'https://remesasrapidas.example.com', descripcion: 'Envío de dinero a Latinoamérica con las mejores tasas del mercado. Sin cargos ocultos.', paisServicio: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'] } }),
  ])
  console.log(`✅ ${clientes.length} clientes creados`)

  // Anuncios
  await prisma.anuncio.createMany({
    data: [
      { tipo: 'card', titulo: '¿Necesitas un abogado de inmigración?', descripcion: 'García & Associates Law ofrece consultas gratis. Más de 15 años de experiencia.', enlaceDestino: 'https://garcialaw.example.com', clienteId: clientes[0].id, paisesTarget: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'], activo: true, presupuesto: 500 },
      { tipo: 'banner', titulo: 'Notaría Hispana – Servicios en Español', descripcion: 'Apostillas, poderes notariales y más. Atendemos en tu idioma.', enlaceDestino: 'https://notariahispana.example.com', clienteId: clientes[1].id, paisesTarget: ['MX', 'SV', 'GT', 'HN', 'NI'], activo: true, presupuesto: 300 },
      { tipo: 'card', titulo: 'Envía dinero a tu familia hoy', descripcion: 'Remesas Rápidas: las mejores tasas para envíos a toda Latinoamérica.', enlaceDestino: 'https://remesasrapidas.example.com', clienteId: clientes[2].id, paisesTarget: ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'], activo: true, presupuesto: 1000 },
    ],
  })
  console.log('✅ 3 anuncios creados')

  // Empleos
  await prisma.empleo.createMany({
    data: [
      { titulo: 'Ayudante de Construcción', slug: 'ayudante-construccion-houston', empresa: 'Constructora Lopez', descripcion: 'Buscamos ayudante de construcción con experiencia en Houston, TX. Trabajo estable de lunes a viernes, pago semanal.', categoria: 'Construcción', tipoEmpleo: 'Tiempo completo', estadoUS: 'TX', ciudad: 'Houston', salario: '$18-22/hora', requisitos: ['Experiencia mínima 1 año', 'Disponibilidad inmediata', 'Herramientas propias'], comoAplicar: 'empleos@constructoralopez.example.com', destacado: true, activo: true },
      { titulo: 'Personal de Limpieza para Oficinas', slug: 'limpieza-oficinas-los-angeles', empresa: 'CleanPro LA', descripcion: 'Se busca personal de limpieza para oficinas corporativas en el centro de Los Ángeles. Turno de tarde.', categoria: 'Limpieza', tipoEmpleo: 'Medio tiempo', estadoUS: 'CA', ciudad: 'Los Angeles', salario: '$17/hora', requisitos: ['Puntualidad', 'Referencias verificables'], comoAplicar: '(213) 555-0199', activo: true },
      { titulo: 'Cocinero(a) para Restaurante', slug: 'cocinero-restaurante-miami', empresa: 'Sazón Latino', descripcion: 'Restaurante de comida latina busca cocinero con experiencia en cocina mexicana y centroamericana.', categoria: 'Restaurantes y Cocina', tipoEmpleo: 'Tiempo completo', estadoUS: 'FL', ciudad: 'Miami', salario: '$16-19/hora + propinas', requisitos: ['2+ años de experiencia', 'Permiso de manejo de alimentos'], comoAplicar: 'sazonlatino.jobs@example.com', activo: true },
      { titulo: 'Repartidor(a) con Vehículo Propio', slug: 'repartidor-nueva-york', empresa: 'Entregas Rápidas NYC', descripcion: 'Buscamos repartidores con vehículo propio para entregas locales en Nueva York.', categoria: 'Transporte y Delivery', tipoEmpleo: 'Por día', estadoUS: 'NY', ciudad: 'Nueva York', salario: '$150-200/día', requisitos: ['Vehículo propio', 'Licencia de conducir vigente'], comoAplicar: 'https://entregasrapidasnyc.example.com/aplicar', activo: true },
    ],
  })
  console.log('✅ 4 empleos creados')

  console.log('\n🎉 Seed completado!')
  console.log('👤 Admin: admin@compa.app / changeme123')
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
