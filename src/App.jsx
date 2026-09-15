import { useEffect, useState } from 'react';

const projects = [
  { name: 'RideTogether', type: 'Group trip-planning application', year: '2026', categories: ['full-stack'], art: 'tide', feature: true, url: 'https://github.com/AnirudhAK07/ridetogether' },
  { name: 'Oracle financial platforms', type: 'OFSLL & Oracle FLEXCUBE', year: '2023–Now', categories: ['enterprise'], art: 'noho' },
  { name: 'Banking integrations', type: 'REST & SOAP services', year: '2023–Now', categories: ['apis', 'enterprise'], art: 'atlas' },
  { name: 'Analytics reporting', type: 'Oracle Analytics Publisher', year: '2023–Now', categories: ['enterprise'], art: 'soho', feature: true },
];

const filters = [
  ['all', 'All'],
  ['full-stack', 'Full stack'],
  ['enterprise', 'Enterprise'],
  ['apis', 'APIs'],
];

function ProjectArtwork({ type }) {
  if (type === 'tide') return <><div className="tide-planet" /><div className="tide-label">TIDE<br />WELL</div><div className="tide-line">A better way to make waves</div><div className="tide-circle">↗</div></>;
  if (type === 'noho') return <><span className="noho-daisy">✳</span><span className="noho-text">NOHO<br />HOUSE</span><span className="noho-sub">A permanent<br />work in progress</span></>;
  if (type === 'atlas') return <><div className="atlas-ring" /><div className="atlas-ring inner" /><span>ATLAS</span><small>Built for the<br />curious.</small></>;
  return <><span className="soho-number">5</span><span className="soho-word">SOHO</span><div className="soho-stamp">NEW<br />YORK<br />CITY</div></>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activeFilter]);

  const visibleProjects = projects.filter(({ categories }) => activeFilter === 'all' || categories.includes(activeFilter));

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Anirudh AK home">AA<span>®</span></a>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span className="sr-only">Toggle menu</span>
        </button>
        <nav id="primary-nav" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Projects</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Software engineer · Bengaluru, India</p>
            <h1>Engineering <em>clarity</em><br />from complexity.</h1>
            <p className="intro">I’m Anirudh AK, a software engineer building dependable enterprise platforms and thoughtful full-stack products—from data flows and APIs to polished user experiences.</p>
            <div className="hero-actions"><a className="primary-link" href="#work">View my work <b>↘</b></a><a className="text-link" href="mailto:mail2anirudhak@gmail.com">Get in touch</a></div>
          </div>
          <div className="hero-art reveal" aria-label="Abstract software engineering illustration" role="img">
            <div className="orb orb-one" /><div className="orb orb-two" /><div className="orb orb-three" /><div className="scribble">●</div>
            <p className="art-caption">Currently at<br />Oracle · Bengaluru<br /><span>2023 — now</span></p>
          </div>
          <p className="scroll-note">Scroll to wander <span>↓</span></p>
        </section>

        <section id="work" className="work section-shell">
          <div className="section-top reveal"><p className="eyebrow"><span /> Selected work</p>
            <div className="filter-row" role="group" aria-label="Filter projects">
              {filters.map(([value, label]) => <button key={value} className={`filter ${activeFilter === value ? 'active' : ''}`} onClick={() => setActiveFilter(value)}>{label}</button>)}
            </div>
          </div>
          <div className="projects">
            {visibleProjects.map((project) => <article className={`project ${project.feature ? 'feature' : ''} reveal visible`} key={project.name}>
              <a href={project.url || '#contact'} className={`project-image ${project.art}`} aria-label={`View ${project.name} project`} target={project.url ? '_blank' : undefined} rel={project.url ? 'noreferrer' : undefined}><ProjectArtwork type={project.art} /></a>
              <div className="project-meta"><h2>{project.name}</h2><p>{project.type}</p><span>{project.year}</span></div>
            </article>)}
          </div>
        </section>

        <section id="experience" className="experience section-shell">
          <div className="experience-heading reveal"><p className="eyebrow"><span /> Professional journey</p><h2>Building software<br />at <em>scale.</em></h2></div>
          <div className="experience-grid">
            <article className="glass-card role-card reveal">
              <div className="role-top"><p>Oracle</p><span>Jul 2023 — Present</span></div>
              <h3>Staff Consultant</h3>
              <p className="role-previous">Previously Associate Consultant</p>
              <ul><li>Developed and migrated <strong>30+ financial-services screens</strong> across OFSLL and Oracle FLEXCUBE.</li><li>Delivered <strong>15+ REST and SOAP integrations</strong> with validation, mapping, and resilient error handling.</li><li>Improved release confidence through cross-layer defect diagnosis and client-environment validation.</li></ul>
            </article>
            <aside className="skills-panel reveal"><p className="eyebrow"><span /> Core toolkit</p><div className="skill-groups"><div><h3>Languages</h3><p>Java · JavaScript · TypeScript · SQL · PL/SQL</p></div><div><h3>Frameworks & APIs</h3><p>Spring Boot · React · REST · SOAP · Hibernate</p></div><div><h3>Tools</h3><p>JUnit 5 · Maven · Git · Bash · Postman · Jira</p></div></div><a className="text-link" href="https://github.com/AnirudhAK07" target="_blank" rel="noreferrer">Explore GitHub <b>↗</b></a></aside>
          </div>
        </section>

        <section id="about" className="about section-shell">
          <p className="eyebrow reveal"><span /> A little bit about me</p>
          <div className="about-layout">
            <div className="portrait reveal" aria-label="Abstract portrait of Anirudh AK" role="img"><div className="portrait-sun" /><div className="portrait-face" /><div className="portrait-hair" /><div className="portrait-neck" /></div>
            <div className="about-copy reveal"><p className="eyebrow"><span /> Beyond the code</p><h2>Systems thinking,<br /><em>product mindset.</em></h2><p>I enjoy turning complex rules, integrations, and data into reliable, maintainable software. Outside enterprise platforms, I build with React and Spring Boot.</p><p>My foundation is a B.Tech in Computer Science from Government Engineering College, Thrissur—and I’m always keen to learn from strong teams and meaningful problems.</p><a className="text-link" href="#contact">Let’s work together <b>↘</b></a></div>
          </div>
          <div className="marquee" aria-hidden="true"><div>Thoughtful work · Good people · Open minds · Thoughtful work · Good people · Open minds ·</div></div>
        </section>

        <section id="contact" className="contact section-shell">
          <p className="eyebrow reveal"><span /> Let’s build something useful</p><h2 className="reveal">Let’s create<br />an <em>impact.</em></h2>
          <a className="email reveal" href="mailto:mail2anirudhak@gmail.com">mail2anirudhak@gmail.com <span>↗</span></a>
          <div className="contact-bottom"><p>Bengaluru, India<br />Open to opportunities</p><div><a href="https://www.linkedin.com/in/anirudh-a-k/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/AnirudhAK07" target="_blank" rel="noreferrer">GitHub</a><a href="https://leetcode.com/u/AnirudhAK/" target="_blank" rel="noreferrer">LeetCode</a></div><a href="#top" className="back-top">Back to top ↑</a></div>
        </section>
      </main>
    </>
  );
}
