import Arrow from "../ui/Arrow"
import Brand from "../ui/Brand"

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
]

const philosophy = [
  "Research",
  "Understanding",
  "Insight",
  "Decision",
  "Growth",
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <div className="footer__statement">
          <Brand light />
          <p>Ready to turn a research question into a business advantage?</p>
          <a
            className="button button--light interactive"
            href="mailto:mail@nexgenint.com?subject=Request a Proposal"
          >
            Talk to an Expert <Arrow diagonal />
          </a>
        </div>
        <div className="footer__links">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((item) => (
                <a href="#top" key={item}>
                  {item}
                </a>
              ))}
            </div>
          ))}
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <a href="mailto:mail@nexgenint.com">Talk to an Expert</a>
            <a href="mailto:mail@nexgenint.com?subject=Request a Proposal">
              Request Proposal
            </a>
            <div>
              <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
              <a href="tel:+919873177449">+91-98731 77449</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__philosophy" aria-label="Our philosophy">
        {philosophy.map((word, index) => (
          <span key={word}>
            {word}
            {index < philosophy.length - 1 && <i>→</i>}
          </span>
        ))}
      </div>
      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} NexGen Market Research Services Pvt. Ltd.
        </span>
        <span>India · International</span>
      </div>
    </footer>
  )
}
