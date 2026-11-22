import Nav from "@/components/Nav";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { RevealObserver, Counter, Clock, Year } from "@/components/Effects";
import { waLink, INSTAGRAM_URL, WHATSAPP_DISPLAY } from "@/lib/site";

const marquee = ["Aplicaciones móviles", "Páginas web", "Landing pages", "Agentes de IA", "Automatización", "Domótica", "Cámaras de seguridad", "Circuito cerrado"];

const software = [
  ["phone", "Aplicaciones móviles", "Apps para iOS y Android con tu marca, publicadas en Google Play y App Store."],
  ["monitor", "Páginas web y landing pages", "Sitios corporativos, tiendas y landings que convierten visitas en clientes."],
  ["spark", "Automatización y Agentes de IA", "Bots de WhatsApp, flujos automáticos e integraciones que ahorran horas de trabajo."],
];
const spaces = [
  ["home", "Domótica", "Iluminación, cortinas, accesos y escenas controladas desde tu teléfono o por voz."],
  ["camera", "Cámaras de seguridad (CCTV)", "Instalación de circuito cerrado con monitoreo remoto y alertas en tiempo real."],
  ["thermo", "Climatización inteligente", "Control del aire acondicionado y la temperatura desde el teléfono, con horarios para ahorrar energía."],
];

const solutions = [
  { cls: "w1", icon: "cart", tag: "Comercio", title: "Apps de pedidos y tiendas online", text: "Catálogo, carrito, pagos y notificaciones para que tus clientes compren desde el teléfono." },
  { cls: "w2", icon: "card", tag: "Servicios", title: "Plataformas de reservas y pagos", text: "Agenda de citas, cobros y recordatorios automáticos para negocios de servicios." },
  { cls: "w3", icon: "chart", tag: "Gestión", title: "Sistemas web administrativos", text: "Inventario, ventas, clientes y reportes en un panel accesible desde cualquier lugar." },
];

const roles = [
  ["layers", "Ingeniería y arquitectura de software", "Ingenieros en informática que definen la arquitectura, la planificación y la calidad técnica del proyecto.", ""],
  ["pen", "Diseño UX/UI", "Diseñamos interfaces claras y atractivas, pensadas para la experiencia de tus clientes.", ""],
  ["code", "Desarrollo frontend y móvil", "Construimos webs y apps rápidas, adaptables a cualquier pantalla y dispositivo.", ""],
  ["server", "Backend, bases de datos y nube", "Servidores, APIs e integraciones seguras que mantienen tu información disponible.", ""],
  ["check", "Control de calidad (QA)", "Probamos cada entrega antes de que llegue a tus manos.", ""],
  ["spark", "Automatización e inteligencia artificial", "Agentes de IA y flujos automáticos conectados a tus canales de atención.", ""],
  ["wifi", "Redes e integración de sistemas", "Conectividad e infraestructura para que todo funcione en conjunto.", "sp"],
  ["camera", "Técnicos en domótica y CCTV", "Instalación profesional de cámaras, automatización y control de espacios.", "sp"],
];

const trust = [
  ["file", "Propuesta clara", "Alcance, tiempos y presupuesto definidos por escrito antes de empezar."],
  ["steps", "Avances por etapas", "Trabajamos con metodología ágil y te mostramos el progreso en cada fase."],
  ["key", "Tu proyecto es tuyo", "Te entregamos los accesos, el código y la documentación de lo que desarrollamos."],
  ["shield", "Buenas prácticas de seguridad", "Cuidamos tus datos y los de tus clientes desde el diseño."],
  ["support", "Soporte post-entrega", "Te acompañamos con mantenimiento, ajustes y mejoras continuas."],
  ["pin", "Cobertura nacional", "Atendemos proyectos de forma remota y presencial en todo el país."],
];

const steps = [
  ["Diagnóstico", "Escuchamos tu negocio y detectamos qué procesos o espacios optimizar."],
  ["Propuesta", "Diseño, alcance, tiempos y presupuesto claros desde el inicio."],
  ["Desarrollo e instalación", "Construimos, integramos y probamos con avances constantes."],
  ["Soporte", "Acompañamiento, mantenimiento y mejoras después de la entrega."],
];

