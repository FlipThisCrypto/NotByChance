import SEOMeta from '../components/SEOMeta'
import campImg from '../assets/images/camp2.jpg'

export default function Mission() {
  return (
    <>
      <SEOMeta
        title="Our Mission | Not By Chance Outreach"
        description="Learn about the heart behind Not By Chance Outreach. We are dedicated to serving the unhoused with dignity, presence, and transparency."
        path="/mission"
      />
      <div className="mission-page">
        <section className="section container mission-hero">
          <h1 className="text-center">Dignity Over Pity. Action Over Abstraction.</h1>
          <p className="lead text-center">Our mission is simple: to meet people where they are and serve them without conditions.</p>
        </section>

        <section className="section container grid-2">
          <div className="gallery-item">
            <img alt="Consistent street outreach presence without conditions or promises." src={campImg} />
          </div>
          <div className="content">
            <h2>Our Philosophy</h2>
            <p>At Not By Chance Outreach, we don't see numbers or projects; we see neighbors. Street outreach is more than delivering supplies. It is the discipline of showing up.</p>
            <p>For people living on the margins, reliability is rare. Presence builds trust long before promises ever can.</p>
            <p>We operate on the principle of unconditional service. We do not require anything from those we serve. No intake forms. No faith requirements. No promises of reform.</p>
            <p>We provide what is needed today so tomorrow remains possible.</p>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <h2 className="text-center">Core Principles</h2>
            <div className="card-grid">
              <div className="card">
                <h3>Dignity First</h3>
                <p>Every interaction is rooted in respect. We acknowledge the human being first, the need second.</p>
              </div>
              <div className="card">
                <h3>Transparency</h3>
                <p>Trust is earned through openness. We provide clear visibility into our operations and finances.</p>
              </div>
              <div className="card">
                <h3>Stability</h3>
                <p>We believe in the power of showing up. Our outreach rounds are consistent, rain or shine.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
