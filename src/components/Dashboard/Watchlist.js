import {Filter } from 'lucide-react';

const Watchlist = () => {

    const watchlist = [
        { symbol: "AAPL", name: "Apple Inc.", price: "145.86", change: "+1.2%" },
        { symbol: "GOOGL", name: "Alphabet Inc.", price: "2,680.21", change: "-0.5%" },
        { symbol: "MSFT", name: "Microsoft Corp.", price: "287.93", change: "+2.1%" },
        { symbol: "AMZN", name: "Amazon.com Inc.", price: "3,162.45", change: "+0.8%" }
      ];


    return (
        <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Watchlist</h2>
            <button className="text-gray-400 hover:text-blue-600">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="divide-y">
          {watchlist.map((stock, index) => (
            <div key={index} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{stock.symbol}</p>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${stock.price}</p>
                  <p className={stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                    {stock.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
};

export default Watchlist;