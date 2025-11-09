import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Globe,
  Shield,
  Award
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">PC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zynpay Technology</h3>
                <p className="text-sm text-emerald-300">Advanced Financial Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Pioneering the future of digital finance through innovative technology solutions, 
              secure payment processing, and comprehensive financial services for businesses worldwide.
            </p>
            <div className="flex items-center space-x-2 text-emerald-300">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">NPCI Certified & Secure</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-300">Quick Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Home</span></a></li>
              <li><a href="#service" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Solutions</span></a></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>About Us</span></a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Contact</span></a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Support</span></a></li>
              <li><Link to="/shipping-policy" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Shipping Policy</span></Link></li>
              <li><Link to="/cancellation-refund" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Cancellation & Refund</span></Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Terms & Conditions</span></Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Privacy Policy</span></Link></li>
            </ul>
          </div>

          {/* Service Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-purple-300">Service Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Payment Processing</span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Bill Payment Services</span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Biometric Banking</span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Money Transfer</span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2"><span>•</span><span>Identity Services</span></a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-300">Get In Touch</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-300">8882468570</span>
                  <span className="text-gray-300">92896 21094</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-gray-300">zynpay007@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300">Shop No. 4  A/7/3/2  Tugalpur ,Greater Noida, Gautam Buddha Nagar ,Uttar Pradesh 201310</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold mb-4 text-orange-300">Connect With Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300 text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">Bank-Grade Security</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm space-x-2">
              <span>© 2024 ZynPay Technology. All rights reserved.</span>
              <span>|</span>
              <Link to="/privacy-policy" className="hover:text-emerald-300 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms-conditions" className="hover:text-emerald-300 transition-colors">Terms &amp; Conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;