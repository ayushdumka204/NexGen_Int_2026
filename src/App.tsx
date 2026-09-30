import { useEffect, useState } from "react";
import nexGenLogo from "./assets/nexgen-logo.png";
import akshayaPatraLogo from "./assets/client-akshaya-patra.png";
import baxterLogo from "./assets/client-baxter.png";
import coloplastLogo from "./assets/client-coloplast.png";
import liqvidLogo from "./assets/client-liqvid.png";
import quikrLogo from "./assets/client-quikr.png";
import samsungMedisonLogo from "./assets/client-samsung-medison.png";
import wheelsEyeLogo from "./assets/client-wheelseye.png";

type MenuItem = {
  label: string;
  href: string;
  featured?: boolean;
};

const megaMenus: Record<string, MenuItem[]> = {
  Solutions: [
    { label: "Consumer Insights", href: "#solutions", featured: true },
    { label: "Brand Research", href: "#solutions" },
    { label: "Communication Research", href: "#solutions" },
    { label: "Product & Innovation", href: "#solutions" },
    { label: "Market Assessment", href: "#solutions" },
    { label: "Customer Experience", href: "#solutions" },
    { label: "Pricing", href: "#solutions" },
    { label: "B2B", href: "#solutions" },
    { label: "Retail & Shopper", href: "#solutions" },
    { label: "Census", href: "#solutions" },
    { label: "Social Research", href: "#solutions" },
  ],
  Methodologies: [
    { label: "Quantitative", href: "#methodologies", featured: true },
    { label: "Qualitative", href: "#methodologies" },
    { label: "Mixed Methods", href: "#methodologies" },
    { label: "CAPI/F2F", href: "#methodologies" },
    { label: "CATI", href: "#methodologies" },
    { label: "CAWI", href: "#methodologies" },
    { label: "FGDs", href: "#methodologies" },
    { label: "IDIs", href: "#methodologies" },
    { label: "Ethnography", href: "#methodologies" },
    { label: "CLT", href: "#methodologies" },
    { label: "IHUT", href: "#methodologies" },
    { label: "Mystery Shopping", href: "#methodologies" },
    { label: "Secondary Research", href: "#methodologies" },
  ],
  Industries: [
    { label: "FMCG", href: "#industries", featured: true },
    { label: "Healthcare", href: "#industries" },
    { label: "Automotive", href: "#industries" },
    { label: "BFSI", href: "#industries" },
    { label: "Retail & E-commerce", href: "#industries" },
    { label: "Technology", href: "#industries" },
    { label: "Consumer Durables", href: "#industries" },
    { label: "Education", href: "#industries" },
    { label: "Manufacturing/B2B", href: "#industries" },
    { label: "Agriculture", href: "#industries" },
    { label: "Real Estate", href: "#industries" },
    { label: "Hospitality", href: "#industries" },
    { label: "Public Sector", href: "#industries" },
  ],
  "Data & Fieldwork": [
    { label: "Data Collection", href: "#data-and-fieldwork", featured: true },
    { label: "Recruitment", href: "#data-and-fieldwork" },
    { label: "Survey Programming", href: "#data-and-fieldwork" },
    { label: "Translation", href: "#data-and-fieldwork" },
    { label: "Transcription", href: "#data-and-fieldwork" },
    { label: "Data Processing", href: "#data-and-fieldwork" },
  ],
  "Academic Research": [
    { label: "Academic Data Collection", href: "#academic-research", featured: true },
    { label: "Longitudinal", href: "#academic-research" },
    { label: "Experimental", href: "#academic-research" },
    { label: "Multi-Wave", href: "#academic-research" },
    { label: "Quantitative", href: "#academic-research" },
    { label: "Qualitative", href: "#academic-research" },
  ],
  Resources: [
    { label: "Success Stories", href: "#resources", featured: true },
    { label: "Insights", href: "#resources" },
    { label: "Reports", href: "#resources" },
    { label: "Research Guides", href: "#resources" },
  ],
  Company: [
    { label: "About", href: "#company", featured: true },
    { label: "Leadership", href: "#company" },
    { label: "Why NexGen", href: "#company" },
    { label: "PAN-India Network", href: "#company" },
    { label: "Quality", href: "#company" },
    { label: "Careers", href: "#company" },
  ],
  Contact: [
    { label: "Talk to an Expert", href: "mailto:mail@nexgenint.com", featured: true },
    { label: "Request Proposal", href: "mailto:mail@nexgenint.com?subject=Request a Proposal" },
  ],
};

const navItems = [
  "Solutions",
  "Methodologies",
  "Industries",
  "Data & Fieldwork",
  "Academic Research",
  "Resources",
  "Company",
  "Contact",
];

