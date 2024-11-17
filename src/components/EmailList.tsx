import React from 'react';
import { Star } from 'lucide-react';

const emails = [
  {
    id: 1,
    sender: 'John Smith',
    subject: 'Project Update Meeting',
    preview: 'Hi team, I wanted to share the latest updates from our project meeting yesterday...',
    time: '10:30 AM',
    isStarred: true,
    isUnread: true,
  },
  {
    id: 2,
    sender: 'Sarah Johnson',
    subject: 'Client Presentation Review',
    preview: 'Please review the attached presentation for tomorrow\'s client meeting...',
    time: '9:15 AM',
    isStarred: false,
    isUnread: true,
  },
  {
    id: 3,
    sender: 'Marketing Team',
    subject: 'Q2 Campaign Results',
    preview: 'Here are the results from our Q2 marketing campaign...',
    time: 'Yesterday',
    isStarred: false,
    isUnread: false,
  },
];

function EmailList() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="divide-y divide-gray-200">
        {emails.map((email) => (
          <div
            key={email.id}
            className={`p-4 hover:bg-gray-50 cursor-pointer ${
              email.isUnread ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`font-medium ${email.isUnread ? 'text-gray-900' : 'text-gray-600'}`}>
                {email.sender}
              </span>
              <div className="flex items-center gap-3">
                <button className={`text-${email.isStarred ? 'yellow' : 'gray'}-400 hover:text-yellow-400`}>
                  <Star size={16} />
                </button>
                <span className="text-sm text-gray-500">{email.time}</span>
              </div>
            </div>
            <h3 className={`text-sm ${email.isUnread ? 'font-semibold' : 'font-medium'} text-gray-900`}>
              {email.subject}
            </h3>
            <p className="text-sm text-gray-500 truncate">{email.preview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmailList;