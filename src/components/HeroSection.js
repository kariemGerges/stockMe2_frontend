import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const HeroSection = () => {
     // Sample data for the chart
    const data = [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 5000 },
        { name: 'Apr', value: 2780 },
        { name: 'May', value: 1890 },
        { name: 'Jun', value: 2390 },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Make Smarter Investment Decisions
                </h1>
                <p className="text-xl text-gray-600">
                    Leverage AI-powered insights to predict market trends and maximize your investment returns.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Watch Demo
                    </button>
                </div>
                </div>
                <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="#93C5FD" />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>
            </div>
    )
};

export default HeroSection;