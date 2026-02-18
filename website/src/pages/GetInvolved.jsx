import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'

export default function GetInvolved() {
  return (
    <>
      <SEOMeta
        title="Get Involved | Not By Chance Outreach"
        description="Support Not By Chance Outreach through volunteering, supply donations, or financial contributions. Every bit of support goes directly to the street."
        path="/get-involved"
      />
      <div className="involved-page">
        <section className="section container hero-short">
          <h1>Join the Mission</h1>
          <p className="lead">There are many ways to support our neighbors. Choose the path that works for you.</p>
        </section>

        <section className="section container grid-2">
          <div className="card">
            <h2>Volunteer</h2>
            <p>Join our outreach teams on the ground. We provide training and support for those who want to engage in direct, street-level outreach.</p>
            <ul className="list-styled">
              <li>Packing events</li>
              <li>Direct outreach rounds</li>
              <li>Transport and logistics</li>
            </ul>
            <a href="mailto:volunteer@notbychanceoutreach.com" className="btn btn-primary">Inquire to Volunteer</a>
          </div>
          <div className="card">
            <h2>Donate Supplies</h2>
            <p>We are always in need of new, high-quality supplies for our weekly distribution.</p>
            <ul className="list-styled">
              <li>Hygiene kits (unopened)</li>
              <li>New socks and undergarments</li>
              <li>Seasonal gear (hats, gloves, blankets)</li>
            </ul>
            <Link to="/resources" className="btn btn-secondary">See Current Needs List</Link>
          </div>
        </section>

        <section className="section container bg-light card border-accent">
          <h2>Financial Support</h2>
          <p>100% of public donations go directly toward purchasing supplies and maintaining our outreach logistics. We are a volunteer-led 501(c)(3) nonprofit.</p>
          <a href="mailto:info@notbychanceoutreach.com?subject=Donation%20Inquiry" className="btn btn-primary lg">Donate Securely Online</a>
          <p className="text-small">Donations are tax-deductible to the extent allowed by law.</p>
        </section>
      </div>
    </>
  )
}
