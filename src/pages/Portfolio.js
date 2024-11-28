import { 
  PieChart, Pie, Cell, AreaChart, Area, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Filter,
  ArrowUp, 
  Settings, Download, Printer
} from 'lucide-react';

const Portfolio = () => {
  // Sample data
  const portfolioValue = 124532.89;
  const totalGain = 15678.90;
  const totalGainPercentage = 12.5;

  const performanceData = [
    { date: 'Jan', value: 100000 },
    { date: 'Feb', value: 105000 },
    { date: 'Mar', value: 115000 },
    { date: 'Apr', value: 112000 },
    { date: 'May', value: 118000 },
    { date: 'Jun', value: 124532 }
  ];

  const allocationData = [
    { name: 'Technology', value: 35, color: '#3B82F6' },
    { name: 'Healthcare', value: 25, color: '#10B981' },
    { name: 'Finance', value: 20, color: '#6366F1' },
    { name: 'Consumer', value: 15, color: '#F59E0B' },
    { name: 'Other', value: 5, color: '#6B7280' }
  ];

  const holdings = [
    { 
      symbol: 'AAPL', 
      name: 'Apple Inc.', 
      shares: 150,
      avgCost: 125.50,
      currentPrice: 145.86,
      marketValue: 21879.00,
      gain: 3054.00,
      gainPercent: 16.23,
      allocation: 17.5
    },
    { 
      symbol: 'MSFT', 
      name: 'Microsoft Corp.', 
      shares: 100,
      avgCost: 245.30,
      currentPrice: 287.93,
      marketValue: 28793.00,
      gain: 4263.00,
      gainPercent: 17.37,
      allocation: 23.1
    },
    { 
      symbol: 'GOOGL', 
      name: 'Alphabet Inc.', 
      shares: 25,
      avgCost: 2450.00,
      currentPrice: 2680.21,
      marketValue: 67005.25,
      gain: 5755.25,
      gainPercent: 9.39,
      allocation: 53.8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-white rounded-lg">
              <Download className="h-5 w-5 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-white rounded-lg">
              <Printer className="h-5 w-5 mr-2" />
              Print
            </button>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-white rounded-lg">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500">Total Portfolio Value</p>
            <p className="text-3xl font-bold mt-2">${portfolioValue.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500">Total Gain/Loss</p>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold text-green-500">
                ${totalGain.toLocaleString()}
              </p>
              <span className="ml-2 flex items-center text-green-500">
                <ArrowUp className="h-4 w-4" />
                {totalGainPercentage}%
              </span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500">Today's Gain/Loss</p>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold text-green-500">$1,234.56</p>
              <span className="ml-2 flex items-center text-green-500">
                <ArrowUp className="h-4 w-4" />
                0.99%
              </span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Portfolio Performance Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Portfolio Performance</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3B82F6" 
                    fill="#93C5FD" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Asset Allocation Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Asset Allocation</h2>
            <div className="h-[300px] flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Holdings</h2>
              <button className="text-gray-400 hover:text-blue-600">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gain/Loss</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {holdings.map((holding) => (
                  <tr key={holding.symbol} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">{holding.symbol}</div>
                        <div className="text-sm text-gray-500">{holding.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{holding.shares}</td>
                    <td className="px-6 py-4">${holding.avgCost.toFixed(2)}</td>
                    <td className="px-6 py-4">${holding.currentPrice.toFixed(2)}</td>
                    <td className="px-6 py-4">${holding.marketValue.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className={holding.gain >= 0 ? 'text-green-500' : 'text-red-500'}>
                        ${holding.gain.toLocaleString()} ({holding.gainPercent}%)
                      </div>
                    </td>
                    <td className="px-6 py-4">{holding.allocation}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;