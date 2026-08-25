// ============================================================
// NICARAGUA (NI) — Consulados, Trámites, Noticias
//
// ⚠️ CONTEXTO IMPORTANTE: Nicaragua cerró la mayoría de sus consulados en
// EE.UU. en enero de 2024 (Los Ángeles, Houston, San Francisco, New Orleans,
// Charlotte, Atlanta, Philadelphia, entre otros). A agosto de 2026 solo
// quedan 3 sedes operando: Miami, Nueva York y la Embajada en Washington D.C.
// Fuente: confidencial.digital (investigación) y consuladonicaraguense.com
// (actualizado 2026).
// País sin trámites previos en Compa — contenido 100% nuevo.
// ============================================================

export const consuladosNI = [
  {
    pais: "NI",
    ciudad: "Washington, D.C.",
    nombre: "Embajada de Nicaragua en Estados Unidos",
    direccion: "1627 New Hampshire Ave. NW, Washington, DC 20009",
    telefono: "(202) 939-6570",
    email: "Verificar en sitio oficial del consulado",
    horarioLunes: "Lunes a miércoles 8:30 AM - 3:30 PM (verificar vigencia)",
    horarioSabado: "Cerrado",
    servicios: ["Pasaporte", "Cédula", "Partida de Nacimiento", "Poderes"],
  },
  {
    pais: "NI",
    ciudad: "Miami, FL",
    nombre: "Consulado General de Nicaragua en Miami",
    direccion: "1330 West Flagler Street, Miami, FL 33135",
    telefono: "(305) 265-1415",
    email: "Verificar en sitio oficial del consulado",
    horarioLunes: "Lunes a jueves 8:00 AM - 12:00 PM (verificar vigencia; citas limitadas)",
    horarioSabado: "Cerrado",
    servicios: ["Pasaporte", "Cédula", "Partida de Nacimiento", "Poderes"],
  },
  {
    pais: "NI",
    ciudad: "New York, NY",
    nombre: "Consulado General de Nicaragua en Nueva York",
    direccion: "820 2nd Ave, Suite 802, New York, NY 10017",
    telefono: "(212) 998-1981",
    email: "Verificar en sitio oficial del consulado",
    horarioLunes: "Lunes a jueves 9:00 AM - 2:00 PM (verificar vigencia)",
    horarioSabado: "Cerrado",
    servicios: ["Pasaporte", "Cédula", "Partida de Nacimiento", "Poderes"],
  },
];

// ============================================================
// TRÁMITES — NI (país sin trámites previos - contenido nuevo)
// NOTA: dado el cierre de la mayoría de consulados, muchos nicaragüenses
// en regiones sin consulado deben usar envío postal de documentos o
// jornadas de consulado móvil, según reportó confidencial.digital.
// El TPS de Nicaragua ya terminó (8 de septiembre de 2025) — se documenta
// como situación informativa.
// ============================================================

