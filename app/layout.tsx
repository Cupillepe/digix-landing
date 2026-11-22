import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600"] });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont", weight: ["300", "400", "600", "700", "800"] });

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
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
