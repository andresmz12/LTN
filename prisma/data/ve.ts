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
