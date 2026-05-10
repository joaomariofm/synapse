// Synapse wireframes — shared bits

const StatusBar = () => (
  <div className="statusbar">
    <span>9:41</span>
    <span style={{ letterSpacing: 2 }}>· · ·</span>
    <span>87%</span>
  </div>
);

// tiny icon set drawn as inline svg — kept very simple / sketchy
const I = {
  search: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="10" cy="10" r="6" /><path d="M14.5 14.5L19 19" />
    </svg>
  ),
  plus: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  gear: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
    </svg>
  ),
  chev: (dir = 'r') => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: dir === 'd' ? 'rotate(90deg)' : 'none' }}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
  folder: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  ),
  tag: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.6 13.4L12 22l-9-9 8.6-8.6h6.2v6.2z" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
    </svg>
  ),
  edit: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h4L20 8l-4-4L4 16v4z" />
    </svg>
  ),
  flag: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21V4M5 4h12l-3 4 3 4H5" />
    </svg>
  ),
  pause: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M9 5v14M15 5v14" />
    </svg>
  ),
  more: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" />
    </svg>
  ),
  back: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 6l-6 6 6 6" />
    </svg>
  ),
  filter: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16M7 12h10M10 19h4" />
    </svg>
  ),
  check: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5 9-11" />
    </svg>
  ),
  eye: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
};

// annotation helper
function Note({ children, style, arrow = '↓' }) {
  return (
    <div className="annotation" style={style}>
      <span className="ann-arrow">{arrow}</span>
      {children}
    </div>
  );
}

Object.assign(window, { StatusBar, I, Note });
