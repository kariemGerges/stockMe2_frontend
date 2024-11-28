const MarketOverviewSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Today's Market Overview
            </h2>
            <p className="text-xl text-gray-600">
                Stay updated with the latest market trends and insights
            </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "S&P 500", value: "4,185.82", change: "+1.23%" },
                    { title: "Nasdaq", value: "12,888.95", change: "+0.89%" },
                    { title: "Dow Jones", value: "33,886.47", change: "+1.45%" }
                ].map((index) => (
                    <div key={index.title} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">{index.title}</h3>
                    <p className="text-2xl font-bold mb-1">{index.value}</p>
                    <p className="text-green-500">{index.change}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MarketOverviewSection;    