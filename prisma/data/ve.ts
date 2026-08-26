// VENEZUELA (VE) — Consulados, Trámites, Noticias
//
// ⚠️ CONTEXTO CRÍTICO — LEER ANTES DE USAR ESTOS DATOS (actualizado 25 ago 2026):
// Venezuela y EE.UU. rompieron relaciones diplomáticas y consulares en 2019.
// El 5 de marzo de 2026 se restablecieron relaciones diplomáticas y consulares
// tras la captura de Nicolás Maduro por fuerzas de EE.UU. en enero de 2026.
//
// ESTADO ACTUAL DE LOS CONSULADOS (mejor entendimiento tras investigación
// exhaustiva a 25 ago 2026): SIGUE SIN HABER CONFIRMACIÓN OFICIAL CLARA.
// - No encontramos ninguna fuente oficial (gob.ve / SAIME / cancillería /
//   embajada.gob.ve) accesible que confirme qué consulados están prestando
//   servicio pleno al público hoy.
// - La fuente específica más reciente que localizamos sobre el estado
//   operativo (venezuelaconsulate.com, actualizada 25 abr 2026) afirmaba
//   explícitamente que NINGÚN consulado venezolano en EE.UU. estaba operativo
//   todavía, y recomendaba viajar a México, Canadá, Colombia, Panamá,
//   Centroamérica o el Caribe para trámites urgentes.
// - Otra fuente (numeroservicioalcliente.com, actualizada 8 abr 2026) describe
//   un panorama mixto: Houston con "servicios consulares y asistencia en
//   trámites", Chicago con "atención limitada", y advierte que "muchos
//   trámites como pasaporte y prórroga aún no funcionan completamente".
// - citaconsular.us (embajada) indicaba en marzo 2026 que la embajada estaba
//   en "fase de acondicionamiento físico y tecnológico" sin sistema de citas
//   activo, y que "se publicará un portal unificado de citas consulares
//   cuando el Ministerio lo habilite para Estados Unidos" — portal que no
//   hemos podido confirmar que ya exista.
// - Un artículo de Efecto Cocuyo sobre el restablecimiento de relaciones
//   citaba que el retorno de servicios consulares ocurriría "progresivamente
//   durante aproximadamente seis meses" desde marzo 2026 — es decir, no se
//   esperaría normalización plena hasta cerca de septiembre 2026.
// - Búsquedas de noticias de julio y agosto 2026 (incluyendo cobertura de
//   El Nacional, El Español y CNN sobre reuniones de Delcy Rodríguez con
//   funcionarios del Tesoro/Departamento de Estado de EE.UU., y sobre el
//   restablecimiento de relaciones con Israel) NO mencionan explícitamente
//   la reapertura de consulados en EE.UU. — sugiere que, si ya hubiera
//   consulados con servicio pleno, no ha sido noticia destacada hasta la
//   fecha de esta revisión.
// CONCLUSIÓN: la situación sigue siendo genuinamente confusa/no confirmada.
// RECOMENDACIÓN PARA COMPA: mantener un aviso destacado en la UI de
// "llama antes de acudir / verifica cita y disponibilidad" para todo el
// contenido de VE, y revisar este archivo periódicamente. Direcciones:
// se cruzaron múltiples fuentes de terceros (no oficiales) para Houston,
// San Francisco, Boston y Nueva Orleans — quedan marcadas con su fuente
// pero SIN confirmación oficial. Los horarios y correos electrónicos siguen
// sin poder verificarse con una fuente confiable.
// ============================================================

