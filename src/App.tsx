import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BookingPage from './components/BookingPage';
import BusMinibusPage from './components/BusMinibusPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLang, setCurrentLang] = useState('fr');

  // Update page title and meta description based on current page and language
  useEffect(() => {
    const t = translations[currentLang as keyof typeof translations];
    const seoData = t.seo[currentPage as keyof typeof t.seo];
    
    if (seoData) {
      // Update page title
      document.title = seoData.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.description);
      } else {
        // Create meta description if it doesn't exist
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', seoData.description);
        document.head.appendChild(metaDescription);
      }
      
      // Update Open Graph title and description
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', seoData.title);
      }
      
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', seoData.description);
      }
      
      // Update canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      
      const baseUrl = 'https://limousine.brussels';
      const pagePaths: { [key: string]: string } = {
        home: '/',
        services: '/services',
        about: '/about',
        contact: '/contact',
        booking: '/booking',
        'bus-minbus': '/bus-minbus'
      };
      
      const canonicalUrl = baseUrl + (pagePaths[currentPage] || '/');
      canonicalLink.setAttribute('href', canonicalUrl);
    }
  }, [currentPage, currentLang]);

  // Handle initial page load based on URL path
  useEffect(() => {
    const path = window.location.pathname;
    console.log('🔍 DEBUG: Current path on load:', path);
    console.log('🔍 DEBUG: Full URL:', window.location.href);
    
    // Map URL paths to page states
    const pathToPage: { [key: string]: string } = {
      '/': 'home',
      '/home': 'home',
      '/services': 'services',
      '/about': 'about',
      '/contact': 'contact',
      '/booking': 'booking',
      '/bus-minbus/': 'bus-minbus',
      '/bus-minbus': 'bus-minbus'  // Handle both with and without trailing slash
    };

    // Set the page based on the current path, default to 'home' if not found
    const page = pathToPage[path] || 'home';
    console.log('🔍 DEBUG: Mapping path to page:', page);
    setCurrentPage(page);
    
    // Additional debugging
    console.log('🔍 DEBUG: Available path mappings:', Object.keys(pathToPage));
    console.log('🔍 DEBUG: Final currentPage state will be:', page);
  }, []);

  // Enhanced page change handler that also updates the URL
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    
    // Update the URL without reloading the page
    const pagePaths: { [key: string]: string } = {
      home: '/',
      services: '/services',
      about: '/about',
      contact: '/contact',
      booking: '/booking',
      'bus-minbus': '/bus-minbus'  // Use without trailing slash for consistency
    };
    
    const newPath = pagePaths[page] || '/';
    window.history.pushState({}, '', newPath);
  };

  const renderPage = () => {
    console.log('🎯 RENDER: Currently rendering page:', currentPage);
    switch (currentPage) {
      case 'home':
        return <HomePage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'services':
        return <ServicesPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'booking':
        return <BookingPage currentLang={currentLang} />;
      case 'bus-minbus':
        console.log('Rendering BusMinibusPage'); // Debug log
        return <BusMinibusPage currentLang={currentLang} onPageChange={handlePageChange} />;
      default:
        console.log('Default case, rendering HomePage'); // Debug log
        return <HomePage currentLang={currentLang} onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;