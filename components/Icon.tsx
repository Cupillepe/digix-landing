const paths: Record<string, React.ReactNode> = {
  phone: (<><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></>),
  monitor: (<><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></>),
  spark: (<><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /><circle cx="12" cy="12" r="3" /></>),
  home: (<><path d="M3 11l9-8 9 8v10H3z" /><path d="M9 21v-6h6v6" /></>),
  camera: (<><circle cx="12" cy="10" r="7" /><circle cx="12" cy="10" r="3" /><path d="M8 21h8M12 17v4" /></>),
  thermo: <path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z" />,
  lock: (<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>),
  cart: (<><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.5 12h12L22 7H6.2" /></>),
  card: (<><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>),
  chart: (<><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></>),
  layers: (<><path d="M12 2l10 5-10 5L2 7z" /><path d="M2 12l10 5 10-5M2 17l10 5 10-5" /></>),
  code: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />,
  server: (<><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01" /></>),
  pen: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />,
  check: (<><path d="M9 11l3 3 8-8" /><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>),
  wifi: (<><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0" /><circle cx="12" cy="19.5" r=".8" /></>),
  shield: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>),
  file: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>),
  key: (<><circle cx="7.5" cy="15.5" r="4.5" /><path d="M10.7 12.3L21 2M17 6l3 3" /></>),
  support: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6" /></>),
  steps: (<><path d="M4 20h4v-4h4v-4h4V8h4" /></>),
  chat: <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z" />,
  ig: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></>),
  pin: (<><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>),
  arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
};

export default function Icon({ name, className }: { name: keyof typeof paths | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
