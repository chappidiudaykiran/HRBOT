import { useState, useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #0a0a0a;
    --dark: #111111;
    --card: #151515;
    --border: rgba(255,255,255,0.08);
    --white: #ffffff;
    --muted: rgba(255,255,255,0.5);
    --accent: #c8ff00;
    --text: rgba(255,255,255,0.85);
  }

  body { margin: 0; }

  .ll-root {
    font-family: 'Inter', sans-serif;
    background: var(--black);
    color: var(--white);
    overflow-x: hidden;
    line-height: 1.6;
  }

  /* NAV */
  .ll-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(20px);
    background: rgba(10,10,10,0.75);
    border-bottom: 1px solid var(--border);
  }
  .ll-logo {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: var(--white);
    text-decoration: none;
    letter-spacing: -0.5px;
  }
  .ll-logo span { color: var(--accent); }
  .ll-nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
    align-items: center;
  }
  .ll-nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;
  }
  .ll-nav-links a:hover { color: var(--white); }
  .ll-nav-cta {
    background: var(--accent) !important;
    color: var(--black) !important;
    padding: 10px 22px !important;
    border-radius: 6px;
    font-weight: 700 !important;
    font-size: 13px !important;
  }

  /* HERO */
  .ll-hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 40px 80px;
    position: relative;
    overflow: hidden;
  }
  .ll-hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% 20%, rgba(200,255,0,0.07) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,255,204,0.05) 0%, transparent 50%),
      linear-gradient(180deg, #0a0a0a 0%, #111 100%);
    pointer-events: none;
  }
  .ll-hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .ll-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(200,255,0,0.1);
    border: 1px solid rgba(200,255,0,0.3);
    color: var(--accent);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 8px 18px;
    border-radius: 50px;
    margin-bottom: 32px;
    position: relative;
    animation: fadeUp 0.8s ease 0.1s both;
  }
  .ll-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(38px, 6vw, 80px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -2px;
    max-width: 900px;
    position: relative;
    margin-bottom: 24px;
    animation: fadeUp 0.8s ease 0.2s both;
  }
  .ll-hero h1 em { font-style: normal; color: var(--accent); }
  .ll-hero p {
    font-size: 18px;
    color: var(--muted);
    max-width: 520px;
    margin-bottom: 40px;
    position: relative;
    line-height: 1.7;
    animation: fadeUp 0.8s ease 0.3s both;
  }
  .ll-hero-actions {
    display: flex;
    gap: 16px;
    align-items: center;
    position: relative;
    animation: fadeUp 0.8s ease 0.4s both;
  }

  /* BUTTONS */
  .ll-btn-primary {
    background: var(--accent);
    color: var(--black);
    padding: 15px 32px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
    font-family: 'Syne', sans-serif;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 30px rgba(200,255,0,0.3);
    cursor: pointer;
    border: none;
    display: inline-block;
  }
  .ll-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(200,255,0,0.5); }
  .ll-btn-secondary {
    color: var(--white);
    padding: 15px 32px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    border: 1px solid var(--border);
    transition: border-color 0.2s, background 0.2s;
    cursor: pointer;
    background: transparent;
    display: inline-block;
  }
  .ll-btn-secondary:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.05); }

  /* MARQUEE */
  .ll-marquee-section {
    padding: 50px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    overflow: hidden;
  }
  .ll-marquee-label {
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 30px;
  }
  .ll-marquee-wrap { overflow: hidden; }
  .ll-marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 22s linear infinite;
  }
  .ll-marquee-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 36px;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: var(--muted);
    white-space: nowrap;
  }
  .ll-marquee-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  /* SECTION BASE */
  .ll-section { padding: 100px 40px; }
  .ll-container { max-width: 1200px; margin: 0 auto; }
  .ll-section-label {
    font-size: 11px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 16px;
  }
  .ll-section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(28px, 4vw, 52px);
    font-weight: 800;
    letter-spacing: -1.5px;
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .ll-section-sub {
    font-size: 16px;
    color: var(--muted);
    max-width: 540px;
    line-height: 1.7;
  }

  /* SERVE */
  .ll-serve-section { background: var(--dark); }
  .ll-serve-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 60px;
  }
  .ll-serve-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s, border-color 0.3s;
    cursor: pointer;
  }
  .ll-serve-card:hover { transform: translateY(-6px); border-color: rgba(200,255,0,0.25); }
  .ll-serve-emoji {
    width: 100%;
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    background: linear-gradient(135deg, #1a1f1a, #1f1f2e);
  }
  .ll-serve-body { padding: 28px; }
  .ll-serve-body h3 {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .ll-serve-body p { font-size: 14px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; }
  .ll-explore-link {
    color: var(--accent);
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  /* LARA */
  .ll-lara-section { background: var(--black); }
  .ll-lara-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  .ll-lara-features { list-style: none; margin: 28px 0 40px; display: flex; flex-direction: column; gap: 14px; }
  .ll-lara-features li { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--text); line-height: 1.5; }
  .ll-feat-dot { width: 7px; height: 7px; background: var(--accent); border-radius: 50%; flex-shrink: 0; margin-top: 8px; }
  .ll-lara-visual {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 36px;
    position: relative;
    overflow: hidden;
  }
  .ll-lara-visual::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(200,255,0,0.1), transparent 70%);
    pointer-events: none;
  }
  .ll-ui-bar { display: flex; gap: 6px; margin-bottom: 24px; }
  .ll-ui-dot { width: 10px; height: 10px; border-radius: 50%; }
  .ll-chat { display: flex; flex-direction: column; gap: 12px; }
  .ll-msg {
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 13px;
    line-height: 1.5;
    max-width: 85%;
  }
  .ll-msg-user { background: rgba(255,255,255,0.07); border: 1px solid var(--border); align-self: flex-end; color: var(--text); }
  .ll-msg-lara { background: rgba(200,255,0,0.1); border: 1px solid rgba(200,255,0,0.2); color: var(--white); }
  .ll-chat-name { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px; color: var(--accent); }

  /* SERVICES */
  .ll-services-section { background: var(--dark); }
  .ll-services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 60px; }
  .ll-service-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 36px;
    transition: border-color 0.3s, transform 0.3s;
  }
  .ll-service-card:hover { border-color: rgba(200,255,0,0.3); transform: translateY(-4px); }
  .ll-service-icon {
    width: 48px; height: 48px;
    background: rgba(200,255,0,0.1);
    border: 1px solid rgba(200,255,0,0.2);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
    margin-bottom: 24px;
  }
  .ll-service-card h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; margin-bottom: 12px; }
  .ll-service-card p { font-size: 14px; color: var(--muted); line-height: 1.7; }

  /* HOW */
  .ll-how-section { background: var(--black); }
  .ll-how-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 60px; }
  .ll-step-number { font-family: 'Syne', sans-serif; font-size: 80px; font-weight: 800; color: rgba(255,255,255,0.04); line-height: 1; margin-bottom: -20px; }
  .ll-step-icon { width: 52px; height: 52px; background: var(--card); border: 1px solid var(--border); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
  .ll-how-step h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; margin-bottom: 12px; }
  .ll-how-step p { font-size: 14px; color: var(--muted); line-height: 1.7; }

  /* CTA */
  .ll-cta-section { background: var(--dark); }
  .ll-cta-inner {
    background: linear-gradient(135deg, rgba(200,255,0,0.08), rgba(0,255,204,0.05));
    border: 1px solid rgba(200,255,0,0.15);
    border-radius: 24px;
    padding: 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .ll-cta-inner::before {
    content: '';
    position: absolute;
    top: -100px; left: 50%;
    transform: translateX(-50%);
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(200,255,0,0.12), transparent 70%);
    pointer-events: none;
  }
  .ll-cta-inner h2 { font-family: 'Syne', sans-serif; font-size: clamp(28px, 4vw, 52px); font-weight: 800; letter-spacing: -1.5px; margin-bottom: 20px; position: relative; }
  .ll-cta-inner p { font-size: 16px; color: var(--muted); max-width: 540px; margin: 0 auto 40px; position: relative; line-height: 1.7; }

  /* FOOTER */
  .ll-footer { background: #0a0a0a; border-top: 1px solid var(--border); padding: 60px 40px 40px; }
  .ll-footer-inner { max-width: 1200px; margin: 0 auto; }
  .ll-footer-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 60px; margin-bottom: 50px; }
  .ll-footer-brand p { font-size: 14px; color: var(--muted); margin: 16px 0 28px; line-height: 1.7; max-width: 280px; }
  .ll-footer-col h4 { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 20px; }
  .ll-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .ll-footer-col ul a { color: var(--muted); text-decoration: none; font-size: 14px; transition: color 0.2s; }
  .ll-footer-col ul a:hover { color: var(--white); }
  .ll-email-form { display: flex; gap: 8px; margin-top: 12px; }
  .ll-email-form input {
    flex: 1;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 10px 14px;
    color: var(--white);
    font-size: 13px;
    outline: none;
    font-family: 'Inter', sans-serif;
  }
  .ll-email-form input::placeholder { color: var(--muted); }
  .ll-email-form button {
    background: var(--accent);
    color: var(--black);
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    font-family: 'Syne', sans-serif;
  }
  .ll-footer-bottom {
    border-top: 1px solid var(--border);
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: var(--muted);
  }
  .ll-footer-bottom a { color: var(--muted); text-decoration: none; }
  .ll-footer-bottom a:hover { color: var(--white); }
  .ll-footer-legal { display: flex; gap: 24px; }

  /* KEYFRAMES */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .ll-nav { padding: 16px 20px; }
    .ll-nav-links { display: none; }
    .ll-section { padding: 70px 20px; }
    .ll-serve-grid, .ll-services-grid, .ll-how-steps { grid-template-columns: 1fr; }
    .ll-lara-inner { grid-template-columns: 1fr; gap: 40px; }
    .ll-footer-top { grid-template-columns: 1fr; gap: 40px; }
    .ll-cta-inner { padding: 50px 30px; }
  }
