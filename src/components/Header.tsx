import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Program', href: '#programs' },
    { name: 'Fasilitas', href: '#facilities' },
    { name: 'Pendaftaran', href: '#registration' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-emerald-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>081384296364</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@darulhuda.ac.id</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>PPDB 2025/2026 - Daftar Sekarang!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DH</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">Darul Huda Arrohmani</h1>
              <p className="text-sm text-gray-600">Yayasan Pendidikan Islam</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#registration"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#registration"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;