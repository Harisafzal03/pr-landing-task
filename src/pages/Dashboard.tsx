import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from "../assets/logo";
import MyTasks from '../components/MyTasks';
import UsersList from '../components/UsersList';

const Dashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'tasks' | 'users'>('tasks');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console. error('Failed to log out', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Dashboard Title */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center hover:opacity-80 transition-opacity"
                aria-label="Go to home page"
              >
                <Logo />
              </button>
              <div className="h-8 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>

            {/* Right side - User info and Logout */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-gray-900 font-bold text-sm">
                  {currentUser?.email?. charAt(0).toUpperCase()}
                </div>
                <span className="text-gray-700 text-sm hidden sm:inline">
                  {currentUser?.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('tasks')}
              className={`${
                activeTab === 'tasks'
                  ?  'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              My Tasks
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`${
                activeTab === 'users'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              Users
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'tasks' && <MyTasks />}
        {activeTab === 'users' && <UsersList />}
      </div>
    </div>
  );
};

export default Dashboard;