export const consuladosVE = [
  {
    pais: "VE",
    ciudad: "Washington, D.C.",
    nombre: "Embajada de Venezuela en Estados Unidos",
    direccion: "1099 30th St NW, Washington, DC 20007",
    telefono: "(202) 342-2214",
    email: "Verificar en sitio oficial (embajada en proceso de normalización de servicios)",
    horarioLunes: "Verificar en sitio oficial - a marzo 2026 la embajada reportaba estar en 'fase de acondicionamiento físico y tecnológico' sin sistema de citas activo; no confirmado si ya cambió a ago. 2026",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
  {
    pais: "VE",
    ciudad: "Miami, FL",
    nombre: "Consulado General de Venezuela en Miami",
    direccion: "1101 Brickell Ave, Suite M, Miami, FL 33131",
    telefono: "(305) 371-7593",
    email: "Verificar en sitio oficial",
    horarioLunes: "Verificar en sitio oficial - fuente de abr. 2026 no reportaba estado operativo específico; confirmar disponibilidad de citas antes de acudir",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
  {
    pais: "VE",
    ciudad: "New York, NY",
    nombre: "Consulado General de Venezuela en Nueva York",
    direccion: "7 East 51st Street, New York, NY 10022",
    telefono: "(212) 826-1660",
    email: "info@consulado-ny.gov.ve",
    horarioLunes: "Verificar en sitio oficial - fuente de abr. 2026 indicaba que el 'funcionamiento puede variar según la disponibilidad de servicios'; confirmar antes de acudir",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
  {
    pais: "VE",
    ciudad: "Houston, TX",
    nombre: "Consulado General de Venezuela en Houston",
    direccion: "2000 West Loop South, Suite 1320, Houston, TX 77027 (dirección reportada por 2 fuentes de terceros no oficiales en abr. 2026; otra fuente anterior mencionaba 2401 Fountain View Dr. Suite 220 — VERIFICAR dirección vigente en sitio oficial antes de acudir)",
    telefono: "(713) 622-7200 (verificar vigencia; otra fuente reporta 713-974-0028)",
    email: "Verificar en sitio oficial",
    horarioLunes: "Verificar en sitio oficial - fuente de abr. 2026 lo describía con 'servicios consulares y asistencia en trámites', pero sin confirmación oficial ni de operatividad plena; confirmar antes de acudir",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
  {
    pais: "VE",
    ciudad: "Chicago, IL",
    nombre: "Consulado General de Venezuela en Chicago",
    direccion: "20 N Wacker Dr., Suite 1925, Chicago, IL 60606",
    telefono: "(312) 324-0907",
    email: "Verificar en sitio oficial",
    horarioLunes: "Atención limitada reportada en abr. 2026 ('presenta atención limitada según el contexto actual') - verificar en sitio oficial antes de acudir",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
  {
    pais: "VE",
    ciudad: "Los Angeles, CA",
    nombre: "Consulado General de Venezuela en Los Ángeles",
    direccion: "Verificar dirección exacta en sitio oficial - las fuentes de terceros consultadas dan datos inconsistentes/no confiables (una repite por error la dirección de la embajada en DC); consulado existente, en proceso de reapertura",
    telefono: "Verificar en sitio oficial",
    email: "Verificar en sitio oficial",
    horarioLunes: "Verificar en sitio oficial",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
  {
    pais: "VE",
    ciudad: "San Francisco, CA",
    nombre: "Consulado General de Venezuela en San Francisco",
    direccion: "1700 California St, Unit/Suite 420, San Francisco, CA 94109 (reportada consistentemente por 2 fuentes de terceros no oficiales; SIN confirmación oficial de operatividad)",
    telefono: "(415) 234-5245 (fuente de terceros, sin confirmar)",
    email: "Verificar en sitio oficial",
    horarioLunes: "Verificar en sitio oficial - no se encontró confirmación de estado operativo actualizada a ago. 2026",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
  {
    pais: "VE",
    ciudad: "Boston, MA",
    nombre: "Consulado General de Venezuela en Boston",
    direccion: "20 Park Plaza, Suite 1110, Boston, MA 02116 (reportada por 1 fuente de terceros no oficial, abr. 2026; SIN confirmación oficial)",
    telefono: "(617) 426-5555 (fuente de terceros, sin confirmar)",
    email: "Verificar en sitio oficial",
    horarioLunes: "Verificar en sitio oficial",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
  {
    pais: "VE",
    ciudad: "New Orleans, LA",
    nombre: "Consulado General de Venezuela en Nueva Orleans",
    direccion: "400 Poydras St, Suite 2145, New Orleans, LA 70130 (reportada consistentemente por 2 fuentes de terceros no oficiales; SIN confirmación oficial de operatividad)",
    telefono: "(504) 522-3284 (fuente de terceros, sin confirmar)",
    email: "Verificar en sitio oficial",
    horarioLunes: "Verificar en sitio oficial",
    horarioSabado: "Verificar en sitio oficial",
    servicios: ["Pasaporte", "Cédula", "Registro Civil", "Poderes", "Visa"],
  },
];

// ============================================================
// TRÁMITES — VE
// Fuente: guías de SAIME / medios especializados / cobertura legal-migratoria
// 2026. Dado que la operatividad de los consulados en EE.UU. sigue sin
// confirmarse oficialmente (ver encabezado), muchos trámites consulares aún
// pueden requerir viajar a un tercer país (México/Canadá/Colombia/Panamá) —
// se indica explícitamente en cada trámite afectado.
// ============================================================

export const tramitesVE = [
  {
    pais: "VE",
    titulo: "Pasaporte venezolano (SAIME)",
    slug: "pasaporte-ve",
    descripcion: "Trámite de pasaporte o su renovación para venezolanos en EE.UU., gestionado a través de SAIME.",
    contenidoHtml: "<p>El pasaporte venezolano se solicita a través del sistema SAIME (Servicio Administrativo de Identificación, Migración y Extranjería). Desde el restablecimiento de relaciones diplomáticas y consulares en marzo de 2026, los consulados venezolanos en EE.UU. están, en teoría, en proceso de reapertura — pero a la fecha no existe confirmación oficial clara de que todos estén tomando datos biométricos y procesando pasaportes con normalidad. Varias fuentes de abril de 2026 seguían reportando que 'muchos trámites como pasaporte y prórroga aún no funcionan completamente' en varios consulados, y al menos una fuente afirmaba que ninguno estaba operativo todavía.</p><p>Mientras se confirma la situación de tu consulado, muchos solicitantes han tenido que viajar a la embajada o consulados de Venezuela en México, Canadá, Colombia, Panamá o algún país del Caribe para la toma de datos biométricos y solicitud del pasaporte o salvoconducto. El Departamento de Estado de EE.UU. extendió previamente la validez de pasaportes venezolanos vencidos por hasta cinco años como medida paliativa durante los años de ruptura diplomática, lo cual puede seguir siendo relevante si tu documento está vencido y necesitas usarlo mientras se resuelve tu cita.</p><p>Antes de viajar o pagar cualquier tarifa, llama directamente al consulado de tu jurisdicción para confirmar si ya opera y si tiene citas disponibles — no te bases únicamente en sitios de terceros, ya que la información circulante es contradictoria.</p>",
    pasos: [
      "Crea o accede a tu cuenta en el portal de SAIME",
      "Solicita el trámite deseado (nuevo pasaporte o renovación) y completa tus datos",
      "Paga la tarifa de procesamiento a través de bancos en EE.UU.",
      "Llama al consulado de tu jurisdicción para confirmar si ya opera y tiene citas disponibles",
      "Si tu consulado aún no opera, solicita un salvoconducto o cita en la embajada/consulado venezolano en México, Canadá, Colombia o Panamá",
      "Acude a la cita asignada (en el consulado de tu jurisdicción si ya opera, o en el tercer país si no)",
      "Espera la elaboración del pasaporte en Caracas y su envío al consulado/embajada (aprox. 8 semanas)",
      "Recoge el documento en persona o solicita envío",
    ],
    documentosNecesarios: [
      "Identificación vigente",
      "Foto tipo pasaporte",
      "Comprobante de pago SAIME",
      "Reserva de vuelo (si debes viajar a un tercer país)",
    ],
    tiempoPromedio: "Aprox. 8 semanas desde la cita",
    costo: "$216 USD aprox.",
    linksExternos: [
      { texto: "SAIME - Portal oficial", url: "https://www.saime.gob.ve" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Cédula de Identidad venezolana",
    slug: "cedula-identidad-ve",
    descripcion: "Trámite de la cédula de identidad venezolana desde el exterior a través de SAIME.",
    contenidoHtml: "<p>La cédula de identidad venezolana también se gestiona a través de SAIME, y su disponibilidad presencial en EE.UU. depende directamente de la reapertura efectiva del consulado de tu jurisdicción — un estado que, a agosto de 2026, sigue sin poder confirmarse de forma oficial y uniforme para todas las sedes (ver aviso general al inicio de este archivo). En la práctica, la cédula suele ser un trámite de menor prioridad frente al pasaporte para quienes están en EE.UU., porque casi ningún trámite migratorio o consular estadounidense la exige como requisito.</p><p>Si tu cédula está vencida o próxima a vencer y necesitas el documento físico con urgencia (por ejemplo, para viajar a Venezuela o a un tercer país), verifica primero si tu consulado ya procesa este trámite; si no, la alternativa más común sigue siendo tramitarla en la embajada o un consulado venezolano en un tercer país, o esperar a que se confirme la reapertura plena de la sede que te corresponde.</p>",
    pasos: [
      "Accede al portal de SAIME y solicita el trámite de cédula",
      "Completa tus datos personales",
      "Llama al consulado de tu jurisdicción para verificar si ya procesa este trámite o si debes acudir a un tercer país",
      "Acude a la cita para toma de datos biométricos",
      "Espera la entrega del documento",
    ],
    documentosNecesarios: [
      "Partida de nacimiento o cédula anterior",
      "Identificación vigente",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [
      { texto: "SAIME - Portal oficial", url: "https://www.saime.gob.ve" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Registro Civil (nacimiento, matrimonio, defunción)",
    slug: "registro-civil-ve",
    descripcion: "Registro de actos civiles de venezolanos ocurridos en EE.UU. ante las autoridades venezolanas.",
    contenidoHtml: "<p>El registro de nacimientos, matrimonios y defunciones de venezolanos ocurridos en Estados Unidos ante el Registro Civil venezolano depende por completo de la operatividad del consulado que te corresponde — un servicio de fe pública que, según reportes de terceros de abril de 2026, en varios casos seguía sin funcionar con normalidad meses después del restablecimiento de relaciones diplomáticas.</p><p>Si tienes un hijo nacido en EE.UU. y quieres registrarlo también como venezolano, o necesitas registrar un matrimonio o defunción para efectos legales en Venezuela (herencias, pensiones, trámites de propiedad, etc.), reúne primero el certificado o acta estadounidense correspondiente —expedido por el estado donde ocurrió el hecho— y confirma telefónicamente con el consulado si ya está tomando citas para este servicio antes de organizar el viaje o reunir el resto de la documentación.</p>",
    pasos: [
      "Llama al consulado de tu jurisdicción para verificar si ya procesa registros civiles",
      "Reúne el certificado estadounidense del acto civil (nacimiento, matrimonio o defunción)",
      "Agenda cita si el consulado confirma que está operativo para este servicio",
      "Presenta la documentación requerida y paga la tarifa correspondiente",
    ],
    documentosNecesarios: [
      "Certificado estadounidense del acto civil",
      "Identificación de los interesados",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [
      { texto: "SAIME - Portal oficial", url: "https://www.saime.gob.ve" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "alto",
  },
  {
    pais: "VE",
    titulo: "Poderes desde Estados Unidos",
    slug: "poderes-ve",
    descripcion: "Otorgamiento de poderes notariales ante el consulado venezolano para trámites en Venezuela.",
    contenidoHtml: "<p>El otorgamiento de poderes ante el consulado (para que un familiar o abogado en Venezuela realice trámites en tu nombre — venta de bienes, cobro de herencias, representación legal, etc.) depende de que el consulado ya esté prestando el servicio de fe pública. Es uno de los trámites que, según las fuentes consultadas hasta agosto de 2026, sigue siendo de disponibilidad más incierta en varias sedes.</p><p>Mientras se confirma si tu consulado ya presta este servicio, una alternativa que muchos venezolanos en EE.UU. han utilizado durante los años de ruptura diplomática es otorgar el poder ante un notario público estadounidense y luego legalizarlo con la Apostilla de La Haya, ya que tanto EE.UU. como Venezuela son parte del Convenio de la Haya de 1961; consulta con un abogado si esa vía es válida para el trámite específico que necesitas antes de optar por ella en lugar del consulado.</p>",
    pasos: [
      "Llama al consulado de tu jurisdicción para verificar si presta el servicio de fe pública para poderes",
      "Si está disponible, lleva el proyecto de poder redactado (o solicita el modelo al consulado)",
      "Agenda cita y firma ante el funcionario consular",
      "Si el consulado no opera, evalúa con un abogado la alternativa de notariar el poder en EE.UU. y apostillarlo",
    ],
    documentosNecesarios: [
      "Identificación vigente",
      "Datos del apoderado",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [],
    categoria: "Identidad y Documentos",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "TPS (Estatus de Protección Temporal) para venezolanos",
    slug: "tps-ve",
    descripcion: "Protección temporal contra deportación y permiso de trabajo para venezolanos elegibles, vigente hasta el 2 de octubre de 2026 para un grupo específico de beneficiarios, con recursos judiciales ya agotados.",
    contenidoHtml: "<p>Tras la terminación de las designaciones de TPS por la administración Trump a fines de 2025, un grupo específico de venezolanos —quienes recibieron documentos de TPS (EAD, I-797 o I-94) el 5 de febrero de 2025 o antes— mantuvo protección vigente hasta el 2 de octubre de 2026, gracias a una orden judicial federal del 30 de mayo de 2025. Sin embargo, el 25 de junio de 2026 la Corte Suprema de EE.UU. falló 6-3 en el caso <em>Mullin v. Doe</em>, eliminando el control judicial sobre las decisiones procedimentales del DHS respecto a la terminación del TPS. Esto significa que los jueces federales ya no pueden revisar cómo el gobierno pone fin al estatus (solo quedan abiertos los reclamos por violaciones constitucionales), y refuerza que la fecha del 2 de octubre de 2026 se mantiene firme como límite.</p><p>Abogados de inmigración recomiendan a los beneficiarios no esperar hasta esa fecha para actuar: revisar con tiempo si hay alternativas de protección disponibles, como asilo, peticiones familiares, ajuste de estatus por empleo o cancelación de remoción. Si ya renovaste tu EAD con el formulario I-765, tu permiso vencido sigue siendo válido junto con el comprobante de recibo bajo la extensión automática (hasta 540 días), pero eso no sustituye una estrategia legal de más largo plazo ante el vencimiento de la protección misma.</p>",
    pasos: [
      "Verifica si recibiste tu EAD, I-797 o I-94 antes del 5 de febrero de 2025",
      "Confirma la fecha de vencimiento de tu permiso de trabajo (EAD)",
      "Si ya renovaste con el formulario I-765, conserva el EAD vencido junto con el comprobante de recibo (extensión automática de hasta 540 días)",
      "Consulta con un representante legal acreditado sobre alternativas de protección (asilo, peticiones familiares, cancelación de remoción) antes del 2 de octubre de 2026",
      "No esperes hasta el 2 de octubre de 2026 para actuar — tras el fallo Mullin v. Doe (25 jun 2026) ya no hay margen de revisión judicial sobre el proceso de terminación",
    ],
    documentosNecesarios: [
      "EAD (permiso de trabajo)",
      "Formulario I-797 o I-94",
      "Comprobante de renovación (I-765) si aplica",
    ],
    tiempoPromedio: "Protección vigente hasta el 2 de octubre de 2026 (recursos judiciales sobre el proceso ya agotados tras fallo de la Corte Suprema del 25 jun 2026)",
    costo: "Gratuito (verificación); costos de renovación de EAD según USCIS",
    linksExternos: [
      { texto: "USCIS - TPS Venezuela", url: "https://www.uscis.gov/es/programas-humanitarios/estatus-de-proteccion-temporal/pais-designado-al-estatus-de-proteccion-temporal-venezuela" },
    ],
    categoria: "Migración y Estatus",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Parole humanitario CHNV (Cuba, Haití, Nicaragua, Venezuela): qué hacer si el tuyo terminó",
    slug: "parole-chnv-ve",
    descripcion: "Situación actual del programa de parole humanitario CHNV para venezolanos tras su terminación por decisión de la Corte Suprema, y alternativas legales disponibles.",
    contenidoHtml: "<p>El programa de parole humanitario CHNV permitió a cientos de miles de venezolanos (junto con cubanos, haitianos y nicaragüenses) ingresar legalmente a EE.UU. de forma temporal, con permisos iniciales de dos años, siempre que contaran con un patrocinador financiero (formulario I-134A). La Corte Suprema autorizó al gobierno, mediante un fallo de emergencia sin opinión escrita detallada, terminar el programa por completo — el DHS implementó la cancelación a partir del 25 de marzo de 2026. Se estima que más de 500,000 personas se vieron afectadas, y el gobierno puede iniciar procesos de deportación contra quienes se encuentren en el país bajo este estatus ya vencido.</p><p>El parole nunca fue, por sí mismo, un camino hacia la residencia permanente — era una autorización temporal de presencia y trabajo. Si tu parole CHNV terminó o está por terminar, es urgente que consultes con un abogado de inmigración acreditado para evaluar alternativas: solicitud de asilo (si aplica dentro del plazo de un año desde tu entrada, con posibles excepciones), TPS si calificas por la fecha de corte vigente, ajuste de estatus por una petición familiar o laboral aprobada, o cancelación de remoción en casos específicos. No dejes pasar el tiempo sin actuar: litigios sobre aspectos del programa continúan en cortes inferiores, pero no garantizan una restauración del estatus.</p>",
    pasos: [
      "Verifica la fecha exacta de vencimiento de tu parole y de tu permiso de trabajo asociado",
      "Reúne toda tu documentación migratoria (I-94, EAD, formulario I-134A, comprobantes de entrada)",
      "Consulta con un abogado de inmigración acreditado (o una organización sin fines de lucro de asistencia legal) para evaluar alternativas disponibles en tu caso",
      "Si calificas para asilo, TPS u otra vía, inicia el trámite correspondiente cuanto antes",
      "Evita a personas que se presenten como 'notarios' o asesores no acreditados — solo abogados u organizaciones reconocidas por el DOJ pueden dar asesoría legal migratoria",
    ],
    documentosNecesarios: [
      "I-94 de entrada por parole",
      "EAD (permiso de trabajo), si lo tenías",
      "Formulario I-134A del patrocinador",
      "Cualquier notificación recibida de USCIS o DHS sobre el estatus",
    ],
    tiempoPromedio: "Varía según la alternativa legal disponible en cada caso",
    costo: "Consulta legal: varía; muchas organizaciones comunitarias ofrecen orientación gratuita o de bajo costo",
    linksExternos: [
      { texto: "USCIS - Proceso de parole para Cuba, Haití, Nicaragua y Venezuela", url: "https://www.uscis.gov/es/CHNV" },
    ],
    categoria: "Migración y Estatus",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Proceso de asilo para venezolanos en Estados Unidos",
    slug: "asilo-ve",
    descripcion: "Guía sobre cómo solicitar asilo político en EE.UU. para venezolanos que temen persecución si regresan, incluyendo plazos y vías afirmativa y defensiva.",
    contenidoHtml: "<p>El asilo es una protección para quienes temen persecución en su país de origen por motivos de raza, religión, nacionalidad, opinión política o pertenencia a un grupo social determinado. Muchos venezolanos han solicitado asilo citando persecución política, aunque la captura de Nicolás Maduro en enero de 2026 y el cambio de gobierno interino liderado por Delcy Rodríguez han generado incertidumbre legal sobre cómo los jueces de inmigración y USCIS están evaluando estos casos en 2026 — es un área en evolución que requiere asesoría legal actualizada caso por caso.</p><p>Existen dos vías principales: la afirmativa, cuando solicitas directamente ante USCIS sin estar en proceso de deportación (generalmente dentro del año de tu llegada a EE.UU., salvo excepciones por cambio de circunstancias), y la defensiva, cuando solicitas asilo como defensa dentro de un proceso de remoción ante un juez de inmigración. Datos de mediados de 2026 muestran que solo una fracción muy pequeña de los migrantes que comparecen en corte de inmigración logra algún tipo de alivio legal, lo que subraya la importancia de contar con representación legal desde el inicio del proceso.</p>",
    pasos: [
      "Determina si estás dentro del plazo de un año desde tu última entrada a EE.UU. (o si calificas para una excepción)",
      "Busca representación legal acreditada — un abogado de inmigración o una organización de asistencia legal sin fines de lucro",
      "Si aplicas por la vía afirmativa, completa el formulario I-589 y reúne evidencia de tu temor de persecución",
      "Si estás en proceso de deportación, presenta tu solicitud de asilo como defensa ante el juez de inmigración (vía defensiva)",
      "Asiste a tu entrevista de asilo o audiencia de corte con tu abogado y toda la evidencia documental posible",
      "Solicita tu permiso de trabajo (EAD) 150 días después de presentar tu solicitud, si aún no ha sido decidida",
    ],
    documentosNecesarios: [
      "Formulario I-589 (Solicitud de Asilo)",
      "Pasaporte o identificación",
      "I-94 o comprobante de entrada",
      "Evidencia de persecución o temor fundado (denuncias, noticias, testimonios, documentos médicos, etc.)",
    ],
    tiempoPromedio: "Varía ampliamente; puede tomar varios años según la carga de la corte o de USCIS",
    costo: "Gratuito ante USCIS/corte; honorarios legales varían si contratas abogado privado",
    linksExternos: [
      { texto: "USCIS - Asilo", url: "https://www.uscis.gov/es/asilo" },
    ],
    categoria: "Migración y Estatus",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Homologación de estudios y títulos venezolanos en EE.UU.",
    slug: "homologacion-estudios-ve",
    descripcion: "Cómo validar un título universitario o estudios de secundaria venezolanos para trabajar o estudiar en Estados Unidos.",
    contenidoHtml: "<p>Los títulos universitarios y certificados de estudio venezolanos no se 'homologan' automáticamente en EE.UU.: deben pasar por un proceso de evaluación de credenciales (credential evaluation) realizado por una agencia privada especializada, ya que EE.UU. no tiene un ministerio de educación central que reconozca títulos extranjeros de forma uniforme — cada estado, universidad, empleador o junta de licencias profesionales puede exigir una evaluación distinta. Las agencias más utilizadas y reconocidas son WES (World Education Services), ECE (Educational Credential Evaluators) y otras acreditadas por NACES (National Association of Credential Evaluation Services).</p><p>El proceso típico consiste en enviar copias certificadas (o hacer que la universidad envíe directamente) tus notas certificadas y título a la agencia evaluadora, quien emite un reporte que equivale tu formación a créditos, años de estudio o el título equivalente en el sistema estadounidense. Este reporte es indispensable para: continuar estudios de posgrado, aplicar a ciertos empleos que requieren título universitario, o iniciar el proceso de revalidación de una licencia profesional (por ejemplo, para médicos, enfermeros, abogados o ingenieros, cada profesión tiene además su propio proceso de recertificación específico, generalmente con exámenes adicionales).</p><p>Si tus documentos académicos están en Venezuela o el registro/universidad no responde, algunas agencias evaluadoras aceptan procesos alternativos con declaraciones juradas o evidencia indirecta cuando es imposible obtener los documentos originales — consulta directamente con la agencia elegida sobre estas opciones antes de asumir que no es posible avanzar.</p>",
    pasos: [
      "Identifica qué exige la institución, empleador o junta de licencias a la que aplicarás (a veces piden una agencia evaluadora específica)",
      "Elige una agencia acreditada por NACES (por ejemplo WES o ECE)",
      "Solicita a tu universidad o instituto en Venezuela el envío de notas certificadas y título, o presenta copias certificadas según lo requiera la agencia",
      "Paga la tarifa de evaluación y envía la documentación",
      "Recibe el reporte de equivalencia y preséntalo donde corresponda",
      "Si tu profesión requiere licencia (salud, derecho, ingeniería, etc.), inicia el proceso de recertificación específico de tu estado y profesión",
    ],
    documentosNecesarios: [
      "Título universitario o certificado de estudios",
      "Notas certificadas (pensum/transcript)",
      "Identificación vigente",
      "Traducción certificada al inglés de los documentos",
    ],
    tiempoPromedio: "Aprox. 7 a 20 días hábiles tras recibir la documentación completa, según la agencia y el tipo de reporte",
    costo: "Aprox. $100 a $300 USD según la agencia y tipo de evaluación",
    linksExternos: [
      { texto: "World Education Services (WES)", url: "https://www.wes.org/es/" },
      { texto: "NACES - Directorio de agencias acreditadas", url: "https://www.naces.org/" },
    ],
    categoria: "Educación",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Licencia de conducir para venezolanos en EE.UU.",
    slug: "licencia-conducir-ve",
    descripcion: "Requisitos generales para obtener una licencia de conducir siendo venezolano en Estados Unidos, según tu estado y estatus migratorio.",
    contenidoHtml: "<p>Los requisitos para obtener una licencia de conducir varían significativamente según el estado donde vivas y tu estatus migratorio — no existe un trámite federal único. La mayoría de los estados exigen prueba de identidad, prueba de residencia en el estado y, en muchos casos, un número de Seguro Social o una carta de inelegibilidad para uno (si no calificas para SSN). Algunos estados (como California, Illinois, Nueva York, Colorado y varios más) ofrecen licencias de conducir independientemente del estatus migratorio, mientras que otros exigen presencia legal verificable (por ejemplo, un EAD, TPS, parole o visa vigente) para emitir la licencia.</p><p>Dado que el TPS y el parole humanitario CHNV para muchos venezolanos están en proceso de terminación o vencimiento durante 2026 (ver los trámites de TPS y parole CHNV en esta misma sección), es importante verificar si tu documento de identidad migratoria seguirá siendo válido para renovar tu licencia cuando toque hacerlo, y explorar si tu estado ofrece licencias sin verificación de estatus como alternativa si tu estatus migratorio cambia.</p>",
    pasos: [
      "Verifica los requisitos específicos del DMV (o agencia equivalente) de tu estado",
      "Reúne prueba de identidad (pasaporte venezolano, documento migratorio) y prueba de domicilio en el estado",
      "Si tu estado exige presencia legal verificable, lleva tu EAD, I-94, TPS o documento de estatus vigente",
      "Programa cita en el DMV si es requerida",
      "Aprueba el examen escrito y, si corresponde, el examen práctico de manejo",
      "Paga la tarifa correspondiente y recibe tu licencia",
    ],
    documentosNecesarios: [
      "Pasaporte venezolano u otra identificación",
      "Documento de estatus migratorio (EAD, I-94, TPS, parole, visa) según lo exija tu estado",
      "Comprobante de domicilio en el estado",
      "Número de Seguro Social o carta de inelegibilidad, si tu estado lo exige",
    ],
    tiempoPromedio: "Varía según el estado; desde el mismo día hasta varias semanas por citas",
    costo: "Varía según el estado, generalmente entre $10 y $100 USD",
    linksExternos: [],
    categoria: "Transporte",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Cómo rentar un apartamento sin historial de crédito en EE.UU.",
    slug: "vivienda-rentar-sin-credito-ve",
    descripcion: "Opciones para alquilar vivienda cuando eres recién llegado y no tienes historial de crédito, SSN de larga data ni referencias de renta previas en EE.UU.",
    contenidoHtml: "<p>La mayoría de los venezolanos que llegaron recientemente (con TPS, parole humanitario o en proceso de asilo) no tienen historial de crédito en EE.UU., lo cual muchos arrendadores usan como filtro. Esto no significa que sea imposible rentar: existen alternativas documentadas por la Oficina de Protección Financiera del Consumidor (CFPB) y el Departamento de Vivienda y Desarrollo Urbano (HUD).</p><p>Opciones comunes: (1) ofrecer un depósito de seguridad más alto a cambio de omitir la verificación de crédito (legal en la mayoría de estados, aunque algunos limitan el monto máximo del depósito); (2) conseguir un cofirmante ('co-signer' o 'guarantor') con buen crédito, muchas veces un familiar o amigo ya establecido; (3) usar servicios de garantía de renta de terceros (rent guarantee/insurance services) que cobran una tarifa por respaldar tu solicitud ante el arrendador; (4) mostrar comprobantes alternos de estabilidad financiera: cartas de tu empleador, estados de cuenta bancarios, comprobante de ahorros o depósitos regulares; (5) buscar arrendadores individuales o propiedades más pequeñas (en vez de grandes complejos corporativos), que suelen tener criterios más flexibles.</p><p>Cuidado con estafas: nunca pagues un depósito o 'reserva' antes de ver la propiedad en persona o por videollamada verificada, y desconfía de rentas muy por debajo del precio de mercado.</p>",
    pasos: [
      "Reúne comprobantes de ingresos alternos (carta de empleo, estados de cuenta bancarios, comprobante de ahorros)",
      "Pregunta al arrendador si acepta un depósito de seguridad más alto en lugar de historial de crédito",
      "Si tienes un familiar o amigo con buen crédito dispuesto a ser cofirmante, pregunta si el arrendador lo acepta",
      "Investiga servicios de garantía de renta (rent guarantor services) si no cuentas con cofirmante",
      "Verifica en persona o por videollamada la propiedad antes de pagar cualquier depósito",
      "Consulta la agencia de vivienda justa (Fair Housing) de tu estado si sospechas discriminación por estatus migratorio o nacionalidad",
    ],
    documentosNecesarios: [
      "Identificación vigente",
      "Comprobante de ingresos o carta de empleo",
      "Estados de cuenta bancarios recientes",
      "Referencias personales, si no hay historial de renta previo en EE.UU.",
    ],
    tiempoPromedio: "Varía según disponibilidad del mercado local",
    costo: "Depósito de seguridad (usualmente 1-2 meses de renta); tarifa de servicio de garantía si aplica",
    linksExternos: [
      { texto: "HUD - Recursos de vivienda", url: "https://www.hud.gov/topics/rental_assistance" },
      { texto: "CFPB - Alquilar sin historial de crédito", url: "https://www.consumerfinance.gov/consumer-tools/renting-a-home/" },
    ],
    categoria: "Vivienda",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Derechos del inquilino en EE.UU. (varían por estado)",
    slug: "vivienda-derechos-inquilino-ve",
    descripcion: "Protecciones básicas del inquilino frente al arrendador, incluyendo vivienda justa federal (HUD) y ejemplo de Florida, un estado con alta población venezolana.",
    contenidoHtml: "<p>Las leyes de arrendamiento en EE.UU. son principalmente estatales y locales, no federales — por eso tus derechos exactos dependen de en qué estado vives. Sin embargo, la Ley de Vivienda Justa federal (Fair Housing Act), aplicada por HUD, protege a todos los inquilinos —sin importar estatus migratorio— contra discriminación por raza, color, origen nacional, religión, sexo, discapacidad o estado familiar. HUD también exige que toda vivienda de alquiler cumpla estándares mínimos de habitabilidad.</p><p>Como ejemplo de protecciones estatales, Florida (donde reside una parte importante de la comunidad venezolana) regula la relación arrendador-inquilino bajo el Estatuto de Florida Capítulo 83 ('Florida Residential Landlord and Tenant Act'), que establece, entre otros puntos: el arrendador debe mantener la propiedad en condiciones habitables, el inquilino tiene derecho a un aviso previo antes de ciertas acciones del arrendador, y existen procesos legales específicos que el arrendador debe seguir para terminar un contrato o iniciar un desalojo — no puede cambiar las cerraduras ni retirar tus pertenencias por su cuenta ('autodesalojo'), sin importar tu estatus migratorio.</p><p>Como esto varía por estado, verifica las reglas específicas de tu estado (agencia de vivienda estatal o legal aid local) antes de asumir que las protecciones de Florida aplican donde tú vives.</p>",
    pasos: [
      "Identifica el estatuto de arrendador-inquilino de tu estado específico (búscalo junto con 'landlord tenant act' + nombre de tu estado)",
      "Guarda copia de tu contrato de arrendamiento y todo comunicado con el arrendador por escrito",
      "Si el arrendador se niega a hacer reparaciones esenciales, documenta el problema con fotos y notificación escrita",
      "Si sospechas discriminación, presenta una queja ante HUD (aplica sin importar tu estatus migratorio)",
      "Busca asistencia legal gratuita (legal aid) de tu localidad si tienes una disputa con el arrendador",
    ],
    documentosNecesarios: [
      "Contrato de arrendamiento",
      "Comunicaciones escritas con el arrendador",
      "Fotos o evidencia de condiciones de la vivienda, si aplica",
    ],
    tiempoPromedio: "N/A — información de referencia",
    costo: "Gratuito consultar HUD o agencias de vivienda justa; asistencia legal gratuita disponible según el caso",
    linksExternos: [
      { texto: "HUD - Vivienda justa (Fair Housing)", url: "https://www.hud.gov/program_offices/fair_housing_equal_opp" },
      { texto: "Florida Statutes Chapter 83 - Landlord and Tenant", url: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/0083.html" },
    ],
    categoria: "Vivienda",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Qué hacer si recibes una notificación de desalojo (eviction)",
    slug: "vivienda-desalojo-ve",
    descripcion: "Pasos a seguir ante un aviso de desalojo en EE.UU., y por qué el estatus migratorio no debería usarse en tu contra en el proceso judicial de desalojo.",
    contenidoHtml: "<p>Un desalojo (eviction) en EE.UU. es un proceso judicial — el arrendador no puede sacarte por su cuenta, cambiar las cerraduras o retirar tus pertenencias sin una orden de un tribunal ('autodesalojo' es ilegal en la mayoría de estados). Si recibes un aviso de desalojo, tienes derecho a responder ante la corte y, en la mayoría de jurisdicciones, a una audiencia antes de que se ejecute cualquier desalojo.</p><p>Un punto importante para la comunidad migrante: los tribunales de vivienda (housing court) manejan casos civiles de arrendador-inquilino, no de inmigración, y como regla general no se pregunta ni se reporta el estatus migratorio en estos procesos. Organizaciones de asistencia legal (legal aid) y el National Housing Law Project ofrecen orientación gratuita para quien enfrenta un desalojo, y en varias ciudades y estados existe derecho a representación legal gratuita en casos de desalojo ('right to counsel') para quienes califican por ingresos.</p>",
    pasos: [
      "Lee cuidadosamente el aviso de desalojo: fecha límite, motivo alegado y si hay una audiencia programada",
      "No abandones la vivienda antes de tiempo solo por temor — tienes derecho a responder en corte",
      "Busca asistencia legal gratuita (legal aid) o un servicio de 'right to counsel' en desalojos si tu localidad lo ofrece",
      "Reúne evidencia de pagos de renta, comunicaciones con el arrendador y condiciones de la vivienda",
      "Acude a la audiencia judicial programada; en muchas jurisdicciones no comparecer resulta en un fallo automático en tu contra",
    ],
    documentosNecesarios: [
      "Aviso de desalojo recibido",
      "Contrato de arrendamiento",
      "Comprobantes de pago de renta",
    ],
    tiempoPromedio: "Varía según el estado; desde días hasta varias semanas",
    costo: "Asistencia legal gratuita disponible en muchas localidades según ingresos",
    linksExternos: [
      { texto: "LawHelp.org - Encuentra ayuda legal gratuita por estado", url: "https://www.lawhelp.org" },
      { texto: "National Housing Law Project", url: "https://www.nhlp.org" },
    ],
    categoria: "Vivienda",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Clínicas comunitarias (FQHC) para atención médica sin seguro",
    slug: "salud-clinicas-comunitarias-ve",
    descripcion: "Cómo encontrar clínicas de salud federalmente calificadas (FQHC) que atienden sin importar seguro médico o estatus migratorio, con tarifas según ingresos.",
    contenidoHtml: "<p>Los Centros de Salud Federalmente Calificados (FQHC, por sus siglas en inglés) son clínicas comunitarias financiadas en parte por el gobierno federal (HRSA - Health Resources and Services Administration) que atienden a cualquier persona, sin importar su seguro médico o estatus migratorio, cobrando según una escala móvil basada en ingresos ('sliding fee scale'). Existen miles de estas clínicas en todo el país, muchas con personal bilingüe y experiencia atendiendo a comunidades inmigrantes.</p><p>El propio HRSA mantiene un buscador oficial en línea para localizar el centro de salud más cercano a tu domicilio.</p>",
    pasos: [
      "Ingresa a findahealthcenter.hrsa.gov y busca por tu código postal",
      "Llama al centro más cercano para confirmar servicios disponibles y si aceptan pacientes sin seguro",
      "Pregunta específicamente por la escala móvil de tarifas según tus ingresos",
      "Lleva un comprobante de ingresos (si lo tienes) para calificar por la tarifa más baja disponible",
    ],
    documentosNecesarios: [
      "Identificación (no siempre requerida)",
      "Comprobante de ingresos, si se solicita para la escala móvil de tarifas",
    ],
    tiempoPromedio: "Varía según el centro; algunos ofrecen citas el mismo día",
    costo: "Según escala móvil de ingresos; no se niega atención por falta de pago en la mayoría de FQHC",
    linksExternos: [
      { texto: "HRSA - Encuentra un centro de salud", url: "https://findahealthcenter.hrsa.gov" },
    ],
    categoria: "Salud",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Medicaid de emergencia y acceso a salud para TPS y parole",
    slug: "salud-medicaid-emergencia-ve",
    descripcion: "Qué cubre Medicaid de emergencia y qué elegibilidad real tienen los venezolanos con TPS o parole humanitario para programas de salud pública — un área que varía por estado.",
    contenidoHtml: "<p>La elegibilidad para Medicaid según estatus migratorio es un área compleja y que varía por estado, así que esta información debe confirmarse con la oficina de Medicaid de tu estado o un navegador de salud (health navigator) certificado antes de asumir que aplica a tu caso.</p><p>Lo que sí está bien establecido: 'Medicaid de emergencia' (Emergency Medicaid) cubre el tratamiento de una condición médica de emergencia —incluyendo trabajo de parto y parto— para cualquier persona que cumpla los requisitos de ingresos, sin importar su estatus migratorio, en los 50 estados. No cubre atención de rutina ni preventiva.</p><p>Sobre Medicaid regular: bajo la ley federal, las personas con parole otorgado por al menos un año (como el parole humanitario CHNV, otorgado inicialmente por dos años) pueden calificar como 'extranjero calificado' ('qualified alien') para efectos de beneficios públicos — pero incluso siendo 'qualified alien', la mayoría debe esperar 5 años desde que obtuvo ese estatus para acceder a Medicaid completo, con excepciones que varían por estado para niños y mujeres embarazadas. El TPS, por sí solo, generalmente NO se considera un estatus que otorgue la categoría de 'extranjero calificado' para Medicaid regular. Dado que las reglas exactas dependen del estado y cambian con frecuencia, verifica tu caso específico con Medicaid.gov, la oficina estatal de Medicaid, o una organización de asistencia en inscripción de salud.</p>",
    pasos: [
      "Si tienes una emergencia médica, acude a la sala de emergencias — por ley (EMTALA) deben atenderte sin importar tu capacidad de pago o estatus migratorio",
      "Después de la emergencia, pregunta si calificas para 'Emergency Medicaid' para cubrir esa atención específica",
      "Para Medicaid regular, consulta directamente con la oficina de Medicaid de tu estado sobre tu elegibilidad según tu estatus (TPS, parole) y tiempo en el país",
      "Considera buscar un 'health insurance navigator' certificado (gratuito) para orientación personalizada",
      "Explora también clínicas comunitarias (FQHC) como alternativa si no calificas para Medicaid",
    ],
    documentosNecesarios: [
      "Identificación",
      "Documento de estatus migratorio (EAD, I-94, aprobación de parole o TPS)",
      "Comprobante de ingresos",
    ],
    tiempoPromedio: "Varía según el estado",
    costo: "Emergency Medicaid: sin costo para el paciente si califica por ingresos; Medicaid regular varía",
    linksExternos: [
      { texto: "Medicaid.gov - Inmigrantes y cobertura de salud", url: "https://www.medicaid.gov/medicaid/eligibility-policy/index.html" },
      { texto: "KFF - Cobertura de salud para inmigrantes", url: "https://www.kff.org/racial-equity-and-health-policy/issue-brief/health-coverage-and-care-of-immigrants/" },
    ],
    categoria: "Salud",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Apoyo de salud mental para venezolanos recién llegados",
    slug: "salud-mental-ve",
    descripcion: "Recursos de salud mental accesibles para venezolanos afectados por el trauma de la migración forzada y la crisis humanitaria, incluyendo líneas de ayuda gratuitas.",
    contenidoHtml: "<p>La migración forzada, la separación familiar y la incertidumbre sobre el estatus migratorio son factores de estrés documentados que afectan la salud mental de comunidades como la venezolana en EE.UU. Existen recursos gratuitos y confidenciales, aunque no pudimos verificar con una fuente confiable al 26 de agosto de 2026 la existencia de una organización nacional dedicada específicamente y en exclusiva a la salud mental de venezolanos en EE.UU. — si conoces una organización local confiable en tu ciudad, consúltala directamente.</p><p>Recursos generales verificados: la Línea Nacional de Ayuda de SAMHSA (Administración de Servicios de Salud Mental y Abuso de Sustancias) ofrece apoyo gratuito, confidencial y en español las 24 horas. NAMI (National Alliance on Mental Illness) también ofrece información y líneas de apoyo con recursos en español. Muchas clínicas comunitarias (FQHC, ver trámite relacionado) también ofrecen servicios de salud mental con tarifas según ingresos, sin importar estatus migratorio.</p>",
    pasos: [
      "Si estás en crisis, llama o envía un mensaje de texto al 988 (Línea de Prevención del Suicidio y Crisis), disponible en español",
      "Para apoyo no urgente, llama a la Línea Nacional de Ayuda de SAMHSA al 1-800-662-4357 (HELP)",
      "Pregunta en tu clínica comunitaria (FQHC) más cercana si ofrece servicios de salud mental o consejería",
      "Busca grupos de apoyo para inmigrantes/refugiados en tu ciudad a través de organizaciones locales de asistencia a inmigrantes",
    ],
    documentosNecesarios: [
      "Ninguno para llamar a las líneas de ayuda",
    ],
    tiempoPromedio: "Inmediato para líneas de ayuda; varía para citas de consejería",
    costo: "Gratuito para líneas de ayuda; consejería según escala de ingresos en clínicas comunitarias",
    linksExternos: [
      { texto: "SAMHSA - Línea Nacional de Ayuda", url: "https://www.samhsa.gov/find-help/national-helpline" },
      { texto: "988 Suicide & Crisis Lifeline (en español)", url: "https://988lifeline.org/es/" },
      { texto: "NAMI en español", url: "https://www.nami.org/your-journey/identity-and-cultural-dimensions/hispanic-latinx/" },
    ],
    categoria: "Salud",
    prioridad: "alto",
  },
  {
    pais: "VE",
    titulo: "Inscripción escolar de menores sin importar estatus migratorio (Plyler v. Doe)",
    slug: "educacion-inscripcion-escolar-ve",
    descripcion: "El derecho de todo menor en EE.UU. a inscribirse en la escuela pública K-12 sin importar su estatus migratorio o el de sus padres, según la Corte Suprema en Plyler v. Doe (1982).",
    contenidoHtml: "<p>La Corte Suprema de EE.UU. estableció en el caso <em>Plyler v. Doe</em> (1982) que todo menor tiene derecho a inscribirse y asistir a la escuela pública K-12, sin importar su estatus migratorio ni el de sus padres o tutores. Las escuelas no pueden negar la inscripción, exigir un número de Seguro Social como requisito, ni preguntar sobre estatus migratorio como condición para matricular a un estudiante. El Departamento de Educación de EE.UU. ha publicado orientación reiterando estos derechos.</p><p>Si una escuela se niega a inscribir a tu hijo o exige documentos migratorios como requisito, puedes buscar ayuda de organizaciones de derechos civiles o legales de inmigración, o contactar directamente al distrito escolar citando tus derechos bajo Plyler v. Doe.</p>",
    pasos: [
      "Acude al distrito escolar correspondiente a tu domicilio para inscribir a tu hijo",
      "Presenta prueba de domicilio (recibo de servicios, contrato de renta) y la edad del menor (partida de nacimiento u otro documento)",
      "Si te piden número de Seguro Social o estatus migratorio como requisito de inscripción, recuerda que no pueden negar la matrícula por esto — puedes citar Plyler v. Doe",
      "Solicita servicios de traducción/interpretación si los necesitas — muchos distritos están obligados a ofrecerlos",
      "Si enfrentas una negativa, contacta a una organización de asistencia legal educativa o de derechos civiles",
    ],
    documentosNecesarios: [
      "Prueba de domicilio",
      "Documento de identidad o edad del menor (partida de nacimiento u otro)",
      "Registro de vacunas, si el distrito lo solicita (puede completarse después en muchos casos)",
    ],
    tiempoPromedio: "Generalmente inmediato o pocos días",
    costo: "Gratuito — la educación pública K-12 no tiene costo de matrícula",
    linksExternos: [
      { texto: "Departamento de Educación de EE.UU. - Derechos de inscripción escolar", url: "https://www2.ed.gov/about/offices/list/ocr/docs/plyler-doe-brochure.pdf" },
    ],
    categoria: "Educación",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Acceso a la universidad y matrícula estatal (in-state tuition) para venezolanos sin residencia permanente",
    slug: "educacion-universidad-in-state-tuition-ve",
    descripcion: "Qué es la matrícula estatal reducida (in-state tuition) para estudiantes indocumentados, con TPS o parole, y por qué varía enormemente según el estado.",
    contenidoHtml: "<p>Asistir a la universidad en EE.UU. no requiere un estatus migratorio específico en la mayoría de instituciones, pero el costo de la matrícula sí puede depender fuertemente de tu estatus y del estado donde estudies. Algunos estados ofrecen 'in-state tuition' (matrícula al precio reducido de residente estatal) a estudiantes indocumentados, con TPS o parole que cumplan ciertos requisitos de residencia y estudios previos en ese estado, mientras que otros estados lo prohíben expresamente por ley. Estas políticas cambian con frecuencia por legislación estatal, así que no asumas que la política de un estado sigue vigente sin confirmarlo para el año académico actual.</p><p>La organización Presidents' Alliance on Higher Education and Immigration mantiene seguimiento actualizado, estado por estado, de estas políticas y de becas disponibles para estudiantes inmigrantes.</p>",
    pasos: [
      "Verifica la política vigente de tu estado sobre in-state tuition para estudiantes sin residencia permanente (puede haber cambiado recientemente)",
      "Contacta la oficina de admisiones o ayuda financiera de la universidad para preguntar específicamente por tu situación (TPS, parole, indocumentado)",
      "Investiga becas privadas para estudiantes inmigrantes que no dependen de FAFSA (la ayuda federal FAFSA generalmente requiere ciudadanía o residencia permanente)",
      "Consulta con el centro de recursos para inmigrantes de la universidad, si existe",
    ],
    documentosNecesarios: [
      "Comprobante de residencia en el estado",
      "Historial académico (transcript) de escuela secundaria",
      "Documento de estatus migratorio, si la universidad lo solicita para determinar elegibilidad de matrícula",
    ],
    tiempoPromedio: "Varía según el ciclo de admisiones",
    costo: "Varía enormemente según el estado y si calificas para matrícula de residente",
    linksExternos: [
      { texto: "Presidents' Alliance on Higher Education and Immigration", url: "https://www.presidentsalliance.org" },
    ],
    categoria: "Educación",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Cómo tramitar tu permiso de trabajo (EAD) si eres beneficiario de TPS o parole venezolano",
    slug: "trabajo-permiso-ead-ve",
    descripcion: "Proceso para solicitar el Documento de Autorización de Empleo (EAD) ante USCIS a través del formulario I-765, paso crítico para trabajar legalmente con TPS o parole humanitario.",
    contenidoHtml: "<p>El permiso de trabajo (EAD, Employment Authorization Document) es, para la mayoría de venezolanos con TPS o parole, el documento más urgente después de asegurar su estatus migratorio, porque sin él no pueden trabajar legalmente en EE.UU. Se solicita ante USCIS mediante el formulario I-765, usando la categoría de elegibilidad correspondiente a tu estatus (por ejemplo, la categoría (c)(19) para TPS, o la categoría correspondiente a parole humanitario).</p><p>Dado que tanto el TPS como el parole CHNV venezolano están en un panorama legal cambiante en 2026 (ver los trámites de TPS y parole CHNV en esta misma sección), es fundamental verificar directamente en el sitio de USCIS tu categoría de elegibilidad exacta y si tu EAD sigue vigente bajo una extensión automática antes de asumir que puedes seguir trabajando.</p>",
    pasos: [
      "Confirma tu categoría de elegibilidad para el I-765 según tu estatus (TPS o parole)",
      "Completa el formulario I-765 en el sitio de USCIS o en papel",
      "Reúne los documentos de respaldo de tu estatus migratorio (aprobación de TPS o de parole, I-94)",
      "Paga la tarifa correspondiente (verifica el monto vigente en USCIS, ya que cambia periódicamente)",
      "Envía la solicitud y guarda el comprobante de recibo (Notice of Action, I-797C)",
      "Verifica si tu EAD anterior sigue siendo válido bajo la extensión automática mientras se procesa la renovación",
    ],
    documentosNecesarios: [
      "Formulario I-765 completo",
      "Prueba de tu estatus migratorio (aprobación de TPS, I-94 de parole, etc.)",
      "Fotos tipo pasaporte",
      "Comprobante de pago de la tarifa",
    ],
    tiempoPromedio: "Verificar tiempos de procesamiento vigentes en el sitio de USCIS, ya que varían según la categoría y carga de casos",
    costo: "Verificar tarifa vigente en USCIS.gov (cambia periódicamente)",
    linksExternos: [
      { texto: "USCIS - Formulario I-765, Solicitud de Autorización de Empleo", url: "https://www.uscis.gov/es/i-765" },
    ],
    categoria: "Trabajo",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Qué hacer mientras se procesa tu EAD: preparación antes de poder trabajar legalmente",
    slug: "trabajo-mientras-tramita-ead-ve",
    descripcion: "Cómo prepararte para tu primer empleo en EE.UU. mientras tu EAD está en trámite, sin arriesgarte a trabajar sin autorización.",
    contenidoHtml: "<p>Trabajar en EE.UU. sin un EAD aprobado (o sin otra autorización de empleo válida) es ilegal y puede tener consecuencias graves para tu caso migratorio actual y futuro, incluso si tienes TPS o parole aprobado — la aprobación del estatus no es, por sí sola, autorización de empleo hasta que tengas el EAD en mano (o, en el caso de renovaciones, el comprobante de recibo bajo la extensión automática, si aplica a tu categoría). Mientras esperas, puedes prepararte legalmente para tu primer empleo sin necesidad de estar ya autorizado a trabajar.</p><p>Pasos útiles durante la espera: preparar tu currículum en inglés y español, buscar organizaciones de asistencia al empleo para inmigrantes que ofrecen capacitación o talleres (muchas no requieren EAD para inscribirte, solo para que te contraten), investigar qué certificaciones o licencias necesitarás en tu campo, y organizar tus documentos de identidad y estatus para el proceso de verificación de empleo (Formulario I-9) que todo empleador debe hacer.</p>",
    pasos: [
      "Verifica el estado de tu solicitud de EAD en el sitio de USCIS (case status online)",
      "Prepara tu currículum y reúne referencias o comprobantes de experiencia laboral previa (incluso de Venezuela)",
      "Busca talleres de empleo u orientación laboral de organizaciones de asistencia a inmigrantes en tu localidad",
      "No aceptes trabajo remunerado hasta tener tu EAD en mano o confirmación válida de autorización de empleo",
      "Una vez recibas tu EAD, prepárate para el Formulario I-9 que tu futuro empleador debe completar",
    ],
    documentosNecesarios: [
      "Comprobante de recibo de tu solicitud I-765",
      "Currículum",
      "Documentos de experiencia laboral o educativa, si los tienes",
    ],
    tiempoPromedio: "Varía según el tiempo de procesamiento del EAD",
    costo: "Gratuito",
    linksExternos: [
      { texto: "USCIS - Consulta el estado de tu caso", url: "https://egov.uscis.gov/casestatus/landing.do" },
    ],
    categoria: "Trabajo",
    prioridad: "alto",
  },
  {
    pais: "VE",
    titulo: "Derechos laborales básicos en EE.UU., sin importar tu estatus migratorio",
    slug: "trabajo-derechos-laborales-ve",
    descripcion: "Protecciones de salario mínimo, horas extra y seguridad laboral que aplican a todo trabajador en EE.UU. independientemente de su estatus migratorio, según el Departamento de Trabajo.",
    contenidoHtml: "<p>El Departamento de Trabajo de EE.UU. (DOL) ha confirmado repetidamente que las protecciones laborales federales básicas —como el salario mínimo y el pago de horas extra bajo la Ley de Normas Justas de Trabajo (FLSA), y las protecciones de seguridad ocupacional bajo OSHA— aplican a todos los trabajadores en el país, sin importar su estatus migratorio. Esto significa que un empleador no puede pagarte menos del salario mínimo, negarte el pago de horas extra que te corresponde, o exponerte a condiciones de trabajo inseguras, alegando tu estatus migratorio como excusa.</p><p>Esto no elimina el riesgo real de represalias migratorias que algunos trabajadores temen al denunciar abusos, por lo que muchas organizaciones recomiendan buscar asesoría de un abogado laboral o una organización de trabajadores antes de presentar una queja formal, para entender las protecciones y riesgos específicos de tu situación.</p>",
    pasos: [
      "Guarda evidencia de tus horas trabajadas y pagos recibidos (recibos de pago, mensajes, calendario personal)",
      "Si sospechas que no te están pagando el salario mínimo o las horas extra que corresponden, consulta al Departamento de Trabajo (DOL) o a una organización de trabajadores",
      "Si tu lugar de trabajo tiene condiciones inseguras, puedes reportarlo a OSHA",
      "Considera consultar con una organización local de trabajadores inmigrantes o un abogado laboral antes de presentar una queja, para entender tus opciones y riesgos específicos",
    ],
    documentosNecesarios: [
      "Recibos de pago (pay stubs), si los tienes",
      "Registro de horas trabajadas",
    ],
    tiempoPromedio: "Varía según el proceso de queja",
    costo: "Gratuito presentar quejas ante DOL u OSHA",
    linksExternos: [
      { texto: "Departamento de Trabajo de EE.UU. - Derechos de los trabajadores inmigrantes", url: "https://www.dol.gov/agencies/whd/immigration" },
      { texto: "OSHA - Seguridad en el trabajo", url: "https://www.osha.gov/workers" },
    ],
    categoria: "Trabajo",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Organizaciones de apoyo a inmigrantes venezolanos con temas de empleo y reasentamiento",
    slug: "trabajo-organizaciones-apoyo-ve",
    descripcion: "Organizaciones nacionales reconocidas que ofrecen orientación de empleo, reasentamiento y referencias legales a comunidades de inmigrantes y solicitantes de asilo, incluyendo venezolanos.",
    contenidoHtml: "<p>No pudimos verificar con una fuente confiable al 26 de agosto de 2026 la existencia de una organización nacional dedicada en exclusiva a la comunidad venezolana en EE.UU. con presencia comprobada en múltiples ciudades — si tu localidad tiene una organización comunitaria venezolana específica, contáctala directamente, pero verifica su legitimidad antes de compartir documentos o pagar cualquier tarifa.</p><p>Lo que sí está bien documentado son organizaciones nacionales reconocidas que atienden a solicitantes de asilo, parolees y refugiados en general —incluyendo venezolanos— con servicios de reasentamiento, orientación laboral y referencias legales: HIAS (originalmente creada para refugiados judíos, hoy atiende a refugiados y solicitantes de asilo de cualquier origen), el Comité Internacional de Rescate (International Rescue Committee, IRC), y CLINIC (Catholic Legal Immigration Network) para referencias a abogados de inmigración de bajo costo o gratuitos.</p>",
    pasos: [
      "Busca la oficina de HIAS o IRC más cercana a tu ciudad a través de sus sitios oficiales",
      "Pregunta específicamente por programas de empleo o reasentamiento para venezolanos con TPS, parole o asilo",
      "Si necesitas referencia a un abogado de inmigración acreditado y de bajo costo, consulta el directorio de CLINIC",
      "Verifica cualquier organización local antes de compartir documentos personales o pagar tarifas — confirma que sea una organización sin fines de lucro registrada",
    ],
    documentosNecesarios: [
      "Documento de identidad y estatus migratorio (para orientación personalizada)",
    ],
    tiempoPromedio: "Varía según la organización y disponibilidad",
    costo: "Generalmente gratuito o de bajo costo",
    linksExternos: [
      { texto: "HIAS", url: "https://www.hias.org" },
      { texto: "International Rescue Committee (IRC)", url: "https://www.rescue.org" },
      { texto: "CLINIC - Catholic Legal Immigration Network", url: "https://cliniclegal.org" },
    ],
    categoria: "Trabajo",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Estados que otorgan licencia de conducir sin importar tu estatus migratorio",
    slug: "transporte-licencias-sin-estatus-ve",
    descripcion: "Lista de estados que permiten obtener licencia de conducir sin verificar estatus migratorio, útil si tu TPS o parole está en un panorama legal incierto en 2026.",
    contenidoHtml: "<p>Además de los requisitos generales de licencia de conducir (ver trámite relacionado en esta sección), varios estados tienen leyes específicas que permiten obtener una licencia de conducir sin verificar el estatus migratorio del solicitante, exigiendo en cambio prueba de identidad y de residencia en el estado. El National Immigration Law Center (NILC) mantiene un seguimiento actualizado de qué estados ofrecen esta opción, ya que la lista cambia con la legislación estatal.</p><p>Entre los estados que históricamente han ofrecido licencias sin verificación de estatus migratorio se encuentran California, Colorado, Connecticut, Delaware, Hawái, Illinois, Maryland, Minnesota, Nevada, Nueva Jersey, Nuevo México, Nueva York, Oregón, Rhode Island, Utah, Vermont, Virginia, Washington y el Distrito de Columbia — pero esta lista puede haber cambiado, así que confírmala directamente con NILC o el DMV de tu estado antes de planificar tu trámite, especialmente si tu TPS o parole está por vencer.</p>",
    pasos: [
      "Consulta la lista actualizada de NILC sobre licencias de conducir sin verificación de estatus migratorio",
      "Confirma los requisitos exactos con el DMV (o agencia equivalente) de tu estado",
      "Si tu estado no ofrece esta opción, verifica si tu documento de estatus migratorio (EAD, TPS, parole) sigue siendo válido como prueba de presencia legal",
      "Reúne prueba de identidad y de residencia en el estado según lo exija el DMV",
    ],
    documentosNecesarios: [
      "Prueba de identidad (pasaporte u otro documento)",
      "Prueba de residencia en el estado",
    ],
    tiempoPromedio: "Varía según el estado",
    costo: "Varía según el estado",
    linksExternos: [
      { texto: "NILC - Licencias de conducir para inmigrantes por estado", url: "https://www.nilc.org/issues/drivers-licenses/" },
    ],
    categoria: "Transporte",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Seguro de auto si tienes una licencia de conducir no estándar",
    slug: "transporte-seguro-auto-licencia-no-estandar-ve",
    descripcion: "Consideraciones generales para conseguir seguro de auto si tu licencia de conducir es de un tipo no estándar o fue emitida sin verificación del estatus migratorio.",
    contenidoHtml: "<p>Tener una licencia de conducir de tipo 'no estándar' (emitida sin verificar estatus migratorio, en los estados que lo permiten) no te impide legalmente conseguir seguro de auto — las aseguradoras están reguladas a nivel estatal, y la ley generalmente les exige asegurar a cualquier conductor con una licencia válida del estado, sin discriminar por el tipo específico de licencia. Sin embargo, la disponibilidad de aseguradoras específicas, tarifas y requisitos adicionales (como historial de manejo en EE.UU. o en tu país de origen) varían mucho según la aseguradora y el estado, por lo que no pudimos verificar con una fuente confiable al 26 de agosto de 2026 recomendaciones específicas de aseguradoras para este caso.</p><p>Recomendación general: compara cotizaciones de varias aseguradoras (algunas se especializan en conductores con licencias no estándar o sin historial de manejo en EE.UU.), y consulta al departamento de seguros de tu estado si sospechas que te están negando cobertura de forma indebida por el tipo de licencia que tienes.</p>",
    pasos: [
      "Solicita cotizaciones de varias aseguradoras, mencionando el tipo de licencia que tienes",
      "Pregunta si tu historial de manejo en Venezuela (si lo tienes documentado) puede considerarse para la tarifa",
      "Compara coberturas mínimas requeridas por tu estado antes de elegir una póliza",
      "Si sospechas discriminación indebida en la contratación del seguro, consulta al departamento de seguros de tu estado",
    ],
    documentosNecesarios: [
      "Licencia de conducir vigente",
      "Historial de manejo previo, si está disponible",
    ],
    tiempoPromedio: "Generalmente inmediato para cotizaciones",
    costo: "Varía según aseguradora, estado, historial y tipo de vehículo",
    linksExternos: [
      { texto: "NAIC - Directorio de departamentos de seguros por estado", url: "https://www.naic.org/state_web_map.htm" },
    ],
    categoria: "Transporte",
    prioridad: "importante",
  },
  {
    pais: "VE",
    titulo: "Estafas comunes contra venezolanos recién llegados: asilo, TPS/parole y remesas",
    slug: "seguridad-estafas-venezolanos-ve",
    descripcion: "Cómo identificar estafas frecuentes dirigidas a venezolanos recién llegados, incluyendo falsas promesas de 'asilo garantizado', cobros ilegales por trámites gratuitos y fraude de remesas.",
    contenidoHtml: "<p>La Comisión Federal de Comercio (FTC) y USCIS han documentado y alertado repetidamente sobre estafas dirigidas a comunidades inmigrantes recién llegadas, incluyendo venezolanos. Patrones comunes: (1) personas que se presentan como 'notarios' o 'consultores de inmigración' (sin ser abogados acreditados) y prometen 'asilo garantizado' o resultados asegurados en un trámite migratorio — ningún trámite migratorio tiene resultado garantizado, y solo abogados u organizaciones acreditadas por el DOJ pueden dar asesoría legal migratoria; (2) cobros por trámites que en realidad son gratuitos ante USCIS, como ciertas actualizaciones de registro de TPS o formularios que no requieren tarifa en casos específicos — siempre verifica en USCIS.gov si un trámite realmente tiene costo antes de pagar a un tercero; (3) fraude de remesas, donde se ofrecen tasas de cambio o servicios de envío de dinero falsos o fraudulentos hacia Venezuela u otros países, quedándose con el dinero enviado.</p><p>Advertencia: nunca compartas tu número de Seguro Social, EAD, o documentos migratorios originales con alguien que no sea un abogado, organización acreditada o agencia gubernamental verificada.</p>",
    pasos: [
      "Verifica cualquier trámite migratorio directamente en USCIS.gov antes de pagar a un tercero",
      "Confirma que quien te asesora legalmente sea un abogado con licencia o esté acreditado por el DOJ (puedes verificar en el directorio del DOJ)",
      "Desconfía de promesas de resultados garantizados en cualquier trámite migratorio",
      "Usa servicios de envío de remesas reconocidos y verifica tasas de cambio antes de enviar dinero",
      "Si sospechas que fuiste víctima de una estafa, repórtalo a la FTC (reportfraud.ftc.gov)",
    ],
    documentosNecesarios: [
      "Ninguno — esta es información preventiva",
    ],
    tiempoPromedio: "N/A",
    costo: "Gratuito verificar y reportar",
    linksExternos: [
      { texto: "USCIS - Evita estafas de inmigración", url: "https://www.uscis.gov/es/evite-estafas" },
      { texto: "FTC - Reporta un fraude", url: "https://reportfraud.ftc.gov/" },
      { texto: "DOJ - Directorio de representantes acreditados", url: "https://www.justice.gov/eoir/recognition-and-accreditation-roster-reports" },
    ],
    categoria: "Seguridad y Emergencias",
    prioridad: "critico",
  },
  {
    pais: "VE",
    titulo: "Líneas de ayuda gratuitas en español para emergencias y crisis",
    slug: "seguridad-lineas-ayuda-espanol-ve",
    descripcion: "Números telefónicos gratuitos y confidenciales en español para asistencia general, trata de personas y violencia doméstica, disponibles sin importar estatus migratorio.",
    contenidoHtml: "<p>Existen líneas de ayuda nacionales, gratuitas y confidenciales en español que no requieren dar tu estatus migratorio para recibir asistencia: el 211 conecta con recursos comunitarios locales (vivienda, alimentos, servicios sociales) en la mayoría de EE.UU.; la Línea Nacional Contra la Trata de Personas (1-888-373-7888) atiende a víctimas de trata laboral o sexual; y la Línea Nacional de Violencia Doméstica (1-800-799-7233) ofrece apoyo confidencial a víctimas de violencia doméstica. Ninguna de estas líneas reporta tu estatus migratorio a autoridades de inmigración.</p>",
    pasos: [
      "Marca 211 para conectarte con recursos comunitarios locales (vivienda, alimentos, servicios sociales) en español",
      "Si sospechas que tú u otra persona es víctima de trata de personas, llama al 1-888-373-7888",
      "Si tú u otra persona enfrenta violencia doméstica, llama al 1-800-799-7233",
      "Para emergencias médicas o de seguridad inmediatas, llama al 911",
    ],
    documentosNecesarios: [
      "Ninguno — estas líneas no requieren documentación",
    ],
    tiempoPromedio: "Inmediato",
    costo: "Gratuito",
    linksExternos: [
      { texto: "211 - Ayuda comunitaria local", url: "https://www.211.org" },
      { texto: "Línea Nacional Contra la Trata de Personas", url: "https://humantraffickinghotline.org/es" },
      { texto: "Línea Nacional de Violencia Doméstica", url: "https://www.thehotline.org/es/" },
    ],
    categoria: "Seguridad y Emergencias",
    prioridad: "critico",
  },
];

// ============================================================
// NOTICIAS — VE
// ============================================================

export const noticiasVE = [
  {
    titulo: "EE.UU. y Venezuela restablecen relaciones diplomáticas y consulares tras 7 años de ruptura",
    slug: "restablecimiento-relaciones-eeuu-venezuela-2026",
    contenidoHtml: "<p>El 6 de marzo de 2026, Estados Unidos y las autoridades interinas de Venezuela acordaron restablecer relaciones diplomáticas y consulares, poniendo fin formalmente a una ruptura de siete años iniciada en 2019, según reportó MercoPress. El anuncio se produjo después de la captura de Nicolás Maduro por fuerzas estadounidenses en enero de 2026 y la instalación de Delcy Rodríguez como presidenta interina.</p><p>Laura Dogu, enviada de EE.UU. para Venezuela, llegó a Caracas a fines de enero para reabrir la misión diplomática estadounidense tras siete años de cierre. La normalización incluye cooperación económica centrada en energía y minerales, con acuerdos petroleros firmados por Shell tras el alivio de sanciones. A finales de marzo, funcionarios venezolanos anunciaron la recuperación de los edificios de la embajada y consulados en EE.UU., aunque el Departamento de Estado no había confirmado formalmente la transferencia.</p>",
    resumen: "Tras la captura de Maduro en enero de 2026, EE.UU. y Venezuela restablecieron relaciones diplomáticas y consulares en marzo, iniciando la reapertura de consulados venezolanos en EE.UU.",
    categoria: "Inmigración",
    paises: ["VE"],
    fuente: "MercoPress / El Financiero",
    enlaceOriginal: "https://es.mercopress.com/2026/03/06/estados-unidos-y-venezuela-reanudan-relaciones-diplomaticas-y-consulares-tras-siete-anos-de-ruptura",
  },
  {
    titulo: "TPS para venezolanos: protección vigente hasta el 2 de octubre de 2026, pero la Corte Suprema podría cambiar el panorama",
    slug: "tps-venezuela-octubre-2026",
    contenidoHtml: "<p>Según un análisis publicado el 11 de junio de 2026 por UnoTV, un grupo específico de venezolanos —quienes recibieron documentos de TPS antes del 5 de febrero de 2025— mantiene protección contra deportación vigente hasta el 2 de octubre de 2026, gracias a una orden judicial federal de mayo de 2025, pese a que la administración Trump había terminado las designaciones de TPS para Venezuela a fines de 2025.</p><p>La Corte Suprema evaluó en abril de 2026 casos relacionados con TPS para Haití y Siria, cuya resolución —esperada para fines de junio o inicios de julio— podría afectar también a los beneficiarios venezolanos. Un artículo de seguimiento publicado el 29 de julio de 2026 recomendó a los beneficiarios no esperar hasta la fecha límite: revisar su estatus migratorio, organizar documentos y consultar con representantes legales acreditados sobre alternativas de protección.</p>",
    resumen: "Un grupo de venezolanos con TPS mantiene protección hasta octubre de 2026, pero una decisión pendiente de la Corte Suprema sobre casos similares (Haití, Siria) podría alterar la situación.",
    categoria: "Inmigración",
    paises: ["VE"],
    fuente: "UnoTV",
    enlaceOriginal: "https://www.unotv.com/us/venezolanos-en-ee-uu-2026-el-tps-sigue-valido-por-orden-judicial-pero-la-corte-suprema-decide-en-julio-lo-que-deben-hacer-ahora-mismo/",
  },
  {
    titulo: "El 'vuelo 164': deportados venezolanos quedan atrapados en el terremoto que colapsó su hotel en La Guaira",
    slug: "vuelo-164-terremoto-deportados-2026",
    contenidoHtml: "<p>El 24 de junio de 2026, ICE deportó a 146 venezolanos en el llamado 'vuelo 164', que partió de Miami a las 7:23 a.m. y aterrizó en La Guaira a las 10:22 a.m. Horas después, dos fuertes terremotos (magnitudes 7.2 y 7.5) sacudieron la zona a las 6:04 y 6:05 p.m.; los deportados se encontraban alojados en el Hotel Santuario La Llanada, en La Guaira, que colapsó durante el sismo. Según reportes de organizaciones humanitarias, hubo muertos, heridos graves —incluyendo amputaciones— y solo 12 sobrevivientes rescatados de ese grupo específico, según Factchequeado.com. A nivel país, Venezuela reportó aproximadamente 2,000 muertos, 11,000 heridos y 16,000 desplazados por los sismos.</p><p>Ante consultas sobre responsabilidad, el Departamento de Seguridad Nacional (DHS) respondió que 'cuando una persona ya no está bajo custodia de ICE, ICE deja de tener responsabilidad', y se negó a divulgar los nombres de los pasajeros citando 'seguridad operacional'. Human Rights First ha documentado 138 vuelos de deportación a Venezuela con 25,183 deportados durante el segundo mandato de Trump, señalando una 'alarmante falta de transparencia' que impide a las familias planificar repatriaciones seguras.</p>",
    resumen: "146 venezolanos deportados en un vuelo de ICE el 24 de junio de 2026 quedaron atrapados cuando un terremoto colapsó el hotel donde estaban alojados en La Guaira; el DHS declinó asumir responsabilidad.",
    categoria: "Inmigración",
    paises: ["VE"],
    fuente: "Factchequeado.com",
    enlaceOriginal: "https://factchequeado.com/teexplicamos/20260701/deportados-ice-venezuela-terremotos-hotel/",
  },
  {
    titulo: "La Corte Suprema elimina el control judicial sobre el fin del TPS: se mantiene firme la fecha del 2 de octubre",
    slug: "corte-suprema-mullin-doe-tps-2026",
    contenidoHtml: "<p>El 25 de junio de 2026, la Corte Suprema de EE.UU. falló 6-3 en el caso <em>Mullin v. Doe</em>, eliminando la posibilidad de que jueces federales revisen las decisiones procedimentales del Departamento de Seguridad Nacional (DHS) sobre la terminación del TPS, según reportó El Tiempo Latino el 19 de agosto de 2026. Solo quedan abiertos los reclamos por violaciones constitucionales, un estándar mucho más difícil de cumplir en corte.</p><p>Para los beneficiarios venezolanos de TPS que recibieron su documentación antes del 5 de febrero de 2025 —cuya protección vence el 2 de octubre de 2026 por una orden judicial previa—, el fallo confirma que no habrá más apelaciones sobre el proceso de terminación en sí. Abogados de inmigración citados en el artículo recomiendan explorar de inmediato vías alternativas —asilo, ajuste por vía familiar o laboral— antes de que venza el plazo, ya que después de esa fecha el mensaje del gobierno ha sido directo: salir del país o enfrentar la deportación.</p>",
    resumen: "Un fallo de la Corte Suprema del 25 de junio de 2026 (Mullin v. Doe) eliminó el control judicial sobre el proceso de terminación del TPS, reforzando que la fecha límite del 2 de octubre de 2026 para venezolanos se mantiene sin más recursos legales sobre el procedimiento.",
    categoria: "Inmigración",
    paises: ["VE"],
    fuente: "El Tiempo Latino",
    enlaceOriginal: "https://eltiempolatino.com/2026/08/19/inmigracion/se-acaba-el-amparo-judicial-para-el-tps-y-el-parole/",
  },
  {
    titulo: "Venezuela, segunda nacionalidad con más deportaciones desde EE.UU. en junio de 2026",
    slug: "venezuela-segunda-nacionalidad-deportaciones-junio-2026",
    contenidoHtml: "<p>Un reporte publicado el 21 de agosto de 2026 por El Heraldo de México señala que Venezuela fue el segundo país de origen con más deportaciones desde Estados Unidos en junio de 2026, con 10,939 venezolanos deportados, solo detrás de México (15,773). Le siguieron Honduras (9,686), Guatemala (8,340), Colombia (5,255), Nicaragua (4,365) y El Salvador (3,182). Las órdenes de expulsión de ICE aumentaron un 30% respecto al mes anterior.</p><p>El mismo reporte señala que apenas el 1.9% de los migrantes que comparecieron en audiencias de corte de inmigración durante junio lograron algún tipo de alivio legal, reflejando vías judiciales cada vez más restringidas. El artículo cita como ejemplo el caso del 'vuelo 164', en el que 146 personas llegaron al aeropuerto de Maiquetía el 24 de junio, el mismo día en que un sismo colapsó el hotel donde estaban alojadas, dejando solo 12 sobrevivientes reportados por organizaciones no gubernamentales.</p>",
    resumen: "10,939 venezolanos fueron deportados desde EE.UU. en junio de 2026 —segunda nacionalidad con más deportaciones ese mes— mientras las órdenes de expulsión de ICE subieron 30% y solo el 1.9% de los casos en corte migratoria logró algún alivio legal.",
    categoria: "Inmigración",
    paises: ["VE"],
    fuente: "El Heraldo de México",
    enlaceOriginal: "https://heraldodemexico.com.mx/mundo/2026/8/21/venezolanos-son-la-segunda-nacionalidad-con-mas-deportados-desde-estados-unidos-durante-junio-873508.html",
  },
];
