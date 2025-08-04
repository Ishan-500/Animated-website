import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ExploreAnimation = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, scale: 0.8, rotation: 10 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, stagger: 0.15, ease: 'back.out(1.7)' }
    );
  }, []);

  const animations = [
    {
      title: 'Bounce Animation',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
      description: 'Smooth bouncing effects'
    },
    {
      title: 'Fade Transitions',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
      description: 'Elegant fade in/out animations'
    },
    {
      title: 'Scale Effects',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Dynamic scaling animations'
    },
    {
      title: 'Rotation Magic',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
      description: 'Smooth rotation effects'
    },
    {
      title: 'Slide Animations',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      description: 'Sliding transition effects'
    },
    {
      title: 'Morphing Shapes',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Shape transformation animations'
    }
  ];

  return (
    <div ref={containerRef} className="explore-page">
      <div className="container">
        <h1 ref={titleRef} className="explore-title">Explore Animations</h1>
        <div ref={gridRef} className="animation-grid">
          {animations.map((animation, index) => (
            <div key={index} className="animation-card">
              <img src={animation.image} alt={animation.title} />
              <div className="card-content">
                <h3>{animation.title}</h3>
                <p>{animation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreAnimation;