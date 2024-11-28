import { Search, Bell } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search stocks..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-white">
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </div>
    )
};

export default SearchBar;