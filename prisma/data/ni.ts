// NICARAGUA (NI) — Consulados, Trámites, Noticias
//
// ⚠️ CONTEXTO IMPORTANTE: Nicaragua cerró la mayoría de sus consulados en
// EE.UU. en enero de 2024 (Los Ángeles, Houston, San Francisco, New Orleans,
// Charlotte, Atlanta, Philadelphia, entre otros). A agosto de 2026 SE
// CONFIRMA que solo quedan 3 sedes operando: Miami, Nueva York y la
// Embajada en Washington D.C. — verificado nuevamente en agosto 2026 vía
// confidencial.digital ("Así funcionan los últimos consulados nicas que
// quedan en Estados Unidos") y consuladonicaraguense.com. Ninguna de las
// 3 sedes ofrece agendamiento de citas en línea; solo atienden un cupo
// limitado de ~30 citas diarias y reciben personas sin cita solo si algún
// cupo reservado no se presenta. Ninguna fuente consultada publica un
// correo electrónico de contacto directo para las 3 sedes — se marca
// "Verificar en sitio oficial" en los 3 casos.
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
    horarioLunes: "Lunes a miércoles 8:30 AM - 3:30 PM (atención general); servicios de pasaporte lunes a viernes 9:30 AM - 2:00 PM; sin atención al público jueves y viernes para otros trámites (confirmado agosto 2026, confidencial.digital)",
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
    horarioLunes: "Lunes a jueves 8:00 AM - 12:00 PM; viernes reservado solo para agendar citas (sin atención directa al público); ~30 citas diarias, cupos limitados (confirmado agosto 2026, confidencial.digital)",
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
    horarioLunes: "Lunes a jueves 9:00 AM - 2:00 PM; ~30 citas diarias, cupos limitados (confirmado agosto 2026, confidencial.digital; una fuente secundaria, consuladonicaraguense.com, reporta lunes a viernes 8 AM - 1 PM — verificar horario exacto vigente en sitio oficial)",
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
    contenidoHtml: "<p>Debido al cierre de la mayoría de consulados nicaragüenses en EE.UU. desde enero de 2024 (se cerraron las sedes de Los Ángeles, Houston, San Francisco, Nueva Orleans, Charlotte, Atlanta y Filadelfia, entre otras), quienes viven fuera del área de Miami, Nueva York o Washington D.C. deben planear el trámite con más anticipación de lo habitual. Las 3 sedes que quedan activas atienden un cupo limitado de aproximadamente 30 citas diarias cada una, concentrando la demanda de cerca de 500,000 nicaragüenses residentes en EE.UU.</p><p>Ninguno de los 3 consulados ofrece agendamiento de citas por internet: la cita se gestiona por vía telefónica o presentándose personalmente durante el horario de atención. En Miami, por ejemplo, los viernes están reservados exclusivamente para agendar citas futuras, sin atención de trámites ese día. Si vives lejos de las 3 ciudades con consulado activo, consulta directamente por teléfono si existe alguna jornada de consulado móvil o la posibilidad de enviar documentación por correo postal, ya que la disponibilidad de estas alternativas varía y no está garantizada de forma permanente.</p><p>Lleva toda tu documentación completa y en el formato exigido, ya que la limitada capacidad de citas hace que un trámite incompleto o rechazado pueda significar semanas de espera adicional para conseguir una nueva cita.</p>",
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
    contenidoHtml: "<p>La cédula de identidad nicaragüense puede solicitarse a través de los 3 consulados activos en EE.UU. (Miami, Nueva York y la Embajada en Washington D.C.), aunque el trámite generalmente requiere coordinación con el Consejo Supremo Electoral (CSE) en Nicaragua para su emisión final, lo que puede extender considerablemente el tiempo de espera frente a una solicitud hecha dentro del país.</p><p>Debido a la reducción de sedes consulares desde 2024, es común que las citas se agoten con rapidez; se recomienda llamar directamente al consulado que corresponda para confirmar si la solicitud de cédula requiere cita separada del trámite de pasaporte o si pueden gestionarse en la misma visita. Ten en cuenta que la cédula es el documento de identidad exigido en Nicaragua para trámites bancarios, notariales y electorales, por lo que mantenerla vigente es importante incluso viviendo en el exterior.</p><p>Si tu cédula anterior fue extraviada, además de los documentos habituales probablemente se te pida una declaración jurada o denuncia de pérdida; consulta con el consulado los requisitos específicos para tu caso antes de agendar la cita.</p>",
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
    contenidoHtml: "<p>El consulado nicaragüense puede gestionar la solicitud de partidas de nacimiento y otros registros civiles (matrimonio, defunción) ante el Registro del Estado Civil de las Personas en Nicaragua. Este documento es indispensable para trámites migratorios en EE.UU. (como peticiones familiares o solicitudes de asilo) y para trámites propios en Nicaragua como la cédula o el pasaporte.</p><p>El tiempo de emisión depende de que el municipio nicaragüense donde ocurrió el nacimiento localice y remita el registro correspondiente al consulado, por lo que puede tardar más si se trata de un municipio con procesos más lentos o si el registro original tiene errores que deban corregirse primero. Si tu partida de nacimiento tiene datos incorrectos (nombre mal escrito, fecha errónea), ese error debe corregirse en Nicaragua antes de que el consulado pueda emitir una copia certificada válida.</p><p>Para actos civiles ocurridos en EE.UU. (nacimiento de hijos de padres nicaragüenses, matrimonios), consulta con el consulado sobre el proceso de inscripción consular, que permite registrar el acto ante Nicaragua sin necesidad de viajar.</p>",
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
    contenidoHtml: "<p>La apostilla es el sello internacional que certifica la autenticidad de un documento nicaragüense (partida de nacimiento, certificado de matrimonio, título universitario, certificado de notas) para que tenga validez legal en el extranjero, incluido EE.UU. Este trámite se gestiona ante el Ministerio de Relaciones Exteriores en Managua, ya que Nicaragua es parte del Convenio de La Haya de 1961 sobre apostilla.</p><p>Desde EE.UU., la apostilla no se tramita directamente en los consulados: en la práctica, la mayoría de nicaragüenses debe enviar el documento original a un familiar o gestor de confianza en Nicaragua para que lo presente físicamente ante el Ministerio, o contratar un servicio de gestoría especializado. Verifica con tu consulado si actualmente ofrecen algún servicio de intermediación para este trámite, ya que esta oferta puede cambiar.</p><p>Si necesitas apostillar un título o certificado de estudios para fines de homologación académica en EE.UU., asegúrate de apostillar tanto el título como el certificado de notas (pensum), ya que la mayoría de evaluadoras de credenciales en EE.UU. exige ambos documentos.</p>",
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
    contenidoHtml: "<p>Los consulados nicaragüenses pueden autenticar poderes notariales que permiten a una persona en Nicaragua (el apoderado) actuar en tu nombre para trámites legales, bancarios o de propiedad, sin que tengas que viajar. Es uno de los trámites más solicitados por la comunidad nicaragüense en EE.UU. dado que muchos mantienen propiedades, cuentas bancarias o asuntos familiares pendientes en Nicaragua.</p><p>Es recomendable llevar un borrador o proyecto del poder ya redactado (muchas veces preparado por un abogado en Nicaragua que conoce el trámite específico que se realizará) para que el funcionario consular solo deba revisarlo y autenticarlo, ya que esto agiliza la cita dado el cupo limitado de cada consulado. Si no tienes un proyecto de poder, solicita orientación al personal consular sobre el formato requerido antes de tu cita.</p><p>El poder debe especificar con claridad las facultades otorgadas (venta de propiedad, representación bancaria, trámites judiciales, etc.), ya que un poder demasiado genérico puede ser rechazado por notarías o instituciones en Nicaragua al momento de usarlo.</p>",
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
    contenidoHtml: "<p>El Estatus de Protección Temporal (TPS) para Nicaragua terminó el 8 de septiembre de 2025, según confirmó el Departamento de Seguridad Nacional. Aproximadamente 2,900 nicaragüenses se vieron afectados por esta terminación, que ocurrió junto con la de Honduras (51,000 personas) y dos designaciones de Venezuela (más de 500,000 afectados en conjunto entre los tres países).</p><p>Desde entonces, el gobierno de EE.UU. ha endurecido su postura frente a la migración nicaragüense: en febrero de 2026 la Embajada de EE.UU. en Managua publicó una advertencia pública afirmando que \"no hay asilo político\" para migrantes nicaragüenses y que quienes ingresen de forma irregular enfrentan cárcel y deportación. En paralelo, las deportaciones se han acelerado: solo entre enero y principios de febrero de 2026 se registraron 1,252 nicaragüenses deportados en 11 vuelos, y el conteo acumulado entre 2025 y 2026 supera los 15,000 retornos, según reportes de Artículo 66 e Infobae.</p><p>A pesar del riesgo, la mayoría de la comunidad nicaragüense no ha optado por el retorno voluntario masivo: persisten cerca de 211,890 casos migratorios pendientes en cortes de EE.UU. y 129,488 órdenes de deportación acumuladas, de acuerdo con datos citados por Infobae en junio de 2026. Ante este panorama, la recomendación constante de organizaciones de apoyo migratorio es no tomar decisiones sin asesoría legal individualizada, ya que cada caso (tiempo de residencia, historial migratorio, vínculos familiares) puede tener alternativas distintas.</p>",
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
  {
    pais: "NI",
    titulo: "Matrícula Consular Nicaragüense",
    slug: "matricula-consular-ni",
    descripcion: "Documento de identificación que emite el consulado de Nicaragua a sus connacionales residentes en EE.UU., útil como identificación secundaria ante bancos, escuelas y algunas autoridades locales.",
    contenidoHtml: "<p>La Matrícula Consular es un documento de identificación emitido por el consulado nicaragüense que certifica que la persona es ciudadana nicaragüense registrada ante esa sede consular. No sustituye una identificación migratoria de EE.UU., pero en muchas ciudades es aceptada por bancos, algunas oficinas de gobierno local, escuelas y clínicas comunitarias como identificación secundaria, especialmente útil para quienes no cuentan con licencia de conducir o identificación estatal.</p><p>Su aceptación varía por institución y estado, por lo que se recomienda confirmar previamente si el banco, escuela o entidad donde se piensa usar la matrícula la reconoce como documento válido. Algunos departamentos de policía locales y bancos comunitarios en ciudades con alta población nicaragüense sí la aceptan de forma habitual.</p><p>El trámite se realiza directamente en el consulado (Miami, Nueva York o la Embajada en Washington D.C.) y generalmente requiere solo prueba de identidad y de nacionalidad nicaragüense, sin necesidad de coordinación adicional con autoridades en Nicaragua, por lo que suele ser más rápido que la cédula o el pasaporte.</p>",
    pasos: [
      "Agenda cita en el consulado de Miami, Nueva York o la Embajada en Washington D.C.",
      "Presenta identificación nicaragüense vigente o vencida (pasaporte o cédula)",
      "Presenta prueba de dirección en EE.UU. si el consulado lo solicita",
      "Realiza el pago correspondiente",
      "Recibe la matrícula consular (algunos consulados la emiten el mismo día)",
    ],
    documentosNecesarios: [
      "Pasaporte o cédula nicaragüense (vigente o vencida)",
      "Partida de nacimiento (si no se cuenta con cédula o pasaporte)",
      "Comprobante de domicilio en EE.UU.",
    ],
    tiempoPromedio: "Mismo día o pocos días, según consulado",
    costo: "Verificar en sitio oficial",
    linksExternos: [
      { texto: "Trámites - Consulado de Nicaragua en USA", url: "https://consuladonicaraguense.com/tramites/" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "relevante",
  },
  {
    pais: "NI",
    titulo: "Homologación de estudios y títulos nicaragüenses en EE.UU.",
    slug: "homologacion-estudios-ni",
    descripcion: "Proceso para que diplomas, títulos universitarios y certificados de notas obtenidos en Nicaragua sean reconocidos (evaluados) para trabajar, estudiar o ejercer una profesión en EE.UU.",
    contenidoHtml: "<p>A diferencia de otros trámites de este listado, la homologación (o \"credential evaluation\") no se gestiona en el consulado nicaragüense sino ante una agencia evaluadora de credenciales acreditada en EE.UU. Estas agencias comparan el plan de estudios nicaragüense con el sistema educativo estadounidense y emiten un informe que indica a qué nivel equivale el título (por ejemplo, bachillerato, licenciatura o su equivalente en años de estudio), documento que luego se presenta a universidades, empleadores, juntas de licencias profesionales o USCIS según el caso.</p><p>El primer paso, y el único que sí involucra al consulado o al gobierno nicaragüense, es apostillar el título y el certificado de notas (pensum) en el Ministerio de Relaciones Exteriores en Managua, ya que la mayoría de evaluadoras exige documentos apostillados y, en algunos casos, traducidos oficialmente al inglés. Sin esa apostilla, muchas agencias evaluadoras rechazan la solicitud o piden documentación adicional que alarga el proceso.</p><p>Elegir la agencia evaluadora correcta depende del propósito: para inmigración (por ejemplo, una petición basada en empleo) suele exigirse una evaluación \"documento por documento\"; para trabajar en profesiones reguladas (enfermería, medicina, ingeniería, docencia) el colegio profesional o junta de licencias de cada estado indica qué evaluadora acepta y qué tipo de reporte requiere. Investiga los requisitos específicos de tu estado y profesión antes de pagar por una evaluación, ya que no todas las agencias son aceptadas por todas las instituciones.</p>",
    pasos: [
      "Reúne el título original y el certificado de notas (pensum) de Nicaragua",
      "Apostilla ambos documentos ante el Ministerio de Relaciones Exteriores en Managua (directamente o mediante un gestor/familiar de confianza)",
      "Investiga qué agencia evaluadora de credenciales es aceptada por tu universidad, empleador o junta de licencias en tu estado",
      "Envía los documentos apostillados (y su traducción certificada si se requiere) a la agencia evaluadora elegida",
      "Recibe el informe de evaluación y preséntalo ante la institución correspondiente",
    ],
    documentosNecesarios: [
      "Título original apostillado",
      "Certificado de notas / pensum apostillado",
      "Traducción certificada al inglés (si la agencia lo exige)",
      "Identificación vigente",
    ],
    tiempoPromedio: "Varias semanas a algunos meses, según la agencia evaluadora",
    costo: "Verificar en sitio oficial (varía según la agencia evaluadora y tipo de informe)",
    linksExternos: [
      { texto: "10 organizaciones para validar títulos extranjeros en EE.UU.", url: "https://laredhispana.org/informate/educacion/homologacion-titulo-eeuu" },
      { texto: "Guía para apostillar diplomas y títulos en Nicaragua", url: "https://www.divergentes.com/guia-apostillar-diplomas-titulos-certificados/" },
    ],
    categoria: "Educación",
    prioridad: "importante",
  },
  {
    pais: "NI",
    titulo: "Licencia de conducir nicaragüense: traducción y uso en EE.UU.",
    slug: "licencia-conducir-ni",
    descripcion: "Qué hacer con una licencia de conducir nicaragüense al llegar a EE.UU.: traducción oficial, validez temporal y el proceso para obtener una licencia estatal.",
    contenidoHtml: "<p>Nicaragua no tiene un convenio de reciprocidad ni un acuerdo de canje de licencias con EE.UU., por lo que una licencia nicaragüense no puede cambiarse automáticamente por una licencia estadounidense en la mayoría de los estados. Sin embargo, muchos estados permiten conducir temporalmente con una licencia extranjera vigente (a veces acompañada de un permiso internacional de conducir o de una traducción certificada), por un período limitado que varía según el estado de residencia.</p><p>Para trámites que requieran identificar el historial de manejo o para presentar la licencia ante el DMV al solicitar la licencia estatal, generalmente se exige una traducción oficial certificada de la licencia nicaragüense al inglés, realizada por un servicio de traducción certificado (no una traducción informal). Verifica con el DMV de tu estado si aceptan la licencia nicaragüense como comprobante de experiencia de manejo previa, ya que algunos estados eximen del examen práctico a quienes demuestran experiencia previa en su país de origen.</p><p>Para obtener la licencia de conducir del estado donde resides, generalmente deberás presentar prueba de identidad, prueba de residencia y, dependiendo de tu estatus migratorio, un número de Seguro Social o una constancia de inelegibilidad para uno (SSA denial letter). Los requisitos varían significativamente entre estados: varios estados de EE.UU. permiten licencias de conducir independientemente del estatus migratorio, mientras que otros lo restringen. Consulta directamente con el DMV de tu estado, ya que este trámite no depende del consulado nicaragüense.</p>",
    pasos: [
      "Verifica en el sitio web del DMV de tu estado los requisitos para licencia de conducir según tu estatus migratorio",
      "Obtén una traducción certificada de tu licencia nicaragüense si el DMV la solicita",
      "Reúne prueba de identidad y de residencia en el estado",
      "Agenda cita en el DMV local",
      "Realiza el examen escrito y/o práctico según lo requiera tu estado",
    ],
    documentosNecesarios: [
      "Licencia de conducir nicaragüense vigente",
      "Traducción certificada al inglés (si se requiere)",
      "Prueba de identidad (pasaporte, matrícula consular u otro documento aceptado)",
      "Prueba de residencia en el estado",
    ],
    tiempoPromedio: "Varía según el estado",
    costo: "Verificar en sitio oficial del DMV de tu estado",
    linksExternos: [
      { texto: "Traducir licencia de conducir nicaragüense", url: "https://ni.empresadetraduccion.com/licencia-de-conducir/" },
    ],
    categoria: "Transporte",
    prioridad: "relevante",
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
  {
    titulo: "EE.UU. deportó a más de 1,250 nicaragüenses en solo cinco semanas",
    slug: "deportaciones-nicaragua-enero-febrero-2026",
    contenidoHtml: "<p>Estados Unidos deportó a 1,252 migrantes nicaragüenses entre inicios de enero y principios de febrero de 2026, según reportó el medio independiente Artículo 66 el 12 de febrero de 2026, citando información de un funcionario de la administración Trump. Once vuelos directos aterrizaron en el Aeropuerto Internacional Augusto C. Sandino entre el 3 de enero y el 5 de febrero; solo enero concentró 1,128 deportaciones en diez vuelos, el segundo mes con más deportados en el período reciente, después de diciembre de 2025, que registró 1,372 personas retornadas.</p><p>El acumulado combinado de 2025 y 2026 alcanza 8,683 nicaragüenses deportados, de acuerdo con el conteo del medio. El reportaje documentó además el caso de una mujer nicaragüense embarazada, en su octavo mes de gestación, detenida por agentes de Inmigración y Control de Aduanas (ICE) en Los Ángeles cuando salía de una cita prenatal y posteriormente deportada. Artículo 66 opera desde el exilio debido a la persecución del gobierno nicaragüense contra medios independientes.</p>",
    resumen: "Estados Unidos deportó a 1,252 nicaragüenses en cinco semanas (enero-febrero de 2026) en 11 vuelos, elevando el acumulado 2025-2026 a 8,683 personas retornadas.",
    categoria: "Inmigración",
    paises: ["NI"],
    fuente: "Artículo 66",
    enlaceOriginal: "https://www.articulo66.com/2026/02/12/estados-unidos-deportaciones-nicaragua-1252-enero-2026/",
  },
  {
    titulo: "Embajada de EE.UU. advierte a nicaragüenses: 'No hay asilo político, no arriesgues tu futuro'",
    slug: "embajada-eeuu-advertencia-asilo-nicaragua-2026",
    contenidoHtml: "<p>La Embajada de Estados Unidos en Managua difundió el 26 de febrero de 2026 un mensaje público advirtiendo a la población nicaragüense sobre los riesgos de la migración irregular, afirmando que \"no hay asilo político\" para migrantes nicaragüenses y que quienes ingresen ilegalmente a EE.UU. enfrentarán cárcel y deportación al país de origen o a un tercer país, sin posibilidad de quedar en libertad en territorio estadounidense, según reportó Artículo 66.</p><p>El comunicado señaló que un 8% de la población de Nicaragua migró de forma irregular a EE.UU. entre febrero de 2021 y enero de 2025, y que las remesas enviadas por nicaragüenses alcanzaron los 6,200 millones de dólares, equivalentes a un 37% del PIB del país —una cifra que subraya la dependencia económica de miles de familias nicaragüenses de sus parientes migrantes—. El mensaje se da en un contexto de mayor restricción migratoria bajo la administración Trump, que ha propuesto además limitar la autorización de trabajo para solicitantes de asilo.</p>",
    resumen: "La Embajada de EE.UU. en Managua advirtió públicamente que no existe asilo político para nicaragüenses y que la migración irregular resulta en cárcel y deportación, en medio de un endurecimiento de la política migratoria.",
    categoria: "Inmigración",
    paises: ["NI"],
    fuente: "Artículo 66",
    enlaceOriginal: "https://www.articulo66.com/2026/02/26/embajada-ee-uu-nicaragua-alerta-migrantes-ilegales-enfrentaran-carcel-deportacion/",
  },
  {
    titulo: "Remesas a Nicaragua suben en 2026 pese al aumento de las deportaciones desde EE.UU.",
    slug: "remesas-nicaragua-suben-2026",
    contenidoHtml: "<p>Las remesas familiares hacia Nicaragua crecieron 7.5% en el primer trimestre de 2026 pese al incremento de las deportaciones desde Estados Unidos, según un análisis del politólogo Manuel Orozco citado por Infobae el 21 de junio de 2026. Más de 15,000 nicaragüenses fueron deportados entre enero de 2025 y junio de 2026, y se contabilizan 211,890 casos migratorios pendientes en cortes de EE.UU. junto con 129,488 órdenes de deportación acumuladas, pero esto no se ha traducido en un retorno masivo de la población migrante ni en una caída sostenida de las remesas.</p><p>El crecimiento se explica porque el monto promedio enviado por cada remitente aumentó 6% en 2026, compensando una caída del 2% en el número de personas que envían remesas; se estima que unos 650,000 nicaragüenses en EE.UU. envían dinero regularmente a sus familias. Las remesas desde Costa Rica, el segundo país receptor de migración nicaragüense, también subieron 7% en el primer trimestre. Analistas de Confidencial han advertido, no obstante, que la incertidumbre por las políticas migratorias y económicas de EE.UU. podría generar una desaceleración de las remesas hacia el resto de 2026.</p>",
    resumen: "Pese al aumento de deportaciones, las remesas hacia Nicaragua crecieron 7.5% en el primer trimestre de 2026 porque cada remitente envía más dinero en promedio, aunque persiste la incertidumbre sobre el resto del año.",
    categoria: "Economía",
    paises: ["NI"],
    fuente: "Infobae",
    enlaceOriginal: "https://www.infobae.com/nicaragua/2026/06/21/remesas-hacia-nicaragua-suben-en-2026-pese-al-alza-de-las-deportaciones-desde-estados-unidos/",
  },
];
