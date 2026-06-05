/* ===================================
   TATI DINIZ CONFEITARIA — style.css
   Luxury Patisserie Aesthetic
   =================================== */

/* ---- RESET & ROOT ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --rose:       #e8b4c0;
  --rose-dark:  #d4879a;
  --rose-light: #f9edf0;
  --champagne:  #f5efe6;
  --gold:       #d4a853;
  --gold-light: #f0e0b0;
  --cream:      #faf7f2;
  --choco:      #6b3d2e;
  --choco-dark: #3d1f12;
  --tan:        #c8a882;
  --white:      #ffffff;
  --text:       #2e1a10;
  --text-muted: #8a6a58;
  --border:     #edddd4;

  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans:  'Jost', sans-serif;

  --radius: 16px;
  --radius-lg: 28px;
  --shadow: 0 4px 24px rgba(107,61,46,.08);
  --shadow-lg: 0 12px 48px rgba(107,61,46,.15);

  --transition: .35s cubic-bezier(.25,.8,.25,1);
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-sans);
  color: var(--text);
  background: var(--cream);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img { display: block; max-width: 100%; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* ---- CANVAS ---- */
#confetti-canvas {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* ---- FLOATERS ---- */
.floaters {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}
.floater {
  position: absolute;
  animation: floatAnim linear infinite;
  will-change: transform;
}
.f1 { width:52px; top:10%; left:5%;  animation-duration:12s; animation-delay:0s; }
.f2 { width:28px; top:20%; right:8%; animation-duration:9s;  animation-delay:-3s; }
.f3 { width:40px; top:60%; left:3%; animation-duration:14s; animation-delay:-5s; }
.f4 { width:20px; top:75%; right:5%; animation-duration:8s;  animation-delay:-1s; }
.f5 { width:24px; top:40%; left:92%; animation-duration:11s; animation-delay:-7s; }
.f6 { width:16px; top:85%; left:20%; animation-duration:10s; animation-delay:-2s; }
.f7 { width:36px; top:30%; right:15%;animation-duration:13s; animation-delay:-4s; }
.f8 { width:22px; top:55%; left:88%; animation-duration:9s;  animation-delay:-6s; }

@keyframes floatAnim {
  0%   { transform: translateY(0) rotate(0deg) scale(1); opacity:.7; }
  33%  { transform: translateY(-30px) rotate(10deg) scale(1.05); opacity:.5; }
  66%  { transform: translateY(-10px) rotate(-8deg) scale(.95); opacity:.8; }
  100% { transform: translateY(0) rotate(0deg) scale(1); opacity:.7; }
}

/* ---- HEADER ---- */
#site-header {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  padding: .8rem 0;
  transition: background var(--transition), backdrop-filter var(--transition), box-shadow var(--transition);
}
#site-header.scrolled {
  background: rgba(250,247,242,.95);
  backdrop-filter: blur(16px);
  box-shadow: 0 2px 24px rgba(107,61,46,.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav-logo {
  display: flex;
  align-items: baseline;
  gap: .4rem;
  font-family: var(--font-serif);
}
.logo-icon {
  color: var(--gold);
  font-size: 1.1rem;
  line-height: 1;
}
.logo-text {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--choco);
  letter-spacing: .01em;
}
.logo-sub {
  font-size: .7rem;
  font-family: var(--font-sans);
  font-weight: 300;
  color: var(--text-muted);
  letter-spacing: .12em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: .5rem;
}
.nav-link {
  font-size: .82rem;
  font-weight: 400;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--choco);
  padding: .4rem .7rem;
  border-radius: 6px;
  transition: color var(--transition), background var(--transition);
}
.nav-link:hover { color: var(--rose-dark); background: var(--rose-light); }

