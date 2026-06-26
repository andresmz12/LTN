# Compa 🌎

Plataforma web para latinos en EE.UU. que centraliza información de consulados, trámites, noticias y servicios patrocinados.

## Stack

- Next.js 14 (App Router, TypeScript)
- Prisma ORM + PostgreSQL
- NextAuth.js (email + contraseña)
- TailwindCSS

## Setup rápido

### 1. Clonar e instalar

```bash
git clone <repo>
cd compa
npm install
```

### 2. Variables de entorno

```bash
cp .env.example .env
# Editar .env con tus valores
```

### 3. Base de datos

```bash
npx prisma migrate dev --name init
npm run seed
```

### 4. Desarrollo

```bash
npm run dev
# → http://localhost:3000
```

## Credenciales de prueba

| Tipo  | Email | Contraseña |
|-------|-------|------------|
| Admin | admin@compa.app | changeme123 |

## Rutas principales

### Públicas
| Ruta | Descripción |
|------|-------------|
| `/` | Selector de país |
| `/MX` | Inicio México |
| `/MX/consulados` | Lista consulados MX |
| `/MX/tramites` | Lista trámites MX |
| `/MX/noticias` | Feed noticias MX |
| `/auth/login` | Login |
| `/auth/register` | Registro |

> Aplica también para `/CO`, `/VE`, `/SV`

### Autenticado
| Ruta | Descripción |
|------|-------------|
| `/dashboard` | Perfil y guardados |

### Admin
| Ruta | Descripción |
|------|-------------|
| `/admin` | Dashboard stats |
| `/admin/consulados` | CRUD consulados |
| `/admin/tramites` | CRUD trámites |
| `/admin/noticias` | CRUD noticias |
| `/admin/anuncios` | CRUD anuncios + métricas |
| `/admin/clientes` | CRUD sponsors |
| `/admin/usuarios` | Analytics usuarios |

## API

```
POST   /api/auth/register
GET    /api/auth/me
GET    /api/consulados?pais=MX
GET    /api/consulados/:id
POST   /api/consulados          (admin)
PUT    /api/consulados/:id      (admin)
DELETE /api/consulados/:id      (admin)
GET    /api/tramites?pais=CO
GET    /api/tramites/:slug
POST   /api/tramites            (admin)
GET    /api/noticias?pais=VE
GET    /api/noticias/:slug
POST   /api/noticias            (admin)
GET    /api/anuncios?pais=MX
POST   /api/anuncios/:id/click
POST   /api/analytics/track
```

## Deployment (Railway)

1. Crear proyecto en [railway.app](https://railway.app)
2. Agregar servicio PostgreSQL
3. Conectar repositorio GitHub
4. Configurar variables de entorno:
   - `DATABASE_URL` (desde Railway PostgreSQL)
   - `NEXTAUTH_SECRET` (string aleatorio largo)
   - `NEXTAUTH_URL` (tu dominio de Railway)
5. Push a `main` → deploy automático

## Países soportados

| Código | País |
|--------|------|
| MX | México |
| CO | Colombia |
| VE | Venezuela |
| SV | El Salvador |
