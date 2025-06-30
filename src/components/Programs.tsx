import React from 'react';
import { GraduationCap, BookOpen, Users, Clock } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'Santri Takhosus / Salafi',
      description: 'Program pendidikan Islam tradisional dengan fokus pada penguasaan kitab kuning dan ilmu agama.',
      icon: <BookOpen className="text-emerald-600" size={32} />,
      features: ['Tahfidz Al-Quran', 'Kajian Kitab Kuning', 'Bahasa Arab & Inggris', 'Akhlak & Adab'],
      color: 'emerald'
    },
    {
      title: 'SMP IT',
      description: 'Sekolah Menengah Pertama Islam Terpadu yang memadukan kurikulum nasional dengan nilai-nilai Islam.',
      icon: <GraduationCap className="text-blue-600" size={32} />,
      features: ['Kurikulum Nasional', 'Pendidikan Agama', 'Teknologi Informasi', 'Ekstrakurikuler'],
      color: 'blue'
    },
    {
      title: 'Kesetaraan SMP',
      description: 'Program kesetaraan untuk peserta didik yang ingin melanjutkan pendidikan setingkat SMP.',
      icon: <Users className="text-purple-600" size={32} />,
      features: ['Fleksibel Waktu', 'Pembelajaran Adaptif', 'Sertifikat Resmi', 'Bimbingan Personal'],
      color: 'purple'
    },
    {
      title: 'SMK',
      description: 'Sekolah Menengah Kejuruan dengan berbagai program keahlian untuk persiapan dunia kerja.',
      icon: <Clock className="text-orange-600" size={32} />,
      features: ['Program Keahlian', 'Praktek Kerja', 'Sertifikasi Profesi', 'Link & Match Industri'],
      color: 'orange'
    },
    {
      title: 'Lembaga Kursus',
      description: 'Program kursus dan pelatihan keterampilan untuk pengembangan kemampuan praktis.',
      icon: <BookOpen className="text-amber-600" size={32} />,
      features: ['Kursus Komputer', 'Bahasa Asing', 'Keterampilan Teknis', 'Sertifikat Kompetensi'],
      color: 'amber'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        hover: 'hover:border-emerald-300',
        text: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        hover: 'hover:border-purple-300',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        hover: 'hover:border-orange-300',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        hover: 'hover:border-amber-300',
        text: 'text-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Program <span className="text-amber-600">Studi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai program pendidikan berkualitas yang dirancang untuk mengembangkan potensi siswa dalam bidang akademik dan spiritual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const colorClasses = getColorClasses(program.color);
            return (
              <div
                key={index}
                className={`bg-white border-2 ${colorClasses.border} ${colorClasses.hover} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group`}
              >
                <div className={`${colorClasses.bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 ${colorClasses.text.replace('text-', 'bg-')} rounded-full`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full ${colorClasses.button} text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200`}>
                  Pelajari Lebih Lanjut
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Siap Bergabung dengan Kami?
          </h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Daftarkan diri Anda sekarang dan jadilah bagian dari keluarga besar Darul Huda Arrohmani
          </p>
          <a
            href="#registration"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            Daftar Sekarang
            <GraduationCap className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;