.nav-cta {
  font-size: .8rem;
  font-weight: 500;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--white);
  background: linear-gradient(135deg, var(--rose-dark), var(--gold));
  padding: .55rem 1.2rem;
  border-radius: 50px;
  transition: opacity var(--transition), transform var(--transition), box-shadow var(--transition);
  box-shadow: 0 4px 16px rgba(212,135,154,.35);
}
.nav-cta:hover {
  opacity: .9;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(212,135,154,.45);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: .4rem;
  z-index: 101;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--choco);
  border-radius: 2px;
  transition: var(--transition);
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ---- BUTTONS ---- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  font-family: var(--font-sans);
  font-size: .82rem;
  font-weight: 500;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: .85rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  transition: transform var(--transition), box-shadow var(--transition), opacity var(--transition), background var(--transition);
}
.btn:hover { transform: translateY(-3px); }
.btn-primary {
  background: linear-gradient(135deg, var(--rose-dark) 0%, var(--gold) 100%);
  color: var(--white);
  box-shadow: 0 6px 24px rgba(212,135,154,.4);
}
.btn-primary:hover { box-shadow: 0 10px 32px rgba(212,135,154,.55); }

.btn-whatsapp {
  background: #25D366;
  color: var(--white);
  box-shadow: 0 6px 24px rgba(37,211,102,.35);
}
.btn-whatsapp:hover { background: #1ebe5b; box-shadow: 0 10px 32px rgba(37,211,102,.45); }

.btn-outline {
  background: transparent;
  color: var(--choco);
  border: 1.5px solid var(--border);
}
.btn-outline:hover { border-color: var(--rose-dark); color: var(--rose-dark); background: var(--rose-light); }

.btn-small {
  background: linear-gradient(135deg, var(--rose-dark), var(--gold));
  color: var(--white);
  font-size: .75rem;
  padding: .6rem 1.4rem;
  box-shadow: 0 4px 16px rgba(212,135,154,.3);
}
.btn-small:hover { box-shadow: 0 8px 24px rgba(212,135,154,.45); }

/* ---- SECTION HELPERS ---- */
.section { padding: 7rem 0; position: relative; z-index: 2; }
.section-tinted { background: var(--champagne); }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

.section-header { text-align: center; margin-bottom: 4rem; }
.section-eyebrow {
  font-family: var(--font-sans);
  font-size: .7rem;
  font-weight: 500;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--rose-dark);
  margin-bottom: .75rem;
  display: block;
}
.section-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 400;
  color: var(--choco);
  line-height: 1.15;
  margin-bottom: 1rem;
}
.section-title em { color: var(--rose-dark); font-style: italic; }
.section-desc { font-size: .95rem; color: var(--text-muted); max-width: 520px; margin: 0 auto; line-height: 1.7; }

/* ---- REVEAL ANIMATIONS ---- */
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity .7s cubic-bezier(.25,.8,.25,1), transform .7s cubic-bezier(.25,.8,.25,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: .12s; }
.reveal-delay-2 { transition-delay: .24s; }
.reveal-delay-3 { transition-delay: .36s; }
.reveal-delay-4 { transition-delay: .48s; }
.reveal-delay-5 { transition-delay: .60s; }

/* ===== HERO ===== */
#hero {
  position: relative;
  height: 100dvh; min-height: 600px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  z-index: 2;
}
.hero-bg {
  position: absolute; inset: 0;
}
.hero-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 30%;
  will-change: transform;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    160deg,
    rgba(61,31,18,.72) 0%,
    rgba(107,61,46,.5) 50%,
    rgba(212,135,154,.3) 100%
  );
}
.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 720px;
}
.hero-eyebrow {
  font-family: var(--font-sans);
  font-size: .72rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 1.2rem;
}
.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 10vw, 6.5rem);
  font-weight: 300;
  line-height: 1.05;
  color: var(--white);
  margin-bottom: 1.2rem;
}
.hero-title em {
  font-style: italic;
  color: var(--rose);
  font-weight: 400;
}
.hero-subtitle {
  font-family: var(--font-serif);
  font-size: clamp(1rem, 3vw, 1.6rem);
  font-weight: 300;
  font-style: italic;
  color: rgba(255,255,255,.85);
  margin-bottom: 1.5rem;
}
.hero-rating {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 50px;
  padding: .45rem 1.1rem;
  margin-bottom: 2.2rem;
}
.stars { font-size: .9rem; }
.rating-text { font-size: .78rem; color: rgba(255,255,255,.85); letter-spacing: .04em; }
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-scroll-hint {
  position: absolute;
  bottom: 2.5rem; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  z-index: 3;
  animation: fadeInUp 1.2s 1.5s forwards;
  opacity: 0;
}
.hero-scroll-hint span {
  font-size: .65rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(255,255,255,.6);
}
.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(255,255,255,.6), transparent);
  animation: scrollPulse 1.6s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%,100% { transform: scaleY(1); opacity:.6; }
  50%      { transform: scaleY(.5); opacity:.2; }
}
@keyframes fadeInUp {
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
  from { opacity: 0; transform: translateX(-50%) translateY(16px); }
}

