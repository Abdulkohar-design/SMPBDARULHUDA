import React from 'react';
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                SPMB 2025/2026 Dibuka
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-amber-600">SPMB</span><br />
                <span className="text-emerald-700">Yayasan Darul Huda</span><br />
                <span className="text-gray-800">Arrohmani</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-700 font-medium">
                Sistem Penerimaan Murid Baru
              </h2>
              <div className="text-4xl lg:text-5xl font-bold text-amber-600">
                2025/2026
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Kami dengan senang hati mengumumkan bahwa penerimaan peserta didik baru kini dibuka di Yayasan kami yang terhormat. Bergabunglah dengan keluarga besar Darul Huda Arrohmani.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#registration"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#programs"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Lihat Program
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-3 mx-auto">
                  <Users className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-3 mx-auto">
                  <Award className="text-emerald-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Tahun Berpengalaman</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Program Studi</div>
              </div>
            </div>
          </div>

          {/* Right Content - Leadership */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    <img src="/Untitled-1dd.png" alt="Deskripsi gambar" />
                    alt="APA ALM. KH. ABDUL ROHMAN - Pendiri Pondok Pesantren Darul Huda Arrohmani"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  APA ALM. KH. ABDUL ROHMAN
                </h3>
                <p className="text-emerald-600 font-semibold mb-1">Pendiri Pondok Pesantren</p>
                <p className="text-gray-600">Darul Huda Arrohmani</p>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl p-4 mb-6">
                <p className="text-gray-700 text-sm italic text-center">
                  "Pendidikan yang berkualitas adalah investasi terbaik untuk masa depan generasi muda Islam"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-amber-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-amber-600">Islamic</div>
                  <div className="text-xs text-gray-600">Education</div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-emerald-600">Modern</div>
                  <div className="text-xs text-gray-600">Learning</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
