import React from 'react';
import reachicon from "../assets/reachicon.png"
import orderMG from "../assets/ordermanagement.png"
import supporticon from "../assets/customersupport.png" 

const RestaurantCTA = () => {
  const features = [
    {
      title: "Expand Your\nReach",
      description: "Get more customers,\nboost sales!",
      icon: reachicon
    },
    {
      title: "Seamless Order\nManagement",
      description: "Easy-to-use partner\ndashboard.",
      icon: orderMG
    },
    {
      title: "Marketing\nSupport",
      description: "More visibility, more\norders!",
      icon: supporticon
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Calling All Restaurant Owners!
        </h1>
        <div className="space-y-1">
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Want to grow your food business with Hungreli?
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Partner with us today
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-6">
            <div className="w-32 h-32 rounded-full border-2 border-orange-200 flex items-center justify-center">
              <div className="bg-white rounded-full shadow-lg w-28 h-28 flex items-center justify-center ring-1 ring-gray-100/50">
                <img src={feature.icon} alt="cta-icon" className="w-12 h-12"/>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-2xl text-gray-900 whitespace-pre-line leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg whitespace-pre-line leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScY9r9RXtoKT54dvIYZbGUCVNAtbNg99uXBahlcEfKuYcP1bw/viewform">
      <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 shadow-md cursor-pointer">
        Join Hungreli!
      </button>
        </a>
    </div>
  );
};

export default RestaurantCTA;