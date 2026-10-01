import Arrow from "../ui/Arrow"

const credibilityPoints = [
  ["20+", "Years of Research Excellence"],
  ["PAN-India", "Reach"],
  ["Multi-Industry", "Expertise"],
  ["Integrated", "Qual + Quant"],
]

function ResearchImage() {
  return (
    <div className="research-visual" aria-label="Human insight research model">
      <div className="visual-orbit visual-orbit--one" aria-hidden="true" />
      <div className="visual-orbit visual-orbit--two" aria-hidden="true" />
      <i className="visual-axis visual-axis--x" aria-hidden="true" />
      <i className="visual-axis visual-axis--y" aria-hidden="true" />
      <div className="visual-core">
        <span>Insight</span>
        <strong>01</strong>
      </div>
      <div className="visual-node visual-node--one">Human</div>
      <div className="visual-node visual-node--two">Evidence</div>
      <div className="visual-node visual-node--three">Growth</div>
      <div className="visual-readout">
        <span>Qual</span>
        <i />
        <span>Quant</span>
      </div>
    </div>
  )
}

function Credibility() {
  return (
    <div className="credibility reveal reveal--five">
      {credibilityPoints.map(([value, label]) => (
        <div className="credibility__item" key={label}>
          <div className="credibility__top">
            <strong>{value}</strong>
          </div>
          <span>{label}</span>
          <i aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <div className="eyebrow reveal reveal--one">
          <span />
          Integrated Market Research · India & International
        </div>
        <h1 className="hero-title">
          <span className="hero-title__line hero-title__line--opening hero-title__line--one">
            Research that turns
          </span>
          <span className="hero-title__line hero-title__line--two">
            human understanding
          </span>
          <span className="hero-title__line hero-title__line--closing hero-title__line--three">
            into <em>business advantage.</em>
          </span>
        </h1>
        <div className="hero-lower">
          <p className="reveal reveal--three">
            NexGen is an integrated market research, consumer insights and data
            intelligence company helping organisations make more confident
            decisions across India and international markets.
          </p>
          <div className="hero-actions reveal reveal--four">
            <a
              className="button button--primary interactive"
              href="mailto:mail@nexgenint.com?subject=Start a Research Project"
            >
              Start a Research Project <Arrow />
            </a>
            <a className="text-link interactive" href="#solutions">
              Explore Our Capabilities <Arrow />
            </a>
          </div>
        </div>
      </div>
      <ResearchImage />
      <Credibility />
      <a
        className="scroll-cue interactive"
        href="#understanding"
        aria-label="Scroll to the next section"
      >
        <span>Scroll</span>
        <i>↓</i>
      </a>
    </section>
  )
}