/* ===== SOBRE ===== */
.sobre-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}
.sobre-image-wrap {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: visible;
}
.sobre-img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: block;
}
.sobre-badge {
  position: absolute;
  bottom: -1.5rem; right: -1.5rem;
  background: linear-gradient(135deg, var(--gold), var(--rose-dark));
  color: var(--white);
  border-radius: 50%;
  width: 90px; height: 90px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  box-shadow: 0 8px 24px rgba(212,135,154,.45);
  text-align: center;
}
.badge-num { font-family: var(--font-serif); font-size: 1.6rem; font-weight: 600; line-height: 1; }
.badge-label { font-size: .62rem; letter-spacing: .06em; opacity: .9; }

.sobre-text { display: flex; flex-direction: column; gap: 1.2rem; }
.sobre-desc { font-size: .95rem; color: var(--text-muted); line-height: 1.8; }
.sobre-features {
  display: flex;
  flex-direction: column;
  gap: .6rem;
  margin: .5rem 0;
}
.feature-item {
  display: flex;
  align-items: center;
  gap: .75rem;
  font-size: .9rem;
  color: var(--text);
  font-weight: 400;
}
.feature-icon { font-size: 1.1rem; }

/* ===== CATÁLOGO ===== */
.catalog-tabs {
  display: flex;
  gap: .5rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.tab-btn {
  font-family: var(--font-sans);
  font-size: .82rem;
  font-weight: 500;
  letter-spacing: .08em;
  color: var(--text-muted);
  background: var(--white);
  border: 1.5px solid var(--border);
  border-radius: 50px;
  padding: .7rem 1.8rem;
  cursor: pointer;
  transition: all var(--transition);
}
.tab-btn:hover { border-color: var(--rose-dark); color: var(--rose-dark); }
.tab-btn.active {
  background: linear-gradient(135deg, var(--rose-dark), var(--gold));
  border-color: transparent;
  color: var(--white);
  box-shadow: 0 4px 16px rgba(212,135,154,.35);
}

.tab-content { display: none; }
.tab-content.active { display: block; }

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.product-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}
.product-img-wrap {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}
.product-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform .6s ease;
}
.product-card:hover .product-img-wrap img { transform: scale(1.06); }
.product-badge {
  position: absolute; top: .8rem; left: .8rem;
  background: linear-gradient(135deg, var(--rose-dark), var(--gold));
  color: var(--white);
  font-size: .65rem;
  font-weight: 500;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: .3rem .7rem;
  border-radius: 50px;
}
.product-body {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: .6rem;
}
.product-body h3 {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--choco);
}
.product-body p {
  font-size: .88rem;
  color: var(--text-muted);
  line-height: 1.65;
  flex: 1;
}

