import React, { useState } from 'react';
import { Menu, X, TrendingUp, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/Dashboard' },
    { name: 'Predictions', href: '/Prediction' },
    { name: 'Market Insights', href: '/Insights' },
    { name: 'Portfolio', href: '/Portfolio' },
    { name: 'About Us', href: '/AboutUs' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">StockMe</span>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navItems.map((item) => (
                
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm
                            font-medium text-gray-500 hover:text-blue-600
                          hover:border-blue-500 transition-colors duration-200"
                >
                  {item.name}
                </Link>

              ))}
            </div>
            </div>
          </Link>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500
                      hover:text-blue-600 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center justify-around">
            <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;