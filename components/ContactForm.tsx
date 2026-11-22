"use client";
import Icon from "./Icon";
import { waLink } from "@/lib/site";

export default function ContactForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const empresa = f.get("empresa") ? ` de ${f.get("empresa")}` : "";
    const text = `¡Hola DIGIX! Soy ${f.get("nombre")}${empresa}.\nMe interesa: ${f.get("servicio")}.\n${f.get("mensaje") || ""}`;
    window.open(waLink(text), "_blank", "noopener");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <input name="nombre" placeholder="Tu nombre" required />
        <input name="empresa" placeholder="Empresa (opcional)" />
      </div>
      <select name="servicio" required defaultValue="">
        <option value="">¿Qué necesitas?</option>
        <option>Aplicación móvil</option>
        <option>Página web / Landing page</option>
        <option>Automatización / Agente de IA</option>
        <option>Domótica</option>
        <option>Cámaras de seguridad</option>
        <option>Otro</option>
      </select>
      <textarea name="mensaje" placeholder="Cuéntanos brevemente tu proyecto" />
      <button className="btn btn-primary" type="submit" style={{ justifyContent: "center" }}>
        Enviar por WhatsApp <Icon name="arrow" />
      </button>
    </form>
  );
}
