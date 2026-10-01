import { useState } from "react"
import Arrow from "../ui/Arrow"

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
]

export default function ResearchSolutions() {
  const [activeSolution, setActiveSolution] = useState(0)

  return (
    <section className="solutions" id="solutions">
      <div className="solutions__intro scroll-reveal">
        <h2>Clarity for every critical question.</h2>
        <p>
          Connected research capabilities designed around the decision you need
          to make—not a predefined method.
        </p>
      </div>
      <div className="solutions__layout scroll-reveal">
        <div className="solution-visual" aria-hidden="true">
          <div className="solution-visual__index">
            {String(activeSolution + 1).padStart(2, "0")}
          </div>
          <div className="solution-visual__rings">
            <i />
            <i />
            <i />
          </div>
          <div className="solution-visual__label">
            Research
            <br />/ Capability
          </div>
        </div>
        <div className="solution-list">
          {solutions.map((solution, index) => (
            <a
              className={`solution-row interactive ${
                activeSolution === index ? "solution-row--active" : ""
              }`}
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
              <span className="solution-row__arrow">
                <Arrow diagonal />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
