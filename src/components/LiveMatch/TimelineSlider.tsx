import React, { useState } from 'react';
import { Circle } from 'lucide-react';

const keyEvents = [
  { over: '10.2', type: 'wicket', description: 'Rohit Sharma b Starc 45(36)' },
  { over: '25.4', type: 'six', description: 'Kohli hits a massive six over long-on' },
  { over: '35.1', type: 'wicket', description: 'Shreyas Iyer c Carey b Cummins 28(24)' }
];

export default function TimelineSlider() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Key Events
      </h3>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-6">
          {keyEvents.map((event, index) => (
            <div
              key={index}
              className={`relative pl-8 cursor-pointer transition-colors ${
                selectedEvent === index
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 -mx-6 px-14 py-3 rounded-lg'
                  : ''
              }`}
              onClick={() => setSelectedEvent(index)}
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <Circle
                  className={`w-4 h-4 ${
                    event.type === 'wicket'
                      ? 'text-red-500'
                      : event.type === 'six'
                      ? 'text-green-500'
                      : 'text-gray-400'
                  }`}
                  fill="currentColor"
                />
              </div>

              <div className="flex items-start gap-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {event.over}
                </span>
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {event.type.toUpperCase()}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}