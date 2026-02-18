import SEOMeta from '../components/SEOMeta'

export default function Resources() {
  return (
    <>
      <SEOMeta
        title="Local Resources | Not By Chance Outreach"
        description="A guide to local resources for food, shelter, and emergency support in Louisville, KY. Not By Chance Outreach connects you with essential community assistance."
        path="/resources"
      />
      <div className="resources-page">
        <section className="section container">
          <h1>Local Assistance &amp; Resources</h1>
          <p className="lead">If you or someone you know is in need of immediate assistance, the resources below include local partners, outreach coordination tools, and national support services serving Louisville, KY and surrounding areas.</p>
        </section>

        <section className="section container border-accent card">
          <h2>Outreach Coordination &amp; Camp Mapping</h2>
          <p>Not By Chance Outreach uses Tent Finder to coordinate outreach efforts, identify camp locations, and connect volunteers and donors in real time. This tool allows community members to report camp locations, offer help, and share contact information so outreach can be coordinated quickly and responsibly.</p>
          <div style={{ marginTop: 'var(--space-md)' }}>
            <a href="https://thetentfinder.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Tent Finder</a>
          </div>
        </section>

        <section className="section container resource-grid">
          <div className="resource-category">
            <h2>Emergency Food &amp; Meals</h2>
            <p>Louisville-area food banks and meal programs provided by community organizations.</p>
            <ul className="resource-list">
              <li><strong>Dare to Care Food Bank (Louisville, KY)</strong></li>
              <li><strong>St. Vincent de Paul Louisville</strong></li>
              <li><strong>Wayside Christian Mission – Meals Program</strong></li>
              <li><strong>Feed Louisville</strong></li>
              <li><strong>Louisville Community Ministries</strong></li>
            </ul>
            <p className="text-small">Note: Hours and locations may vary. Contact providers directly or use Tent Finder to request outreach support.</p>
          </div>

          <div className="resource-category">
            <h2>Shelter &amp; Housing (Louisville, KY)</h2>
            <p>Emergency overnight shelter and transitional housing services for individuals and families.</p>
            <ul className="resource-list">
              <li><strong>Wayside Christian Mission (Men, Women, Families)</strong></li>
              <li><strong>The Healing Place (Men &amp; Women)</strong></li>
              <li><strong>St. Vincent de Paul Louisville – Ozanam Inn</strong></li>
              <li><strong>Volunteers of America Mid-States (Louisville)</strong></li>
              <li><strong>Coalition for the Homeless (Louisville, KY)</strong></li>
            </ul>
            <p className="text-small">Note: Availability and intake requirements vary by provider.</p>
          </div>

          <div className="resource-category">
            <h2>Medical, Mental Health &amp; Crisis Support</h2>
            <p>National, 24/7 resources available for immediate assistance in Louisville and surrounding areas.</p>
            <ul className="resource-list">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong><span>Call or Text 988 | 24/7 | Nationwide</span></li>
              <li><strong>SAMHSA National Helpline</strong><span>1-800-662-HELP (4357) | 24/7 | Substance Use &amp; Mental Health</span></li>
              <li><strong>National Homeless Hotline</strong><span>1-800-231-6946 | Housing &amp; Shelter Referrals</span></li>
              <li><strong>Veterans Crisis Line</strong><span>Call or Text 988, then press 1</span></li>
            </ul>
            <p className="text-small">Note: These services are available nationwide, including Louisville and surrounding areas.</p>
          </div>

          <div className="resource-category">
            <h2>Community Partners</h2>
            <p>These organizations are active community partners providing outreach, support, and advocacy across the Louisville area.</p>
            <ul className="resource-list">
              <li><a href="https://exodusfamilyministries.com/" target="_blank" rel="noopener noreferrer">Exodus Family Ministries</a></li>
              <li><a href="https://www.facebook.com/profile.php/?id=100071948695350" target="_blank" rel="noopener noreferrer">Jesus Mobile Outreach (JMO)</a></li>
              <li><a href="https://www.facebook.com/southendstreetangels/" target="_blank" rel="noopener noreferrer">Southend Street Angels</a></li>
              <li><a href="https://www.facebook.com/breakin.tha.chainz.ministry" target="_blank" rel="noopener noreferrer">Breakin Tha Chainz Ministry</a></li>
            </ul>
          </div>
        </section>

        <section className="section container bg-soft-green card">
          <h3>Outreach Supplies Request</h3>
          <p>Not By Chance Outreach provides hygiene items, socks, and seasonal supplies directly in the field. If you are an individual in need or represent an organization seeking outreach support, please contact our outreach team.</p>
          <a href="mailto:info@notbychanceoutreach.com" className="btn btn-secondary">Contact Outreach Team</a>
        </section>
      </div>
    </>
  )
}