/* ===== GALERIA ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 240px;
  gap: 1rem;
}
.gallery-item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
}
.gallery-large { grid-column: span 2; }
.gallery-wide  { grid-column: span 2; }

.gallery-item img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform .6s ease;
}
.gallery-item:hover img { transform: scale(1.08); }

.gallery-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(61,31,18,.75) 0%, transparent 55%);
  display: flex;
  align-items: flex-end;
  padding: 1.2rem;
  opacity: 0;
  transition: opacity var(--transition);
}
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-overlay span {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-style: italic;
  color: var(--white);
}

/* ===== AVALIAÇÕES ===== */
.rating-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .3rem;
  margin-top: 1.5rem;
}
.stars-big { font-size: 1.8rem; letter-spacing: .1rem; }
.rating-num {
  font-family: var(--font-serif);
  font-size: 4rem;
  font-weight: 300;
  color: var(--choco);
  line-height: 1;
}
.rating-label { font-size: .8rem; color: var(--text-muted); letter-spacing: .08em; text-transform: uppercase; }

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.review-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.8rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: .8rem;
  transition: transform var(--transition), box-shadow var(--transition);
}
.review-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
.review-header {
  display: flex;
  align-items: center;
  gap: .85rem;
}
.review-avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--rose);
  color: var(--white);
  display: flex; align-items: center; justify-content: center;
  font-weight: 600;
  font-size: .85rem;
  flex-shrink: 0;
}
.review-header strong { font-size: .95rem; font-weight: 500; color: var(--choco); display: block; }
.review-stars { font-size: .85rem; }
.review-card p { font-size: .88rem; color: var(--text-muted); line-height: 1.75; font-style: italic; flex: 1; }
.review-date { font-size: .75rem; color: var(--tan); letter-spacing: .04em; }

/* ===== HORÁRIOS ===== */
.horarios-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
}
.horarios-text { display: flex; flex-direction: column; gap: 1.2rem; }
.horarios-desc { font-size: .95rem; color: var(--text-muted); line-height: 1.8; }

.horarios-table-wrap {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
  position: relative;
}
.horarios-table {
  width: 100%;
  border-collapse: collapse;
}
.horarios-table tr {
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
}
.horarios-table tr:last-child { border-bottom: none; }
.horarios-table tr.today {
  background: var(--rose-light);
  border-radius: 8px;
}
.horarios-table td {
  padding: .85rem .5rem;
  font-size: .9rem;
  color: var(--text);
}
.horarios-table td:first-child { font-weight: 500; color: var(--choco); }
.horarios-table td:last-child { text-align: right; color: var(--text-muted); }
.closed-tag { color: var(--rose-dark) !important; font-style: italic; }

.status-badge {
  position: absolute;
  top: -1rem; right: 1.5rem;
  padding: .4rem 1rem;
  border-radius: 50px;
  font-size: .75rem;
  font-weight: 500;
  letter-spacing: .06em;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
}
.status-badge.open { background: #25D366; color: #fff; }
.status-badge.closed { background: var(--rose-dark); color: #fff; }

/* ===== LOCALIZAÇÃO ===== */
.location-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}
.location-info { display: flex; flex-direction: column; gap: 1.5rem; }
.location-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.location-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: .1rem; }
.location-item strong { font-size: .9rem; font-weight: 600; color: var(--choco); display: block; margin-bottom: .25rem; }
.location-item p, .location-item a { font-size: .9rem; color: var(--text-muted); line-height: 1.65; }
.location-item a { color: var(--rose-dark); transition: color var(--transition); }
.location-item a:hover { color: var(--choco); text-decoration: underline; }

.map-container {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.map-container iframe { display: block; }

/* ===== FOOTER ===== */
footer { background: var(--choco-dark); color: rgba(255,255,255,.8); position: relative; z-index: 2; }
.footer-top { padding: 5rem 0 3rem; }
.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.2fr;
  gap: 3rem;
}
.footer-brand .footer-logo {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-family: var(--font-serif);
  font-size: 1.3rem;
  color: var(--white);
  margin-bottom: 1rem;
}
.footer-brand .logo-icon { color: var(--gold); }
.footer-brand p { font-size: .88rem; line-height: 1.7; color: rgba(255,255,255,.55); max-width: 280px; }
.footer-social {
  display: flex;
  gap: .75rem;
  margin-top: 1.5rem;
}
.social-btn {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,.1);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.7);
  transition: background var(--transition), color var(--transition), transform var(--transition);
}
.social-btn:hover {
  background: var(--rose-dark);
  color: var(--white);
  transform: translateY(-3px);
}

.footer-links h4, .footer-contact h4 {
  font-family: var(--font-sans);
  font-size: .72rem;
  font-weight: 500;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.2rem;
}
.footer-links ul { display: flex; flex-direction: column; gap: .6rem; }
.footer-links a { font-size: .88rem; color: rgba(255,255,255,.55); transition: color var(--transition); }
.footer-links a:hover { color: var(--rose); }
.footer-contact p { font-size: .88rem; color: rgba(255,255,255,.55); margin-bottom: .6rem; }
.footer-contact a { color: var(--rose); transition: color var(--transition); }
.footer-contact a:hover { color: var(--gold); }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 1.5rem 0;
  text-align: center;
}
.footer-bottom p { font-size: .8rem; color: rgba(255,255,255,.3); }