export const tramitesNI = [
  {
    pais: "NI",
    titulo: "Pasaporte nicaragüense",
    slug: "pasaporte-ni",
    descripcion: "Trámite de pasaporte nicaragüense (nuevo o renovación) desde uno de los 3 consulados activos en EE.UU. (Miami, Nueva York, Washington D.C.).",
    contenidoHtml: "<p>Debido al cierre de la mayoría de consulados nicaragüenses en EE.UU. desde 2024, quienes viven fuera del área de Miami, Nueva York o Washington D.C. deben planear con anticipación: algunos consulados ofrecen envío postal de documentos o jornadas de consulado móvil. Verifica la opción disponible para tu región antes de iniciar el trámite.</p>",
    pasos: [
      "Completa el formulario de 'Solicitud de Servicio Migratorio'",
      "Reúne 4 fotografías tipo pasaporte (4x5 cm, fondo blanco)",
      "Agenda cita con el consulado de Miami, Nueva York o la Embajada en Washington D.C.",
      "Presenta la documentación completa el día de la cita (o por correo si tu consulado lo permite)",
      "Realiza el pago correspondiente",
      "Espera la emisión (4-6 semanas aproximadamente)",
    ],
    documentosNecesarios: [
      "Pasaporte anterior y 2 copias (si es renovación)",
      "Partida de nacimiento original y 2 copias",
      "Cédula nicaragüense y 2 copias",
      "2 copias de comprobante de residencia en EE.UU.",
      "4 fotografías tipo pasaporte",
    ],
    tiempoPromedio: "4-6 semanas",
    costo: "Aprox. $50 USD (verificar tarifa vigente por consulado)",
    linksExternos: [
      { texto: "Pasaporte nicaragüense en EE.UU. - Guía", url: "https://consuladonicaraguense.com/tramites/pasaporte-nicaraguense/" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "critico",
  },
  {
    pais: "NI",
    titulo: "Cédula de Identidad nicaragüense",
    slug: "cedula-identidad-ni",
    descripcion: "Trámite de la cédula de identidad nicaragüense desde el consulado en EE.UU.",
    contenidoHtml: "<p>La cédula de identidad nicaragüense puede gestionarse a través de los consulados activos, aunque el trámite generalmente requiere coordinación con el Consejo Supremo Electoral (CSE) en Nicaragua para su emisión final.</p>",
    pasos: [
      "Agenda cita en el consulado de Miami, Nueva York o la Embajada en Washington D.C.",
      "Presenta partida de nacimiento y documento de identidad previo (si aplica)",
      "Realiza el pago correspondiente",
      "Espera la emisión del documento (procesado en Nicaragua)",
    ],
    documentosNecesarios: [
      "Partida de nacimiento",
      "Cédula anterior (si aplica)",
      "Identificación vigente",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [
      { texto: "Cédula nicaragüense en EE.UU. - Guía", url: "https://tuconsuladodenicaragua.com/cedula-nicaragua/" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "critico",
  },
  {
    pais: "NI",
    titulo: "Partida de Nacimiento y Registro Civil",
    slug: "partida-nacimiento-ni",
    descripcion: "Solicitud de partida de nacimiento nicaragüense y registro de actos civiles desde el consulado.",
    contenidoHtml: "<p>El consulado nicaragüense puede gestionar la solicitud de partidas de nacimiento y otros registros civiles ante las autoridades nicaragüenses.</p>",
    pasos: [
      "Agenda cita en el consulado correspondiente",
      "Presenta identificación y datos del titular",
      "Realiza el pago correspondiente",
      "Espera la emisión del documento",
    ],
    documentosNecesarios: [
      "Identificación oficial",
      "Datos completos del titular (nombre, fecha y lugar de nacimiento)",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [],
    categoria: "Identidad y Documentos",
    prioridad: "alto",
  },
  {
    pais: "NI",
    titulo: "Apostilla de documentos nicaragüenses",
    slug: "apostilla-ni",
    descripcion: "Legalización de documentos nicaragüenses para uso en el extranjero.",
    contenidoHtml: "<p>La apostilla de documentos nicaragüenses (partidas, certificados, diplomas) se gestiona generalmente ante el Ministerio de Relaciones Exteriores en Nicaragua; verifica si tu consulado ofrece gestión de este trámite desde EE.UU.</p>",
    pasos: [
      "Verifica si el consulado gestiona la apostilla o si debe tramitarse directamente en Nicaragua",
      "Reúne el documento original",
      "Realiza la solicitud y el pago correspondiente",
      "Recibe el documento apostillado",
    ],
    documentosNecesarios: [
      "Documento original a apostillar",
      "Identificación oficial",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [
      { texto: "Guía de apostilla Nicaragua 2026", url: "https://nicaraguainformate.com/guia/apostillar-documentos-nicaragua-2026" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "importante",
  },
  {
    pais: "NI",
    titulo: "Poderes desde Estados Unidos",
    slug: "poderes-ni",
    descripcion: "Otorgamiento de poderes notariales ante el consulado nicaragüense para trámites en Nicaragua.",
    contenidoHtml: "<p>Los consulados nicaragüenses pueden autenticar poderes notariales para trámites legales o de propiedad en Nicaragua.</p>",
    pasos: [
      "Agenda cita en el consulado",
      "Lleva el proyecto de poder o solicita orientación",
      "Presenta identificación vigente",
      "Firma el poder ante el funcionario consular",
      "Paga la tarifa correspondiente",
    ],
    documentosNecesarios: [
      "Cédula o identificación vigente",
      "Datos completos del apoderado",
    ],
    tiempoPromedio: "Mismo día de la cita",
    costo: "Verificar en sitio oficial",
    linksExternos: [],
    categoria: "Identidad y Documentos",
    prioridad: "importante",
  },
  {
    pais: "NI",
    titulo: "Situación del TPS para nicaragüenses (terminado)",
    slug: "tps-ni",
    descripcion: "El TPS para Nicaragua terminó el 8 de septiembre de 2025, afectando a cerca de 2,900 beneficiarios.",
    contenidoHtml: "<p>El Estatus de Protección Temporal (TPS) para Nicaragua terminó el 8 de septiembre de 2025, según confirmó el Departamento de Seguridad Nacional. Aproximadamente 2,900 nicaragüenses se vieron afectados por esta terminación, que ocurrió junto con la de Honduras (51,000 personas) y dos designaciones de Venezuela (más de 500,000 afectados en conjunto entre los tres países).</p>",
    pasos: [
      "Consulta con un abogado de inmigración acreditado sobre alternativas legales disponibles",
      "Evalúa opciones como asilo, residencia permanente u otros beneficios migratorios si eres elegible",
      "Si decides salir de EE.UU., considera la aplicación CBP Home, que ofrece asistencia de viaje de hasta $2,600 USD y posibles exenciones de penalidad",
      "No tomes decisiones apresuradas sin asesoría legal",
    ],
    documentosNecesarios: [
      "Documentos de TPS previos (EAD, I-797, I-94)",
      "Identificación vigente",
    ],
    tiempoPromedio: "N/A - programa terminado, situación individual varía",
    costo: "Gratuito (consulta informativa)",
    linksExternos: [
      { texto: "USCIS - TPS", url: "https://www.uscis.gov/humanitarian/temporary-protected-status" },
    ],
    categoria: "Migración y Estatus",
    prioridad: "critico",
  },
];

// ============================================================
// NOTICIAS — NI
// ============================================================

export const noticiasNI = [
  {
    titulo: "TPS terminado para Nicaragua, Honduras y Venezuela: más de 500,000 migrantes pierden su estatus",
    slug: "fin-tps-nicaragua-honduras-venezuela-2026",
    contenidoHtml: "<p>Estados Unidos puso fin al Estatus de Protección Temporal (TPS) para Nicaragua, Honduras y Venezuela, afectando a más de 500,000 migrantes, según reportó La Nación el 17 de agosto de 2026. Para Nicaragua, la terminación afectó a cerca de 2,900 beneficiarios, con fecha de corte el 8 de septiembre de 2025 —la misma fecha aplicada a Honduras (51,000 afectados)—, mientras que las dos designaciones de Venezuela (268,200 y 348,200 personas) vencieron en octubre y noviembre de 2025 respectivamente.</p><p>El Departamento de Seguridad Nacional advirtió a los migrantes afectados sin otro estatus legal: 'salga ahora o sea deportado'. Entre las opciones disponibles para quienes deciden partir voluntariamente está la aplicación CBP Home, que ofrece hasta $2,600 dólares en asistencia de viaje y posibles exenciones de penalidad. Quienes califiquen pueden explorar otras vías migratorias como el asilo o la residencia permanente.</p>",
    resumen: "Más de 500,000 migrantes de Nicaragua, Honduras y Venezuela perdieron su TPS, con el gobierno de EE.UU. instando a quienes no tengan otro estatus legal a salir del país.",
    categoria: "Inmigración",
    paises: ["NI", "HN", "VE"],
    fuente: "La Nación",
    enlaceOriginal: "https://www.lanacion.com.ar/estados-unidos/migraciones/noticias-del-tps-mas-de-500000-migrantes-de-tres-paises-latinos-pierden-su-estatus-en-estados-unidos-nid17082026/",
  },
  {
    titulo: "Solo 3 consulados nicaragüenses siguen operando en EE.UU. tras cierres masivos de 2024",
    slug: "consulados-nicaragua-eeuu-cierre-2026",
    contenidoHtml: "<p>De la red consular que Nicaragua mantenía en Estados Unidos, solo 3 sedes continúan operando en 2026: Miami, Nueva York y la Embajada en Washington D.C., según confirmó el sitio especializado consuladonicaraguense.com. El gobierno nicaragüense cerró en enero de 2024 los consulados de Los Ángeles, Houston, San Francisco, Nueva Orleans, Charlotte, Atlanta y Filadelfia, según había documentado previamente Confidencial.</p><p>El cierre concentró la demanda de aproximadamente 500,000 nicaragüenses en EE.UU. en las tres sedes restantes, generando citas limitadas (algunas con disponibilidad de apenas 30 citas diarias) y dificultades de acceso telefónico. Quienes viven en zonas sin consulado deben recurrir a envío postal de documentos o esperar jornadas de consulado móvil, según reportes de medios especializados.</p>",
    resumen: "Nicaragua mantiene solo 3 consulados activos en EE.UU. (Miami, Nueva York, Washington D.C.) tras el cierre de al menos 7 sedes en 2024, afectando el acceso a trámites de cientos de miles de nicaragüenses.",
    categoria: "Comunidad",
    paises: ["NI"],
    fuente: "Confidencial / Consuladonicaraguense.com",
    enlaceOriginal: "https://confidencial.digital/migrantes/asi-funcionan-los-ultimos-consulados-nicas-que-quedan-en-estados-unidos/",
  },
];
