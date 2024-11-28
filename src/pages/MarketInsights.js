import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertCircle, Clock, Filter, Search } from 'lucide-react';

const MarketInsights = () => {
  const [activeTab, setActiveTab] = useState('trending');
  
  // Sample data - in a real app, this would come from an API
  const trendData = [
    { name: 'Jan', SPY: 4200, AAPL: 160, MSFT: 310 },
    { name: 'Feb', SPY: 4300, AAPL: 155, MSFT: 320 },
    { name: 'Mar', SPY: 4400, AAPL: 170, MSFT: 335 },
    { name: 'Apr', SPY: 4450, AAPL: 165, MSFT: 340 },
    { name: 'May', SPY: 4500, AAPL: 175, MSFT: 345 },
  ];

  const marketMovers = [
    { symbol: 'TSLA', change: '+5.2%', price: '$242.50', volume: '22.5M' },
    { symbol: 'NVDA', change: '+3.8%', price: '$485.20', volume: '15.2M' },
    { symbol: 'AMD', change: '-2.1%', price: '$142.30', volume: '12.8M' },
    { symbol: 'META', change: '+1.9%', price: '$378.90', volume: '18.3M' },
  ];

  const predictions = [
    {
      symbol: 'AAPL',
      prediction: 'Bullish',
      confidence: 85,
      targetPrice: '$198.50',
      timeline: '3 months',
    },
    {
      symbol: 'MSFT',
      prediction: 'Bullish',
      confidence: 78,
      targetPrice: '$420.00',
      timeline: '3 months',
    },
    {
      symbol: 'GOOGL',
      prediction: 'Neutral',
      confidence: 65,
      targetPrice: '$152.30',
      timeline: '1 month',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Market Insights</h1>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stocks..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">S&P 500</h3>
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-5 w-5 mr-1" />
                +1.2%
              </span>
            </div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={trendData}>
                <Line type="monotone" dataKey="SPY" stroke="#4F46E5" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Market Sentiment</h3>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-sm text-gray-600">Bullish</p>
                <p className="text-2xl font-bold text-green-600">65%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Neutral</p>
                <p className="text-2xl font-bold text-gray-600">20%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Bearish</p>
                <p className="text-2xl font-bold text-red-600">15%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Market Volatility</h3>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={trendData}>
                <Bar dataKey="AAPL" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b">
            <div className="flex">
              {['trending', 'predictions', 'analysis'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'trending' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Top Market Movers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {marketMovers.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{stock.symbol}</h4>
                        <p className="text-sm text-gray-600">Vol: {stock.volume}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{stock.price}</p>
                        <p className={stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                          {stock.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'predictions' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">AI Predictions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {predictions.map((prediction, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">{prediction.symbol}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          prediction.prediction === 'Bullish' 
                            ? 'bg-green-100 text-green-800'
                            : prediction.prediction === 'Bearish'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {prediction.prediction}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          Confidence: {prediction.confidence}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Target: {prediction.targetPrice}
                        </p>
                        <p className="text-sm text-gray-600">
                          Timeline: {prediction.timeline}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analysis' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Technical Analysis</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="AAPL" stroke="#4F46E5" />
                      <Line type="monotone" dataKey="MSFT" stroke="#10B981" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Market Alerts */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Market Alerts</h3>
            <button className="text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { type: 'alert', message: 'Unusual trading volume detected in TSLA' },
              { type: 'news', message: 'Federal Reserve announces interest rate decision' },
              { type: 'prediction', message: 'AI model updates prediction for AAPL' },
            ].map((alert, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    2 hours ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;