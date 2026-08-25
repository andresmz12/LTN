// ============================================================
// CUBA (CU) — Consulados, Trámites, Noticias
//
// NOTA: Cuba mantiene UNA SOLA oficina consular en todo EE.UU. (la Sección
// Consular de la Embajada en Washington D.C.). Esto es correcto y no un
// error de cobertura — a diferencia de otros países latinoamericanos, Cuba
// no tiene consulados regionales en ciudades como Miami o Nueva York debido
// a la naturaleza histórica de las relaciones diplomáticas EE.UU.-Cuba.
// Fuente: consuladocuba.com / cubaminrex.cu
// País sin trámites previos en Compa — contenido 100% nuevo.
// ============================================================

export const consuladosCU = [
  {
    pais: "CU",
    ciudad: "Washington, D.C.",
    nombre: "Embajada de Cuba en Estados Unidos (Sección Consular)",
    direccion: "2630 16th St. NW, Washington, DC 20009",
    telefono: "(202) 797-8518",
    email: "recepcion@sicuw.org",
    horarioLunes: "Lunes a viernes 9:00 AM - 12:00 PM",
    horarioSabado: "Cerrado",
    servicios: ["Pasaporte", "Carné de Identidad", "Partida de Nacimiento", "Poderes", "Habilitación de Pasaporte"],
  },
];

// ============================================================
// TRÁMITES — CU (país sin trámites previos - contenido nuevo)
// Fuente: cubaminrex.cu (Resolución 38/2023 MINREX), directoriocubano.info
// NOTA: Cuba no está actualmente en la lista de países con designación TPS
// vigente en EE.UU. — no se incluye. Los cubanos en EE.UU. suelen acceder
// a la residencia mediante la Ley de Ajuste Cubano, no mediante TPS.
// ============================================================

