import './App.css';

function App() {
  return (
    <div>
      <nav>
        <div className="container">
          <h1>GSAP Studio</h1>
        </div>
      </nav>
      
      <section id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Creative GSAP Animations</h1>
              <p>Experience smooth, professional animations</p>
              <button className="btn">Explore Animations</button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="gallery">
        <div className="container">
          <h2>Animation Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Animation 1" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop" alt="Animation 2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;