import { LineChart, Zap, Shield, Award } from 'lucide-react';

const FeaturesSection = () => {

    const features = [
        {
          icon: <LineChart className="h-6 w-6 text-blue-500" />,
          title: "Advanced Analytics",
          description: "Get real-time market analysis powered by cutting-edge AI algorithms"
        },
        {
          icon: <Zap className="h-6 w-6 text-blue-500" />,
          title: "Instant Predictions",
          description: "Receive instant stock predictions with our advanced machine learning models"
        },
        {
          icon: <Shield className="h-6 w-6 text-blue-500" />,
          title: "Risk Management",
          description: "Advanced tools to help you manage and minimize investment risks"
        },
        {
          icon: <Award className="h-6 w-6 text-blue-500" />,
          title: "Expert Insights",
          description: "Access curated insights from financial experts and market analysts"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose StockMe
            </h2>
            <p className="text-xl text-gray-600">
                Powerful features to help you make informed investment decisions
            </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
    );
};






export default FeaturesSection;
