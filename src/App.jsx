import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import TopicDetail from './pages/TopicDetail';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div style={{ width: '100%' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/topic/:topicId" element={<TopicDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
