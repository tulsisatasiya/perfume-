import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 mt-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-800 text-base font-semibold">
          {/* Footer Links */}
          <div className="flex space-x-6 mb-6 sm:mb-0">
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
         
          </div>
          
          {/* Copyright */}
 <div className="text-sm text-gray-600 text-center">
  &copy; {new Date().getFullYear()} Your. All rights reserved. Developed by <span className="font-semibold text-pink-600">Tulsi Satasiya</span>
</div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
