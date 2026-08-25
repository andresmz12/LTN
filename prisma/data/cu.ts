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
    horarioLunes: "Lunes a viernes 9:00 AM - 12:00 PM (atención al público; verificar disponibilidad de citas en sitio oficial)",
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
    contenidoHtml: "<p>El pasaporte cubano para residentes en el exterior se tramita exclusivamente en la Sección Consular de la Embajada de Cuba en Washington D.C., la única oficina consular cubana en todo Estados Unidos. Esto significa que cubanos residentes en Florida, Nueva Jersey, Texas o cualquier otro estado deben gestionar el trámite por correo, a través de un tercero autorizado, o viajando personalmente a Washington D.C. — Cuba no mantiene consulados regionales en ciudades con gran población cubana como Miami.</p><p>Los precios vigentes fueron actualizados por el MINREX mediante la Resolución 38/2023 y sus ajustes posteriores, y deben pagarse en moneda extranjera (generalmente dólares estadounidenses o su equivalente). El pasaporte tiene una vigencia de 10 años para adultos y 5 años para menores de edad. Es importante recordar que, además de la expedición inicial, el pasaporte cubano requiere trámites periódicos de habilitación para mantenerse vigente para viajar a Cuba, un requisito distintivo del sistema migratorio cubano que no existe en la mayoría de los países latinoamericanos.</p><p>Se recomienda agendar la cita con suficiente antelación, ya que la demanda en la Sección Consular de Washington D.C. suele ser alta, y confirmar los requisitos específicos (fotos, formularios) directamente en el sitio oficial antes de viajar a la cita.</p>",
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
    contenidoHtml: "<p>A diferencia del pasaporte de la mayoría de los países, el pasaporte cubano no basta con estar vigente en cuanto a su fecha de caducidad: los cubanos residentes en el exterior deben además mantenerlo &quot;habilitado&quot; mediante un trámite periódico ante la Sección Consular para poder usarlo en viajes hacia y desde Cuba. Sin esta habilitación, el titular puede tener dificultades para entrar o salir de la isla aunque el documento no haya expirado.</p><p>La prórroga, por su parte, extiende la vigencia del pasaporte cuando este se aproxima a su fecha de caducidad, evitando así tener que solicitar un pasaporte completamente nuevo. Ambos trámites se realizan en la Sección Consular de Washington D.C. y generalmente requieren la presencia del pasaporte físico y el pago de la tarifa correspondiente según la tabla de precios consulares vigente.</p><p>Se recomienda a los residentes cubanos en EE.UU. revisar con antelación la fecha de su última habilitación, ya que dejar vencer este requisito puede complicar planes de viaje familiares o de emergencia hacia Cuba.</p>",
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
    contenidoHtml: "<p>Muchos trámites migratorios y legales en Estados Unidos —como la solicitud de residencia bajo la Ley de Ajuste Cubano, la ciudadanía, o gestiones notariales— requieren presentar una partida de nacimiento cubana original o certificada. La Sección Consular de la Embajada en Washington D.C. sirve de intermediaria para solicitar estos documentos, que son emitidos por las oficinas del Registro del Estado Civil en Cuba y luego enviados a la sede consular.</p><p>Además de partidas de nacimiento, este servicio cubre certificados de matrimonio, divorcio y defunción, así como certificaciones de soltería u otros documentos del estado civil necesarios tanto para trámites en EE.UU. como para gestiones legales dentro de Cuba (herencias, matrimonios, etc.). El proceso puede tomar varias semanas debido a que la solicitud debe tramitarse en Cuba antes de que el documento llegue a la Sección Consular para su entrega o envío al solicitante.</p><p>Es recomendable tener a mano los datos exactos del titular (nombre completo, fecha y lugar de nacimiento, y nombres de los padres) para evitar demoras por errores en la búsqueda del registro.</p>",
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
    contenidoHtml: "<p>Los cubanos residentes en Estados Unidos frecuentemente necesitan otorgar un poder notarial para que un familiar o representante legal en Cuba realice gestiones en su nombre: venta o traspaso de propiedades, trámites de herencia, representación en procesos judiciales, o cobro de pensiones, entre otros. Como Cuba no reconoce automáticamente los poderes notariales emitidos por notarios estadounidenses, este trámite debe formalizarse directamente ante el funcionario consular cubano.</p><p>El proceso implica presentar un proyecto de poder (redactado previamente o con orientación del personal consular) y firmarlo en persona ante el funcionario, quien da fe del acto. Es fundamental incluir los datos completos del apoderado (la persona que ejercerá el poder en Cuba) y especificar con claridad el alcance de las facultades otorgadas, ya que un poder mal redactado puede ser rechazado por las autoridades cubanas al momento de usarlo.</p><p>Dado que este es un trámite legal con consecuencias patrimoniales importantes, muchos solicitantes consultan previamente con un abogado especializado en derecho cubano antes de acudir a la cita consular.</p>",
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
    contenidoHtml: "<p>La Ley de Ajuste Cubano (Cuban Adjustment Act, 1966) sigue siendo la vía migratoria más importante para los cubanos en Estados Unidos: permite a quienes fueron inspeccionados y admitidos, o que ingresaron con parole humanitario, solicitar la residencia permanente después de un año y un día de presencia física continua en el país. A diferencia de otras nacionalidades, los cubanos no dependen del TPS ni de programas temporales para obtener la residencia, siempre que cumplan los requisitos de inspección/admisión o parole.</p><p>Sin embargo, en 2026 este camino enfrenta más obstáculos que en años anteriores. El gobierno de EE.UU. está revisando los casos de aproximadamente 532,000 migrantes del programa CHNV (Cuba, Haití, Nicaragua, Venezuela) que ingresaron antes de la terminación del programa en junio de 2025, buscando fraude o irregularidades en los expedientes originales; la revisión no implica deportación automática, pero sí puede retrasar o complicar solicitudes de ajuste de estatus. A esto se suma que USCIS ha reducido drásticamente el ritmo de aprobación de solicitudes de parole y permisos de trabajo durante 2026, y ha acortado la vigencia de los nuevos permisos de trabajo de cinco años a solo 18 meses desde diciembre de 2025.</p><p>Un fallo judicial de un juez federal de Massachusetts obligó a la administración a reanudar el procesamiento de solicitudes de ajuste de estatus, asilo y permisos de trabajo para beneficiarios de parole CHNV tras una suspensión previa, por lo que se recomienda a los solicitantes verificar el estado más reciente del litigio y consultar con un abogado de inmigración antes de presentar el formulario I-485.</p>",
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
  {
    pais: "CU",
    titulo: "Envío de remesas a Cuba desde Estados Unidos: reglas vigentes",
    slug: "remesas-cuba-eeuu",
    descripcion: "Guía sobre las empresas autorizadas, límites y restricciones de la OFAC para enviar dinero a familiares en Cuba desde EE.UU. en 2026.",
    contenidoHtml: "<p>Enviar remesas a Cuba desde Estados Unidos está permitido, pero sujeto a las regulaciones del Departamento del Tesoro (OFAC) y a una lista limitada de empresas autorizadas a operar en la isla. Actualmente, los principales servicios disponibles son Western Union, Remitly y Ria Money Transfer, con disponibilidad más limitada a través de MoneyGram; servicios digitales populares como Wise no operan envíos hacia Cuba. Las regulaciones prohíben específicamente el envío de remesas a funcionarios del gobierno cubano o a miembros de las Fuerzas Armadas Revolucionarias, así como a empresas vinculadas con los militares (la llamada &quot;Lista Restringida de Cuba&quot; del Departamento de Estado).</p><p>La mayoría de las transferencias se entregan mediante tarjetas MLC (Moneda Libremente Convertible) emitidas por bancos como el Banco Metropolitano o BANDEC, consideradas más seguras que el retiro de efectivo en puntos autorizados. Los costos suelen oscilar entre el 3% y el 4% del monto enviado, con tarifas fijas de entre $4 y $8 según el proveedor, y los fondos generalmente están disponibles entre 1 y 3 días hábiles después del envío.</p><p>Debido a que las regulaciones de la OFAC cambian con frecuencia y las sanciones a Cuba se han endurecido en los últimos años, se recomienda verificar la disponibilidad y las condiciones actualizadas directamente con el proveedor de remesas antes de cada envío, y evitar intermediarios no autorizados que operan fuera del marco legal.</p>",
    pasos: [
      "Elige un proveedor autorizado (Western Union, Remitly o Ria)",
      "Verifica que el destinatario no esté en la lista restringida de la OFAC",
      "Registra los datos del beneficiario y el método de entrega (tarjeta MLC o efectivo)",
      "Realiza el envío y conserva el comprobante",
      "Confirma con el destinatario la recepción de los fondos",
    ],
    documentosNecesarios: [
      "Identificación oficial del remitente",
      "Datos completos del destinatario en Cuba",
      "Número de cuenta o tarjeta MLC del beneficiario (según el método)",
    ],
    tiempoPromedio: "1 a 3 días hábiles",
    costo: "Aproximadamente 3%-4% del monto, más tarifa fija de $4-$8 según el proveedor — Verificar en sitio oficial del proveedor",
    linksExternos: [
      { texto: "Guía OFAC remesas a Cuba", url: "https://www.dineroza.com/remesas/cuba" },
    ],
    categoria: "Dinero e Impuestos",
    prioridad: "alto",
  },
  {
    pais: "CU",
    titulo: "Viajar a Cuba desde Estados Unidos: categorías de licencia autorizadas",
    slug: "viajar-a-cuba-desde-eeuu",
    descripcion: "Las 12 categorías bajo las cuales la OFAC autoriza viajes desde EE.UU. hacia Cuba, ya que el turismo tradicional sigue prohibido.",
    contenidoHtml: "<p>El embargo estadounidense sobre Cuba prohíbe el turismo tradicional, es decir, viajes puramente recreativos sin un propósito social, educativo o profesional. Sin embargo, la Oficina de Control de Activos Extranjeros (OFAC) del Departamento del Tesoro autoriza el viaje bajo 12 categorías específicas, entre ellas: visitas familiares, actividades periodísticas, investigación o reuniones profesionales, actividades educativas, actividades religiosas, actuaciones públicas y competencias deportivas, apoyo al pueblo cubano, proyectos humanitarios, y exportación de información, entre otras.</p><p>Cada viajero debe elegir la categoría que mejor corresponda a su propósito de viaje y estar preparado para demostrar que cumple sus condiciones. La categoría más usada por quienes no tienen familia en Cuba es &quot;apoyo al pueblo cubano&quot;, que exige mantener un itinerario detallado con interacciones con ciudadanos cubanos y actividades culturales o económicas independientes del gobierno cubano — hospedarse en casas particulares y consumir en negocios privados (cuentapropistas) ayuda a cumplir este requisito.</p><p>Los viajeros deben conservar durante cinco años toda la documentación que respalde el viaje (boletos, reservaciones, recibos e itinerario completo), ya que la OFAC puede solicitar esta evidencia en una auditoría posterior. Además de la autorización de la OFAC, los viajeros deben cumplir los requisitos de entrada del gobierno cubano, incluyendo la tarjeta de turista o visa correspondiente.</p>",
    pasos: [
      "Determina bajo cuál de las 12 categorías autorizadas por la OFAC calificas",
      "Reserva vuelos con aerolíneas que operan rutas EE.UU.-Cuba autorizadas",
      "Obtén la tarjeta de turista o visa de entrada a Cuba requerida",
      "Prepara un itinerario que respalde la categoría elegida",
      "Conserva todos los recibos y documentación del viaje por al menos cinco años",
    ],
    documentosNecesarios: [
      "Pasaporte vigente",
      "Tarjeta de turista o visa cubana",
      "Comprobante de la categoría de viaje autorizada",
    ],
    tiempoPromedio: "Verificar en sitio oficial",
    costo: "Varía según aerolínea y tarjeta de turista — Verificar en sitio oficial",
    linksExternos: [
      { texto: "Embajada de EE.UU. en Cuba - Viajes a Cuba", url: "https://cu.usembassy.gov/services/traveling-to-cuba/" },
    ],
    categoria: "Migración y Seguridad",
    prioridad: "importante",
  },
  {
    pais: "CU",
    titulo: "Tarifa Anual de Asilo (AAF) para solicitudes de asilo pendientes",
    slug: "tarifa-anual-asilo-cu",
    descripcion: "Nueva tarifa anual obligatoria del DHS para solicitantes de asilo con formulario I-589 pendiente, vigente desde el 29 de mayo de 2026.",
    contenidoHtml: "<p>Desde el 29 de mayo de 2026, el Departamento de Seguridad Nacional (DHS) exige el pago de una Tarifa Anual de Asilo (Annual Asylum Fee, AAF) a todas las personas con una solicitud de asilo (formulario I-589) pendiente ante USCIS o en proceso ante un juez de inmigración. Esta medida afecta a miles de cubanos cuyos casos quedaron suspendidos o en trámite tras la terminación del programa de parole humanitario CHNV, muchos de los cuales presentaron el formulario I-589 como vía alternativa de protección legal.</p><p>Las consecuencias de no pagar la tarifa dentro del plazo establecido son severas: USCIS puede rechazar automáticamente la solicitud de asilo, negar o revocar el permiso de trabajo asociado, y, en el caso de personas sin otro estatus legal, iniciar el proceso de deportación. El monto exacto de la tarifa y los mecanismos de pago deben confirmarse directamente en el sitio oficial de USCIS, ya que la reglamentación ha sido objeto de cambios y aclaraciones desde su publicación.</p><p>Se recomienda encarecidamente a los solicitantes de asilo cubanos —especialmente aquellos con dominio limitado del inglés o dificultades económicas— buscar orientación de organizaciones de asistencia legal gratuita o de bajo costo, como Americans for Immigrant Justice, CLINIC o Catholic Legal Services, para evitar perder el caso por falta de pago o desconocimiento del requisito.</p>",
    pasos: [
      "Verifica si tienes un formulario I-589 pendiente ante USCIS o un juez de inmigración",
      "Confirma el monto exacto de la Tarifa Anual de Asilo en el sitio oficial de USCIS",
      "Realiza el pago dentro del plazo establecido para evitar el rechazo automático",
      "Conserva el comprobante de pago junto con tu expediente de asilo",
      "Busca asesoría legal gratuita si tienes dificultades para pagar o entender el requisito",
    ],
    documentosNecesarios: [
      "Formulario I-589 y número de caso ante USCIS",
      "Identificación oficial",
      "Comprobante de pago de la tarifa",
    ],
    tiempoPromedio: "Pago anual mientras el caso esté pendiente",
    costo: "Verificar en sitio oficial (USCIS)",
    linksExternos: [
      { texto: "USCIS - Asilo", url: "https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum/obtaining-asylum-in-the-united-states" },
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
  {
    titulo: "Nueva Tarifa Anual de Asilo entra en vigor: cubanos con casos pendientes podrían enfrentar rechazo automático",
    slug: "tarifa-anual-asilo-cubanos-2026",
    contenidoHtml: "<p>Desde el 29 de mayo de 2026, el Departamento de Seguridad Nacional (DHS) comenzó a exigir una Tarifa Anual de Asilo (Annual Asylum Fee) a todas las personas con solicitudes de asilo pendientes, según reportó Cuballama Noticias el 29 de abril de 2026. La medida afecta directamente a miles de cubanos que presentaron el formulario I-589 tras la suspensión de trámites del programa de parole humanitario CHNV.</p><p>Según el reporte, quienes no paguen la tarifa dentro del plazo se exponen a que USCIS rechace automáticamente su solicitud de asilo, además de la denegación o revocación de sus permisos de trabajo, y el posible inicio de un proceso de deportación en caso de no contar con otro estatus legal. Organizaciones como Americans for Immigrant Justice, CLINIC y Catholic Legal Services en el sur de la Florida ofrecen orientación legal gratuita o de bajo costo para quienes tengan dificultades para cumplir con el nuevo requisito.</p>",
    resumen: "Desde el 29 de mayo de 2026 rige una nueva Tarifa Anual de Asilo del DHS; los cubanos con casos I-589 pendientes que no la paguen arriesgan el rechazo automático de su solicitud y la pérdida del permiso de trabajo.",
    categoria: "Inmigración",
    paises: ["CU"],
    fuente: "Cuballama Noticias",
    enlaceOriginal: "https://www.cuballama.com/noticias/desde-el-29-5-cubanos-con-asilo-pendiente-en-ee-uu-que-no-paguen-nueva-tarifa-anual-podrian-ser-deportados/",
  },
  {
    titulo: "USCIS reduce drásticamente la aprobación de permisos de trabajo y solicitudes de parole",
    slug: "uscis-frena-permisos-trabajo-parole-2026",
    contenidoHtml: "<p>Un análisis del American Immigration Council sobre datos oficiales de USCIS, reportado por Periódico Cubano el 17 de agosto de 2026, reveló una caída pronunciada en la aprobación de permisos de trabajo y un aumento marcado en el rechazo de solicitudes de parole durante el primer trimestre del año fiscal 2026 en comparación con el mismo periodo de 2025. Las solicitudes pendientes de permiso de trabajo (formulario I-765) aumentaron un 38% (446,650 casos más), y entre quienes solicitan el permiso mientras esperan un ajuste de estatus, los casos pendientes casi se triplicaron, de 154,469 a 461,884.</p><p>La tasa de rechazo de solicitudes de parole humanitario se disparó del 52.9% al 88.7%, mientras que las denegaciones de parole in place pasaron del 18.4% al 45.8% y las de parole avanzado (advance parole) del 29.9% al 46.7%. Además, desde diciembre de 2025 USCIS redujo la vigencia de los nuevos permisos de trabajo de cinco años a solo 18 meses. La agencia acumula 11.3 millones de casos pendientes en total, 1.6 millones más que el año anterior, marcando once trimestres consecutivos en los que se resuelven menos casos de los que ingresan — una tendencia que afecta directamente a los cubanos beneficiarios del extinto programa CHNV que buscan regularizar su estatus.</p>",
    resumen: "Datos de USCIS analizados por el American Immigration Council muestran una caída drástica en la aprobación de permisos de trabajo y un aumento pronunciado en los rechazos de parole, afectando a miles de cubanos en trámite de ajuste de estatus.",
    categoria: "Inmigración",
    paises: ["CU", "HT", "NI", "VE"],
    fuente: "Periódico Cubano",
    enlaceOriginal: "https://www.periodicocubano.com/uscis-frena-permisos-de-trabajo-y-solicitudes-de-parole/",
  },
];
