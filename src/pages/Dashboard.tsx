import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  CreditCard, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  Bell,
  Settings,
  LogOut,
  Search,
  Filter,
  Download,
  Eye,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: "Total Revenue",
      value: "₹2,45,680",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Transactions",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: <CreditCard className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Active Users",
      value: "856",
      change: "+15.3%",
      trend: "up",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "-0.1%",
      trend: "down",
      icon: <Activity className="w-6 h-6 text-orange-600" />
    }
  ];

  const recentTransactions = [
    {
      id: "TXN001",
      type: "UPI Payment",
      amount: "₹1,250",
      status: "Success",
      time: "2 minutes ago",
      customer: "Rahul Sharma"
    },
    {
      id: "TXN002",
      type: "Bill Payment",
      amount: "₹850",
      status: "Success",
      time: "5 minutes ago",
      customer: "Priya Patel"
    },
    {
      id: "TXN003",
      type: "Money Transfer",
      amount: "₹5,000",
      status: "Pending",
      time: "8 minutes ago",
      customer: "Amit Kumar"
    },
    {
      id: "TXN004",
      type: "AePS Withdrawal",
      amount: "₹2,000",
      status: "Success",
      time: "12 minutes ago",
      customer: "Sunita Devi"
    },
    {
      id: "TXN005",
      type: "Insurance Payment",
      amount: "₹3,500",
      status: "Failed",
      time: "15 minutes ago",
      customer: "Vikash Singh"
    }
  ];

  const notifications = [
    {
      title: "New API Update Available",
      message: "Version 2.1.0 includes enhanced security features",
      time: "1 hour ago",
      type: "info"
    },
    {
      title: "Monthly Settlement Complete",
      message: "₹45,680 has been settled to your account",
      time: "3 hours ago",
      type: "success"
    },
    {
      title: "Security Alert",
      message: "New login detected from Mumbai",
      time: "5 hours ago",
      type: "warning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
        return 'text-emerald-600 bg-emerald-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome back, John!</h1>
            <p className="text-gray-600">Here's what's happening with your business today.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <button className="p-2 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-all">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className={`flex items-center space-x-1 ${
                  stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
                      <Search className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
                      <Filter className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Transaction
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentTransactions.map((transaction, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{transaction.id}</div>
                            <div className="text-sm text-gray-500">{transaction.type}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Notifications & Quick Actions */}
          <div className="space-y-6">
            {/* Notifications */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Notifications</h2>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 pl-4 py-2">
                    <h3 className="font-semibold text-gray-800 text-sm">{notification.title}</h3>
                    <p className="text-gray-600 text-xs mt-1">{notification.message}</p>
                    <p className="text-gray-400 text-xs mt-2">{notification.time}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all font-medium">
                  Process Payment
                </button>
                <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all font-medium">
                  Generate Report
                </button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all font-medium">
                  View Analytics
                </button>
                <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all font-medium">
                  API Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;