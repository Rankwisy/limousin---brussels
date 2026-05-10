import React from 'react';
import { Phone, MessageCircle, Users, Shield, Clock, MapPin, Star, CheckCircle, ArrowRight, Car, Award } from 'lucide-react';
import { translations } from '../data/translations';

interface BusMinibusPageProps {
  currentLang: string;
  onPageChange: (page: string) => void;
}

const BusMinibusPage: React.FC<BusMinibusPageProps> = ({ currentLang, onPageChange }) => {
  const t = translations[currentLang as keyof typeof translations];

  React.useEffect(() => {
    // SEO optimization - update page title and meta description
    document.title = "Bus et Minibus de Luxe à Bruxelles | Transport Premium 2024 | Limousine Brussels";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Location de bus et minibus de luxe à Bruxelles. Service premium 24/7, chauffeur professionnel, flotte moderne. Devis gratuit ☎ (+32) 2 681 03 32');
    }
  }, []);

  const faqItems = [
    {
      question: "Quels types de véhicules proposez-vous pour le transport de groupe ?",
      answer: "Nous proposons une flotte complète : Mercedes Classe V (1-8 passagers), Mercedes Sprinter (9-20 passagers), et des bus premium (21-35 passagers). Tous nos véhicules sont équipés de la climatisation, Wi-Fi gratuit et sièges en cuir."
    },
    {
      question: "Vos chauffeurs sont-ils professionnels et expérimentés ?",
      answer: "Absolument ! Tous nos chauffeurs possèdent un permis professionnel, plus de 10 ans d'expérience, parlent plusieurs langues et suivent une formation continue. Ils connaissent parfaitement Bruxelles et la Belgique."
    },
    {
      question: "Proposez-vous des services 24h/24 et 7j/7 ?",
      answer: "Oui, nous sommes disponibles 24h/24 et 7j/7 pour tous vos déplacements. Que ce soit pour un transfert aéroport de nuit, un événement le week-end ou un voyage d'affaires urgent, nous sommes là."
    },
    {
      question: "Comment obtenir un devis pour la location d'un bus ou minibus ?",
      answer: "C'est très simple ! Appelez-nous au (+32) 2 681 03 32, envoyez-nous un message WhatsApp ou utilisez notre formulaire en ligne. Nous vous répondons dans les 15 minutes avec un devis personnalisé et transparent."
    },
    {
      question: "Vos tarifs incluent-ils l'assurance et les frais supplémentaires ?",
      answer: "Oui, nos tarifs sont tout compris : assurance tous risques, carburant, péages, parking et eau minérale offerte. Aucun frais caché, le prix annoncé est le prix final."
    }
  ];

  const features = [
    { icon: Users, title: "Jusqu'à 35 passagers", description: "Solutions adaptées à tous les groupes" },
    { icon: Shield, title: "Assurance tous risques", description: "Couverture complète incluse" },
    { icon: Clock, title: "Service 24h/24", description: "Disponibilité permanente" },
    { icon: Award, title: "Chauffeurs VTC", description: "Professionnels expérimentés" },
    { icon: Car, title: "Flotte récente", description: "Véhicules 2020-2024" },
    { icon: Star, title: "Service premium", description: "Confort et luxe garantis" }
  ];

  return (
    <article className="min-h-screen bg-white">
      {/* SEO Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bus et Minibus de Luxe à Bruxelles : Le Guide Complet 2024",
          "description": "Découvrez notre service premium de location de bus et minibus à Bruxelles. Transport de groupe, transferts aéroport, événements d'entreprise.",
          "author": {
            "@type": "Organization",
            "name": "Limousine Brussels"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Limousine Brussels",
            "logo": {
              "@type": "ImageObject",
              "url": "https://limousine.brussels/logo.png"
            }
          },
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": "https://limousine.brussels/bus-minbus/"
        })}
      </script>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bus et Minibus de Luxe à Bruxelles
            </h1>
            <h2 className="text-xl md:text-3xl text-yellow-400 font-semibold mb-6">
              Transport Premium pour Groupes : Confort, Sécurité et Excellence Garantis 24/7
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre flotte exclusive de bus et minibus haut de gamme pour tous vos déplacements de groupe à Bruxelles. 
              Service professionnel, chauffeurs expérimentés et véhicules de prestige depuis plus de 15 ans.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="tel:+3226810332"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone size={24} />
              <span>Devis Gratuit Immédiat</span>
            </a>
            <a 
              href="https://wa.me/32489001530"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={24} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dans un monde où la mobilité de groupe exige excellence et fiabilité, <strong>Limousine Brussels</strong> s'impose 
              comme le leader incontesté du transport premium en Belgique. Depuis 2008, nous révolutionnons l'expérience 
              du voyage collectif avec notre flotte exceptionnelle de bus et minibus de luxe.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Que vous organisiez un <strong>transfert aéroport pour 20 personnes</strong>, une <strong>sortie d'entreprise</strong>, 
              un <strong>mariage</strong>, ou une <strong>excursion touristique</strong>, nos véhicules premium et nos chauffeurs 
              professionnels transforment chaque trajet en expérience mémorable. Avec plus de <strong>500 clients satisfaits</strong> 
              et un taux de recommandation de <strong>98%</strong>, nous sommes votre partenaire de confiance pour tous vos 
              déplacements de groupe à Bruxelles et en Europe.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Pourquoi Choisir Nos Bus et Minibus Premium ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border hover:shadow-lg transition-shadow">
                  <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="text-black" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Fleet Section */}
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-16 md:-mx-8 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Notre Flotte Exclusive de Bus et Minibus
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Des véhicules de prestige soigneusement sélectionnés pour offrir un confort exceptionnel
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/V%20CLASS%20MERCEDES.jpg?updatedAt=1753564193271"
                  alt="Mercedes Classe V minibus luxury"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mercedes Classe V</h3>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center text-gray-600"><Users className="w-4 h-4 mr-2 text-yellow-500" /> <strong>1 à 8 passagers</strong></p>
                    <p className="text-gray-600">Le summum du minibus de luxe avec sièges en cuir, climatisation bi-zone et système multimédia dernière génération.</p>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Wi-Fi haut débit gratuit</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Prises USB et 220V</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Espace bagages généreux</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/sp6-980x670.jpg?updatedAt=1753538077484"
                  alt="Mercedes Sprinter minibus grand groupe"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mercedes Sprinter</h3>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center text-gray-600"><Users className="w-4 h-4 mr-2 text-yellow-500" /> <strong>9 à 20 passagers</strong></p>
                    <p className="text-gray-600">Idéal pour les groupes moyens avec un confort irréprochable et une modularité exceptionnelle.</p>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Configuration flexible</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Climatisation efficace</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Accès handicapé possible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://ik.imagekit.io/by733ltn6/Limousine%20Brussels/voyage-tourisme-voyage-sur-la-route-et-transport-de-passagers-bus-touristique-stationne-a-l-exterieur.jpg?updatedAt=1753575311928"
                  alt="Bus premium grand groupe luxe"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Bus Premium</h3>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center text-gray-600"><Users className="w-4 h-4 mr-2 text-yellow-500" /> <strong>21 à 35 passagers</strong></p>
                    <p className="text-gray-600">Bus de tourisme haut de gamme pour les grands groupes exigeants le maximum de confort.</p>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Toilettes à bord</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Réfrigérateur</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Système audio-vidéo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Nos Services de Transport de Groupe Premium
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Transferts Aéroport Groupe</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Service de navette premium</strong> vers Zaventem, Charleroi et tous les aéroports européens. 
                  Suivi des vols en temps réel, accueil personnalisé et aide aux bagages inclus.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Prise en charge à domicile ou hôtel</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Tarifs fixes sans surprises</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Assistance bagages lourds</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Événements d'Entreprise</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Solutions corporate sur mesure</strong> pour séminaires, congrès, team building et déplacements professionnels. 
                  Facturation entreprise et service de conciergerie disponibles.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Planning flexible</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Contrats cadres disponibles</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Facturation mensuelle</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mariages et Événements Privés</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Transport d'exception pour vos moments précieux</strong>. Décoration possible, champagne offert 
                  et service personnalisé pour faire de votre événement un souvenir inoubliable.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Véhicules décorés selon vos souhaits</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Champagne et petits fours offerts</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Photographe partenaire disponible</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Circuits Touristiques</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Découvrez la Belgique et l'Europe</strong> avec nos circuits sur mesure. Guides multilingues, 
                  itinéraires personnalisés et arrêts dégustation inclus.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Circuits Bruges, Gand, Anvers</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Dégustation bières et chocolats</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" /> Guides officiels certifiés</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white -mx-4 px-4 py-16 md:-mx-8 md:px-8 rounded-2xl">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Des Chiffres qui Parlent</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-xl">Années d'Excellence</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl">Clients Satisfaits</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-xl">Taux Recommandation</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-xl">Service Disponible</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Questions Fréquentes sur Nos Bus et Minibus
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <span className="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-11">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Réservez Votre Bus ou Minibus Premium Maintenant
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Profitez de notre <strong>offre de lancement 2024</strong> : -15% sur votre première réservation + 
            champagne offert pour les groupes de plus de 10 personnes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+3226810332"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone size={24} />
              <span>Appel Gratuit: (+32) 2 681 03 32</span>
            </a>
            <button 
              onClick={() => onPageChange('booking')}
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center justify-center space-x-2"
            >
              <span>Réservation en Ligne</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              L'Excellence du Transport de Groupe à Bruxelles
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En choisissant <strong>Limousine Brussels</strong> pour vos besoins de transport de groupe, vous optez pour 
              bien plus qu'un simple déplacement. Vous choisissez une <strong>expérience premium</strong> où chaque détail 
              compte, où la <strong>sécurité</strong> est prioritaire et où le <strong>service client exceptionnel</strong> 
              fait la différence.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre engagement ? Vous offrir le <strong>meilleur service de bus et minibus à Bruxelles</strong>, 
              avec une flotte moderne, des chauffeurs d'exception et une disponibilité 24h/24. 
              Contactez-nous dès maintenant au <strong>(+32) 2 681 03 32</strong> ou via WhatsApp pour découvrir 
              pourquoi plus de 500 clients nous font déjà confiance pour leurs déplacements de prestige.
            </p>
          </div>
        </section>

      </main>
    </article>
  );
};

export default BusMinibusPage;