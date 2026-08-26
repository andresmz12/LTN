import { MetadataRoute } from 'next'
import { prisma } from '@/lib/db'
import { PAISES } from '@/lib/utils'
import { SITE_URL } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [tramitesGenerales, tramitesPais, noticias, trabajos] = await Promise.all([
    prisma.tramite.findMany({ where: { pais: 'GENERAL' }, select: { slug: true, updatedAt: true } }).catch(() => []),
    prisma.tramite.findMany({ where: { pais: { not: 'GENERAL' } }, select: { pais: true, slug: true, updatedAt: true } }).catch(() => []),
    prisma.noticia.findMany({ select: { paises: true, slug: true, publishedAt: true } }).catch(() => []),
    prisma.empleo.findMany({ where: { activo: true }, select: { slug: true, updatedAt: true } }).catch(() => []),
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/derechos`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/trabajos`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/patrocinadores`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/privacidad`, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const paisRoutes: MetadataRoute.Sitemap = PAISES.flatMap((p) => [
    { url: `${SITE_URL}/${p}`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${SITE_URL}/${p}/consulados`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${SITE_URL}/${p}/tramites`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${SITE_URL}/${p}/noticias`, changeFrequency: 'weekly' as const, priority: 0.6 },
  ])

  const tramiteGeneralRoutes: MetadataRoute.Sitemap = tramitesGenerales.map((t: any) => ({
    url: `${SITE_URL}/general/tramites/${t.slug}`,
    lastModified: t.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const tramitePaisRoutes: MetadataRoute.Sitemap = tramitesPais.map((t: any) => ({
    url: `${SITE_URL}/${t.pais}/tramites/${t.slug}`,
    lastModified: t.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const noticiaRoutes: MetadataRoute.Sitemap = noticias.flatMap((n: any) =>
    (n.paises as string[]).map((p: string) => ({
      url: `${SITE_URL}/${p}/noticias/${n.slug}`,
      lastModified: n.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  )

  const trabajoRoutes: MetadataRoute.Sitemap = trabajos.map((t: any) => ({
    url: `${SITE_URL}/trabajos/${t.slug}`,
    lastModified: t.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...paisRoutes,
    ...tramiteGeneralRoutes,
    ...tramitePaisRoutes,
    ...noticiaRoutes,
    ...trabajoRoutes,
  ]
}