`;

const TECHS = ["OpenAI", "LangChain", "Anthropic", "Pinecone", "Zapier", "Make.com", "n8n", "HuggingFace", "Supabase", "Notion AI"];

const SERVE_CARDS = [
  { emoji: "🚀", title: "Founders", desc: "Handling ops, content, follow ups, and decisions alone slows the business." },
  { emoji: "🏢", title: "Business Owners", desc: "Teams spend time on repeat tasks instead of sales and customers." },
  { emoji: "💡", title: "Brands", desc: "Customer queries and marketing work need speed without losing control." },
];

const SERVICES = [
  { icon: "📈", title: "Marketing & Growth", desc: "Smarter marketing systems using AI to generate leads, run campaigns, and scale your reach without increasing your team size." },
  { icon: "✍️", title: "Content Creation", desc: "AI powered content, creatives, and designs that match your brand voice and move fast — at a fraction of the effort." },
  { icon: "🤖", title: "AI Development & Automation", desc: "Custom AI agents and automations built on your data to simplify operations and eliminate repetitive manual work." },
  { icon: "⚡", title: "Workflow Integration", desc: "Seamlessly connect your existing tools and systems — CRMs, communication platforms, databases — into unified, automated pipelines." },
];

const HOW_STEPS = [
  { num: "01", icon: "🔍", title: "Tell us what you need", desc: "We start by understanding your business from the ground level using first principle thinking." },
  { num: "02", icon: "📐", title: "We plan the right system", desc: "We break the problem into simple steps and design an AI system that fits your work and goals." },
  { num: "03", icon: "🚀", title: "Build and deploy with control", desc: "We build a custom system with security, accuracy, and risks, then deploy it for daily use." },
];

const NAV_LINKS = ["Home", "Services", "Blog", "About", "Join"];

function Navbar() {
  return (
    <nav className="ll-nav">
      <a href="#" className="ll-logo">Lara<span>Labs</span></a>
      <ul className="ll-nav-links">
        {NAV_LINKS.map(l => <li key={l}><a href="#">{l}</a></li>)}
        <li><a href="#" className="ll-nav-cta">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="ll-hero">
      <div className="ll-hero-bg" />
      <div className="ll-hero-grid" />
      <div className="ll-hero-badge">✦ Workforce of the Future</div>
      <h1>Are you struggling to <em>Integrate AI</em> in your Business?</h1>
      <p>We build digital workers that work for you. We design AI systems that think, learn, and scale with your business.</p>
      <div className="ll-hero-actions">
        <a href="#" className="ll-btn-primary">Request a Demo</a>
        <a href="#" className="ll-btn-secondary">Learn More</a>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...TECHS, ...TECHS];
  return (
    <div className="ll-marquee-section">
      <p className="ll-marquee-label">Technologies Used to Build AI Systems</p>
      <div className="ll-marquee-wrap">
        <div className="ll-marquee-track">
          {items.map((t, i) => (
            <div className="ll-marquee-item" key={i}>
              <span className="ll-marquee-dot" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServeSection() {
  return (
    <section className="ll-section ll-serve-section">
      <div className="ll-container">
        <p className="ll-section-label">Who We Serve</p>
        <h2 className="ll-section-title">Built for those who<br />can't afford to slow down</h2>
        <div className="ll-serve-grid">
          {SERVE_CARDS.map(c => (
            <div className="ll-serve-card" key={c.title}>
              <div className="ll-serve-emoji">{c.emoji}</div>
              <div className="ll-serve-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <a href="#" className="ll-explore-link">Explore →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LaraSection() {
  return (
    <section className="ll-section ll-lara-section">
      <div className="ll-container">
        <div className="ll-lara-inner">
          <div>
            <p className="ll-section-label">Meet Lara</p>
            <h2 className="ll-section-title">Your First Digital Worker.</h2>
            <p className="ll-section-sub">Lara is a digital worker built to automate your chaos.</p>
            <ul className="ll-lara-features">
              {[
                "Syncs your CRM, answers customer queries, and chases follow ups.",
                "Connects your apps and automates your workflows.",
                "Takes on repetitive tasks like support tickets and reporting.",
              ].map((f, i) => (
                <li key={i}><span className="ll-feat-dot" />{f}</li>
              ))}
            </ul>
            <a href="#" className="ll-btn-primary">Get a Custom Agent Like Lara</a>
          </div>
          <div className="ll-lara-visual">
            <div className="ll-ui-bar">
              <div className="ll-ui-dot" style={{ background: "#ff5f57" }} />
              <div className="ll-ui-dot" style={{ background: "#febc2e" }} />
              <div className="ll-ui-dot" style={{ background: "#28c840" }} />
            </div>
            <div className="ll-chat">
              <div className="ll-msg ll-msg-user">Can you follow up with the 12 leads from this week?</div>
              <div className="ll-msg ll-msg-lara">
                <div className="ll-chat-name">Lara</div>
                Done! I've sent personalized follow-up emails to all 12 leads, updated your CRM, and scheduled reminders for the 3 who haven't opened yet.
              </div>
              <div className="ll-msg ll-msg-user">Also, generate a weekly report</div>
              <div className="ll-msg ll-msg-lara">
                <div className="ll-chat-name">Lara</div>
                Your weekly report is ready — 47 tasks completed, 92% response rate, and 3 new deals in pipeline. Sending to your inbox now.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="ll-section ll-services-section">
      <div className="ll-container">
        <p className="ll-section-label">What We Do</p>
        <h2 className="ll-section-title">Services We Provide</h2>
        <div className="ll-services-grid">
          {SERVICES.map(s => (
            <div className="ll-service-card" key={s.title}>
              <div className="ll-service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowSection() {
  return (
    <section className="ll-section ll-how-section">
      <div className="ll-container">
        <p className="ll-section-label">Our Process</p>
        <h2 className="ll-section-title">How we Design<br />the Solution</h2>
        <div className="ll-how-steps">
          {HOW_STEPS.map(s => (
            <div className="ll-how-step" key={s.num}>
              <div className="ll-step-number">{s.num}</div>
              <div className="ll-step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <br />
              <a href="#" className="ll-explore-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="ll-section ll-cta-section">
      <div className="ll-container">
        <div className="ll-cta-inner">
          <p className="ll-section-label" style={{ color: "var(--accent)" }}>Free Strategy Session</p>
          <h2>AI Growth Strategy,<br />Designed for Serious Businesses</h2>
          <p>A focused strategy session to identify where AI can reduce costs, improve efficiency, and unlock scalable growth tailored to your business model.</p>
          <a href="#" className="ll-btn-primary">Get Your Free AI Strategy Session</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ll-footer">
      <div className="ll-footer-inner">
        <div className="ll-footer-top">
          <div className="ll-footer-brand">
            <a href="#" className="ll-logo">Lara<span>Labs</span></a>
            <p>We help companies build digital workers that work for you, automating workflows and saving time.</p>
            <a href="#" className="ll-btn-primary" style={{ fontSize: 13, padding: "12px 24px" }}>Get Started</a>
          </div>
          <div className="ll-footer-col">
            <h4>Quick Links</h4>
            <ul>
              {["Home", "Services", "Blog", "About", "Join", "Contact"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="ll-footer-col">
            <h4>Join our developers community</h4>
            <div className="ll-email-form">
              <input type="email" placeholder="Your email" />
              <button>Join</button>
            </div>
            <p style={{ marginTop: 24, fontSize: 13, color: "var(--muted)" }}>contact@laralabs.in</p>
          </div>
        </div>
        <div className="ll-footer-bottom">
          <span>© 2026 Laralabs. All Rights Reserved.</span>
          <div className="ll-footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LaraLabs() {
  return (
    <>
      <style>{styles}</style>
      <div className="ll-root">
        <Navbar />
        <Hero />
        <Marquee />
        <ServeSection />
        <LaraSection />
        <ServicesSection />
        <HowSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}