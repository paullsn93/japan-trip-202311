/**
 * StatsCard 元件
 * 設計理念：展示旅遊統計資訊
 */

import { Calendar, MapPin, Users, Zap } from 'lucide-react';

interface StatsCardProps {
  totalDays: number;
  totalCost: number;
  regions: string[];
  companions: string[];
}

export default function StatsCard({ totalDays, totalCost, regions, companions }: StatsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {/* Days */}
      <div className="bg-white rounded-lg p-6 border border-[#d4cec1] shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <Calendar className="w-5 h-5 text-[#1a3a52]" />
          <h3 className="text-sm font-semibold text-[#999999]">旅遊天數</h3>
        </div>
        <p className="text-3xl font-bold text-[#1a3a52] font-serif">{totalDays}</p>
        <p className="text-xs text-[#999999] mt-2">天的精彩冒險</p>
      </div>

      {/* Cost */}
      <div className="bg-white rounded-lg p-6 border border-[#d4cec1] shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="w-5 h-5 text-[#f4a6d3]" />
          <h3 className="text-sm font-semibold text-[#999999]">總費用</h3>
        </div>
        <p className="text-3xl font-bold text-[#1a3a52] font-serif">
          NT${(totalCost / 1000).toFixed(1)}K
        </p>
        <p className="text-xs text-[#999999] mt-2">人均費用</p>
      </div>

      {/* Regions */}
      <div className="bg-white rounded-lg p-6 border border-[#d4cec1] shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <MapPin className="w-5 h-5 text-[#8bc34a]" />
          <h3 className="text-sm font-semibold text-[#999999]">造訪地區</h3>
        </div>
        <p className="text-3xl font-bold text-[#1a3a52] font-serif">{regions.length}</p>
        <p className="text-xs text-[#999999] mt-2 line-clamp-2">{regions.join('、')}</p>
      </div>

      {/* Companions */}
      <div className="bg-white rounded-lg p-6 border border-[#d4cec1] shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <Users className="w-5 h-5 text-[#2d5a7b]" />
          <h3 className="text-sm font-semibold text-[#999999]">同行者</h3>
        </div>
        <p className="text-3xl font-bold text-[#1a3a52] font-serif">{companions.length}</p>
        <p className="text-xs text-[#999999] mt-2">{companions.join('、')}</p>
      </div>
    </div>
  );
}
