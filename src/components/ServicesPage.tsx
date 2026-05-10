import React from 'react';
import { Car, Users, MapPin, Clock, Shield, Star, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

interface ServicesPageProps {
  currentLang: string;
  onPageChange: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ currentLang, onPageChange }) => {
  const t = translations[currentLang as keyof typeof translations];

  const services = [
    {
      icon: Car,
      title: t.services.minibus.title,
      description: t.services.minibus.description,
      image: "https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/interieur-de-la-voiture-avec-toit-panoramique-conducteur-sous-la-pluie-vue-arriere.jpg?updatedAt=1753563472095",
      features: ["Jusqu'à 8 passagers", "Climatisation", "Wi-Fi gratuit", "Chauffeur professionnel"]
    },
    {
      icon: MapPin,
      title: t.services.airport.title,
      description: t.services.airport.description,
      image: "https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/MERCEDES%20%20CLASS%20V.png?updatedAt=1753563783444",
      features: ["Service 24h/24", "Suivi des vols", "Accueil personnalisé", "Tarifs fixes"]
    },
    {
      icon: Users,
      title: t.services.tours.title,
      description: t.services.tours.description,
      image: "https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/vehicules-sur-la-route-contre-un-ciel-nuageux.jpg?updatedAt=1753575760865",
      features: ["Circuits personnalisés", "Guide multilingue", "Arrêts flexibles", "Groupes privés"]
    },
    {
      icon: Shield,
      title: t.services.business.title,
      description: t.services.business.description,
      image: "https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/sieges-vides-par-fenetre-en-train.jpg?updatedAt=1753575929072",
      features: ["Ponctualité garantie", "Véhicules premium", "Facturation entreprise", "Service discret"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: currentLang === 'fr' ? 'Service 24/7' : currentLang === 'nl' ? '24/7 Service' : '24/7 Service',
      description: currentLang === 'fr' ? 'Disponible à toute heure pour vos besoins' : 
                   currentLang === 'nl' ? 'Beschikbaar op elk moment voor uw behoeften' : 
                   'Available anytime for your needs'
    },
    {
      icon: Shield,
      title: currentLang === 'fr' ? 'Sécurité Garantie' : currentLang === 'nl' ? 'Gegarandeerde Veiligheid' : 'Guaranteed Safety',
      description: currentLang === 'fr' ? 'Chauffeurs expérimentés et véhicules assurés' : 
                   currentLang === 'nl' ? 'Ervaren chauffeurs en verzekerde voertuigen' : 
                   'Experienced drivers and insured vehicles'
    },
    {
      icon: Star,
      title: currentLang === 'fr' ? 'Service Premium' : currentLang === 'nl' ? 'Premium Service' : 'Premium Service',
      description: currentLang === 'fr' ? 'Confort et luxe pour tous vos déplacements' : 
                   currentLang === 'nl' ? 'Comfort en luxe voor al uw verplaatsingen' : 
                   'Comfort and luxury for all your travels'
    },
    {
      icon: Car,
      title: currentLang === 'fr' ? 'Flotte Moderne' : currentLang === 'nl' ? 'Moderne Vloot' : 'Modern Fleet',
      description: currentLang === 'fr' ? 'Véhicules récents et parfaitement entretenus' : 
                   currentLang === 'nl' ? 'Recente en perfect onderhouden voertuigen' : 
                   'Recent and perfectly maintained vehicles'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/vue-laterale-d-une-voiture-vintage-sur-un-fond-noir.jpg?updatedAt=1753618916039)'
          }}
        ></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {currentLang === 'fr' ? 'Nos Services Premium' : 
               currentLang === 'nl' ? 'Onze Premium Diensten' : 
               'Our Premium Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLang === 'fr' ? 'Des solutions de transport adaptées à tous vos besoins' : 
               currentLang === 'nl' ? 'Transportoplossingen aangepast aan al uw behoeften' : 
               'Transport solutions adapted to all your needs'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border">
                  <div className="relative h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-yellow-500 p-3 rounded-full">
                        <IconComponent className="text-black" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => onPageChange('booking')}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    >
                      <span>{t.common.bookNow}</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.services.fleet.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.fleet.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.fleet.vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {vehicle.capacity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLang === 'fr' ? 'Les raisons de nous faire confiance' : 
               currentLang === 'nl' ? 'Redenen om ons te vertrouwen' : 
               'Reasons to trust us'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition-colors">
                  <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-black" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLang === 'fr' ? 'Prêt à réserver ?' : 
             currentLang === 'nl' ? 'Klaar om te reserveren?' : 
             'Ready to book?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {currentLang === 'fr' ? 'Contactez-nous maintenant pour votre transport premium' : 
             currentLang === 'nl' ? 'Neem nu contact met ons op voor uw premium vervoer' : 
             'Contact us now for your premium transport'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+3226810332"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>{t.common.callNow}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;