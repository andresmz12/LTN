import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const webSearchTool: Anthropic.Tool = {
  type: 'web_search_20260209' as 'web_search_20260209',
  name: 'web_search',
} as unknown as Anthropic.Tool

async function askClaude(prompt: string): Promise<string> {
  const response = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 4096,
    thinking: { type: 'adaptive' },
    tools: [webSearchTool],
    messages: [{ role: 'user', content: prompt }],
  })

  // Extract text from final response (after tool use)
  const textBlocks = response.content.filter((b) => b.type === 'text')
  return textBlocks.map((b) => (b as Anthropic.TextBlock).text).join('')
}

export async function generateConsulado(pais: string, ciudad: string) {
  const prompt = `Busca en internet información real y actualizada sobre el consulado de ${pais} en ${ciudad}, Estados Unidos.

Devuelve SOLO un objeto JSON válido (sin markdown, sin explicaciones) con esta estructura exacta:
{
  "nombre": "Consulado General de [País] en [Ciudad]",
  "pais": "${pais}",
  "ciudad": "${ciudad}",
  "estadoUS": "Código de 2 letras del estado de EE.UU. donde está ubicado (ej: CA, TX, FL)",
  "direccion": "Dirección completa real",
  "telefono": "+1-XXX-XXX-XXXX",
  "email": "email@ejemplo.com o null",
  "horarioLunes": "Lunes a Viernes X:00am - X:00pm",
  "horarioSabado": "Sábado X:00am - X:00pm o Cerrado",
  "servicios": ["Pasaportes", "Visas", "Registro civil", "..."]
}`

  const text = await askClaude(prompt)
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('No se pudo generar el consulado')
  return JSON.parse(jsonMatch[0])
}

export async function generateTramite(pais: string, tipo: string) {
  const prompt = `Busca en internet información actualizada sobre cómo realizar el trámite de "${tipo}" para ciudadanos de ${pais} en Estados Unidos.

Devuelve SOLO un objeto JSON válido (sin markdown, sin explicaciones) con esta estructura exacta:
{
  "titulo": "Título descriptivo del trámite",
  "slug": "titulo-en-slug-sin-acentos",
  "pais": "${pais}",
  "categoria": "Una de: Migración y Estatus, Protección al Consumidor, Dinero e Impuestos, Trabajo, Transporte, Salud, Vivienda, Identidad y Documentos, Educación, Seguridad y Emergencias",
  "descripcion": "Descripción breve de 2-3 oraciones",
  "contenidoHtml": "Contenido completo en HTML simple (párrafos <p>, listas <ul><li>) explicando el trámite en detalle",
  "documentosNecesarios": ["Requisito 1", "Requisito 2", "..."],
  "pasos": ["Paso 1: ...", "Paso 2: ...", "..."],
  "costo": "$XX USD o Gratuito",
  "tiempoPromedio": "X días hábiles",
  "linksExternos": [{ "nombre": "Sitio oficial", "url": "https://..." }]
}`

  const text = await askClaude(prompt)
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('No se pudo generar el trámite')
  return JSON.parse(jsonMatch[0])
}

export async function generateNoticias(pais: string, busqueda: string, cantidad: number = 3) {
  const prompt = `Busca en internet las noticias más recientes sobre "${busqueda}" relevantes para ciudadanos de ${pais} en Estados Unidos.

Devuelve SOLO un array JSON válido (sin markdown, sin explicaciones) con ${cantidad} noticias, cada una con esta estructura:
[
  {
    "titulo": "Título de la noticia",
    "slug": "titulo-en-slug-sin-acentos",
    "categoria": "Categoría breve de la noticia (ej: Migración, Trabajo, Comunidad)",
    "paises": ["${pais}"],
    "resumen": "Resumen de 2-3 oraciones",
    "contenidoHtml": "Contenido completo de la noticia en 3-5 párrafos, en HTML simple (<p>...</p>)",
    "fuente": "Nombre de la fuente",
    "enlaceOriginal": "https://... o null",
    "publicado": true
  }
]`

  const text = await askClaude(prompt)
  const jsonMatch = text.match(/\[[\s\S]*\]/)
  if (!jsonMatch) throw new Error('No se pudieron generar las noticias')
  return JSON.parse(jsonMatch[0])
}