const solutions = [
  {
    number: "01",
    title: "Consumer Insights",
    copy: "Understand the people behind the numbers—their behaviours, motivations and changing expectations.",
  },
  {
    number: "02",
    title: "Brand & Communication",
    copy: "Build sharper brands and communications through evidence-led evaluation and human response.",
  },
  {
    number: "03",
    title: "Product & Innovation",
    copy: "Identify opportunities, refine concepts and shape propositions around genuine market needs.",
  },
  {
    number: "04",
    title: "Market Intelligence",
    copy: "Turn category, competitor and market signals into a clear view of where advantage lies.",
  },
  {
    number: "05",
    title: "Customer Experience",
    copy: "Reveal the moments that influence satisfaction, loyalty and long-term customer value.",
  },
  {
    number: "06",
    title: "B2B Intelligence",
    copy: "Navigate complex buying ecosystems with insight from decision-makers, channels and markets.",
  },
];

const clients = [
  { name: "Akshaya Patra", logo: akshayaPatraLogo },
  { name: "Quikr", logo: quikrLogo },
  { name: "WheelsEye", logo: wheelsEyeLogo },
  { name: "LIQVID", logo: liqvidLogo },
  { name: "Samsung Medison", logo: samsungMedisonLogo },
  { name: "Coloplast", logo: coloplastLogo },
  { name: "Baxter", logo: baxterLogo },
];

