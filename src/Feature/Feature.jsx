import React from 'react';
import Emballage from "../assets/emballage.jpg";
import Quality from "../assets/quality.jpg";
import Logistic from "../assets/logistics.jpg";
import Ecology from "../assets/ecology.jpg";
import Consulting from "../assets/consulting.jpg";
import Delivry from "../assets/delivry.jpg";

const features = [
  {
    title: "Emballage Sur Mesure",
    description: "Solutions personnalisées pour répondre aux besoins de chaque client avec des emballages adaptés",
    bgImage: Emballage, // Replace with custom packaging image
  },
  {
    title: "Qualité Supérieure",
    description: "Matériaux et produits répondant aux normes industrielles strictes pour une protection optimale",
    bgImage: Quality, // Replace with quality control image
  },
  {
    title: "Services Logistiques",
    description: "Stockage temporaire et coordination logistique pour une gestion efficace de vos expéditions",
    bgImage: Logistic, // Replace with logistics image
  },
  {
    title: "Solutions Écologiques",
    description: "Engagement environnemental avec des matériaux recyclables et des processus durables",
    bgImage: Ecology, // Replace with eco-friendly image
  },
  {
    title: "Expertise Conseil",
    description: "Accompagnement personnalisé dans le choix des solutions d'emballage adaptées à vos besoins",
    bgImage: Consulting, // Replace with consulting image
  },
  {
    title: "Service Express",
    description: "Réactivité et rapidité garanties pour vos projets urgents avec livraisons ponctuelles",
    bgImage: Delivry, // Replace with express delivery image
  }
];

const Feature = () => {
  return (
    <div className="w-full px-4 py-16 bg-[#00000012]">
      <div className="max-w-7xl mx-auto bg-white p-12 relative top-[-100px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600">
            Nos Services Principaux
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos solutions d'emballage industriel innovantes, conçues pour garantir la protection, 
            l'efficacité et la durabilité de vos marchandises.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-40" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-100 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;