/**
 * TimelineCard 元件
 * 設計理念：和風優雅，展示每日行程的卡片
 */

import { ChevronDown, MapPin, Clock, UtensilsCrossed, Bed, ShoppingBag, Activity, Bus } from 'lucide-react';
import { useState } from 'react';
import { DayItinerary, Activity as ActivityType } from '@/data/itinerary';

interface TimelineCardProps {
  day: DayItinerary;
  isLeft?: boolean;
}

const categoryIcons = {
  transport: Bus,
  sightseeing: MapPin,
  meal: UtensilsCrossed,
  accommodation: Bed,
  shopping: ShoppingBag,
  activity: Activity,
};

const categoryColors = {
  transport: 'text-blue-600',
  sightseeing: 'text-red-600',
  meal: 'text-orange-600',
  accommodation: 'text-purple-600',
  shopping: 'text-pink-600',
  activity: 'text-green-600',
};

const categoryLabels = {
  transport: '交通',
  sightseeing: '景點',
  meal: '餐飲',
  accommodation: '住宿',
  shopping: '購物',
  activity: '活動',
};

export default function TimelineCard({ day, isLeft = false }: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex items-start gap-8 mb-12 ${isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-[#1a3a52] border-4 border-[#f5f1de] shadow-md hover:scale-125 transition-transform cursor-pointer" />
        <div className="w-1 h-24 bg-gradient-to-b from-[#1a3a52] to-[#8bc34a] opacity-50" />
      </div>

      {/* Card content */}
      <div className="flex-1 max-w-sm">
        <div
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer border border-[#d4cec1]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Card header */}
          <div className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold font-serif mb-1">Day {day.day}</h3>
                <p className="text-sm opacity-90">{day.date} ({day.dayOfWeek})</p>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </div>
          </div>

          {/* Card theme */}
          <div className="px-6 py-4 border-b border-[#d4cec1] bg-[#f5f1de]">
            <h4 className="text-lg font-semibold text-[#1a3a52] font-serif">{day.theme}</h4>
          </div>

          {/* Card highlights */}
          <div className="px-6 py-4 border-b border-[#d4cec1]">
            <div className="flex flex-wrap gap-2">
              {day.highlights.slice(0, 2).map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-block text-xs bg-[#f4a6d3] text-white px-3 py-1 rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable content */}
          {isExpanded && (
            <div className="px-6 py-4 space-y-4 animate-in fade-in duration-300">
              {/* Activities */}
              <div>
                <h5 className="font-semibold text-[#1a3a52] mb-3 font-serif">行程安排</h5>
                <div className="space-y-3">
                  {day.activities.map((activity) => {
                    const IconComponent = categoryIcons[activity.category];
                    return (
                      <div key={activity.id} className="flex gap-3 text-sm">
                        <div className="flex-shrink-0 mt-1">
                          <IconComponent className={`w-4 h-4 ${categoryColors[activity.category]}`} />
                        </div>
                        <div className="flex-1">
                          {activity.time && (
                            <p className="text-xs text-[#999999] flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {activity.time}
                            </p>
                          )}
                          <p className="font-medium text-[#6b6b6b]">{activity.title}</p>
                          <p className="text-xs text-[#999999]">{activity.description}</p>
                          {activity.location && (
                            <p className="text-xs text-[#8bc34a] flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {activity.location}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Accommodation */}
              <div className="pt-4 border-t border-[#d4cec1]">
                <h5 className="font-semibold text-[#1a3a52] mb-2 font-serif flex items-center gap-2">
                  <Bed className="w-4 h-4" />
                  住宿
                </h5>
                <p className="text-sm text-[#6b6b6b]">{day.accommodation.name}</p>
                <p className="text-xs text-[#999999]">{day.accommodation.location}</p>
              </div>
            </div>
          )}

          {/* Collapsed preview */}
          {!isExpanded && (
            <div className="px-6 py-3 text-xs text-[#999999] border-t border-[#d4cec1] bg-[#fafaf8]">
              {day.activities.length} 個活動 • 點擊展開詳情
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
