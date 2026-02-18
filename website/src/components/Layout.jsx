import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`layout ${menuOpen ? 'menu-open' : ''}`}>
      <header className="header">
        <div className="container header-content">
          <Link className="logo-text" to="/" onClick={() => setMenuOpen(false)}>
            Not By Chance <span>Outreach</span>
          </Link>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/mission" onClick={() => setMenuOpen(false)}>Mission</NavLink>
            <NavLink to="/resources" onClick={() => setMenuOpen(false)}>Resources</NavLink>
            <NavLink to="/board" onClick={() => setMenuOpen(false)}>Board</NavLink>
            <NavLink to="/impact" onClick={() => setMenuOpen(false)}>Impact</NavLink>
            <NavLink to="/get-involved" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>Get Involved</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-info">
            <h3>Not By Chance Outreach</h3>
            <p>Meeting people where they are, serving without conditions.</p>
            <div className="contact-info">
              <p><strong>Email:</strong> info@notbychanceoutreach.com</p>
              <p><strong>Region:</strong> Serving Louisville, KY, Shepherdsville, KY, Elizabethtown, KY, and surrounding areas.</p>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/mission">Our Mission</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/board">Board &amp; Leadership</Link></li>
              <li><Link to="/impact">Impact Gallery</Link></li>
            </ul>
          </div>
          <div className="footer-cta">
            <h4>Support Our Work</h4>
            <p>Your support provides immediate supplies to those in need.</p>
            <Link className="btn btn-secondary btn-sm" to="/get-involved">Donate or Volunteer</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2026 Not By Chance Outreach. All rights reserved. Registered 501(c)(3) Nonprofit. 501(c)(3) status is pending at this time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
