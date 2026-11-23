# DIGIX Group – Landing page

Landing page de **DIGIX Group** (Apps, Web, Automatización, Domótica y Cámaras), hecha con Next.js 15 + React 19 y exportada como sitio estático.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de producción

```bash
npm run build    # genera la carpeta out/ (HTML, CSS y JS estáticos)
```

## Configuración

- Número de WhatsApp, Instagram y enlaces: `lib/site.ts`
- Textos y secciones: `app/page.tsx`
- Estilos y colores: `app/globals.css` (variables en `:root`)

## Docker

```bash
docker compose up -d --build   # http://localhost:8080
```

O sin compose:

```bash
docker build -t digix-landing .
docker run -d -p 8080:80 --name digix-landing --restart unless-stopped digix-landing
```

La imagen compila la página con Node 20 y la sirve con Nginx (≈75 MB). Sirve para cualquier VPS o servidor con Docker.

## Publicar en Vercel (recomendado, gratis)

1. Crea una cuenta en https://vercel.com con tu GitHub.
2. Pulsa **Add New → Project** e importa este repositorio.
3. Deja la configuración por defecto (Next.js se detecta solo) y pulsa **Deploy**.
4. Obtendrás una URL tipo `digix-landing.vercel.app`. Cada `git push` vuelve a publicar la página automáticamente.
5. Dominio propio (opcional): en **Settings → Domains** agrega `digixgroup.com` y configura los DNS que indica Vercel en tu proveedor de dominio.

Como el sitio es estático (`output: "export"`), también se puede subir la carpeta `out/` a Netlify, Cloudflare Pages o cualquier hosting.
