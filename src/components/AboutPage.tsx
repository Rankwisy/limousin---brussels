import React from 'react';
import { translations } from '../data/translations';
import { Users, Award, Clock, Shield, Car, Star, Phone, MessageCircle } from 'lucide-react';

interface AboutPageProps {
  currentLang: 'fr' | 'nl' | 'en';
  onPageChange: (page: string) => void;
}

export default function AboutPage({ currentLang, onPageChange }: AboutPageProps) {
  const t = translations[currentLang];

  const stats = [
    { icon: Users, value: '500+', label: t.about.stats?.clients || 'Clients satisfaits' },
    { icon: Car, value: '10+', label: t.about.stats?.vehicles || 'Véhicules' },
    { icon: Clock, value: '24/7', label: t.about.stats?.availability || 'Disponibilité' },
    { icon: Award, value: '15+', label: t.about.stats?.experience || 'Ans d\'expérience' }
  ];

  const values = [
    {
      icon: Shield,
      title: t.about.values?.safety || 'Sécurité',
      description: t.about.values?.safetyDesc || 'Votre sécurité est notre priorité absolue avec des véhicules entretenus et des chauffeurs expérimentés.'
    },
    {
      icon: Star,
      title: t.about.values?.quality || 'Qualité',
      description: t.about.values?.qualityDesc || 'Service premium avec des véhicules de luxe et une attention particulière aux détails.'
    },
    {
      icon: Clock,
      title: t.about.values?.punctuality || 'Ponctualité',
      description: t.about.values?.punctualityDesc || 'Nous respectons vos horaires avec une ponctualité irréprochable.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.about.story?.title || 'Notre Histoire'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t.about.story?.paragraph1 || 'Depuis plus de 15 ans, nous offrons des services de transport premium à Bruxelles et dans toute la Belgique. Notre passion pour l\'excellence nous a permis de devenir une référence dans le secteur du transport de luxe.'}
                </p>
                <p>
                  {t.about.story?.paragraph2 || 'Nous nous engageons à fournir un service personnalisé, ponctuel et sécurisé, que ce soit pour vos déplacements d\'affaires, transferts aéroport ou événements spéciaux.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="About us"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.about.valuesTitle || 'Nos Valeurs'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.about.valuesSubtitle || 'Les principes qui guident notre service d\'excellence'}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.services.fleet.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.fleet.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.fleet.vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{vehicle.name}</h3>
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.common.readyToBook || 'Prêt à réserver votre transport ?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.common.contactUs || 'Contactez-nous dès maintenant pour un devis personnalisé'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.common.callNow}
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}