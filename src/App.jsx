import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ExploreAnimation from './components/ExploreAnimation';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Gallery />
            </>
          } />
          <Route path="/explore" element={<ExploreAnimation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;