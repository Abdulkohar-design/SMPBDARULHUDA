import React from 'react';
import { Heart, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DH</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Darul Huda Arrohmani</h3>
                <p className="text-gray-400">Yayasan Pendidikan Islam</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Lembaga pendidikan Islam yang berkomitmen untuk menghasilkan generasi yang berakhlak mulia, 
              cerdas, dan siap menghadapi tantangan zaman dengan tetap berpegang teguh pada nilai-nilai Islam.
            </p>
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-xl p-4">
              <h4 className="font-semibold text-white mb-2">PPDB 2025/2026</h4>
              <p className="text-emerald-200 text-sm mb-3">Pendaftaran sedang dibuka!</p>
              <a
                href="https://bit.ly/ppdbdh2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-emerald-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                <ExternalLink size={16} className="mr-2" />
                Daftar Online
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">Program Studi</h4>
            <ul className="space-y-3">
              {[
                'Santri Takhosus / Salafi',
                'SMP IT',
                'Kesetaraan SMP',
                'SMK',
                'Lembaga Kursus'
              ].map((program, index) => (
                <li key={index}>
                  <a href="#programs" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-emerald-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">081384296364</p>
                  <p className="text-gray-400 text-xs">Senin - Sabtu: 08:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-emerald-400 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-300 text-sm">info@darulhuda.ac.id</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-emerald-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">Kp. Sarakan Rt 003 Rw 004</p>
                  <p className="text-gray-300 text-sm">Ds. Cikukulu, Kec. Karangnunggal</p>
                  <p className="text-gray-300 text-sm">Kab. Tasikmalaya, Jawa Barat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Yayasan Darul Huda Arrohmani.</span>
              <span>Dibuat Oleh</span>
              <Heart className="text-red-500" size={16} />
              <span>Vdmax Studio Ai</span>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
