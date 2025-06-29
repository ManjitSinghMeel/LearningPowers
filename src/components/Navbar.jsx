import { Link } from 'react-router-dom';

export default function Navbar() {
  return (    <nav className="nav">
      <div className="nav-container">
        <div className="logo-section" style={{ gap: '8px' }}>
          <img src="/media/logo.jpg" alt="Site Logo" className="nav-logo" />
          <div className="site-titles" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <Link to="/" className="site-name" style={{ lineHeight: '1.2' }}>
              Learning<br/>Powers
            </Link>
            <span className="author-name" style={{ 
              marginTop: '3px', 
              width: '100%',
              textAlign: 'center',
              letterSpacing: '3px'
            }}>by Manjit Sir</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
