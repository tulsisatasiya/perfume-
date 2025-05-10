import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="flex justify-center space-x-10 text-gray-800 text-base font-semibold">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
        <Link to="/help" className="hover:underline">Help</Link>
        <Link to="/support" className="hover:underline">Support</Link>
      </div>
    </footer>
  );
};

export default Footer;
