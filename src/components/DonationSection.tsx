import React from 'react';
import { Heart, Phone, Smartphone, CreditCard } from 'lucide-react';

interface DonationSectionProps {
  isDarkMode?: boolean;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ isDarkMode = false }) => {
  return (
    <section className={`py-16 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-700' 
        : 'bg-gradient-to-br from-yellow-50 to-orange-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slideInDown">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Heart className="w-12 h-12 text-red-500 animate-pulse" />
              <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-gray-100' : 'gradient-text-golden'}`}>
                للتبرع لنا
              </h2>
              <Heart className="w-12 h-12 text-red-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              للتبرع بمصاحف للقرآن الكريم
            </p>
          </div>

          {/* Donation Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Vodafone Cash */}
            <div className={`rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-red-900/30 to-red-800/30 border-2 border-red-600/50' 
                : 'bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300'
            }`}>
              <div className="text-center">
                <div className="bg-red-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-red-200' : 'text-red-800'}`}>
                  فودافون كاش
                </h3>
                <div className={`backdrop-blur-sm rounded-xl p-4 mb-6 border ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-red-600/30' 
                    : 'bg-white/70 border-red-200'
                }`}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span className={`text-2xl font-bold ${isDarkMode ? 'text-red-200' : 'text-red-800'}`}>
                      01066094984
                    </span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-red-300' : 'text-red-700'}`}>
                    رقم المحفظة الإلكترونية
                  </p>
                </div>
                <a
                  href="tel:*9*01066094984#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  اتصل للتحويل
                </a>
              </div>
            </div>

            {/* InstaPay */}
            <div className={`rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-2 border-blue-600/50' 
                : 'bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300'
            }`}>
              <div className="text-center">
                <div className="bg-blue-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  انستاباي
                </h3>
                <div className={`backdrop-blur-sm rounded-xl p-4 mb-6 border ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-blue-600/30' 
                    : 'bg-white/70 border-blue-200'
                }`}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className={`text-2xl font-bold ${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                      01276099675
                    </span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    رقم انستاباي
                  </p>
                </div>
                <a
                  href="https://ipn.eg/S/islam.saeed.1993/instapay/0t6YyT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <CreditCard className="w-5 h-5" />
                  اضغط للتبرع مباشرة
                </a>
              </div>
            </div>
          </div>

          {/* Thank you message */}
          <div className={`text-center p-8 rounded-2xl border-2 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-green-900/30 to-green-800/30 border-green-600/50' 
              : 'bg-gradient-to-r from-green-100 to-green-200 border-green-300'
          }`}>
            <div className="flex justify-center items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-green-500 animate-pulse" />
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>
                جزاكم الله خيراً
              </h3>
              <Heart className="w-8 h-8 text-green-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className={`text-lg ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
              تبرعاتكم تساهم في نشر كتاب الله وتعليم القرآن الكريم للأجيال القادمة
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <div className={`px-4 py-2 rounded-full ${
                isDarkMode 
                  ? 'bg-green-800/50 text-green-200' 
                  : 'bg-green-200 text-green-800'
              }`}>
                <span className="text-sm font-semibold">✨ كل ريال صدقة جارية</span>
              </div>
              <div className={`px-4 py-2 rounded-full ${
                isDarkMode 
                  ? 'bg-blue-800/50 text-blue-200' 
                  : 'bg-blue-200 text-blue-800'
              }`}>
                <span className="text-sm font-semibold">📖 نشر العلم والقرآن</span>
              </div>
            </div>
          </div>

          {/* Quran Verse */}
          <div className={`mt-8 border rounded-2xl p-6 text-center transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-600/50' 
              : 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
          }`}>
            <p className={`text-xl md:text-2xl font-bold mb-2 ${isDarkMode ? 'text-yellow-200' : 'text-yellow-800'}`} style={{
              textShadow: '0 0 10px rgba(255, 193, 7, 0.5), 0 0 20px rgba(255, 193, 7, 0.3)'
            }}>
              "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً"
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
              صدق الله العظيم - سورة البقرة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};