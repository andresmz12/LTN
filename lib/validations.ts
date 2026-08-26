import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Mínimo 8 caracteres'),
  nombre: z.string().min(1, 'Nombre requerido'),
  apellido: z.string().min(1, 'Apellido requerido'),
  phone: z.string().optional(),
  paisOrigen: z.string().optional(),
  estadoUS: z.string().optional(),
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export const consuladoSchema = z.object({
  pais: z.string().min(2),
  ciudad: z.string().min(1),
  nombre: z.string().min(1),
  direccion: z.string().min(1),
  telefono: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  horarioLunes: z.string().optional(),
  horarioSabado: z.string().optional(),
  servicios: z.any().optional(),
})

export const tramiteSchema = z.object({
  pais: z.string().min(2),
  titulo: z.string().min(1),
  slug: z.string().min(1),
  descripcion: z.string().min(1),
  contenidoHtml: z.string().min(1),
  pasos: z.any().optional(),
  documentosNecesarios: z.array(z.string()).optional(),
  tiempoPromedio: z.string().optional(),
  costo: z.string().optional(),
  linksExternos: z.any().optional(),
})

export const noticiaSchema = z.object({
  titulo: z.string().min(1),
  slug: z.string().min(1),
  contenidoHtml: z.string().min(1),
  resumen: z.string().min(1),
  categoria: z.string().min(1),
  paises: z.array(z.string()),
  publicado: z.boolean().optional(),
  fuente: z.string().optional(),
  enlaceOriginal: z.string().optional(),
})

export const anuncioSchema = z.object({
  tipo: z.string().min(1),
  titulo: z.string().min(1),
  descripcion: z.string().min(1),
  imagenUrl: z.string().optional(),
  enlaceDestino: z.string().url(),
  clienteId: z.string().min(1),
  paisesTarget: z.array(z.string()),
  estadosTarget: z.array(z.string()).optional(),
  ubicaciones: z.array(z.string()).optional(),
  activo: z.boolean().optional(),
  fechaFin: z.string().optional(),
  presupuesto: z.number().optional(),
})

export const empleoSchema = z.object({
  titulo: z.string().min(1),
  slug: z.string().min(1),
  empresa: z.string().min(1),
  descripcion: z.string().min(1),
  categoria: z.string().min(1),
  tipoEmpleo: z.string().min(1),
  estadoUS: z.string().min(2),
  ciudad: z.string().optional(),
  salario: z.string().optional(),
  requisitos: z.array(z.string()).optional(),
  comoAplicar: z.string().min(1),
  clienteId: z.string().optional(),
  destacado: z.boolean().optional(),
  activo: z.boolean().optional(),
  presupuesto: z.number().optional(),
  pagado: z.boolean().optional(),
  fechaExpiracion: z.string().optional(),
})

export const clienteSchema = z.object({
  nombreEmpresa: z.string().min(1),
  tipo: z.string().min(1),
  emailContacto: z.string().email(),
  telefono: z.string().optional(),
  sitioWeb: z.string().optional(),
  descripcion: z.string().optional(),
  logoUrl: z.string().optional(),
  paisServicio: z.array(z.string()),
  activo: z.boolean().optional(),
})
