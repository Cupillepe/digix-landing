import type { Metadata, Viewport } from "next";
import "./globals.css";

import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/montserrat/latin-300.css";
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-600.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/montserrat/latin-800.css";

export const metadata: Metadata = {
  title: "DIGIX Group | Apps, Web, Automatización y Espacios Inteligentes",
  description:
    "Te brindamos tecnología que optimiza tu negocio: aplicaciones móviles, páginas web, automatización con IA, domótica y cámaras de seguridad. Proyectos a nivel nacional.",
  openGraph: {
    title: "DIGIX Group | Tecnología que optimiza tu negocio",
    description: "Apps, Web, Automatización, Domótica y Cámaras de seguridad. Proyectos a nivel nacional.",
    type: "website",
    locale: "es_VE",
  },
};

export const viewport: Viewport = { themeColor: "#0a0b0e" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
