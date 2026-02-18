import SEOMeta from '../components/SEOMeta'

export default function Board() {
  return (
    <>
      <SEOMeta
        title="Board & Leadership | Not By Chance Outreach"
        description="Meet the leadership and board of Not By Chance Outreach. Dedicated to ethical governance, transparency, and serving the community."
        path="/board"
      />
      <div className="board-page">
        <section className="section container">
          <h1>Board &amp; Leadership</h1>
          <div className="leadership-section">
            <h2>Executive Leadership</h2>
            <div className="board-grid">
              <div className="board-member card">
                <h3>Rick Aubrey – Executive Director</h3>
                <p>Oversees day-to-day operations, outreach coordination, partnerships, and strategic planning. Leadership is rooted in lived experience and direct service, with a focus on meeting people where they are without conditions or judgment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section container bg-light">
          <h2>Board of Directors</h2>
          <div className="board-grid">
            <div className="board-member card">
              <h3>Sherrie Aubrey – President</h3>
              <p>Brings over 20 years of experience in banking operations and regulatory compliance. Provides governance leadership with a focus on organizational controls, policy adherence, and operational integrity.</p>
            </div>
            <div className="board-member card">
              <h3>Jennifer Holmes – Treasurer</h3>
              <p>Holds two finance degrees and works in internal auditing. Oversees financial management, reporting, and internal controls to ensure accurate and transparent stewardship of donated funds.</p>
            </div>
            <div className="board-member card">
              <h3>Marcus Biggs – Secretary</h3>
              <p>Holds a Master's in Human Services, Life Coaching, and Counseling with a professional background in substance use treatment and mental health services. Oversees official records, documentation, and ensures organizational compliance.</p>
            </div>
            <div className="board-member card">
              <h3>Dana Smith – Director</h3>
              <p>Outreach partner with Jesus Mobile Outreach (JMO), bringing hands-on field experience and collaborative outreach support to strengthen on-the-ground service delivery.</p>
            </div>
            <div className="board-member card">
              <h3>Gavin Winters – Director</h3>
              <p>Provides guidance and support in grant research, proposal development, and funding strategy to support long-term sustainability and program growth.</p>
            </div>
          </div>
        </section>

        <section className="section container">
          <h2>Governance &amp; Accountability</h2>
          <div className="card border-accent">
            <p>The Board of Directors provides oversight to ensure Not By Chance Outreach operates ethically, transparently, and in alignment with its mission. Strong financial controls, compliance oversight, and community collaboration guide all decisions.</p>
          </div>
        </section>
      </div>
    </>
  )
}
