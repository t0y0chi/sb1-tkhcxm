import React from 'react';
import { Mail, Send, Inbox, Star, Clock, AlertCircle, Plus } from 'lucide-react';
import Sidebar from './components/Sidebar';
import EmailComposer from './components/EmailComposer';
import EmailList from './components/EmailList';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">AI Mail</h1>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Plus size={20} />
              <span>New Message</span>
            </button>
          </div>
        </header>
        
        <main className="flex-1 flex overflow-hidden">
          <EmailList />
          <EmailComposer />
        </main>
      </div>
    </div>
  );
}

export default App;