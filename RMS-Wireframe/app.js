import React, { useState } from 'react';
import { 
  Train, Users, Clock, TrendingUp, Settings, 
  Bell, Search, BarChart2, MapPin, AlertTriangle 
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PassengerAnalytics = () => {
  // Mock data for passenger analytics
  const hourlyData = [
    { hour: '06:00', count: 245, avgDwell: 2.3 },
    { hour: '07:00', count: 890, avgDwell: 3.1 },
    { hour: '08:00', count: 1250, avgDwell: 4.2 },
    { hour: '09:00', count: 780, avgDwell: 2.8 },
    { hour: '10:00', count: 560, avgDwell: 2.1 },
    { hour: '11:00', count: 440, avgDwell: 1.9 },
  ];

  const platformData = [
    { platform: 'Platform 1', passengers: 3420, crowdingIndex: 85 },
    { platform: 'Platform 2', passengers: 2980, crowdingIndex: 72 },
    { platform: 'Platform 3', passengers: 3150, crowdingIndex: 78 },
    { platform: 'Platform 4', passengers: 2640, crowdingIndex: 65 },
  ];

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Passenger Analytics</h2>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last 7 Days</option>
            <option>This Month</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Export Report</button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Peak Hour Traffic</h3>
          <div className="mt-2">
            <p className="text-2xl font-bold">1,250</p>
            <p className="text-sm text-gray-500">Passengers (08:00-09:00)</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Average Dwell Time</h3>
          <div className="mt-2">
            <p className="text-2xl font-bold">2.7 mins</p>
            <p className="text-sm text-green-600">↓ 0.3 mins from yesterday</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Customer Satisfaction</h3>
          <div className="mt-2">
            <p className="text-2xl font-bold">92%</p>
            <p className="text-sm text-green-600">↑ 3% from last week</p>
          </div>
        </div>
      </div>

      {/* Hourly Traffic Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Hourly Passenger Traffic</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#2563eb" name="Passenger Count" />
              <Line type="monotone" dataKey="avgDwell" stroke="#dc2626" name="Avg. Dwell Time (mins)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Platform Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Platform Utilization</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="passengers" fill="#2563eb" name="Total Passengers" />
                <Bar dataKey="crowdingIndex" fill="#dc2626" name="Crowding Index" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Real-time Platform Status</h3>
          <div className="space-y-4">
            {platformData.map((platform) => (
              <div key={platform.platform} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{platform.platform}</span>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    platform.crowdingIndex > 80 ? 'bg-red-100 text-red-800' :
                    platform.crowdingIndex > 70 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {platform.crowdingIndex}% Capacity
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      platform.crowdingIndex > 80 ? 'bg-red-500' :
                      platform.crowdingIndex > 70 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${platform.crowdingIndex}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RailwayManagementSystem = () => {
  const [activePage, setActivePage] = useState('dashboard');
  
  // Mock data for demonstration
  const stationMetrics = {
    totalPassengers: 12458,
    avgDwellTime: '2.3 mins',
    platformUtilization: '78%',
    crowdingAlerts: 3
  };

  const recentAlerts = [
    { id: 1, type: 'Crowding', location: 'Platform 3', time: '2 mins ago' },
    { id: 2, type: 'Long Dwell Time', location: 'Platform 1', time: '5 mins ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Train className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold">Railway Management System</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">3</div>
            </div>
            <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen shadow-sm">
          <nav className="p-4">
            <div className="space-y-2">
              <button 
                className={`flex items-center space-x-2 w-full p-2 rounded hover:bg-blue-50 text-left ${
                  activePage === 'dashboard' ? 'bg-blue-50 text-blue-600' : ''
                }`}
                onClick={() => setActivePage(activePage === 'dashboard' ? 'analytics' : 'dashboard')}
              >
                <BarChart2 className="h-5 w-5" />
                <span>Dashboard</span>
              </button>
              
              <button className="flex items-center space-x-2 w-full p-2 rounded hover:bg-blue-50 text-left">
                <Users className="h-5 w-5" />
                <span>Passenger Analytics</span>
              </button>
              
              <button className="flex items-center space-x-2 w-full p-2 rounded hover:bg-blue-50 text-left">
                <Clock className="h-5 w-5" />
                <span>Real-time Monitoring</span>
              </button>
              
              <button className="flex items-center space-x-2 w-full p-2 rounded hover:bg-blue-50 text-left">
                <TrendingUp className="h-5 w-5" />
                <span>Reports & Analytics</span>
              </button>
              
              <button className="flex items-center space-x-2 w-full p-2 rounded hover:bg-blue-50 text-left">
                <MapPin className="h-5 w-5" />
                <span>Station Management</span>
              </button>
              
              <button className="flex items-center space-x-2 w-full p-2 rounded hover:bg-blue-50 text-left">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activePage === 'dashboard' ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Metrics Cards */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Total Passengers</h3>
                  <p className="text-2xl font-bold mt-2">{stationMetrics.totalPassengers}</p>
                  <div className="mt-2 text-green-600 text-sm">↑ 12% from yesterday</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Average Dwell Time</h3>
                  <p className="text-2xl font-bold mt-2">{stationMetrics.avgDwellTime}</p>
                  <div className="mt-2 text-red-600 text-sm">↑ 0.3 mins above target</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Platform Utilization</h3>
                  <p className="text-2xl font-bold mt-2">{stationMetrics.platformUtilization}</p>
                  <div className="mt-2 text-green-600 text-sm">On target</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Crowding Alerts</h3>
                  <p className="text-2xl font-bold mt-2">{stationMetrics.crowdingAlerts}</p>
                  <div className="mt-2 text-yellow-600 text-sm">Requires attention</div>
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="mt-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
                  <div className="space-y-4">
                    {recentAlerts.map(alert => (
                      <div key={alert.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center space-x-3">
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                          <div>
                            <p className="font-medium">{alert.type}</p>
                            <p className="text-sm text-gray-500">{alert.location}</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{alert.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Passenger Flow Chart Placeholder */}
              <div className="mt-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">Passenger Flow Analysis</h2>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Passenger flow visualization would appear here</p>
                  </div>
                </div>
              </div>
            </div>
          ) : activePage === 'analytics' ? (
            <PassengerAnalytics />
          ) : null}
        </main>
      </div>
    </div>
  );
};

export default RailwayManagementSystem;
