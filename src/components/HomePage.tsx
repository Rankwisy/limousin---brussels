import React from 'react';
import { Star, CheckCircle, Phone, MessageCircle, ArrowRight, Users, Shield, Clock, Award } from 'lucide-react';
import { translations } from '../data/translations';

interface HomePageProps {
  currentLang: string;
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ currentLang, onPageChange }) => {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/driver-dressed-elegant-costume.jpg?updatedAt=1753539240435)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {t.home.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onPageChange('booking')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{t.home.hero.cta}</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onPageChange('bus-minbus')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Bus & Minibus
              </button>
              
              <a 
                href="https://wa.me/32489001530"
                className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>{t.common.callNow}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.services.items.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border">
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => onPageChange('services')}
                    className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>{t.common.learnMore}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* Fleet Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.fleet.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.fleet.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.home.fleet.vehicles.map((vehicle, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {vehicle.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={16} className="mr-2" />
                      {vehicle.capacity}
                    </div>
                    <button 
                      onClick={() => onPageChange('services')}
                      className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <span>{t.common.learnMore}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                {t.home.whyChoose.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.home.whyChoose.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onPageChange('booking')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t.common.getQuote}
                </button>
                <a 
                  href="https://wa.me/3226810332"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  <span>{t.common.whatsapp}</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://ik.imagekit.io/by733ltn6/Pourquoi%20Choisir%20RentaBus.png?updatedAt=1753097472364" 
                alt="Why choose us"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Users className="text-yellow-500" size={24} />
                  <div>
                    <div className="font-bold text-gray-900">1000+</div>
                    <div className="text-sm text-gray-600">
                      {currentLang === 'fr' ? 'Clients Satisfaits' : 
                       currentLang === 'nl' ? 'Tevreden Klanten' : 
                       'Happy Clients'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="text-green-500" size={24} />
                  <div>
                    <div className="font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">
                      {currentLang === 'fr' ? 'Support' : 
                       currentLang === 'nl' ? 'Ondersteuning' : 
                       'Support'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.home.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900">
                  - {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLang === 'fr' ? 'Prêt à voyager avec style ?' : 
             currentLang === 'nl' ? 'Klaar om stijlvol te reizen?' : 
             'Ready to travel in style?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {currentLang === 'fr' ? 'Contactez-nous dès maintenant pour réserver votre prochain voyage de luxe.' : 
             currentLang === 'nl' ? 'Neem nu contact met ons op om uw volgende luxe reis te boeken.' : 
             'Contact us now to book your next luxury journey.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('booking')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t.common.bookNow}
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;