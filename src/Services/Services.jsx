import React from 'react';
import { Check, Truck, HeadsetIcon, ClipboardList } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
          style={{ backgroundColor: '#0ea298' }}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Check,
      title: "Qualité et Prix Compétitifs",
      description: "Nous nous engageons à fournir des produits de haute qualité à des prix abordables. Notre sélection rigoureuse garantit que chaque produit répond aux plus hauts standards tout en restant accessible."
    },
    {
      icon: Truck,
      title: "Livraison et Modes de Paiement Multiples",
      description: "Offrez-vous flexibilité et commodité avec nos options de livraison variées et nos multiples moyens de paiement. Nous adaptons nos services à vos besoins pour une expérience d'achat sans contrainte."
    },
    {
      icon: HeadsetIcon,
      title: "Assistance et Support Après-Vente",
      description: "Notre engagement ne s'arrête pas à la vente. Nous proposons un support technique et un service client de premier ordre pour vous accompagner et résoudre vos éventuelles questions ou problèmes."
    },
    {
      icon: ClipboardList,
      title: "Audit et Formation",
      description: "Bénéficiez de nos services d'audit et de formation sur mesure. Nous vous aidons à optimiser vos processus, améliorer vos compétences et atteindre vos objectifs professionnels."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0ea298] mb-4">Our Services</h1>
        <p className="text-gray-600 mb-6">
            Browse our complete range of services.
          </p>
      </div>

      {/* Services Grid */}
      <div className="grid gird-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <button 
          className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300"
          style={{ 
            backgroundColor: '#0ea298',
            boxShadow: '0 4px 6px rgba(14, 162, 152, 0.4)',
            hover: { backgroundColor: '#0d9388' }
          }}
        >
          Contactez-Nous
        </button>
      </div>
    </div>
  );
};

export default Services;