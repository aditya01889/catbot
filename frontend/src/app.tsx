import React from 'react';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('check-in');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              🐱 CatBot
            </h1>
            <nav className="flex space-x-4">
              <button className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                Settings
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['check-in', 'focus', 'ideas', 'breaks'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${activeTab === tab
                  ? 'border-primary-500 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab.split('-').join(' ')}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            {activeTab === 'check-in' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Good {new Date().getHours() < 12 ? 'morning' : 'afternoon'}! 😺
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  How's your creative journey going today?
                </p>
              </div>
            )}
            {activeTab === 'focus' && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Focus Mode
                </h2>
                <div className="text-6xl font-mono font-bold text-primary-600 dark:text-primary-400 my-8">
                  25:00
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <button className="btn btn-primary">
                    Start Focus Session
                  </button>
                </div>
              </div>
            )}
            {activeTab === 'ideas' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Content Ideas
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Generate fresh content ideas based on your niche.
                </p>
              </div>
            )}
            {activeTab === 'breaks' && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Time for a Break!
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Enjoy this cat meme while you take a breather.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 max-w-md mx-auto">
                  <div className="h-48 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Cat meme will appear here</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Made with ❤️ by CatBot Team
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