const footerColumns = [
  {
    title: "Solutions",
    links: [
      "Consumer Insights",
      "Brand Research",
      "Communication Research",
      "Product & Innovation",
      "Market Assessment",
      "Customer Experience",
      "Pricing",
      "B2B",
      "Retail & Shopper",
      "Census",
      "Social Research",
    ],
  },
  {
    title: "Methodologies",
    links: [
      "Quantitative",
      "Qualitative",
      "Mixed Methods",
      "CAPI/F2F",
      "CATI",
      "CAWI",
      "FGDs",
      "IDIs",
      "Ethnography",
      "CLT",
      "IHUT",
      "Mystery Shopping",
      "Secondary Research",
    ],
  },
  {
    title: "Industries",
    links: [
      "FMCG",
      "Healthcare",
      "Automotive",
      "BFSI",
      "Retail & E-commerce",
      "Technology",
      "Consumer Durables",
      "Education",
      "Manufacturing/B2B",
      "Agriculture",
      "Real Estate",
      "Hospitality",
      "Public Sector",
    ],
  },
  {
    title: "Data & Fieldwork",
    links: [
      "Data Collection",
      "Recruitment",
      "Survey Programming",
      "Translation",
      "Transcription",
      "Data Processing",
    ],
  },
  {
    title: "Academic Research",
    links: [
      "Academic Data Collection",
      "Longitudinal",
      "Experimental",
      "Multi-Wave",
      "Quantitative",
      "Qualitative",
    ],
  },
  {
    title: "Resources",
    links: ["Success Stories", "Insights", "Reports", "Research Guides"],
  },
  {
    title: "Company",
    links: [
      "About",
      "Leadership",
      "Why NexGen",
      "PAN-India Network",
      "Quality",
      "Careers",
    ],
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand interactive ${light ? "brand--light" : ""}`} href="#top" aria-label="NexGen home">
      <img className="brand-logo" src={nexGenLogo} alt="NexGen Market Research Services" />
    </a>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={`arrow ${diagonal ? "arrow--diagonal" : ""}`} aria-hidden="true">→</span>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setOpenMobileMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const menu = megaMenus[item];
            return (
              <div
                className="nav-item"
                key={item}
                onMouseEnter={() => menu && setOpenMenu(item)}
                onMouseLeave={() => menu && setOpenMenu(null)}
              >
                <a
                  className="nav-link interactive"
                  href={`#${item.toLowerCase().replace(/ /g, "-").replace("&", "and")}`}
                  aria-expanded={menu ? openMenu === item : undefined}
                  onFocus={() => menu && setOpenMenu(item)}
                >
                  {item}
                  {menu && <span className="nav-chevron">⌄</span>}
                </a>
                {menu && (
                  <div className={`mega-menu ${openMenu === item ? "mega-menu--open" : ""}`}>
                    <div className="mega-menu__intro">
                      <span>Explore {item}</span>
                      <p>Focused expertise for complex research questions and better decisions.</p>
                    </div>
                    <div className="mega-menu__links">
                      {menu.map((entry) => (
                        <a className={entry.featured ? "featured" : ""} href={entry.href} key={entry.label}>
                          <span>{entry.label}</span>
                          <Arrow diagonal />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <a className="nav-cta interactive" href="mailto:mail@nexgenint.com?subject=Request a Proposal">
          Request a Proposal <Arrow diagonal />
        </a>
        <button
          className="menu-toggle interactive"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__links">
          {navItems.map((item, index) => {
            const isOpen = openMobileMenu === item;
            return (
              <div className={`mobile-nav-group ${isOpen ? "mobile-nav-group--open" : ""}`} key={item}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMobileMenu(isOpen ? null : item)}
                >
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  {item}
                  <span aria-hidden="true">+</span>
                </button>
                <div className="mobile-nav-group__children">
                  {megaMenus[item].map((entry) => (
                    <a href={entry.href} key={entry.label} onClick={() => setMobileOpen(false)}>
                      {entry.label}
                      <Arrow diagonal />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mobile-menu__contact">
          <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
          <a href="tel:+919873177449">+91-98731 77449</a>
        </div>
      </div>
    </header>
  );
}

function ResearchVisual() {
  return (
    <div className="research-visual" aria-hidden="true">
      <div className="visual-orbit visual-orbit--one" />
      <div className="visual-orbit visual-orbit--two" />
      <div className="visual-axis visual-axis--x" />
      <div className="visual-axis visual-axis--y" />
      <div className="visual-node visual-node--one"><span>Human</span></div>
      <div className="visual-node visual-node--two"><span>Evidence</span></div>
      <div className="visual-node visual-node--three"><span>Growth</span></div>
      <div className="visual-core">
        <span>Insight</span>
        <strong>01</strong>
      </div>
      <div className="visual-readout">
        <span>QUAL</span>
        <i />
        <span>QUANT</span>
      </div>
    </div>
  );
}

function ClientMarquee() {
  return (
    <section className="trust" id="company" aria-labelledby="trust-heading">
      <div className="trust__heading scroll-reveal">
        <h2 id="trust-heading">Trusted by organisations seeking better evidence.</h2>
        <p>Research relationships built across enterprise, institutional and social sectors.</p>
      </div>
      <div className="logo-marquee scroll-reveal">
        <div className="logo-marquee__track">
          {[...clients, ...clients].map((client, index) => (
            <div
              className="client-logo"
              key={`${client.name}-${index}`}
              aria-hidden={index >= clients.length}
            >
              <img src={client.logo} alt={index < clients.length ? client.name : ""} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;
    const cursor = document.querySelector<HTMLElement>(".custom-cursor");
    const onMove = (event: MouseEvent) => {
      if (!cursor) return;
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      cursor?.classList.toggle("custom-cursor--active", Boolean(target.closest(".interactive, a, button")));
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="custom-cursor" aria-hidden="true" />
      <Header />
      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow reveal reveal--one">
              <span />
              Integrated Market Research · India & International
            </div>
            <h1 className="hero-title reveal reveal--two">
              Research that turns
              <br />
              human understanding
              <br />
              into <em>business advantage.</em>
            </h1>
            <div className="hero-lower reveal reveal--three">
              <p>
                NexGen is an integrated market research, consumer insights and data
                intelligence company helping organisations make more confident decisions
                across India and international markets.
              </p>
              <div className="hero-actions">
                <a className="button button--primary interactive" href="mailto:mail@nexgenint.com?subject=Start a Research Project">
                  Start a Research Project <Arrow diagonal />
                </a>
                <a className="text-link interactive" href="#solutions">
                  Explore Our Capabilities <Arrow />
                </a>
              </div>
            </div>
          </div>
          <ResearchVisual />
          <div className="credibility reveal reveal--four">
            {[
              ["20+", "Years of Research Excellence"],
              ["PAN-India", "Reach"],
              ["Multi-Industry", "Expertise"],
              ["Integrated", "Qual + Quant"],
            ].map(([value, label], index) => (
              <div className="credibility__item" key={label}>
                <div className="credibility__top">
                  <strong>{value}</strong>
                  <span className="credibility__index">0{index + 1}</span>
                </div>
                <span>{label}</span>
                <i aria-hidden="true" />
              </div>
            ))}
          </div>
          <a className="scroll-cue interactive" href="#understanding" aria-label="Scroll to the next section">
            <span>Scroll to understand</span>
            <i>↓</i>
          </a>
        </section>

        <ClientMarquee />

        <section className="understanding" id="understanding">
          <div className="understanding__heading scroll-reveal">
            <h2>
              Insights for decisions
              <br />
              that <em>matter.</em>
            </h2>
            <p>
              We find the meaning between what people say, what they do and what markets reveal.
            </p>
          </div>
          <div className="understanding__body scroll-reveal">
            <figure className="research-photo">
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=85"
                alt="A diverse research team in discussion around a meeting table"
              />
              <div className="research-photo__signal" aria-hidden="true">
                <span>Human signal</span>
                <div className="signal-lines">
                  <i /><i /><i /><i /><i />
                </div>
                <small>Observation / Interpretation / Evidence</small>
              </div>
            </figure>
            <div className="editorial-copy">
              <p className="lead">
                Markets change. Consumers evolve. The challenge is not simply collecting
                more data—it is identifying what matters.
              </p>
              <p>
                We bring together rigorous research, human understanding and commercial
                context to move beyond information. The result is focused insight that
                helps organisations see clearly and act with confidence.
              </p>
              <blockquote>
                “Data becomes valuable when it creates understanding—and understanding
                becomes powerful when it shapes action.”
              </blockquote>
              <div className="understanding__path" aria-label="Research to action">
                <span>Listen</span>
                <i aria-hidden="true" />
                <span>Understand</span>
                <i aria-hidden="true" />
                <span>Act</span>
              </div>
            </div>
          </div>
        </section>

        <section className="solutions" id="solutions">
          <div className="solutions__intro scroll-reveal">
            <h2>Clarity for every critical question.</h2>
            <p>
              Connected research capabilities designed around the decision you need to
              make—not a predefined method.
            </p>
          </div>
          <div className="solutions__layout scroll-reveal">
            <div className="solution-visual" aria-hidden="true">
              <div className="solution-visual__index">
                {String(activeSolution + 1).padStart(2, "0")}
              </div>
              <div className="solution-visual__rings">
                <i /><i /><i />
              </div>
              <div className="solution-visual__label">
                Research
                <br />
                / Capability
              </div>
            </div>
            <div className="solution-list">
              {solutions.map((solution, index) => (
                <a
                  className={`solution-row interactive ${activeSolution === index ? "solution-row--active" : ""}`}
                  href="mailto:mail@nexgenint.com?subject=Research Capabilities"
                  key={solution.title}
                  onMouseEnter={() => setActiveSolution(index)}
                  onFocus={() => setActiveSolution(index)}
                >
                  <span className="solution-row__number">{solution.number}</span>
                  <span className="solution-row__content">
                    <strong>{solution.title}</strong>
                    <small>{solution.copy}</small>
                  </span>
                  <span className="solution-row__arrow"><Arrow diagonal /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="decision-cta" aria-labelledby="decision-heading">
          <div className="decision-cta__line scroll-reveal" aria-hidden="true">
            <span>Research</span>
            <i />
            <span>Understanding</span>
            <i />
            <span>Decision</span>
          </div>
          <div className="decision-cta__content scroll-reveal">
            <h2 id="decision-heading">
              When the decision matters,
              <br />
              begin with <em>better evidence.</em>
            </h2>
            <div className="decision-cta__aside">
              <p>
                Bring us the question. We will shape the right research approach to help
                you see clearly and move forward with confidence.
              </p>
              <div className="decision-cta__actions">
                <a className="button button--green interactive" href="mailto:mail@nexgenint.com?subject=Start a Research Project">
                  Start a Research Project <Arrow diagonal />
                </a>
                <a className="decision-cta__contact interactive" href="tel:+919873177449">
                  <small>Talk to an expert</small>
                  +91-98731 77449
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer__top">
          <div className="footer__statement">
            <Brand light />
            <p>Ready to turn a research question into a business advantage?</p>
            <a className="button button--light interactive" href="mailto:mail@nexgenint.com?subject=Request a Proposal">
              Talk to an Expert <Arrow diagonal />
            </a>
          </div>
          <div className="footer__links">
            {footerColumns.map((column) => (
              <div className="footer-column" key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((link) => (
                  <a href="#top" key={link}>{link}</a>
                ))}
              </div>
            ))}
            <div className="footer-column footer-contact">
              <h3>Contact</h3>
              <a href="mailto:mail@nexgenint.com">Talk to an Expert</a>
              <a href="mailto:mail@nexgenint.com?subject=Request a Proposal">Request Proposal</a>
              <div>
                <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
                <a href="tel:+919873177449">+91-98731 77449</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__philosophy" aria-label="Our philosophy">
          {["Research", "Understanding", "Insight", "Decision", "Growth"].map((word, index) => (
            <span key={word}>
              {word}
              {index < 4 && <i>→</i>}
            </span>
          ))}
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} NexGen Market Research Services Pvt. Ltd.</span>
          <span>India · International</span>
        </div>
      </footer>
    </>
  );
}

export default App;
