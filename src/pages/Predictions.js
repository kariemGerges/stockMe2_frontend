import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  ChevronRight, 
  BarChart2, 
  DollarSign, 
  Calendar 
} from 'lucide-react';
import GraphAndChart from '../components/Predictions/GraphAndChart';


const StockPredictions = () => {
  const [ticker, setTicker] = useState('');
  const [predictionData, setPredictionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulated prediction data (would be replaced by actual API call)
  const mockPredictStock = (symbol) => {
    const predictionMocks = {
      'AAPL': {
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
        currentPrice: 175.50,
        predictionPrice: 195.75,
        confidenceScore: 85,
        predictionDirection: 'bullish',
        timeframe: '3 months',
        technicalIndicators: [
          { name: 'RSI', value: 62, interpretation: 'Neutral' },
          { name: 'MACD', value: 1.2, interpretation: 'Bullish' },
          { name: 'Moving Average', value: 'Bullish Crossover', interpretation: 'Positive' }
        ],
        priceProjection: [
          { month: 'Jun', price: 180.20 },
          { month: 'Jul', price: 185.50 },
          { month: 'Aug', price: 190.75 },
          { month: 'Sep', price: 195.75 }
        ],
        newsHighlights: [
          'Strong Q2 earnings report expected',
          'New product innovation in AI sector',
          'Positive market sentiment'
        ]
      },
      // Add more mock data for other stocks
    };

    return predictionMocks[symbol.toUpperCase()] || null;
  };

  const handlePredictionSearch = () => {
    if (!ticker) {
      setError('Please enter a stock ticker');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API call (not needed in real time data) ==> remove after api integration
    setTimeout(() => {
      const prediction = mockPredictStock(ticker);
      if (prediction) {
        setPredictionData(prediction);
      } else {
        setError('No prediction data available for this stock');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Section */}
        <div className="bg-white shadow-md rounded-lg mb-8 p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value.toUpperCase())}
                placeholder="Enter Stock Ticker (e.g., AAPL)"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" />
            </div>
            <button
              onClick={handlePredictionSearch}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Predict'}
            </button>
          </div>
          {error && (
            <div className="mt-4 text-red-600 flex items-center">
              <AlertCircle className="mr-2" />
              {error}
            </div>
          )}
        </div>

        {/* Prediction Results */}
        {predictionData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Overview Column */}
            <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{predictionData.symbol}</h2>
                <span 
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    predictionData.predictionDirection === 'bullish' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {predictionData.predictionDirection.charAt(0).toUpperCase() + predictionData.predictionDirection.slice(1)}
                </span>
              </div>
              <p className="text-gray-600">{predictionData.companyName}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <DollarSign className="mr-2 text-gray-500" />
                    <span>Current Price</span>
                  </div>
                  <span className="font-semibold">${predictionData.currentPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <TrendingUp className="mr-2 text-green-500" />
                    <span>Predicted Price</span>
                  </div>
                  <span className="font-semibold text-green-600">${predictionData.predictionPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <BarChart2 className="mr-2 text-blue-500" />
                    <span>Confidence</span>
                  </div>
                  <span className="font-semibold">{predictionData.confidenceScore}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-purple-500" />
                    <span>Prediction Timeframe</span>
                  </div>
                  <span className="font-semibold">{predictionData.timeframe}</span>
                </div>
              </div>
            </div>

            {/* Price Projection Column graph*/}
            <GraphAndChart predictionData={predictionData} />

            {/* Additional Insights Column */}
            <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Indicators</h3>
                {predictionData.technicalIndicators.map((indicator, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b last:border-b-0"
                  >
                    <span>{indicator.name}</span>
                    <div className="flex items-center space-x-2">
                      <span>{indicator.value}</span>
                      <span 
                        className={`
                          px-2 py-1 rounded-full text-xs 
                          ${
                            indicator.interpretation === 'Bullish' 
                              ? 'bg-green-100 text-green-800'
                              : indicator.interpretation === 'Bearish'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }
                        `}
                      >
                        {indicator.interpretation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">News Highlights</h3>
                {predictionData.newsHighlights.map((news, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between py-3 border-b last:border-b-0"
                  >
                    <span className="text-gray-700">{news}</span>
                    <ChevronRight className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockPredictions;