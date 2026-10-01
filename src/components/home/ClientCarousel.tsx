const imageUrl = (name: string) => `/images/${name}`

const clients = [
  { name: "Akshaya Patra", logo: imageUrl("client-akshaya-patra.png") },
  { name: "Quikr", logo: imageUrl("client-quikr.png") },
  { name: "WheelsEye", logo: imageUrl("client-wheelseye.png") },
  { name: "LIQVID", logo: imageUrl("client-liqvid.png") },
  { name: "Samsung Medison", logo: imageUrl("client-samsung-medison.png") },
  { name: "Coloplast", logo: imageUrl("client-coloplast.png") },
  { name: "Baxter", logo: imageUrl("client-baxter.png") },
]

export default function ClientCarousel() {
  return (
    <section className="trust" id="company" aria-labelledby="trust-heading">
      <div className="trust__heading scroll-reveal">
        <h2 id="trust-heading">
          Trusted by organisations seeking better evidence.
        </h2>
        <p>
          Research relationships built across enterprise, institutional and
          social sectors.
        </p>
      </div>
      <div className="logo-marquee scroll-reveal">
        <div className="logo-marquee__track">
          {[...clients, ...clients].map((client, index) => (
            <div
              className="client-logo"
              key={`${client.name}-${index}`}
              aria-hidden={index >= clients.length}
            >
              <img
                src={client.logo}
                alt={index < clients.length ? client.name : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
