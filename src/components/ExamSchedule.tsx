import React, { useState, useEffect } from 'react';
import { Calendar, Clock, BookOpen, Users, ChevronRight, Timer, Bell } from 'lucide-react';

interface ExamEvent {
  id: number;
  date: Date;
  day: string;
  title: string;
  description: string;
  parts: string[];
  category: string;
  color: string;
}

interface ExamScheduleProps {
  isDarkMode?: boolean;
}

export const ExamSchedule: React.FC<ExamScheduleProps> = ({ isDarkMode = false }) => {
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({});

  // حساب التواريخ بناءً على الجمعة القادمة
  const getNextFriday = () => {
    const today = new Date();
    // Set to a specific date in 2025 for the competition
    const nextFriday = new Date('2025-02-14'); // Friday, February 14, 2025
    return nextFriday;
  };

  // تحويل التاريخ الميلادي إلى هجري (تقريبي)
  const getCorrespondingDates = (baseDate: Date, dayOffset: number = 0) => {
    const targetDate = new Date(baseDate);
    targetDate.setDate(baseDate.getDate() + dayOffset);
    
    // التواريخ الهجرية المحددة مسبقاً
    const hijriDates = [
      'الجمعة، ١٦ رجب ١٤٤٦ هـ',
      'السبت، ١٧ رجب ١٤٤٦ هـ', 
      'الجمعة، ٢٣ رجب ١٤٤٦ هـ',
      'السبت، ٢٤ رجب ١٤٤٦ هـ'
    ];
    
    // التواريخ الميلادية المقابلة
    const gregorianDates = [
      'الجمعة، ١٤ فبراير ٢٠٢٥ م',
      'السبت، ١٥ فبراير ٢٠٢٥ م',
      'الجمعة، ٢١ فبراير ٢٠٢٥ م', 
      'السبت، ٢٢ فبراير ٢٠٢٥ م'
    ];
    
    return {
      hijri: hijriDates[dayOffset] || hijriDates[0],
      gregorian: gregorianDates[dayOffset] || gregorianDates[0]
    };
  };

  const nextFriday = getNextFriday();
  
  const examEvents: ExamEvent[] = [
    {
      id: 1,
      date: nextFriday,
      day: 'الجمعة',
      title: 'اختبار حفظ ثلاثة أجزاء',
      description: 'اختبار تسميع للطلاب الذين حفظوا ثلاثة أجزاء من القرآن الكريم',
      parts: ['ثلاثة أجزاء'],
      category: 'اختبار',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      date: new Date(nextFriday.getTime() + 24 * 60 * 60 * 1000),
      day: 'السبت',
      title: 'اختبار الجزء الخامس والثامن',
      description: 'اختبارات حفظ للجزء الخامس والجزء الثامن من القرآن الكريم',
      parts: ['الجزء الخامس', 'الجزء الثامن'],
      category: 'اختبار',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      date: new Date(nextFriday.getTime() + 7 * 24 * 60 * 60 * 1000),
      day: 'الجمعة',
      title: 'اختبار الأجزاء المتقدمة',
      description: 'اختبارات للجزء العاشر والخامس عشر والعشرون',
      parts: ['الجزء العاشر', 'الجزء الخامس عشر', 'الجزء العشرون'],
      category: 'اختبار',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 4,
      date: new Date(nextFriday.getTime() + 8 * 24 * 60 * 60 * 1000),
      day: 'السبت',
      title: 'اختبار الأجزاء الأخيرة',
      description: 'اختبارات للجزء الخامس والعشرون والجزء الثلاثون',
      parts: ['الجزء الخامس والعشرون', 'الجزء الثلاثون'],
      category: 'اختبار',
      color: 'from-orange-500 to-red-600'
    }
  ];

  // حساب الوقت المتبقي لكل حدث
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const newTimeLeft: { [key: number]: string } = {};

      examEvents.forEach(event => {
        const eventTime = event.date.getTime();
        const difference = eventTime - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          if (days > 0) {
            newTimeLeft[event.id] = `${days} يوم، ${hours} ساعة، ${minutes} دقيقة`;
          } else if (hours > 0) {
            newTimeLeft[event.id] = `${hours} ساعة، ${minutes} دقيقة، ${seconds} ثانية`;
          } else if (minutes > 0) {
            newTimeLeft[event.id] = `${minutes} دقيقة، ${seconds} ثانية`;
          } else {
            newTimeLeft[event.id] = `${seconds} ثانية`;
          }
        } else {
          newTimeLeft[event.id] = '🎉 بدأ الاختبار!';
        }
      });

      setTimeLeft(newTimeLeft);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date, eventIndex: number) => {
    const dates = getCorrespondingDates(date, eventIndex);
    return dates;
  };

  const getUrgencyClass = (eventId: number) => {
    const timeString = timeLeft[eventId];
    if (!timeString || timeString.includes('بدأ الاختبار')) {
      return 'text-green-600 animate-pulse font-bold text-xl';
    }
    
    const days = parseInt(timeString);
    if (timeString.includes('يوم')) {
      if (days <= 1) return 'text-red-600 animate-pulse font-bold';
      if (days <= 3) return 'text-orange-600 animate-bounce font-semibold';
      if (days <= 7) return 'text-yellow-600 font-semibold';
      return 'text-green-600 font-medium';
    }
    
    if (timeString.includes('ساعة') && !timeString.includes('يوم')) {
      return 'text-red-600 animate-pulse font-bold';
    }
    
    if (timeString.includes('دقيقة') && !timeString.includes('ساعة')) {
      return 'text-red-700 animate-pulse font-bold text-lg';
    }
    
    if (timeString.includes('ثانية') && !timeString.includes('دقيقة')) {
      return 'text-red-800 animate-pulse font-bold text-xl';
    }
    
    return 'text-green-600 font-medium';
  };

  return (
    <section className={`py-16 min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInDown">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Calendar className="w-12 h-12 text-blue-600 animate-bounce-slow" />
            <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-gray-100' : 'gradient-text-animated'}`}>
              جدول مواعيد الاختبارات
            </h1>
            <Timer className="w-12 h-12 text-purple-600 animate-spin-slow" />
          </div>
          <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            مواعيد اختبارات مسابقة المولد النبوي الشريف بالجامع الشرقي
          </p>
          <div className={`border rounded-xl p-4 max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-600/50' 
              : 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300'
          }`}>
            <div className={`flex items-center justify-center gap-2 ${isDarkMode ? 'text-amber-200' : 'text-amber-800'}`}>
              <Bell className="w-5 h-5 animate-ring" />
              <span className="font-semibold">تنبيه: تأكد من الحضور قبل الموعد بـ 15 دقيقة</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full animate-pulse-glow"></div>

            {examEvents.map((event, index) => (
              <div key={event.id} className="relative mb-12 animate-slideInRight" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute right-6 w-5 h-5 bg-white border-4 border-blue-500 rounded-full animate-pulse-dot shadow-lg"></div>
                
                {/* Event card */}
                <div className={`mr-16 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                }`}>
                  {/* Card header */}
                  <div className={`bg-gradient-to-r ${event.color} text-white p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-full">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{event.title}</h3>
                          <div className="text-white/90">
                            <p className="mb-1">{formatDate(event.date, index).hijri}</p>
                            <p className="text-sm text-white/70">{formatDate(event.date, index).gregorian}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/20 px-4 py-2 rounded-full">
                          <span className="text-sm font-semibold">{event.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    <p className={`mb-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{event.description}</p>
                    
                    {/* Parts list */}
                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        <Users className="w-5 h-5 text-blue-600" />
                        الأجزاء المطلوبة:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {event.parts.map((part, partIndex) => (
                          <span
                            key={partIndex}
                            className={`px-3 py-1 rounded-full text-sm font-semibold animate-fadeInScale ${
                              isDarkMode 
                                ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-200' 
                                : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800'
                            }`}
                            style={{ animationDelay: `${partIndex * 0.1}s` }}
                          >
                            {part}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Countdown */}
                    <div className={`p-4 rounded-xl transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600' 
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-blue-600 animate-tick" />
                          <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>الوقت المتبقي:</span>
                        </div>
                        <div className={`${getUrgencyClass(event.id)} transition-all duration-300`}>
                          {timeLeft[event.id] || 'جاري الحساب...'}
                        </div>
                      </div>
                      
                      {/* Progress bar for visual countdown */}
                      {timeLeft[event.id] && !timeLeft[event.id].includes('بدأ الاختبار') && (
                        <div className="mt-3">
                          <div className={`w-full h-2 rounded-full overflow-hidden ${
                            isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                          }`}>
                            <div 
                              className={`h-full transition-all duration-1000 ${
                                timeLeft[event.id].includes('ثانية') && !timeString.includes('دقيقة') 
                                  ? 'bg-gradient-to-r from-red-500 to-red-600 animate-pulse' 
                                  : timeLeft[event.id].includes('دقيقة') && !timeString.includes('ساعة')
                                  ? 'bg-gradient-to-r from-orange-500 to-red-500'
                                  : timeLeft[event.id].includes('ساعة') && !timeString.includes('يوم')
                                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                  : 'bg-gradient-to-r from-green-500 to-blue-500'
                              }`}
                              style={{ 
                                width: timeLeft[event.id].includes('ثانية') && !timeString.includes('دقيقة') 
                                  ? '10%' 
                                  : timeLeft[event.id].includes('دقيقة') && !timeString.includes('ساعة')
                                  ? '25%'
                                  : timeLeft[event.id].includes('ساعة') && !timeString.includes('يوم')
                                  ? '50%'
                                  : '100%'
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 animate-fadeInScale">
          <div className={`border rounded-xl p-6 max-w-3xl mx-auto transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-600/50' 
              : 'bg-gradient-to-r from-green-100 to-blue-100 border-green-300'
          }`}>
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>ملاحظات مهمة</h3>
            <ul className={`space-y-2 text-right ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                يرجى الحضور قبل الموعد المحدد بـ 15 دقيقة على الأقل
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                إحضار المصحف الشريف والأدوات اللازمة
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                في حالة وجود أي استفسار، يرجى التواصل مع إدارة المسجد
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Quran Verse */}
      <div className={`border-t py-6 mt-8 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-600/50' 
          : 'bg-gradient-to-r from-yellow-100/50 to-orange-100/50 border-yellow-300'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-xl md:text-2xl font-bold mb-2 ${isDarkMode ? 'text-yellow-200' : 'text-yellow-800'}`} style={{
            textShadow: '0 0 10px rgba(255, 193, 7, 0.5), 0 0 20px rgba(255, 193, 7, 0.3)'
          }}>
            "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
          </p>
          <p className={`text-sm ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
            صدق الله العظيم - سورة المزمل
          </p>
        </div>
      </div>
    </section>
  );
};
