import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { FriendsContext } from '../../FriendsContaxtData';

ChartJS.register(ArcElement, Tooltip);

const StatsPages = () => {
  const { collId } = useContext(FriendsContext);

  const total = collId.length;
  const callCount = collId.filter(item => item.type === 'Call').length;
  const textCount = collId.filter(item => item.type === 'Text').length;
  const videoCount = collId.filter(item => item.type === 'Video').length;

  const mostActive = () => {
    const max = Math.max(callCount, textCount, videoCount);
    if (max === 0) return 'No data';
    if (max === callCount) return 'Call';
    if (max === textCount) return 'Text';
    return 'Video';
  };

  const chartData = {
    labels: ['Text', 'Call', 'Video'],
    datasets: [
      {
        data: [textCount, callCount, videoCount],
        backgroundColor: ['#7F77DD', '#1D9E75', '#1F4E3D'],
        borderWidth: 6,
        borderColor: '#ffffff',
      },
    ],
  };

  const chartOptions = {
    cutout: '60%',
    plugins: { legend: { display: false } },
  };

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="w-10/12 mx-auto">
        <h1 className="text-3xl font-bold mb-8">Friendship Analytics</h1>

        {/* Donut Chart */}
        <div className="flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow inline-block mb-8">
            <p className="text-sm text-gray-400 mb-4">By Interaction Type</p>
            <div style={{ width: '200px', height: '200px' }}>
              <Doughnut data={chartData} options={chartOptions} />
            </div>
            <div className="flex gap-4 justify-center mt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ background: '#7F77DD' }}
                ></span>
                Text
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ background: '#1D9E75' }}
                ></span>
                Call
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ background: '#1F4E3D' }}
                ></span>
                Video
              </span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h1 className="text-3xl font-bold">{total}</h1>
            <p className="text-gray-500">Total Interactions</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h1 className="text-3xl font-bold text-orange-400">{callCount}</h1>
            <p className="text-gray-500">Calls</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h1 className="text-3xl font-bold text-gray-500">{textCount}</h1>
            <p className="text-gray-500">Texts</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h1 className="text-3xl font-bold text-blue-400">{videoCount}</h1>
            <p className="text-gray-500">Videos</p>
          </div>
        </div>

        {/* Most Active */}
        <div className="mt-10 bg-white p-6 rounded-2xl shadow text-center">
          <h1 className="text-xl font-semibold text-gray-500">
            Most Active Interaction
          </h1>
          <p className="text-3xl font-bold mt-2 text-green-600">
            {mostActive()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPages;
