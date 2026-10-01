export default function HumanUnderstanding() {
  return (
    <section className="understanding" id="understanding">
      <div className="understanding__heading scroll-reveal">
        <h2>
          Insights for decisions
          <br />
          that <em>matter.</em>
        </h2>
        <p>
          We find the meaning between what people say, what they do and what
          markets reveal.
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
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <small>Observation / Interpretation / Evidence</small>
          </div>
          <figcaption>
            Photo by NexGen
          </figcaption>
        </figure>
        <div className="editorial-copy">
          <p className="lead">
            Markets change. Consumers evolve. The challenge is not simply
            collecting more data—it is identifying what matters.
          </p>
          <p>
            We bring together rigorous research, human understanding and
            commercial context to move beyond information. The result is focused
            insight that helps organisations see clearly and act with
            confidence.
          </p>
          <blockquote>
            “Data becomes valuable when it creates understanding—and
            understanding becomes powerful when it shapes action.”
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
  )
}
