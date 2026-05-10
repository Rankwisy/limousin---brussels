import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { translations } from '../data/translations';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, currentLang, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[currentLang as keyof typeof translations];

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'services', label: t.nav.services },
    { key: 'about', label: t.nav.about },
    { key: 'contact', label: t.nav.contact },
    { key: 'booking', label: t.nav.booking }
  ];

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white sticky top-0 z-50 border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/logo%20limousine%20brussels.png?updatedAt=1753558330356" 
              alt="Limousine Brussels" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <div className="text-xl font-bold text-yellow-400">Limousine Brussels</div>
              <div className="text-xs text-gray-300">Premium Transport Service</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onPageChange(item.key)}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  currentPage === item.key ? 'text-yellow-400' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Contact Info - Desktop */}
            <div className="hidden xl:flex items-center space-x-4">
              <a 
                href="tel:+3226810332" 
                className="flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors"
              >
                <Phone size={16} />
                <span>(+32) 2 681 03 32</span>
              </a>
              <a 
                href="https://wa.me/32489001530" 
                className="flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onPageChange(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium transition-colors hover:text-yellow-400 ${
                    currentPage === item.key ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <a 
                  href="tel:+3226810332" 
                  className="flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors"
                >
                  <Phone size={16} />
                  <span>(+32) 2 681 03 32</span>
                </a>
                <a 
                  href="https://wa.me/32489001530" 
                  className="flex items-center space-x-2 text-sm hover:text-yellow-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;