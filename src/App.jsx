import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation(); // Get the current location (path)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render Navbar and Footer based on the route */}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
