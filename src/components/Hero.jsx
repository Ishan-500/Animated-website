import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)', delay: 0.5 }
    );
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={titleRef}>
              Creative GSAP Animations
            </h1>
            <p>
              Experience smooth, professional animations that bring your web projects to life with stunning visual effects.
            </p>
            <button className="btn" onClick={() => navigate('/explore')}>
              Explore Animations
            </button>
          </div>
          <div ref={imageRef} className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Creative Design"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;