import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isExplorePage = location.pathname === '/explore';

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <nav ref={navRef}>
      <div className="container">
        <h1 onClick={() => navigate('/')} style={{cursor: 'pointer'}}>GSAP Studio</h1>
        {isExplorePage ? (
          <button onClick={() => navigate('/')} className="back-btn">← Back to Home</button>
        ) : (
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;