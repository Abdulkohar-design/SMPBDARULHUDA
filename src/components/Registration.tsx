import React, { useState } from 'react';
import { FileText, Upload, User, Phone, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Registration = () => {
  const [activeTab, setActiveTab] = useState('requirements');

  const requirements = [
    {
      icon: <FileText className="text-blue-600" size={24} />,
      title: 'Mengisi Formulir Pendaftaran',
      description: 'Lengkapi formulir pendaftaran dengan data yang akurat dan valid'
    },
    {
      icon: <Upload className="text-emerald-600" size={24} />,
      title: 'Fotokopi Akta Kelahiran',
      description: 'Sediakan fotokopi akta kelahiran yang masih berlaku dan jelas'
    },
    {
      icon: <User className="text-purple-600" size={24} />,
      title: 'Fotokopi Kartu Keluarga',
      description: 'Fotokopi kartu keluarga yang mencantumkan nama calon siswa'
    },
    {
      icon: <Upload className="text-orange-600" size={24} />,
      title: 'Pas Foto 3x4 (4 Lembar)',
      description: 'Pas foto terbaru dengan latar belakang putih sebanyak 4 lembar'
    },
    {
      icon: <FileText className="text-red-600" size={24} />,
      title: 'Mengikuti Tes Akademik',
      description: 'Ikuti tes akademik sesuai dengan program studi yang dipilih'
    }
  ];

  const tabs = [
    { id: 'requirements', label: 'Syarat Pendaftaran', icon: <FileText size={20} /> },
    { id: 'process', label: 'Proses Pendaftaran', icon: <Calendar size={20} /> },
    { id: 'contact', label: 'Informasi Kontak', icon: <Phone size={20} /> }
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-amber-600">Daftar</span> Sekarang
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan keluarga besar Darul Huda Arrohmani dan raih masa depan yang cerah
          </p>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pendaftaran Online Tersedia!
          </h3>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Daftar secara online melalui link yang telah disediakan untuk kemudahan dan kecepatan proses pendaftaran
          </p>
          <a
            href="https://bit.ly/ppdbdh2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ExternalLink className="mr-2" size={20} />
            Daftar Online Sekarang
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'requirements' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Syarat Pendaftaran</h3>
              <div className="grid gap-6">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0">
                        {req.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{req.title}</h4>
                        <p className="text-gray-600">{req.description}</p>
                      </div>
                      <div className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Alur Pendaftaran</h3>
              <div className="space-y-8">
                {[
                  { step: 1, title: 'Pendaftaran Online', desc: 'Kunjungi link pendaftaran dan isi formulir' },
                  { step: 2, title: 'Upload Dokumen', desc: 'Upload semua dokumen yang diperlukan' },
                  { step: 3, title: 'Verifikasi', desc: 'Tim kami akan memverifikasi data Anda' },
                  { step: 4, title: 'Tes Akademik', desc: 'Mengikuti tes akademik sesuai jadwal' },
                  { step: 5, title: 'Pengumuman', desc: 'Pengumuman hasil seleksi' },
                  { step: 6, title: 'Daftar Ulang', desc: 'Melakukan daftar ulang dan pembayaran' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                    {index < 5 && (
                      <div className="absolute left-6 mt-12 w-0.5 h-8 bg-amber-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Informasi Lebih Lanjut</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <Phone className="text-emerald-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-600">081384296364</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-600">
                        Kp. Sarakan Rt 003 Rw 004<br />
                        Ds. Cikukulu Kec. Karangnunggal<br />
                        Kab. Tasikmalaya Prov. Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-center">Jam Pelayanan</h4>
                  <div className="space-y-3 text-center">
                    <div>
                      <div className="font-semibold text-gray-800">Senin - Jumat</div>
                      <div className="text-gray-600">08:00 - 16:00 WIB</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Sabtu</div>
                      <div className="text-gray-600">08:00 - 12:00 WIB</div>
                    </div>
                    <div className="text-amber-600 font-semibold text-sm mt-4">
                      *Siap melayani konsultasi pendaftaran
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Registration;