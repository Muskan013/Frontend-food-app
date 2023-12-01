import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home'
import Work from "./components/Work";
import Testimonial from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          {/* Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
