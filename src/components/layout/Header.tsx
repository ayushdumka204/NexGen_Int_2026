import { useEffect, useState } from "react"
import Arrow from "../ui/Arrow"
import Brand from "../ui/Brand"
import LanguageSelector from "../ui/LanguageSelector"

type MenuItem = {
  label: string
  href: string
  featured?: boolean
}

const link = (label: string, href: string, featured = false): MenuItem => ({
  label,
  href,
  featured,
})

const megaMenus: Record<string, MenuItem[]> = {
  Solutions: [
    link("Consumer Insights", "#solutions", true),
    link("Brand Research", "#solutions"),
    link("Communication Research", "#solutions"),
    link("Product & Innovation", "#solutions"),
    link("Market Assessment", "#solutions"),
    link("Customer Experience", "#solutions"),
    link("Pricing", "#solutions"),
    link("B2B", "#solutions"),
    link("Retail & Shopper", "#solutions"),
    link("Census", "#solutions"),
    link("Social Research", "#solutions"),
  ],
  Methodologies: [
    link("Quantitative", "#methodologies", true),
    link("Qualitative", "#methodologies"),
    link("Mixed Methods", "#methodologies"),
    link("CAPI/F2F", "#methodologies"),
    link("CATI", "#methodologies"),
    link("CAWI", "#methodologies"),
    link("FGDs", "#methodologies"),
    link("IDIs", "#methodologies"),
    link("Ethnography", "#methodologies"),
    link("CLT", "#methodologies"),
    link("IHUT", "#methodologies"),
    link("Mystery Shopping", "#methodologies"),
    link("Secondary Research", "#methodologies"),
  ],
  Industries: [
    link("FMCG", "#industries", true),
    link("Healthcare", "#industries"),
    link("Automotive", "#industries"),
    link("BFSI", "#industries"),
    link("Retail & E-commerce", "#industries"),
    link("Technology", "#industries"),
    link("Consumer Durables", "#industries"),
    link("Education", "#industries"),
    link("Manufacturing/B2B", "#industries"),
    link("Agriculture", "#industries"),
    link("Real Estate", "#industries"),
    link("Hospitality", "#industries"),
    link("Public Sector", "#industries"),
  ],
  "Data & Fieldwork": [
    link("Data Collection", "#data-and-fieldwork", true),
    link("Recruitment", "#data-and-fieldwork"),
    link("Survey Programming", "#data-and-fieldwork"),
    link("Translation", "#data-and-fieldwork"),
    link("Transcription", "#data-and-fieldwork"),
    link("Data Processing", "#data-and-fieldwork"),
  ],
  "Academic Research": [
    link("Academic Data Collection", "#academic-research", true),
    link("Longitudinal", "#academic-research"),
    link("Experimental", "#academic-research"),
    link("Multi-Wave", "#academic-research"),
    link("Quantitative", "#academic-research"),
    link("Qualitative", "#academic-research"),
  ],
  Resources: [
    link("Success Stories", "#resources", true),
    link("Insights", "#resources"),
    link("Reports", "#resources"),
    link("Research Guides", "#resources"),
  ],
  Company: [
    link("About", "#company", true),
    link("Leadership", "#company"),
    link("Why NexGen", "#company"),
    link("PAN-India Network", "#company"),
    link("Quality", "#company"),
    link("Careers", "#company"),
  ],
  Contact: [
    link("Talk to an Expert", "mailto:mail@nexgenint.com", true),
    link(
      "Request Proposal",
      "mailto:mail@nexgenint.com?subject=Request a Proposal",
    ),
  ],
}

const navItems = Object.keys(megaMenus)

function getSectionHref(item: string) {
  if (item === "Contact") return "/contact"
  const section = `#${item.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`
  return window.location.pathname === "/contact" ? `/${section}` : section
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const isContactPage = window.location.pathname === "/contact"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen)
    return () => document.body.classList.remove("menu-open")
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setOpenMenu(null)
      setOpenMobileMenu(null)
      setMobileOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div
              className="nav-item"
              key={item}
              onMouseEnter={() => setOpenMenu(item)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                className="nav-link interactive"
                href={getSectionHref(item)}
                aria-expanded={openMenu === item}
                onFocus={() => setOpenMenu(item)}
              >
                {item}
                <span className="nav-chevron">⌄</span>
              </a>
              <div
                className={`mega-menu ${
                  openMenu === item ? "mega-menu--open" : ""
                }`}
              >
                <div className="mega-menu__intro">
                  <span>Explore {item}</span>
                  <p>
                    Focused expertise for complex research questions and better
                    decisions.
                  </p>
                </div>
                <div className="mega-menu__links">
                  {megaMenus[item].map((entry) => (
                    <a
                      className={entry.featured ? "featured" : ""}
                      href={
                        isContactPage && entry.href.startsWith("#")
                          ? `/${entry.href}`
                          : entry.href
                      }
                      key={entry.label}
                    >
                      <span>{entry.label}</span>
                      <Arrow diagonal />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        <LanguageSelector />
        <a className="nav-cta interactive" href="/contact#contact-form">
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
            const isOpen = openMobileMenu === item
            return (
              <div
                className={`mobile-nav-group ${
                  isOpen ? "mobile-nav-group--open" : ""
                }`}
                key={item}
              >
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
                    <a
                      href={entry.href}
                      key={entry.label}
                      onClick={() => setMobileOpen(false)}
                    >
                      {entry.label}
                      <Arrow diagonal />
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mobile-menu__contact">
          <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
          <a href="tel:+919873177449">+91-98731 77449</a>
        </div>
      </div>
    </header>
  )
}
