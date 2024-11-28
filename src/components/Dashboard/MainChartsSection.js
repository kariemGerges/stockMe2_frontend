import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const MainChartsSection = () => {

    const stockData = [
        { date: 'Jan', value: 4000, volume: 2400, prediction: 4500 },
        { date: 'Feb', value: 3000, volume: 1398, prediction: 3200 },
        { date: 'Mar', value: 5000, volume: 9800, prediction: 5100 },
        { date: 'Apr', value: 2780, volume: 3908, prediction: 2900 },
        { date: 'May', value: 1890, volume: 4800, prediction: 2000 },
        { date: 'Jun', value: 2390, volume: 3800, prediction: 2500 }
      ];
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Performance Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Portfolio Performance</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="#93C5FD" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trading Volume Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Trading Volume</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="volume" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      )

};

export default MainChartsSection;