export const tramitesCU = [
  {
    pais: "CU",
    titulo: "Pasaporte cubano (residentes en el exterior)",
    slug: "pasaporte-cu",
    descripcion: "Trámite de pasaporte cubano para residentes en EE.UU., con tarifas establecidas por el MINREX (Resolución 38/2023).",
    contenidoHtml: "<p>El pasaporte cubano para residentes en el exterior se tramita en la Sección Consular de la Embajada de Cuba en Washington D.C., la única oficina consular cubana en EE.UU. El pago debe realizarse en moneda extranjera.</p>",
    pasos: [
      "Agenda cita en la Sección Consular de la Embajada de Cuba",
      "Reúne la documentación de identidad y nacionalidad requerida",
      "Acude a la cita en Washington D.C.",
      "Realiza el pago correspondiente en dólares",
      "Espera la emisión del pasaporte",
    ],
    documentosNecesarios: [
      "Carné de identidad cubano (si se tiene)",
      "Partida de nacimiento cubana",
      "Pasaporte anterior (si es renovación)",
      "Comprobante de residencia en EE.UU.",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "$180 USD (adultos) / $140 USD (menores) - vigencia 10 años (adultos) / 5 años (menores)",
    linksExternos: [
      { texto: "Precios pasaporte cubano 2026", url: "https://www.directoriocubano.info/cuba/gaceta-oficial-cambios-en-precio-del-pasaporte-cubano-para-residentes-en-el-exterior-cuanto-cuesta-en-2026/" },
      { texto: "Servicios Consulares - Cubaminrex", url: "https://misiones.cubaminrex.cu/es/articulo/relacion-de-servicios-consulares-y-precios" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "critico",
  },
  {
    pais: "CU",
    titulo: "Habilitación y Prórroga de Pasaporte",
    slug: "habilitacion-pasaporte-cu",
    descripcion: "Trámite para habilitar o prorrogar la vigencia del pasaporte cubano desde el exterior.",
    contenidoHtml: "<p>Los cubanos residentes en el exterior deben mantener habilitado su pasaporte mediante trámites periódicos ante la Sección Consular, requisito distintivo del sistema migratorio cubano.</p>",
    pasos: [
      "Agenda cita en la Sección Consular de la Embajada de Cuba",
      "Presenta el pasaporte vigente",
      "Realiza el pago correspondiente",
      "Recibe la habilitación o prórroga",
    ],
    documentosNecesarios: [
      "Pasaporte cubano vigente",
      "Comprobante de residencia en EE.UU.",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [
      { texto: "Servicios Consulares - Cubaminrex", url: "https://misiones.cubaminrex.cu/es/articulo/relacion-de-servicios-consulares-y-precios" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "alto",
  },
  {
    pais: "CU",
    titulo: "Partida de Nacimiento y Certificados del Registro Civil",
    slug: "partida-nacimiento-cu",
    descripcion: "Solicitud de partidas de nacimiento, matrimonio y otros certificados del Registro Civil cubano desde el exterior.",
    contenidoHtml: "<p>La Sección Consular puede gestionar la solicitud de certificados del Registro del Estado Civil cubano para trámites en EE.UU. o en Cuba.</p>",
    pasos: [
      "Agenda cita en la Sección Consular",
      "Presenta identificación y datos del titular del certificado",
      "Realiza el pago correspondiente",
      "Espera la emisión del documento (procesado en Cuba)",
    ],
    documentosNecesarios: [
      "Identificación oficial",
      "Datos completos del titular (nombre, fecha y lugar de nacimiento)",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [
      { texto: "Servicios Consulares - Cubaminrex", url: "https://misiones.cubaminrex.cu/es/articulo/relacion-de-servicios-consulares-y-precios" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "alto",
  },
  {
    pais: "CU",
    titulo: "Poderes desde Estados Unidos",
    slug: "poderes-cu",
    descripcion: "Otorgamiento de poderes notariales ante la Sección Consular para trámites legales en Cuba.",
    contenidoHtml: "<p>La Sección Consular puede autenticar poderes notariales válidos para trámites de bienes, herencias u otros asuntos legales en Cuba.</p>",
    pasos: [
      "Agenda cita en la Sección Consular",
      "Lleva el proyecto de poder o solicita orientación",
      "Presenta identificación vigente",
      "Firma el poder ante el funcionario consular",
      "Paga la tarifa correspondiente",
    ],
    documentosNecesarios: [
      "Carné de identidad o pasaporte cubano",
      "Datos completos del apoderado",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Verificar en sitio oficial",
    linksExternos: [
      { texto: "Servicios Consulares - Cubaminrex", url: "https://misiones.cubaminrex.cu/es/articulo/relacion-de-servicios-consulares-y-precios" },
    ],
    categoria: "Identidad y Documentos",
    prioridad: "importante",
  },
  {
    pais: "CU",
    titulo: "Residencia Permanente vía Ley de Ajuste Cubano (para beneficiarios de parole)",
    slug: "ley-ajuste-cubano",
    descripcion: "Cubanos inspeccionados y admitidos o con parole humanitario en EE.UU. pueden solicitar la residencia permanente tras un año y un día en el país.",
    contenidoHtml: "<p>La Ley de Ajuste Cubano permite a los cubanos que fueron inspeccionados y admitidos, o que ingresaron con parole humanitario, solicitar la residencia permanente después de un año y un día de presencia física en Estados Unidos. En 2026, el gobierno de EE.UU. está revisando los casos de aproximadamente 532,000 migrantes del programa CHNV (Cuba, Haití, Nicaragua, Venezuela) que ingresaron antes de la terminación del programa en junio de 2025, buscando fraude o irregularidades — aunque la revisión no implica deportación automática.</p>",
    pasos: [
      "Verifica que hayas sido inspeccionado y admitido o ingresado con parole",
      "Confirma que cuentas con un año y un día de presencia física en EE.UU.",
      "Consulta con un abogado de inmigración sobre tu elegibilidad específica",
      "Prepara tu solicitud de residencia (formulario I-485) con toda la documentación",
      "Si tu caso de parole está siendo revisado, reúne evidencia de que no hubo fraude ni irregularidades en tu solicitud original",
    ],
    documentosNecesarios: [
      "Documento de parole o comprobante de inspección y admisión",
      "Identificación vigente",
      "Comprobante de presencia física en EE.UU. (más de un año y un día)",
    ],
    tiempoPromedio: "Verificar en sitio oficial (varía según caso individual)",
    costo: "Costos de USCIS según formulario I-485; consulta legal recomendada",
    linksExternos: [
      { texto: "USCIS", url: "https://www.uscis.gov" },
    ],
    categoria: "Migración y Estatus",
    prioridad: "critico",
  },
];

// ============================================================
// NOTICIAS — CU
// ============================================================

export const noticiasCU = [
  {
    titulo: "EE.UU. revisa casos de 532,000 migrantes del programa CHNV, incluyendo cubanos con parole",
    slug: "revision-casos-chnv-cubanos-2026",
    contenidoHtml: "<p>La administración estadounidense está revisando las admisiones migratorias autorizadas durante el gobierno de Biden, específicamente del programa CHNV (Cuba, Haití, Nicaragua, Venezuela), según reportó Periódico Cubano el 13 de agosto de 2026. El funcionario Tom Homan confirmó que las autoridades están verificando 'fraude, irregularidades y posibles amenazas a la seguridad' en los expedientes.</p><p>Aproximadamente 532,000 migrantes de las cuatro nacionalidades ingresaron a través de CHNV antes de la terminación formal del programa en junio de 2025, y los cubanos representan una porción significativa de ese grupo. La revisión no implica deportación automática: quienes ya obtuvieron residencia permanente u otro estatus legal probablemente no enfrentarán consecuencias, y los cubanos se benefician de la Ley de Ajuste Cubano, que permite solicitar la residencia a quienes fueron inspeccionados, admitidos o con parole. El riesgo mayor recae en quienes presentaron documentación fraudulenta, declaraciones falsas u omisiones materiales.</p>",
    resumen: "EE.UU. revisa los expedientes de 532,000 migrantes del programa CHNV, incluidos cubanos con parole humanitario, buscando fraude o irregularidades, aunque la revisión no implica deportación automática.",
    categoria: "Inmigración",
    paises: ["CU", "NI", "VE"],
    fuente: "Periódico Cubano",
    enlaceOriginal: "https://www.periodicocubano.com/alerta-para-cubanos-que-entraron-con-parole-de-biden-eeuu-revisara-los-casos/",
  },
  {
    titulo: "Cubanos con parole podrán aplicar a la residencia bajo la Ley de Ajuste Cubano tras fallo judicial",
    slug: "cubanos-parole-ley-ajuste-fallo-judicial",
    contenidoHtml: "<p>Un juez federal de Massachusetts emitió una orden que obligó a la administración Trump a reanudar el procesamiento de solicitudes migratorias de personas que ingresaron a EE.UU. bajo parole humanitario, según reportó Univision Miami. La subdirectora de USCIS, Kika Scott, confirmó que 'se levanta la suspensión a las solicitudes migratorias de los cubanos, venezolanos, nicaragüenses y haitianos'.</p><p>Gracias a este fallo, los cubanos que llevan un año y un día bajo estatus de parole humanitario pueden solicitar la residencia permanente a través de la Ley de Ajuste Cubano. La medida también reanuda el procesamiento de solicitudes de asilo y permisos de trabajo para los grupos afectados, revirtiendo una suspensión previa que había bloqueado estas vías hacia la residencia legal.</p>",
    resumen: "Un fallo judicial obligó a reanudar el procesamiento de solicitudes de residencia para cubanos con parole humanitario bajo la Ley de Ajuste Cubano.",
    categoria: "Inmigración",
    paises: ["CU"],
    fuente: "Univision Miami",
    enlaceOriginal: "https://www.univision.com/local/miami-wltv/cubanos-parole-humanitario-podran-aplicar-residencia-ley-ajuste-nuevo-fallo",
  },
];
