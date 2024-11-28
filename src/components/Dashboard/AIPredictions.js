const AIPredictions = () => {

    const predictions = [
        { symbol: "TSLA", prediction: "Strong Buy", confidence: "89%", target: "$950.00" },
        { symbol: "NVDA", prediction: "Hold", confidence: "75%", target: "$280.00" },
        { symbol: "META", prediction: "Buy", confidence: "82%", target: "$320.00" }
    ];


    return (
        <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">AI Predictions</h2>
            </div>
            <div className="divide-y">
                {predictions.map((prediction, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                        <div>
                        <p className="font-semibold">{prediction.symbol}</p>
                        <p className="text-sm text-gray-500">Confidence: {prediction.confidence}</p>
                        </div>
                        <div className="text-right">
                        <p className="font-semibold">{prediction.prediction}</p>
                        <p className="text-sm text-gray-500">Target: {prediction.target}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default AIPredictions;