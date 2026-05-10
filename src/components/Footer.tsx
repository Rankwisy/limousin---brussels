import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: string;
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/logo%20limousine%20brussels.png?updatedAt=1753558330356" 
                alt="Limousine Brussels" 
                className="h-10 w-auto"
              />
              <div>
                <div className="text-lg font-bold text-yellow-400">Limousine Brussels</div>
                <div className="text-xs text-gray-400">Premium Transport</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {currentLang === 'fr' ? 'Votre partenaire de confiance pour tous vos déplacements de prestige à Bruxelles et en Europe.' :
               currentLang === 'nl' ? 'Uw vertrouwde partner voor al uw prestigieuze verplaatsingen in Brussel en Europa.' :
               'Your trusted partner for all your prestigious travels in Brussels and Europe.'}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">{t.nav.services}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  {currentLang === 'fr' ? 'Minibus Privé' : currentLang === 'nl' ? 'Privé Minibus' : 'Private Minibus'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  {currentLang === 'fr' ? 'Transferts Aéroport' : currentLang === 'nl' ? 'Luchthaven Transfers' : 'Airport Transfers'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  {currentLang === 'fr' ? 'Circuits Touristiques' : currentLang === 'nl' ? 'Toeristische Rondritten' : 'City Tours'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  {currentLang === 'fr' ? 'Transport d\'Affaires' : currentLang === 'nl' ? 'Zakelijk Vervoer' : 'Business Travel'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">{t.nav.contact}</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-400 flex-shrink-0" />
                <a href="tel:+3226810332" className="hover:text-yellow-400 transition-colors">
                  (+32) 2 681 03 32
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@limousine.brussels" className="hover:text-yellow-400 transition-colors">
                  info@limousine.brussels
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-400 flex-shrink-0" />
                <span>Avenue Louise 1050 Bruxelles, Belgium</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-yellow-400 flex-shrink-0" />
                <span>24h/24 - 7j/7</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">
              {currentLang === 'fr' ? 'Réservation Rapide' : currentLang === 'nl' ? 'Snelle Reservering' : 'Quick Booking'}
            </h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/32489001530" 
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors text-white text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="tel:+3226810332" 
                className="flex items-center space-x-3 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors text-black text-sm font-medium"
              >
                <Phone size={16} />
                <span>{t.common.callNow}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Limousine Brussels. 
              {currentLang === 'fr' ? ' Tous droits réservés.' : 
               currentLang === 'nl' ? ' Alle rechten voorbehouden.' : 
               ' All rights reserved.'}
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                {currentLang === 'fr' ? 'Conditions Générales' : 
                 currentLang === 'nl' ? 'Algemene Voorwaarden' : 
                 'Terms of Service'}
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                {currentLang === 'fr' ? 'Confidentialité' : 
                 currentLang === 'nl' ? 'Privacy' : 
                 'Privacy Policy'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;