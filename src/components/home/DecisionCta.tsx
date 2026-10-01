import Arrow from "../ui/Arrow"

export default function DecisionCta() {
  return (
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
            Bring us the question. We will shape the right research approach to
            help you see clearly and move forward with confidence.
          </p>
          <div className="decision-cta__actions">
            <a
              className="button button--green interactive"
              href="mailto:mail@nexgenint.com?subject=Start a Research Project"
            >
              Start a Research Project <Arrow diagonal />
            </a>
            <a
              className="decision-cta__contact interactive"
              href="tel:+919873177449"
            >
              <small>Talk to an expert</small>
              +91-98731 77449
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
