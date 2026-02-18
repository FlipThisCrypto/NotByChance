import SEOMeta from '../components/SEOMeta'
import supplies2 from '../assets/images/supplies2.jpg'
import supplies1a from '../assets/images/supplies1a.jpg'
import supplies1b from '../assets/images/supplies1b.jpg'
import jackets from '../assets/images/jackets.jpg'
import camp1 from '../assets/images/camp1.jpg'
import camp3 from '../assets/images/camp3.jpg'
import harmPrevention from '../assets/images/HarmPrevention.jpg'
import homeless1 from '../assets/images/homeless1.jpg'
import homeless2 from '../assets/images/homeless2.jpg'
import homeless3 from '../assets/images/homeless3.jpg'

export default function Impact() {
  return (
    <>
      <SEOMeta
        title="Impact Gallery | Not By Chance Outreach"
        description="A visual overview of our outreach work, focusing on preparation, environment, and the individuals we serve with dignity."
        path="/impact"
      />
      <div className="impact-page">
        <section className="section container">
          <h1>Impact Gallery</h1>
          <div className="impact-intro">
            <p>These photos capture real moments from the field. Miles driven, hands warmed, meals shared, and conversations that matter. Not By Chance shows up where help is needed most, delivering food, water, tents, blankets, and survival supplies directly to people living outdoors. But the work does not stop at distribution. We listen. We learn names. We build trust.</p>
            <p>Every outreach is about dignity, consistency, and presence. Some days it looks like emergency relief. Other days it looks like checking back in weeks later, remembering a face, or making sure someone survived the night. This gallery reflects the reality of outreach work. Unfiltered, imperfect, and deeply human.</p>
            <p className="lead">This is what impact looks like on the ground.</p>
          </div>

          <div className="gallery-section">
            <h2>Supply Preparation</h2>
            <div className="gallery-grid grid-4">
              <div className="gallery-item"><img alt="Organized storage of hygiene kits and nutritional supplies for outreach" src={supplies2} /></div>
              <div className="gallery-item"><img alt="Close-up of neatly packed hygiene kits ready for community distribution" src={supplies1a} /></div>
              <div className="gallery-item"><img alt="Mobile outreach supplies being loaded into a vehicle" src={supplies1b} /></div>
              <div className="gallery-item"><img alt="Winter jackets and warm clothing sorted for distribution" src={jackets} /></div>
            </div>
            <p className="gallery-caption">Cold-weather supplies and hygiene kits prepared for mobile outreach.</p>
          </div>
        </section>

        <section className="section-alt container">
          <h2>Outreach Environments</h2>
          <div className="gallery-grid grid-2">
            <div className="gallery-item"><img alt="An outdoor living area beneath a large urban bridge" src={camp1} /></div>
            <div className="gallery-item"><img alt="Tented living space in a wooded urban environment" src={camp3} /></div>
          </div>
          <p className="gallery-caption">Outdoor environments encountered during regular outreach rounds.</p>
        </section>

        <section className="section container">
          <h2>Direct Support &amp; Harm Reduction</h2>
          <div className="gallery-grid grid-1">
            <div className="gallery-item single"><img alt="Carefully prepared harm reduction resources and life-saving supplies" src={harmPrevention} /></div>
          </div>
          <p className="gallery-caption">Provisioning of life-saving supplies and harm-reduction resources.</p>
        </section>

        <section className="section-alt container">
          <h2>Individuals in the Community</h2>
          <div className="gallery-grid grid-3">
            <div className="gallery-item"><img alt="An individual walking in an urban community setting" src={homeless1} /></div>
            <div className="gallery-item"><img alt="A community member in a public space during outreach hours" src={homeless2} /></div>
            <div className="gallery-item"><img alt="Candid view of daily community life in a local area" src={homeless3} /></div>
          </div>
          <p className="gallery-caption">Honoring the dignity of every individual we encounter in our community.</p>
        </section>

        <section className="section container text-center">
          <h2>Operational Transparency</h2>
          <p>Not By Chance Outreach operates with the core belief that trust is built through presence. Our gallery reflects the reality of street outreach—meeting needs where they are located, without filter or judgment.</p>
        </section>
      </div>
    </>
  )
}