/* ===== WHATSAPP FLOAT ===== */
.whatsapp-float {
  position: fixed;
  bottom: 2rem; right: 2rem;
  z-index: 200;
  width: 58px; height: 58px;
  background: #25D366;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--white);
  box-shadow: 0 6px 24px rgba(37,211,102,.5);
  animation: wfPulse 2.5s ease-in-out infinite;
  transition: transform var(--transition), box-shadow var(--transition);
}
.whatsapp-float:hover {
  transform: scale(1.1) translateY(-3px);
  box-shadow: 0 10px 32px rgba(37,211,102,.6);
  animation: none;
}
.wf-tooltip {
  position: absolute;
  right: calc(100% + .75rem);
  top: 50%;
  transform: translateY(-50%);
  background: var(--choco-dark);
  color: var(--white);
  font-size: .75rem;
  font-weight: 500;
  letter-spacing: .06em;
  white-space: nowrap;
  padding: .4rem .85rem;
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition), transform var(--transition);
  transform: translateY(-50%) translateX(6px);
}
.whatsapp-float:hover .wf-tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}
@keyframes wfPulse {
  0%,100% { box-shadow: 0 6px 24px rgba(37,211,102,.5); }
  50%      { box-shadow: 0 6px 36px rgba(37,211,102,.8), 0 0 0 10px rgba(37,211,102,.1); }
}

/* ===================================
   RESPONSIVE — TABLET
   =================================== */
@media (max-width: 1024px) {
  .sobre-grid { grid-template-columns: 1fr; gap: 3rem; }
  .sobre-img { height: 380px; }
  .sobre-badge { right: 1rem; }
  .catalog-grid { grid-template-columns: repeat(2, 1fr); }
  .reviews-grid { grid-template-columns: repeat(2, 1fr); }
  .horarios-grid { grid-template-columns: 1fr; gap: 3rem; }
  .location-grid { grid-template-columns: 1fr; gap: 3rem; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
  .footer-brand { grid-column: 1 / -1; }
}

/* ===================================
   RESPONSIVE — MOBILE
   =================================== */
@media (max-width: 768px) {
  .section { padding: 5rem 0; }

  /* nav mobile */
  .hamburger { display: flex; }
  .nav-links {
    position: fixed;
    top: 0; right: 0;
    width: 80%; max-width: 320px;
    height: 100dvh;
    background: var(--white);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 2.5rem;
    gap: .4rem;
    box-shadow: -8px 0 40px rgba(107,61,46,.15);
    transform: translateX(110%);
    transition: transform .4s cubic-bezier(.25,.8,.25,1);
    z-index: 99;
  }
  .nav-links.open { transform: translateX(0); }
  .nav-link {
    font-size: 1rem;
    padding: .8rem .5rem;
    width: 100%;
    border-bottom: 1px solid var(--border);
  }
  .nav-cta { margin-top: 1rem; width: 100%; justify-content: center; }

  .hero-actions { flex-direction: column; align-items: center; }
  .hero-actions .btn { width: 100%; max-width: 320px; justify-content: center; }

  .catalog-grid { grid-template-columns: 1fr; }
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 160px;
  }
  .gallery-large, .gallery-wide { grid-column: span 2; }

  .reviews-grid { grid-template-columns: 1fr; }

  .footer-grid { grid-template-columns: 1fr; }

  .sobre-img { height: 280px; }

  .horarios-table-wrap { padding: 1.2rem; }
}

@media (max-width: 480px) {
  .gallery-grid { grid-template-columns: 1fr; }
  .gallery-large, .gallery-wide { grid-column: span 1; }
  .catalog-tabs { gap: .35rem; }
  .tab-btn { padding: .6rem 1.1rem; font-size: .75rem; }
  .hero-title { font-size: 2.8rem; }
  .floaters { display: none; }
}