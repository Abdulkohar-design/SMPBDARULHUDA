import React from 'react';
import { Building, Home, Utensils, Dumbbell, Fuel as Mosque, Users } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: <Building className="text-blue-600" size={32} />,
      title: 'Ruang Kelas Luas',
      description: 'Ruang kelas yang nyaman dan modern dengan kapasitas yang memadai untuk pembelajaran efektif.'
    },
    {
      icon: <Home className="text-emerald-600" size={32} />,
      title: 'Ruang Perpustakaan',
      description: 'Perpustakaan lengkap dengan koleksi buku-buku islami dan pengetahuan umum untuk mendukung pembelajaran.'
    },
    {
      icon: <Utensils className="text-orange-600" size={32} />,
      title: 'Ruang Kesenian',
      description: 'Ruang khusus untuk mengembangkan bakat seni dan kreativitas siswa dalam berbagai bidang kesenian.'
    },
    {
      icon: <Dumbbell className="text-purple-600" size={32} />,
      title: 'Lapangan Olahraga',
      description: 'Lapangan olahraga yang lengkap untuk mendukung aktivitas fisik dan pengembangan jiwa sportivitas.'
    },
    {
      icon: <Mosque className="text-amber-600" size={32} />,
      title: 'Masjid',
      description: 'Masjid yang megah sebagai pusat kegiatan spiritual dan ibadah bagi seluruh warga sekolah.'
    },
    {
      icon: <Users className="text-red-600" size={32} />,
      title: 'Ruang Serbaguna',
      description: 'Ruang multifungsi untuk berbagai kegiatan sekolah, seminar, dan acara-acara besar lainnya.'
    }
  ];

  const extraCurricular = [
    'Pramuka', 'Bimbingan dakwah', 'Bimbingan mengurus mayit', 
    'Bimbingan pertanian', 'Futsal', 'Tenis meja'
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Facilities Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-emerald-600">Fasilitas</span> Lengkap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fasilitas modern dan lengkap untuk mendukung proses pembelajaran dan pengembangan karakter siswa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {facility.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{facility.title}</h3>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Extra Curricular Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-amber-600">Extra</span> Kurikuler
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat, minat, dan keterampilan siswa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {extraCurricular.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl p-4 text-center hover:from-emerald-100 hover:to-amber-100 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {activity.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{activity}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Student Showcase */}
        <div className="mt-20 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Lingkungan Belajar yang Islami
              </h3>
              <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                Kami menyediakan lingkungan belajar yang kondusif dengan nilai-nilai Islam yang kuat, 
                didukung oleh fasilitas modern dan tenaga pengajar yang berpengalaman.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-emerald-200 text-sm">Lingkungan Islami</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-emerald-200 text-sm">Pengawasan</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <h4 className="text-white font-semibold mb-2">Siswa Siswi Berprestasi</h4>
                <p className="text-emerald-200 text-sm">
                  Santri yang berprestasi dalam bidang akademik dan keagamaan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;