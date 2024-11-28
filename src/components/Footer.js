import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';  

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">StockMe</h3>
            <p className="text-sm">
              Empowering investors with AI-driven stock market predictions and real-time insights.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@stockme.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Trading Strategies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Premium Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <div className="space-y-2">
              <p className="text-sm">
                <Link to="/PrivacyAndTerms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </p>
              <p className="text-sm">
                <Link to="/PrivacyAndTerms" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </p>
              <p className="text-sm">
                <Link to="/PrivacyAndTerms" className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </Link>
              </p>
              <div className="pt-4">
                <p className="text-xs">
                  Disclaimer: StockMe provides market analysis and predictions for informational 
                  purposes only. Trading stocks carries risk, and past performance does not guarantee 
                  future results. Always conduct your own research and consult with a qualified 
                  financial advisor before making investment decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} StockMe. All rights reserved.
            </p>
            <p className="text-sm mt-2 md:mt-0">
              Created with ❤️ by Kariem
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;