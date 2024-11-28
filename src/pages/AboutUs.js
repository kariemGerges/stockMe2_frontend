import React from 'react';
import img from '../assets/IMG_6180.jpg';
import { TrendingUp, Users, Shield, Brain } from 'lucide-react';

const AboutUs = () => {

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Predictions",
      description: "Our advanced machine learning algorithms analyze vast amounts of market data to provide accurate stock predictions and insights."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Analysis",
      description: "Get instant market insights and trend analysis to make informed investment decisions at the right time."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Community",
      description: "Join a thriving community of investors and analysts sharing knowledge and strategies."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Reliable Security",
      description: "Your data security is our priority. We implement industry-leading security measures to protect your information."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About StockMe</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering investors with AI-driven market predictions and expert insights
              for smarter trading decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At StockMe, we're dedicated to democratizing stock market intelligence through
            cutting-edge AI technology and comprehensive market analysis, making smart
            investing accessible to everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600">50K+</p>
              <p className="text-gray-600 mt-2">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">90%</p>
              <p className="text-gray-600 mt-2">Prediction Accuracy</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-600 mt-2">Market Analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Kariem Gerges",
                role: "CEO & Founder",
                image: {img}
              },
              {
                name: "Kariem Gerges",
                role: "Chief Data Scientist",
                image: {img}
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 bg-red-100"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions? We'd love to hear from you.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;