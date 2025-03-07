import { useEffect, useState } from 'react'

import './App.css'
import { BarChart, Calendar, DollarSign, TrendingUp } from 'lucide-react'
import axios from 'axios'

const App = () => {
  const [trades, setTrades] = useState([]);
  const [visibleCount, setVisibleCount] = useState(50);
  const [sortKey, setSortKey] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await axios.get('https://stock-market-server-123.vercel.app/');
        setTrades(response.data.slice(0, visibleCount));
      } catch (error) {
        console.error('Error fetching trade data:', error);
      }
    };

    fetchTrades();
  }, [visibleCount]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 1000); // Increment by 1000
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const filteredTrades = trades.filter((trade) =>
    trade.trade_code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTrades = [...filteredTrades].sort((a, b) => {
    const valA = isNaN(a[sortKey]) ? a[sortKey]?.toString().toLowerCase() : parseFloat(a[sortKey]);
    const valB = isNaN(b[sortKey]) ? b[sortKey]?.toString().toLowerCase() : parseFloat(b[sortKey]);

    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const getSortIcon = (key) => {
    if (sortKey !== key) return '';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              Trade History
            </h2>
            <input
              type="text"
              placeholder="Search by Trade Code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-4 p-2 border rounded w-full"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['date', 'trade_code', 'high', 'low', 'open', 'close', 'volume'].map((key) => (
                    <th
                      key={key}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort(key)}
                    >
                      {key.toUpperCase()} {getSortIcon(key)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedTrades.map((trade, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.trade_code}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">${trade.high}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">${trade.low}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${trade.open}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${trade.close}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button onClick={loadMore} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Load More</button>
    </main>
  );
};

export default App
