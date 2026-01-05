/**
 * Home 頁面
 * 設計理念：和風優雅時間軸，展示 12 天日本自由行行程
 */

import { useState } from 'react';
import TimelineCard from '@/components/TimelineCard';
import StatsCard from '@/components/StatsCard';
import ImageCard from '@/components/ImageCard';
import { itinerary, stats } from '@/data/itinerary';
import { MapPin, Calendar } from 'lucide-react';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#f5f1de]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
              202311 日本自由行
            </h1>
            <p className="text-xl text-[#e8e3d6] mb-6">
              一場跨越 12 天的關西冒險之旅
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>2023/11/05 - 2023/11/16</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>京都、大阪、神戶、琵琶湖、奈良</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-16">
        {/* Stats section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold font-serif text-[#1a3a52] mb-8">旅遊概覽</h2>
          <StatsCard
            totalDays={stats.totalDays}
            totalCost={stats.totalCost}
            regions={stats.regions}
            companions={stats.companions}
          />
        </section>

        {/* Featured images section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold font-serif text-[#1a3a52] mb-8">精選景點</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImageCard
              src="/images/hero-kansai.jpg"
              alt="關西風景"
              title="關西古都風情"
              description="京都、大阪、神戶的傳統與現代融合"
            />
            <ImageCard
              src="/images/kyoto-street.jpg"
              alt="京都街道"
              title="京都傳統街道"
              description="白牆黑瓦的傳統木造建築"
            />
            <ImageCard
              src="/images/biwa-lake.jpg"
              alt="琵琶湖"
              title="琵琶湖自行車之旅"
              description="日本最大淡水湖的秋日風景"
            />
          </div>
        </section>

        {/* Highlights section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold font-serif text-[#1a3a52] mb-8">旅遊亮點</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border-l-4 border-[#f4a6d3] shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8bc34a] mt-2 flex-shrink-0" />
                  <p className="text-[#6b6b6b]">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold font-serif text-[#1a3a52] mb-12">每日行程</h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1a3a52] via-[#8bc34a] to-[#f4a6d3] opacity-30" />

            {/* Timeline cards */}
            <div className="pl-12">
              {itinerary.map((day, idx) => (
                <TimelineCard
                  key={day.day}
                  day={day}
                  isLeft={idx % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer message */}
        <section className="text-center py-12 border-t border-[#d4cec1] mt-20">
          <h3 className="text-2xl font-serif font-bold text-[#1a3a52] mb-4">
            完成 12 天的精彩冒險
          </h3>
          <p className="text-[#999999] max-w-2xl mx-auto">
            這次日本自由行充滿了驚喜與美好的回憶。從京都的古都風情到神戶的港灣夜景，
            從琵琶湖的自行車騎行到奈良的梅花鹿互動，每一刻都值得珍藏。
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a3a52] text-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-[#e8e3d6]">
          <p>202311 日本自由行互動式行程表 © 2023</p>
          <p className="mt-2">使用 React + Tailwind CSS 建立</p>
        </div>
      </footer>
    </div>
  );
}
