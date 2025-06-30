import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-emerald-600" size={32} />,
      title: 'Telepon',
      content: '081384296364',
      subtitle: 'Hubungi kami langsung'
    },
    {
      icon: <Mail className="text-blue-600" size={32} />,
      title: 'Email',
      content: 'info@darulhuda.ac.id',
      subtitle: 'Kirim pertanyaan Anda'
    },
    {
      icon: <MapPin className="text-red-600" size={32} />,
      title: 'Alamat',
      content: 'Kp. Sarakan Rt 003 Rw 004, Ds. Cikukulu',
      subtitle: 'Kec. Karangnunggal, Kab. Tasikmalaya'
    },
    {
      icon: <Clock className="text-purple-600" size={32} />,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 08:00 - 16:00',
      subtitle: 'Minggu: Tutup'
    }
  ];

  const socialMedia = [
    {
      name: 'TikTok',
      handle: '@darhood87',
      icon: <MessageCircle className="text-gray-800" size={24} />,
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'YouTube',
      handle: 'DARUL HUDA MEDIA',
      icon: <Youtube className="text-red-600" size={24} />,
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: 'Facebook',
      handle: 'PONDOKPESANTREN DARULHUDA',
      icon: <Facebook className="text-blue-600" size={24} />,
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-emerald-600">Hubungi</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami siap membantu menjawab pertanyaan Anda seputar pendaftaran dan informasi program studi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-50 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-800 font-medium mb-1">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Ikuti Media Sosial Kami
              </h3>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg text-white ${social.color} transition-colors duration-200`}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{social.name}</div>
                        <div className="text-gray-600 text-sm">{social.handle}</div>
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map and Quick Contact */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                <div className="text-center text-emerald-700">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Lokasi Kami</h3>
                  <p className="text-sm">Kp. Sarakan, Ds. Cikukulu</p>
                  <p className="text-sm">Karangnunggal, Tasikmalaya</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Akses Mudah</h4>
                <p className="text-gray-600 text-sm">
                  Lokasi strategis dengan akses transportasi yang mudah dijangkau dari berbagai wilayah di Tasikmalaya.
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Butuh Bantuan Segera?
              </h3>
              <p className="text-emerald-100 mb-6">
                Tim kami siap membantu Anda dengan informasi lengkap seputar PPDB dan program studi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:081384296364"
                  className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Telepon Sekarang</span>
                </a>
                <a
                  href="https://wa.me/6281384296364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;