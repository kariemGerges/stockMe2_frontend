import React from 'react';
import { 
    ResponsiveContainer, 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    Tooltip, 
    PieChart, 
    Pie, 
    Cell, 
    Legend,
    CartesianGrid
} from 'recharts';

const PriceProjectionChart = ({ predictionData }) => {
  // Color palette with more distinct, pleasing colors
    const COLORS = ['#4F46E5', '#10B981', '#F43F5E', '#F97316', '#3B82F6'];

  // Transform price data for pie chart
    const pieChartData = predictionData.priceProjection.map((item, index) => ({
        name: item.month,
        value: item.price,
        color: COLORS[index % COLORS.length]
    }));

    return (
        <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Comprehensive Price Projection
            </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            {/* Line Chart Container */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Price Trend Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart 
                data={predictionData.priceProjection}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="#e0e0e0" 
                />
                <XAxis 
                    dataKey="month" 
                    stroke="#888888" 
                    fontSize={12}
                />
                <YAxis 
                    stroke="#888888" 
                    fontSize={12}
                    tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                    formatter={(value) => [`$${value.toFixed(2)}`, 'Price']}
                    labelClassName="font-bold"
                    contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    borderColor: '#e5e7eb',
                    borderRadius: '8px'
                    }}
                />
                <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#4F46E5" 
                    strokeWidth={3}
                    dot={{ r: 6, fill: '#4F46E5' }}
                    activeDot={{ r: 8, stroke: '#4F46E5', strokeWidth: 2 }}
                    label={({ x, y, value }) => (
                    <text 
                        x={x} 
                        y={y} 
                        dy={-10} 
                        fill="#4F46E5" 
                        fontSize={12} 
                        textAnchor="middle"
                    >
                        ${value.toFixed(2)}
                    </text>
                    )}
                />
                </LineChart>
            </ResponsiveContainer>
            </div>

            {/* Pie Chart Container */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Price Distribution by Month
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                <Pie
                    data={pieChartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    innerRadius="50%"
                    paddingAngle={3}
                    label={({ name, value, percent }) => 
                    `${name}: $${value.toFixed(2)} (${(percent * 100).toFixed(1)}%)`
                    }
                    labelStyle={{ 
                    fontSize: '10px', 
                    fill: '#333', 
                    fontWeight: 'bold' 
                    }}
                >
                    {pieChartData.map((entry, index) => (
                    <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        stroke="white"
                        strokeWidth={2}
                    />
                    ))}
                </Pie>
                <Tooltip 
                    formatter={(value, name) => [
                    `$${value.toFixed(2)}`, 
                    name.charAt(0).toUpperCase() + name.slice(1)
                    ]}
                    contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    borderColor: '#e5e7eb',
                    borderRadius: '8px'
                    }}
                />
                <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{ 
                    paddingTop: '10px',
                    fontSize: '12px'
                    }}
                />
                </PieChart>
            </ResponsiveContainer>
            </div>
        </div>
        </div>
    );
};

export default PriceProjectionChart;