export default function Home() {
  return (
    <>
      <Nav />
      <RevealObserver />

      <header className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">Apps · Web · Automatización · Domótica · Cámaras</span>
            <h1>Tecnología que <b>optimiza</b> tu <b>negocio</b>.</h1>
            <p className="lead">Desarrollamos aplicaciones móviles, páginas web y agentes de IA, y transformamos tus espacios con domótica y seguridad inteligente. Proyectos a nivel nacional.</p>
            <div className="hero-cta">
              <a href="#contacto" className="btn btn-primary">Cotiza tu proyecto <Icon name="arrow" /></a>
              <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
            </div>
            <div className="stats">
              <div className="stat"><Counter end={6000} suffix="6K+" /><span>seguidores en Instagram</span></div>
              <div className="stat"><b>2</b><span>áreas: Software y Espacios</span></div>
              <div className="stat"><b>24/7</b><span>atención con Agentes IA</span></div>
            </div>
          </div>
          <div className="visual reveal">
            <div className="phone"><div className="screen">
              <div className="notch" />
              <Clock />
              <div className="date">Tu marca, en el bolsillo de tus clientes</div>
              <div className="apps">
                <div className="app b">Tienda</div><div className="app">Pagos</div><div className="app t">Citas</div>
                <div className="app d">Web</div><div className="app b">IA</div><div className="app d">CCTV</div>
                <div className="app">Hogar</div><div className="app t">Clima</div><div className="app d">Ventas</div>
              </div>
            </div></div>
            <div className="float f1"><span className="dot" />Agente IA activo<small>Respondió 23 mensajes hoy</small></div>
            <div className="float f2"><Icon name="lock" className="mi" />Cámara entrada<small>Movimiento detectado · 23:04</small></div>
            <div className="float f3"><Icon name="thermo" className="mi" />Sala · 24°<small>Confort en equilibrio</small></div>
          </div>
        </div>
      </header>

      <div className="marquee"><div className="track">
        {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}
      </div></div>

      <section id="servicios">
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Servicios</span>
            <h2>Dos áreas, <b>una misma visión:</b> que la tecnología trabaje por ti.</h2>
            <p>Del código a la pared: creamos el software de tu negocio e integramos la tecnología de tu hogar u oficina.</p>
          </div>
          <div className="divisions">
            <div className="division soft reveal">
              <span className="tag">DIGIX · Software</span>
              <h3>Creamos <b>experiencias digitales</b></h3>
              <p>Productos a la medida, rápidos y listos para crecer contigo.</p>
              {software.map(([ic, t, d]) => (
                <div className="svc" key={t}><div className="ico"><Icon name={ic} /></div><div><h4>{t}</h4><p>{d}</p></div></div>
              ))}
            </div>
            <div className="division space reveal">
              <span className="tag">DIGIX · Espacios inteligentes</span>
              <h3>Diseñamos <b>espacios que piensan</b></h3>
              <p>Confort, eficiencia y seguridad integrados con estética de vanguardia.</p>
              {spaces.map(([ic, t, d]) => (
                <div className="svc" key={t}><div className="ico"><Icon name={ic} /></div><div><h4>{t}</h4><p>{d}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai" id="ia">
        <div className="container ai-grid">
          <div className="reveal">
            <span className="eyebrow">Agente de IA</span>
            <div className="head" style={{ marginBottom: 0 }}>
              <h2>Imagina a tu cliente enviando un mensaje <b className="accent">a las 23h...</b></h2>
              <p>Con atención manual, espera hasta mañana. Con un Agente de IA de DIGIX recibe respuesta inmediata, y tú no pierdes la venta.</p>
            </div>
            <ul className="checks">
              <li><b>Responde 24/7</b> por WhatsApp, Instagram o tu web.</li>
              <li><b>Agenda citas y toma pedidos</b> automáticamente.</li>
              <li><b>Conoce tu negocio:</b> precios, horarios y catálogo.</li>
              <li><b>Te pasa la conversación</b> cuando hace falta un humano.</li>
            </ul>
          </div>
          <div className="chat reveal">
            <div className="chat-top"><span className="pill"><i />Agente IA · en línea</span></div>
            <div className="msg in">Hola, ¿tienen disponible el servicio de instalación de cámaras para mañana?<small>23:04</small></div>
            <div className="msg out">¡Hola! Sí, tenemos disponibilidad mañana a las 10:00 y a las 15:00. ¿Cuál te queda mejor?<small>23:04 · Agente IA</small></div>
            <div className="msg in">A las 10 perfecto<small>23:05</small></div>
            <div className="msg out"><span className="typing"><i /><i /><i /></span></div>
            <div className="compare">
              <div className="cmp bad"><b>Atención manual</b>Espera hasta mañana.</div>
              <div className="cmp good"><b>Agente de IA</b>Respuesta inmediata.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones">
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Soluciones</span>
            <h2>Lo que podemos <b>construir para tu marca</b>.</h2>
            <p>Algunos de los tipos de soluciones que desarrollamos a la medida de cada negocio.</p>
          </div>
          <div className="port">
            {solutions.map((s) => (
              <article className={`work ${s.cls} reveal`} key={s.title}>
                <div className="thumb"><div className="mini mini-ic"><Icon name={s.icon} className="mi" /></div></div>
                <div className="work-body"><span>{s.tag}</span><h4>{s.title}</h4><p>{s.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="espacios" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Espacios inteligentes</span>
            <h2>Estética digital para tu <b>negocio o vivienda</b>.</h2>
            <p>Diseñamos e integramos tecnología de vanguardia: pantallas, domótica y cámaras.</p>
          </div>
          <div className="spaces">
            <div className="space-card s1 reveal"><span className="lbl">DIGIX</span><div className="thermo">24°</div>
              <h4>Confort<br />en equilibrio</h4><p>Climatización inteligente para hogares y empresas.</p><div className="meta">Confort | Eficiencia | Bienestar</div></div>
            <div className="space-card s2 reveal"><span className="lbl">DIGIX</span><div className="cam" />
              <h4>Espacios que<br />generan seguridad</h4><p>Cámaras de seguridad integradas a la arquitectura.</p><div className="meta">Cámaras | Pantallas | Domotización</div></div>
            <div className="space-card s3 reveal"><span className="lbl">DIGIX</span><div className="panel"><i /><i /><i /><i /><i /><i /></div>
              <h4>Control total<br />desde un panel</h4><p>Luces, accesos y escenas desde un solo lugar o tu teléfono.</p><div className="meta">Domótica | Control | Escenas</div></div>
          </div>
        </div>
      </section>

      <section id="proceso" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2>De la idea a la <b>entrega</b>, sin complicaciones.</h2>
          </div>
          <div className="steps">
            {steps.map(([t, d]) => <div className="step reveal" key={t}><h4>{t}</h4><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="nosotros" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="team-intro reveal">
            <div>
              <span className="eyebrow">Nosotros</span>
              <div className="head" style={{ marginBottom: 0 }}>
                <h2>Un equipo de <b>ingenieros y especialistas</b> en cada área.</h2>
              </div>
            </div>
            <p>En DIGIX Group trabajamos como lo hace un equipo profesional de ingeniería: cada proyecto pasa por manos expertas en planificación, diseño, desarrollo, pruebas e instalación. Somos un equipo joven y cercano, comprometido con entregar soluciones que funcionen y con acompañarte después de la entrega.</p>
          </div>
          <div className="roles">
            {roles.map(([ic, t, d, c]) => (
              <div className={`role ${c} reveal`} key={t}><div className="ico"><Icon name={ic} /></div><h4>{t}</h4><p>{d}</p></div>
            ))}
          </div>
          <div className="trust">
            {trust.map(([ic, t, d]) => (
              <div className="reveal" key={t}><Icon name={ic} /><span><h4>{t}</h4><p>{d}</p></span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact reveal">
            <div>
              <span className="eyebrow">Contacto</span>
              <h2 style={{ marginTop: 16 }}>¿Listo para <b>optimizar</b> tu negocio?</h2>
              <p>Cuéntanos tu idea y te respondemos por WhatsApp con una propuesta.</p>
              <div className="contact-links">
                <a href={waLink()} target="_blank" rel="noopener"><Icon name="chat" />WhatsApp {WHATSAPP_DISPLAY}</a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener"><Icon name="ig" />@digix.group</a>
                <span style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--muted)" }}><Icon name="pin" className="mi" />Proyectos a nivel nacional</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer>
        <div className="container foot">
          <a href="#inicio" className="logo"><span className="logo-mark">DIGIX</span>DIGIX GROUP</a>
          <span>Apps · Web · Automatización · Domótica · Cámaras</span>
          <span>© <Year /> DIGIX Group. Todos los derechos reservados.</span>
        </div>
      </footer>

      <a href={waLink()} className="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5 1-1.8.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2.9 3 1 4.1.8.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" /></svg>
      </a>
    </>
  );
}
