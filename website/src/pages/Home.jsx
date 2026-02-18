import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'
import presenceImg from '../assets/images/Presence-Over-Promises.png'

export default function Home() {
  return (
    <>
      <SEOMeta
        title="Home | Not By Chance Outreach"
        description="Not By Chance Outreach provides essential supplies and support to the unhoused community with dignity and transparency. Join our local outreach efforts."
        path="/"
      />
      <div className="home-page">
        <section className="hero">
          <div className="container hero-content">
            <h1>Meeting People Where They Are. Serving Without Conditions.</h1>
            <p className="lead">Not By Chance Outreach is a volunteer-led nonprofit dedicated to providing direct, ethical support to our unhoused neighbors through consistent street outreach and supply distribution.</p>
            <div className="hero-actions">
              <Link to="/get-involved" className="btn btn-primary">Join Our Outreach</Link>
              <Link to="/mission" className="btn btn-secondary">Learn Our Mission</Link>
            </div>
          </div>
        </section>

        <section className="section container grid-2">
          <div className="content">
            <h2 className="section-title">Presence Over Promises</h2>
            <p>We believe that effective outreach starts with showing up. Our teams are on the ground every week, delivering life-sustaining supplies—from hygiene kits and weather-appropriate clothing to nutritional support.</p>
            <ul className="feature-list">
              <li><strong>Dignity First:</strong> We serve everyone with respect, regardless of their circumstances.</li>
              <li><strong>Direct Impact:</strong> 100% of public donations go directly toward supplies and distribution.</li>
              <li><strong>Transparency:</strong> Our board and financial operations are fully open to the community.</li>
            </ul>
          </div>
          <div className="image-placeholder">
            <img alt="Volunteers preparing hygiene kits and essential supplies for distribution" src={presenceImg} />
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-item">
              <span className="stat-number">Weekly</span>
              <span className="stat-label">Outreach Rounds</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Direct</span>
              <span className="stat-label">Supply Delivery</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Volunteer Led</span>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-content">
            <h2>Support Ethical Local Outreach</h2>
            <p>Whether you have time to volunteer or wish to donate supplies, your contribution makes a tangible difference.</p>
            <Link to="/get-involved" className="btn btn-primary lg">Get Involved Today</Link>
          </div>
        </section>
      </div>
    </>
  )
}
