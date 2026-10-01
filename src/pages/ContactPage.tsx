import { FormEvent, useEffect, useState } from "react"
import CustomCursor from "../components/home/CustomCursor"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Arrow from "../components/ui/Arrow"
import ScrollToTop from "../components/ui/ScrollToTop"
import useScrollReveal from "../hooks/useScrollReveal"

const requirements = [
  "Market Research",
  "Consumer Insights",
  "Data Collection",
  "Fieldwork",
  "Survey Programming",
  "CAPI / F2F Research",
  "CATI Research",
  "CAWI / Online Surveys",
  "Qualitative Research",
  "Quantitative Research",
  "Academic Data Collection",
  "Market Intelligence",
  "Customer Experience Research",
  "B2B Research",
]

const formRequirements = [
  "Market Research",
  "Data Collection",
  "Fieldwork",
  "Consumer Insights",
  "Qualitative Research",
  "Quantitative Research",
  "Survey Programming",
  "Academic Research",
  "B2B Research",
  "Other",
]

const expertise = [
  {
    title: "Research & Insights",
    items: "Consumer Insights · Brand Research · Market Intelligence",
  },
  {
    title: "Data & Fieldwork",
    items:
      "Data Collection · Recruitment · Survey Programming · Data Processing",
  },
  {
    title: "Qualitative & Quantitative",
    items: "FGDs · IDIs · CAPI/F2F · CATI · CAWI · Mixed Methods",
  },
  {
    title: "Academic Research",
    items:
      "Academic Data Collection · Longitudinal · Experimental · Multi-Wave",
  },
]

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@NexGenMarketResearch",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/1084022/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nexgen_official_360/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nexgenresearchint",
  },
  {
    name: "X",
    href: "https://twitter.com/ResearchNexgen",
  },
]

function createCaptcha() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  return Array.from(
    { length: 5 },
    () => alphabet[Math.floor(Math.random() * alphabet.length)],
  ).join("")
}

function SocialIcon({ name }: { name: string }) {
  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 7.1a2.8 2.8 0 0 0-2-2C17.2 4.6 12 4.6 12 4.6s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 16.9a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.9 29 29 0 0 0-.5-4.9Z" />
        <path d="m10 15.2 5-3.2-5-3.2v6.4Z" />
      </svg>
    )
  }

  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 8.2V19M6.5 5v.1M10.5 19v-6.2c0-2.2 3.8-3.2 5.8-1.1.7.7.7 1.9.7 3V19M10.5 11v8" />
      </svg>
    )
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17.5 6.5h.01" />
      </svg>
    )
  }

  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 20v-7h2.5l.5-3h-3V8.2c0-.9.4-1.7 1.9-1.7H17V4.1c-.6-.1-1.4-.1-2.1-.1-2.3 0-3.9 1.4-3.9 4v2H8.5v3H11v7" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4.5 19 19.5M19 4.5 5 19.5" />
    </svg>
  )
}

