import { ArrowUp, ArrowDown } from "lucide-react";

const MetricsCards = () => {

    const metrics = [
        { title: "Portfolio Value", value: "$124,532.89", change: "+2.3%", isPositive: true },
        { title: "Today's Return", value: "$1,234.56", change: "+1.8%", isPositive: true },
        { title: "Total Gain", value: "$15,678.90", change: "+12.5%", isPositive: true },
        { title: "Available Cash", value: "$4,321.00", change: "-$500", isPositive: false }
    ];


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">{metric.title}</p>
                  <p className="text-2xl font-bold mt-1">{metric.value}</p>
                </div>
                <span className={`flex items-center ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>
    )
};

export default MetricsCards;