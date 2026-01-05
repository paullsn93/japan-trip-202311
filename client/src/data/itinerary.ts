/**
 * 202311 日本自由行行程資料
 * 設計理念：和風優雅，時間軸展示，互動卡片
 */

export interface Activity {
  id: string;
  time?: string;
  title: string;
  description: string;
  location?: string;
  category: 'transport' | 'sightseeing' | 'meal' | 'accommodation' | 'shopping' | 'activity';
}

export interface DayItinerary {
  day: number;
  date: string;
  dayOfWeek: string;
  theme: string;
  activities: Activity[];
  accommodation: {
    name: string;
    location: string;
  };
  highlights: string[];
}

export const itinerary: DayItinerary[] = [
  {
    day: 1,
    date: '2023/11/05',
    dayOfWeek: '日',
    theme: '啟程至關西',
    activities: [
      {
        id: 'day1-1',
        time: '06:20',
        title: '搭 Uber 至捷運後驛站',
        description: '從高雄出發，搭乘 Uber 至捷運後驛站',
        location: '高雄',
        category: 'transport'
      },
      {
        id: 'day1-2',
        time: '08:00',
        title: '搭虎航班機至關西機場',
        description: '虎航班機 IT201，前往日本關西國際機場',
        location: '高雄小港機場 → 關西國際機場',
        category: 'transport'
      },
      {
        id: 'day1-3',
        time: '14:00',
        title: '抵達關西國際機場',
        description: '辦理出關手續，已事先登記 Visit Japan',
        location: '關西國際機場',
        category: 'transport'
      },
      {
        id: 'day1-4',
        time: '15:00',
        title: '購買交通票券與 Icoca 卡',
        description: '購買關西周遊券、Icoca 卡儲值 5000 日幣',
        location: '關西國際機場',
        category: 'shopping'
      },
      {
        id: 'day1-5',
        time: '16:30',
        title: '搭利木津巴士至京都',
        description: '搭乘利木津巴士前往京都市區',
        location: '關西國際機場 → 京都',
        category: 'transport'
      },
      {
        id: 'day1-6',
        time: '19:00',
        title: '入住京都城市花園飯店',
        description: '辦理入住，休息調整時差',
        location: '京都',
        category: 'accommodation'
      }
    ],
    accommodation: {
      name: '京都城市花園飯店 (KYOTO CITY GARDENS HOTEL)',
      location: '京都'
    },
    highlights: ['首次出國自由行', '順利抵達日本', '準備開始冒險']
  },
  {
    day: 2,
    date: '2023/11/06',
    dayOfWeek: '一',
    theme: '京都古都漫步',
    activities: [
      {
        id: 'day2-1',
        time: '08:00',
        title: '早餐',
        description: '在飯店享用早餐',
        location: '京都城市花園飯店',
        category: 'meal'
      },
      {
        id: 'day2-2',
        time: '09:30',
        title: '清水寺參拜',
        description: '世界文化遺產，俯瞰京都市景',
        location: '京都清水寺',
        category: 'sightseeing'
      },
      {
        id: 'day2-3',
        time: '11:30',
        title: '二年坂、三年坂散步',
        description: '傳統木造建築街道，購物與品嚐小食',
        location: '京都二年坂、三年坂',
        category: 'activity'
      },
      {
        id: 'day2-4',
        time: '13:00',
        title: '午餐',
        description: '在傳統街道享用京都料理',
        location: '京都',
        category: 'meal'
      },
      {
        id: 'day2-5',
        time: '14:30',
        title: '伏見稻荷大社',
        description: '千鳥居壯觀景象，日本最古老的稻荷神社',
        location: '京都伏見稻荷大社',
        category: 'sightseeing'
      },
      {
        id: 'day2-6',
        time: '17:00',
        title: '鴨川散步',
        description: '沿著鴨川漫步，尋找晚餐地點',
        location: '京都鴨川',
        category: 'activity'
      },
      {
        id: 'day2-7',
        time: '18:30',
        title: '晚餐',
        description: '在鴨川附近享用晚餐',
        location: '京都',
        category: 'meal'
      }
    ],
    accommodation: {
      name: '京都城市花園飯店 (KYOTO CITY GARDENS HOTEL)',
      location: '京都'
    },
    highlights: ['世界文化遺產清水寺', '千鳥居壯觀景象', '傳統京都風情']
  },
  {
    day: 3,
    date: '2023/11/07',
    dayOfWeek: '二',
    theme: '琵琶湖自行車之旅',
    activities: [
      {
        id: 'day3-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '京都',
        category: 'meal'
      },
      {
        id: 'day3-2',
        time: '09:00',
        title: '前往琵琶湖',
        description: '搭乘電車前往琵琶湖地區',
        location: '京都 → 琵琶湖',
        category: 'transport'
      },
      {
        id: 'day3-3',
        time: '11:00',
        title: '琵琶湖自行車環湖',
        description: '租借自行車，沿著琵琶湖騎行',
        location: '琵琶湖',
        category: 'activity'
      },
      {
        id: 'day3-4',
        time: '13:00',
        title: '午餐',
        description: '琵琶湖附近用餐',
        location: '琵琶湖',
        category: 'meal'
      },
      {
        id: 'day3-5',
        time: '14:30',
        title: '繼續騎行',
        description: '探索琵琶湖沿岸風景',
        location: '琵琶湖',
        category: 'activity'
      },
      {
        id: 'day3-6',
        time: '17:00',
        title: '返回住宿地點',
        description: '搭乘電車返回',
        location: '琵琶湖 → 大津',
        category: 'transport'
      },
      {
        id: 'day3-7',
        time: '18:30',
        title: '晚餐',
        description: '在飯店享用晚餐',
        location: '大津',
        category: 'meal'
      }
    ],
    accommodation: {
      name: 'レイアホテル 大津石山 (le Lac HOTEL Otsu Ishiyama)',
      location: '大津'
    },
    highlights: ['琵琶湖自行車騎行', '湖畔風景', '日本最大淡水湖']
  },
  {
    day: 4,
    date: '2023/11/08',
    dayOfWeek: '三',
    theme: '奈良古都探訪',
    activities: [
      {
        id: 'day4-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '大津',
        category: 'meal'
      },
      {
        id: 'day4-2',
        time: '09:00',
        title: '前往奈良',
        description: '搭乘近鐵電車前往奈良',
        location: '大津 → 奈良',
        category: 'transport'
      },
      {
        id: 'day4-3',
        time: '10:30',
        title: '奈良公園',
        description: '與梅花鹿互動，探索古都風情',
        location: '奈良公園',
        category: 'sightseeing'
      },
      {
        id: 'day4-4',
        time: '12:00',
        title: '午餐',
        description: '奈良特色料理',
        location: '奈良',
        category: 'meal'
      },
      {
        id: 'day4-5',
        time: '13:30',
        title: '東大寺參拜',
        description: '世界最大木造建築，大佛震撼',
        location: '奈良東大寺',
        category: 'sightseeing'
      },
      {
        id: 'day4-6',
        time: '15:30',
        title: '春日大社',
        description: '古老神社，紅色燈籠點綴',
        location: '奈良春日大社',
        category: 'sightseeing'
      },
      {
        id: 'day4-7',
        time: '17:00',
        title: '返回大阪',
        description: '搭乘電車返回大阪',
        location: '奈良 → 大阪',
        category: 'transport'
      },
      {
        id: 'day4-8',
        time: '18:30',
        title: '晚餐',
        description: '大阪特色美食',
        location: '大阪',
        category: 'meal'
      }
    ],
    accommodation: {
      name: 'APA Hotel & Resort Midosuji Honmachi-Eki Tower (大阪)',
      location: '大阪'
    },
    highlights: ['奈良梅花鹿互動', '東大寺大佛', '春日大社古韻']
  },
  {
    day: 5,
    date: '2023/11/09',
    dayOfWeek: '四',
    theme: '大阪城與周遊卡',
    activities: [
      {
        id: 'day5-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '大阪',
        category: 'meal'
      },
      {
        id: 'day5-2',
        time: '09:00',
        title: '大阪周遊卡一日遊',
        description: '使用周遊卡免費進入多個景點',
        location: '大阪',
        category: 'activity'
      },
      {
        id: 'day5-3',
        time: '10:00',
        title: '大阪城參觀',
        description: '日本三大名城，壯觀的天守閣',
        location: '大阪城',
        category: 'sightseeing'
      },
      {
        id: 'day5-4',
        time: '12:00',
        title: '午餐',
        description: '大阪章魚燒、炒麵等特色美食',
        location: '大阪',
        category: 'meal'
      },
      {
        id: 'day5-5',
        time: '13:30',
        title: '大阪城公園散步',
        description: '欣賞秋日楓葉',
        location: '大阪城公園',
        category: 'activity'
      },
      {
        id: 'day5-6',
        time: '15:00',
        title: '免費景點探訪',
        description: '利用周遊卡參訪其他免費景點',
        location: '大阪',
        category: 'sightseeing'
      },
      {
        id: 'day5-7',
        time: '17:30',
        title: '晚餐',
        description: '大阪美食街用餐',
        location: '大阪',
        category: 'meal'
      }
    ],
    accommodation: {
      name: 'APA Hotel & Resort Midosuji Honmachi-Eki Tower (大阪)',
      location: '大阪'
    },
    highlights: ['大阪城天守閣', '周遊卡優惠', '大阪特色美食']
  },
  {
    day: 6,
    date: '2023/11/10',
    dayOfWeek: '五',
    theme: '京都嵐山與貴船',
    activities: [
      {
        id: 'day6-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '大阪',
        category: 'meal'
      },
      {
        id: 'day6-2',
        time: '09:00',
        title: '返回京都',
        description: '搭乘電車返回京都',
        location: '大阪 → 京都',
        category: 'transport'
      },
      {
        id: 'day6-3',
        time: '10:30',
        title: '嵐山一日遊',
        description: '竹林步道、渡月橋、天龍寺',
        location: '京都嵐山',
        category: 'sightseeing'
      },
      {
        id: 'day6-4',
        time: '12:30',
        title: '午餐',
        description: '嵐山特色料理',
        location: '京都嵐山',
        category: 'meal'
      },
      {
        id: 'day6-5',
        time: '14:00',
        title: '竹林漫步',
        description: '著名的竹林步道，寧靜致遠',
        location: '京都嵐山竹林',
        category: 'activity'
      },
      {
        id: 'day6-6',
        time: '15:30',
        title: '前往貴船',
        description: '搭乘電車前往貴船神社',
        location: '京都 → 貴船',
        category: 'transport'
      },
      {
        id: 'day6-7',
        time: '16:30',
        title: '貴船神社參拜',
        description: '山林中的古老神社，紅色燈籠點綴',
        location: '京都貴船神社',
        category: 'sightseeing'
      },
      {
        id: 'day6-8',
        time: '18:00',
        title: '晚餐',
        description: '貴船特色懷石料理',
        location: '京都貴船',
        category: 'meal'
      }
    ],
    accommodation: {
      name: '京都城市花園飯店 (KYOTO CITY GARDENS HOTEL)',
      location: '京都'
    },
    highlights: ['嵐山竹林步道', '渡月橋夜景', '貴船神社紅燈籠']
  },
  {
    day: 7,
    date: '2023/11/11',
    dayOfWeek: '六',
    theme: '比叡山與鞍馬寺',
    activities: [
      {
        id: 'day7-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '京都',
        category: 'meal'
      },
      {
        id: 'day7-2',
        time: '09:00',
        title: '前往比叡山',
        description: '搭乘纜車上山',
        location: '京都 → 比叡山',
        category: 'transport'
      },
      {
        id: 'day7-3',
        time: '10:30',
        title: '比叡山寺院參訪',
        description: '古老的佛教聖地，俯瞰京都全景',
        location: '比叡山',
        category: 'sightseeing'
      },
      {
        id: 'day7-4',
        time: '12:00',
        title: '午餐',
        description: '山上素食料理',
        location: '比叡山',
        category: 'meal'
      },
      {
        id: 'day7-5',
        time: '13:30',
        title: '山林散步',
        description: '探索比叡山自然風景',
        location: '比叡山',
        category: 'activity'
      },
      {
        id: 'day7-6',
        time: '15:30',
        title: '前往鞍馬寺',
        description: '搭乘纜車與電車前往鞍馬',
        location: '比叡山 → 鞍馬',
        category: 'transport'
      },
      {
        id: 'day7-7',
        time: '16:30',
        title: '鞍馬寺與貴船神社',
        description: '山林中的古老寺院與神社',
        location: '京都鞍馬寺',
        category: 'sightseeing'
      },
      {
        id: 'day7-8',
        time: '18:00',
        title: '晚餐',
        description: '京都料理',
        location: '京都',
        category: 'meal'
      }
    ],
    accommodation: {
      name: '京都城市花園飯店 (KYOTO CITY GARDENS HOTEL)',
      location: '京都'
    },
    highlights: ['比叡山佛教聖地', '山頂京都全景', '鞍馬寺山林步道']
  },
  {
    day: 8,
    date: '2023/11/12',
    dayOfWeek: '日',
    theme: '京都單車之旅',
    activities: [
      {
        id: 'day8-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '京都',
        category: 'meal'
      },
      {
        id: 'day8-2',
        time: '09:00',
        title: '租借自行車',
        description: '在京都租借自行車，開始單車之旅',
        location: '京都',
        category: 'activity'
      },
      {
        id: 'day8-3',
        time: '09:30',
        title: '京都單車路線',
        description: '騎行經過多個景點，欣賞京都風景',
        location: '京都',
        category: 'activity'
      },
      {
        id: 'day8-4',
        time: '12:00',
        title: '午餐',
        description: '在騎行途中用餐',
        location: '京都',
        category: 'meal'
      },
      {
        id: 'day8-5',
        time: '13:30',
        title: '繼續騎行',
        description: '探索京都隱藏景點',
        location: '京都',
        category: 'activity'
      },
      {
        id: 'day8-6',
        time: '16:00',
        title: '歸還自行車',
        description: '返回租借點',
        location: '京都',
        category: 'activity'
      },
      {
        id: 'day8-7',
        time: '17:00',
        title: '晚餐',
        description: '京都美食',
        location: '京都',
        category: 'meal'
      }
    ],
    accommodation: {
      name: '京都城市花園飯店 (KYOTO CITY GARDENS HOTEL)',
      location: '京都'
    },
    highlights: ['京都單車騎行', '隱藏景點探訪', '自由漫遊京都']
  },
  {
    day: 9,
    date: '2023/11/13',
    dayOfWeek: '一',
    theme: '近江八幡與琵琶湖',
    activities: [
      {
        id: 'day9-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '京都',
        category: 'meal'
      },
      {
        id: 'day9-2',
        time: '09:00',
        title: '前往近江八幡',
        description: '搭乘電車前往近江八幡',
        location: '京都 → 近江八幡',
        category: 'transport'
      },
      {
        id: 'day9-3',
        time: '10:30',
        title: '近江八幡古鎮',
        description: '傳統水鄉古鎮，白牆黑瓦建築',
        location: '近江八幡',
        category: 'sightseeing'
      },
      {
        id: 'day9-4',
        time: '12:00',
        title: '午餐',
        description: '近江牛料理',
        location: '近江八幡',
        category: 'meal'
      },
      {
        id: 'day9-5',
        time: '13:30',
        title: '佐川美術館',
        description: '現代藝術美術館，琵琶湖畔建築',
        location: '近江八幡佐川美術館',
        category: 'sightseeing'
      },
      {
        id: 'day9-6',
        time: '15:30',
        title: '琵琶湖遊船',
        description: '乘船遊覽琵琶湖風景',
        location: '琵琶湖',
        category: 'activity'
      },
      {
        id: 'day9-7',
        time: '17:00',
        title: '返回大阪',
        description: '搭乘電車返回大阪',
        location: '近江八幡 → 大阪',
        category: 'transport'
      },
      {
        id: 'day9-8',
        time: '18:30',
        title: '晚餐',
        description: '大阪美食',
        location: '大阪',
        category: 'meal'
      }
    ],
    accommodation: {
      name: 'APA Hotel & Resort Midosuji Honmachi-Eki Tower (大阪)',
      location: '大阪'
    },
    highlights: ['近江八幡古鎮', '佐川美術館', '琵琶湖遊船']
  },
  {
    day: 10,
    date: '2023/11/14',
    dayOfWeek: '二',
    theme: '神戶港灣探訪',
    activities: [
      {
        id: 'day10-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '大阪',
        category: 'meal'
      },
      {
        id: 'day10-2',
        time: '09:00',
        title: '前往神戶',
        description: '搭乘電車前往神戶',
        location: '大阪 → 神戶',
        category: 'transport'
      },
      {
        id: 'day10-3',
        time: '10:30',
        title: '神戶港灣散步',
        description: '欣賞神戶港美景',
        location: '神戶港',
        category: 'activity'
      },
      {
        id: 'day10-4',
        time: '12:00',
        title: '午餐',
        description: '神戶牛排',
        location: '神戶',
        category: 'meal'
      },
      {
        id: 'day10-5',
        time: '13:30',
        title: 'MOSAIC 摩天輪',
        description: '乘坐摩天輪，俯瞰神戶港夜景',
        location: '神戶 MOSAIC',
        category: 'activity'
      },
      {
        id: 'day10-6',
        time: '15:00',
        title: 'MOSAIC 商場',
        description: '購物與逛街',
        location: '神戶 MOSAIC',
        category: 'shopping'
      },
      {
        id: 'day10-7',
        time: '17:00',
        title: '有馬溫泉',
        description: '前往有馬溫泉，享受溫泉',
        location: '神戶有馬溫泉',
        category: 'activity'
      },
      {
        id: 'day10-8',
        time: '18:30',
        title: '晚餐',
        description: '溫泉旅館懷石料理',
        location: '有馬溫泉',
        category: 'meal'
      }
    ],
    accommodation: {
      name: '神戶三宮聯盟飯店 (Kobe Sannomiya Union Hotel)',
      location: '神戶'
    },
    highlights: ['神戶港灣夜景', '摩天輪體驗', '有馬溫泉享受']
  },
  {
    day: 11,
    date: '2023/11/15',
    dayOfWeek: '三',
    theme: '安土城與琵琶湖',
    activities: [
      {
        id: 'day11-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '神戶',
        category: 'meal'
      },
      {
        id: 'day11-2',
        time: '09:00',
        title: '前往安土',
        description: '搭乘電車前往安土',
        location: '神戶 → 安土',
        category: 'transport'
      },
      {
        id: 'day11-3',
        time: '10:30',
        title: '安土城遺跡',
        description: '日本戰國時期的著名城堡遺跡',
        location: '安土城',
        category: 'sightseeing'
      },
      {
        id: 'day11-4',
        time: '12:00',
        title: '午餐',
        description: '安土地方料理',
        location: '安土',
        category: 'meal'
      },
      {
        id: 'day11-5',
        time: '13:30',
        title: '租借自行車',
        description: '租借自行車，騎行琵琶湖畔',
        location: '安土',
        category: 'activity'
      },
      {
        id: 'day11-6',
        time: '14:00',
        title: '琵琶湖自行車道',
        description: '沿著琵琶湖騎行，欣賞湖畔風景',
        location: '琵琶湖',
        category: 'activity'
      },
      {
        id: 'day11-7',
        time: '16:30',
        title: '返回京都',
        description: '搭乘電車返回京都',
        location: '安土 → 京都',
        category: 'transport'
      },
      {
        id: 'day11-8',
        time: '18:00',
        title: '晚餐',
        description: '京都美食',
        location: '京都',
        category: 'meal'
      }
    ],
    accommodation: {
      name: '京都城市花園飯店 (KYOTO CITY GARDENS HOTEL)',
      location: '京都'
    },
    highlights: ['安土城歷史遺跡', '琵琶湖自行車騎行', '戰國時期探訪']
  },
  {
    day: 12,
    date: '2023/11/16',
    dayOfWeek: '四',
    theme: '返回台灣',
    activities: [
      {
        id: 'day12-1',
        time: '08:00',
        title: '早餐',
        description: '飯店早餐',
        location: '京都',
        category: 'meal'
      },
      {
        id: 'day12-2',
        time: '09:00',
        title: '前往關西機場',
        description: '搭乘利木津巴士前往關西機場',
        location: '京都 → 關西機場',
        category: 'transport'
      },
      {
        id: 'day12-3',
        time: '11:00',
        title: '辦理登機手續',
        description: '抵達機場，辦理登機手續',
        location: '關西機場',
        category: 'transport'
      },
      {
        id: 'day12-4',
        time: '12:00',
        title: '機場午餐',
        description: '在機場享用午餐',
        location: '關西機場',
        category: 'meal'
      },
      {
        id: 'day12-5',
        time: '13:00',
        title: '搭乘虎航班機',
        description: '虎航班機 IT202，返回台灣',
        location: '關西機場 → 高雄小港機場',
        category: 'transport'
      },
      {
        id: 'day12-6',
        time: '18:00',
        title: '抵達高雄',
        description: '順利返回台灣，結束 12 天的日本自由行',
        location: '高雄小港機場',
        category: 'transport'
      }
    ],
    accommodation: {
      name: '返回台灣',
      location: '高雄'
    },
    highlights: ['完成 12 天自由行', '滿載回憶與收穫', '期待下次冒險']
  }
];

export const stats = {
  totalDays: 12,
  totalCost: 98220,
  startDate: '2023/11/05',
  endDate: '2023/11/16',
  companions: ['Paul', 'Lsn'],
  regions: ['京都', '大阪', '神戶', '琵琶湖', '奈良', '近江八幡'],
  highlights: [
    '世界文化遺產清水寺',
    '千鳥居壯觀景象',
    '琵琶湖自行車騎行',
    '奈良梅花鹿互動',
    '嵐山竹林步道',
    '神戶港灣夜景'
  ]
};
