import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'
import DonateButton from '../components/DonateButton'

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
            <a href="mailto:info@notbychanceoutreach.com" className="btn btn-primary">Inquire to Volunteer</a>
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
          <p>100% of public donations go directly toward purchasing supplies and maintaining our outreach logistics. We are a registered 501(c)(3) volunteer-led nonprofit organization.</p>
          <form action="https://www.paypal.com/donate" method="post" target="_top" style={{ display: 'inline-block', marginTop: 'var(--space-sm)' }}>
            <input type="hidden" name="hosted_button_id" value="VJPY952DDZDHC" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          <p className="text-small" style={{ marginTop: 'var(--space-sm)' }}>Donations are tax-deductible to the extent allowed by law.</p>
        </section>
      </div>
    </>
  )
}