export default function ContactPage() {
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>([
    "Market Research",
  ])
  const [captcha, setCaptcha] = useState(createCaptcha)
  const [captchaError, setCaptchaError] = useState("")
  const [requirementError, setRequirementError] = useState("")
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleRequirement = (requirement: string) => {
    setRequirementError("")
    setSelectedRequirements((current) =>
      current.includes(requirement)
        ? current.filter((item) => item !== requirement)
        : [...current, requirement],
    )
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    if (selectedRequirements.length === 0) {
      setRequirementError("Please select at least one research requirement.")
      return
    }

    if (
      String(data.get("captcha") ?? "")
        .trim()
        .toUpperCase() !== captcha
    ) {
      setCaptchaError("Please enter the CAPTCHA exactly as shown.")
      return
    }

    setCaptchaError("")
    const subject = encodeURIComponent("Research Estimate Request")
    const body = encodeURIComponent(
      [
        `Company: ${data.get("company")}`,
        `Name: ${data.get("fullName")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone")}`,
        `Location: ${data.get("city")}, ${data.get("state")}`,
        `Research requirements: ${selectedRequirements.join(", ")}`,
        "",
        `Enquiry: ${data.get("enquiry")}`,
        "",
        `Additional message: ${data.get("message") || "—"}`,
      ].join("\n"),
    )
    window.location.href = `mailto:mail@nexgenint.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="contact-page" id="top">
        <section className="contact-hero">
          <div className="contact-hero__copy">
            <div className="eyebrow reveal reveal--one">
              <span />
              Start a Research Conversation
            </div>
            <h1 className="contact-hero__title reveal reveal--two">
              Let&apos;s Turn Your Research Requirement Into{" "}
              <em>Actionable Insight.</em>
            </h1>
            <p className="contact-hero__intro reveal reveal--three">
              Tell us what you are looking to understand, measure or validate.
              Our team can help you plan the right research approach, from data
              collection and fieldwork to consumer insights and market
              intelligence.
            </p>
            <div className="contact-hero__actions reveal reveal--four">
              <a
                className="button button--primary interactive"
                href="#contact-form"
              >
                Request an Estimate <Arrow />
              </a>
              <a className="text-link interactive" href="#contact-details">
                Talk to an Expert <Arrow />
              </a>
            </div>
          </div>

          <figure className="contact-hero__visual reveal reveal--five">
            <div className="contact-hero__frame" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1653503425441-9d975e51ce91?auto=format&fit=crop&w=1200&q=86"
              alt="Two professionals discussing research at a table"
            />
            <div className="contact-hero__image-note">
              <span>Human understanding</span>
              <strong>Research starts with a conversation.</strong>
            </div>
            <figcaption>Photo by Yash Parashar / Unsplash</figcaption>
          </figure>

          <div className="contact-needs reveal reveal--five">
            <div className="contact-needs__heading">
              <span>01</span>
              <h2>What can we help you with?</h2>
              <p>Select one or more areas to begin.</p>
            </div>
            <div className="contact-needs__options">
              {requirements.map((requirement) => {
                const selected = selectedRequirements.includes(requirement)
                return (
                  <button
                    className={`contact-chip ${
                      selected ? "contact-chip--active" : ""
                    }`}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleRequirement(requirement)}
                    key={requirement}
                  >
                    {requirement}
                    <span>{selected ? "✓" : "+"}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <section className="contact-main" id="contact-form">
          <div className="contact-main__intro scroll-reveal">
            <div className="section-kicker">
              <span />
              Your Requirement
            </div>
            <h2>Tell Us About Your Requirements</h2>
            <p>
              Whether you need fieldwork, data collection, consumer research,
              survey support or a complete research programme, share your
              requirement with us and our team will get back to you.
            </p>
            <div className="contact-expertise">
              {expertise.map((item, index) => (
                <div className="contact-expertise__item" key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="contact-form scroll-reveal"
            onSubmit={handleSubmit}
            noValidate={false}
          >
            <div className="contact-form__heading">
              <span>Project enquiry</span>
              <p>Fields marked with * are required.</p>
            </div>

            <div className="contact-form__grid">
              <label className="contact-field">
                <span>Company Name *</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Your company / organisation"
                  required
                />
              </label>
              <label className="contact-field">
                <span>Full Name *</span>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="contact-field">
                <span>Email *</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="contact-field">
                <span>Phone *</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  autoComplete="tel"
                  required
                />
              </label>
              <label className="contact-field">
                <span>City *</span>
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  autoComplete="address-level2"
                  required
                />
              </label>
              <label className="contact-field">
                <span>State *</span>
                <input
                  name="state"
                  type="text"
                  placeholder="State"
                  autoComplete="address-level1"
                  required
                />
              </label>
            </div>

            <label className="contact-field">
              <span>Business / Survey Requirement / Enquiry *</span>
              <textarea
                name="enquiry"
                placeholder="Tell us briefly about your research requirement..."
                rows={5}
                required
              />
            </label>

            <fieldset
              className="contact-form__requirements"
              aria-describedby="requirement-error"
            >
              <legend>Research Requirement *</legend>
              <div>
                {formRequirements.map((requirement) => {
                  const selected = selectedRequirements.includes(requirement)
                  return (
                    <button
                      className={`contact-chip contact-chip--form ${
                        selected ? "contact-chip--active" : ""
                      }`}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleRequirement(requirement)}
                      key={requirement}
                    >
                      {requirement}
                    </button>
                  )
                })}
              </div>
              <p
                className="contact-form__error"
                id="requirement-error"
                role="alert"
              >
                {requirementError}
              </p>
            </fieldset>

            <label className="contact-field">
              <span>
                Message <small>Optional</small>
              </span>
              <textarea
                name="message"
                placeholder="Add any timelines, markets or other details that may help us."
                rows={3}
              />
            </label>

            <div className="contact-captcha">
              <div
                className="contact-captcha__code"
                aria-label={`CAPTCHA code ${captcha}`}
              >
                {captcha}
              </div>
              <button
                type="button"
                onClick={() => {
                  setCaptcha(createCaptcha())
                  setCaptchaError("")
                }}
              >
                click here to refresh
              </button>
              <label className="contact-field">
                <span>Enter Captcha *</span>
                <input
                  name="captcha"
                  type="text"
                  autoComplete="off"
                  aria-invalid={Boolean(captchaError)}
                  aria-describedby="captcha-error"
                  required
                />
              </label>
              <p id="captcha-error" role="alert">
                {captchaError}
              </p>
            </div>

            <button className="contact-submit interactive" type="submit">
              <span>Request an Estimate</span>
              <Arrow />
            </button>
          </form>
        </section>

        <section className="contact-details" id="contact-details">
          <div className="contact-details__heading scroll-reveal">
            <div className="section-kicker">
              <span />
              Direct Contact
            </div>
            <h2>Get in Touch</h2>
            <p>
              Connect directly with NexGen to discuss research requirements
              across India and international markets.
            </p>
          </div>

          <div className="contact-details__layout">
            <div className="contact-location scroll-reveal">
              <div className="contact-location__map" aria-hidden="true">
                <i />
                <span />
              </div>
              <div className="contact-location__content">
                <span>New Delhi · India</span>
                <h3>NexGen Market Research Services Pvt Ltd</h3>
                <address>
                  A 26, Block B,
                  <br />
                  Mohan Cooperative Industrial Estate
                  <br />
                  New Delhi, Delhi 110044, India
                </address>
              </div>
            </div>

            <div className="contact-lines scroll-reveal">
              <a href="mailto:mail@nexgenint.com">
                <span>Email</span>
                <strong>mail@nexgenint.com</strong>
                <Arrow diagonal />
              </a>
              <a href="tel:+919873177449">
                <span>Call us</span>
                <strong>+91-98731 77449</strong>
                <Arrow diagonal />
              </a>
              <a
                href="http://www.nexgenint.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>Website</span>
                <strong>www.nexgenint.com</strong>
                <Arrow diagonal />
              </a>
            </div>
          </div>

          <div className="contact-social scroll-reveal">
            <div>
              <h3>Connect With NexGen</h3>
              <p>
                Follow NexGen for research insights, updates, industry
                perspectives and company news.
              </p>
            </div>
            <div className="contact-social__links">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow NexGen on ${social.name}`}
                  title={social.name}
                  key={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-final scroll-reveal">
          <div>
            <span>Start a conversation</span>
            <h2>Have a Research Requirement in Mind?</h2>
            <p>
              Share your requirement with our team and let&apos;s discuss the
              right approach.
            </p>
          </div>
          <a
            className="button button--primary interactive"
            href="#contact-form"
          >
            Request an Estimate <Arrow />
          </a>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
