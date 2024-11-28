import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import MarketOverviewSection from '../components/MarketOverviewSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {


  return (
    <div className="min-h-screen bg-gray-50">

      <style jsx global>{`
                        @keyframes scrollLeft {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        @keyframes scrollRight {
                            0% { transform: translateX(-50%); }
                            100% { transform: translateX(0); }
                        }
                        .animate-scroll-left {
                            animation: scrollLeft 40s linear infinite;
                        }
                        .animate-scroll-right {
                            animation: scrollRight 40s linear infinite;
                        }
                      `}
      </style>
      {/* Hero Section */}
      <section className="bg-white">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <FeaturesSection />
      </section>

      {/* Market Overview Section */}
      <section className="bg-white py-20">
        <MarketOverviewSection />
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of investors who trust StockMe for their market predictions
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <TestimonialsSection />
      </section>
    </div>
  );
};

export default HomePage;