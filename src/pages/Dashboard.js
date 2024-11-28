
import SearchBar from '../components/Dashboard/Search';
import MetricsCards from '../components/Dashboard/MetricsCards';
import MainChartsSection from '../components/Dashboard/MainChartsSection';
import Watchlist from '../components/Dashboard/Watchlist';
import AIPredictions from '../components/Dashboard/AIPredictions';

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <SearchBar />

        {/* Metrics Cards */}
        <MetricsCards />

        {/* Main Charts Section */}
        <MainChartsSection />

        {/* Watchlist and Predictions */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Watchlist */}
          <Watchlist />

          {/* AI Predictions */}
          <AIPredictions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;