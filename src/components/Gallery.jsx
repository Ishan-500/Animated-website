import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const galleryRef = useRef(null);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explore');
  };

  useEffect(() => {
    gsap.fromTo(
      galleryRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
    );
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519125323398-675f0e2810d7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1497436072909-60f69c25b263?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
  ];

  return (
    <section id="gallery">
      <div className="container">
        <h2>Animation Gallery</h2>
        <button onClick={handleExploreClick} className="explore-btn">
          Explore Animations
        </button>
        <div ref={galleryRef} className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img
                src={src}
                alt={`Animation ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;