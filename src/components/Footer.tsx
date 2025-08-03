import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode = false }) => {
  return (
    <footer className={`text-white py-16 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
    }`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 text-blue-300 opacity-20">
          <Heart className="w-16 h-16 animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-10 text-purple-300 opacity-15">
          <Mail className="w-12 h-12 animate-bounce-slow" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-5">
          <div className="w-64 h-64 rounded-full border-2 border-current animate-spin-slow"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="text-center md:text-right animate-fadeInScale">
            <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/60' 
                : 'bg-white/10 border-white/20 hover:bg-white/15'
            }`}>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300 glowing-text">مسابقه المولد النبوي الشريف</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
              نسعى لتشجيع الطلاب على حفظ وتلاوة القرآن الكريم وتعلم تعاليم الدين الإسلامي
            </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-pink-300">
                <Heart className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-semibold">صنع بحب لطلاب القرآن الكريم</span>
              </div>
            </div>
          </div>

          <div className="text-center animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
            <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/60' 
                : 'bg-white/10 border-white/20 hover:bg-white/15'
            }`}>
              <h4 className="text-xl font-semibold mb-6 text-green-300 glowing-text">تواصل معنا</h4>
              <div className="space-y-4">
                {/* الشيخ مصباح الدكاني */}
                <div className={`backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-700/50 border-gray-500/30 hover:bg-gray-600/60' 
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                }`}>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/src/assets/mesbah.jpg" 
                      alt="الشيخ مصباح الدكاني"
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <a
                        href="https://wa.me/201220536204"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors font-bold text-lg block glowing-text"
                      >
                        الشيخ مصباح الدكاني
                      </a>
                      <p className="text-blue-200 text-sm">للتواصل عبر الواتساب</p>
                    </div>
                  </div>
              </div>

                {/* الاستاذ اسلام سعيد */}
                <div className={`backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-700/50 border-gray-500/30 hover:bg-gray-600/60' 
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                }`}>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/src/assets/eslam.jpg" 
                      alt="الاستاذ اسلام سعيد"
                      className="w-12 h-12 rounded-full object-cover border-2 border-green-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <a
                        href="https://wa.me/201276099675"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors font-bold text-lg block glowing-text"
                      >
                        الاستاذ اسلام سعيد
                      </a>
                      <p className="text-blue-200 text-sm">للتواصل عبر الواتساب</p>
                    </div>
                  </div>
                </div>

                {/* احمد طارق علي الدين */}
                <div className={`backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-700/50 border-gray-500/30 hover:bg-gray-600/60' 
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                }`}>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/src/assets/me.jpg" 
                      alt="احمد طارق علي الدين"
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <a
                        href="https://wa.me/201559181558"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors font-bold text-lg block glowing-text"
                      >
                        احمد طارق علي الدين
                      </a>
                      <p className="text-blue-200 text-sm">للتواصل عبر الواتساب</p>
                    </div>
                  </div>
                </div>

                <div className={`flex items-center justify-center gap-3 rounded-xl p-3 transition-all ${
                  isDarkMode 
                    ? 'bg-gray-700/30 hover:bg-gray-600/40' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}>
                  <div className="bg-red-500 p-2 rounded-full">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/BA3xbuvekc8kgKaMA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors font-medium"
                  >
                    الجامع الشرقي، دمليج، منوف، المنوفية
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
            <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/60' 
                : 'bg-white/10 border-white/20 hover:bg-white/15'
            }`}>
              <h4 className="text-xl font-semibold mb-6 text-purple-300 glowing-text">روابط مهمة</h4>
              <div className="space-y-3">
                <div className={`rounded-xl p-3 transition-all ${
                  isDarkMode 
                    ? 'bg-gray-700/30 hover:bg-gray-600/40' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    قوانين المسابقة
                  </a>
                </div>
                <div className={`rounded-xl p-3 transition-all ${
                  isDarkMode 
                    ? 'bg-gray-700/30 hover:bg-gray-600/40' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    الأسئلة الشائعة
                  </a>
                </div>
                <div className={`rounded-xl p-3 transition-all ${
                  isDarkMode 
                    ? 'bg-gray-700/30 hover:bg-gray-600/40' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    اتصل بنا
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center relative z-10">
          {/* Quran Verse */}
          <div className={`backdrop-blur-sm rounded-2xl p-6 border mb-6 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-800/30 border-gray-600/20' 
              : 'bg-white/5 border-white/10'
          }`}>
            <p className="text-xl md:text-2xl text-yellow-200 font-bold glowing-text-main mb-2">
              "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
            </p>
            <p className="text-yellow-300/80 text-sm">
              صدق الله العظيم - سورة المزمل
            </p>
          </div>
          
          <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-800/30 border-gray-600/20' 
              : 'bg-white/5 border-white/10'
          }`}>
            <p className="text-blue-200 text-lg font-semibold mb-2">
              &copy; 2025 مسابقه المولد النبوي الشريف بالجامع الشرقي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="text-sm">تم التطوير بحب وإخلاص لخدمة كتاب الله</span>
              <Heart className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};