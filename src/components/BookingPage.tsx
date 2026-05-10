import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, MessageCircle, Phone, Send, Car } from 'lucide-react';
import { translations } from '../data/translations';

interface BookingPageProps {
  currentLang: string;
}

const BookingPage: React.FC<BookingPageProps> = ({ currentLang }) => {
  const t = translations[currentLang as keyof typeof translations];
  const [formData, setFormData] = useState({
    service: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '',
    luggage: '',
    notes: ''
  });

  const services = [
    { value: 'minibus', label: t.services.minibus.title },
    { value: 'airport', label: t.services.airport.title },
    { value: 'tours', label: t.services.tours.title },
    { value: 'business', label: t.services.business.title }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking form submitted:', formData);
    // You can add actual form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.booking.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t.booking.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    {currentLang === 'fr' ? 'Détails de votre réservation' : 
                     currentLang === 'nl' ? 'Details van uw reservering' : 
                     'Your booking details'}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Type */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.booking.form.service} *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                      >
                        <option value="">
                          {currentLang === 'fr' ? 'Sélectionnez un service' : 
                           currentLang === 'nl' ? 'Selecteer een service' : 
                           'Select a service'}
                        </option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Pickup and Dropoff */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.booking.form.pickup} *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                          <input
                            type="text"
                            id="pickup"
                            name="pickup"
                            value={formData.pickup}
                            onChange={handleChange}
                            required
                            placeholder={currentLang === 'fr' ? 'Adresse de départ' : 
                                       currentLang === 'nl' ? 'Vertrekadres' : 
                                       'Pickup address'}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.booking.form.dropoff} *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                          <input
                            type="text"
                            id="dropoff"
                            name="dropoff"
                            value={formData.dropoff}
                            onChange={handleChange}
                            required
                            placeholder={currentLang === 'fr' ? 'Destination' : 
                                       currentLang === 'nl' ? 'Bestemming' : 
                                       'Destination'}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.booking.form.date} *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.booking.form.time} *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                          <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Passengers and Luggage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.booking.form.passengers} *
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 text-gray-400" size={20} />
                          <select
                            id="passengers"
                            name="passengers"
                            value={formData.passengers}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                          >
                            <option value="">
                              {currentLang === 'fr' ? 'Nombre de passagers' : 
                               currentLang === 'nl' ? 'Aantal passagiers' : 
                               'Number of passengers'}
                            </option>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 20].map((num) => (
                              <option key={num} value={num.toString()}>
                                {num} {num === 1 ? 
                                  (currentLang === 'fr' ? 'passager' : 
                                   currentLang === 'nl' ? 'passagier' : 
                                   'passenger') :
                                  (currentLang === 'fr' ? 'passagers' : 
                                   currentLang === 'nl' ? 'passagiers' : 
                                   'passengers')
                                }
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="luggage" className="block text-sm font-medium text-gray-700 mb-2">
                          {t.booking.form.luggage}
                        </label>
                        <input
                          type="text"
                          id="luggage"
                          name="luggage"
                          value={formData.luggage}
                          onChange={handleChange}
                          placeholder={currentLang === 'fr' ? 'Nombre de bagages' : 
                                     currentLang === 'nl' ? 'Aantal koffers' : 
                                     'Number of bags'}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.booking.form.notes}
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder={currentLang === 'fr' ? 'Informations complémentaires, demandes spéciales...' : 
                                   currentLang === 'nl' ? 'Aanvullende informatie, speciale verzoeken...' : 
                                   'Additional information, special requests...'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>{t.booking.form.submit}</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">
                    {currentLang === 'fr' ? 'Besoin d\'aide ?' : 
                     currentLang === 'nl' ? 'Hulp nodig?' : 
                     'Need help?'}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {currentLang === 'fr' ? 'Notre équipe est disponible 24h/24 pour vous assister.' : 
                     currentLang === 'nl' ? 'Ons team is 24/7 beschikbaar om u te helpen.' : 
                     'Our team is available 24/7 to assist you.'}
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="tel:+3226810332"
                      className="flex items-center space-x-3 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Phone size={18} />
                      <span>(+32) 2 681 03 32</span>
                    </a>

                  </div>
                </div>

                {/* Vehicle Options */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {currentLang === 'fr' ? 'Nos Véhicules' : 
                     currentLang === 'nl' ? 'Onze Voertuigen' : 
                     'Our Vehicles'}
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        name: 'Mercedes Classe V',
                        passengers: '1-8',
                        image: 'https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/MERCEDES-V-CLASS-Mercedes-Benz-Vito-Mercedes-Benz-A-Class.png'
                      },
                      {
                        name: 'Mercedes Sprinter',
                        passengers: '9-20',
                        image: 'https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/une-camionnette-de-livraison-noire-moderne.jpg?updatedAt=1753577428214'
                      }
                    ].map((vehicle, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-16 h-12 bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src={vehicle.image} 
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{vehicle.name}</div>
                          <div className="text-sm text-gray-600">
                            {vehicle.passengers} {currentLang === 'fr' ? 'passagers' : 
                                                currentLang === 'nl' ? 'passagiers' : 
                                                'passengers'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {currentLang === 'fr' ? 'Inclus dans nos services' : 
                     currentLang === 'nl' ? 'Inbegrepen in onze services' : 
                     'Included in our services'}
                  </h3>
                  
                  <ul className="space-y-2">
                    {[
                      currentLang === 'fr' ? 'Chauffeur professionnel' : 
                      currentLang === 'nl' ? 'Professionele chauffeur' : 
                      'Professional chauffeur',
                      
                      currentLang === 'fr' ? 'Assurance tous risques' : 
                      currentLang === 'nl' ? 'Omnium verzekering' : 
                      'Comprehensive insurance',
                      
                      currentLang === 'fr' ? 'Wi-Fi gratuit' : 
                      currentLang === 'nl' ? 'Gratis Wi-Fi' : 
                      'Free Wi-Fi',
                      
                      currentLang === 'fr' ? 'Eau minérale' : 
                      currentLang === 'nl' ? 'Mineraalwater' : 
                      'Mineral water'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;