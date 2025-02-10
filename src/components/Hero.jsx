import React from 'react';
import middleimg from "../assets/1-02.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

const Hero = () => {
  const NotifyButton = () => (
      <a href="https://play.google.com/store/apps/details?id=com.hungreli">
    <button className="bg-[#519A6F] text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto text-lg font-medium tracking-wide cursor-pointer">
      Dowload the app
    </button>
      </a>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-8 xl:gap-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <div className="inline-flex flex-wrap justify-center lg:justify-start gap-x-3">
              <span className="text-[#EE5A36] font-extrabold whitespace-nowrap">
                Beat the Hunger
              </span>
              <span className="text-gray-900 font-extrabold whitespace-nowrap">
                Stay Hungreli!
              </span>
            </div>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 text-lg sm:text-xl leading-relaxed">
            A food delivery experience like never before. Faster, smarter, and made for food lovers.
          </p>
          {/* Desktop Button */}
          <div className="hidden lg:block">
            <NotifyButton />
          </div>
        </div>

        {/* Center Section - Delivery Person Image */}
        <div className="w-full lg:w-1/3 mb-12 lg:mb-0 flex flex-col items-center relative">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:translate-x-8">
            <img 
              src={middleimg} 
              alt="Delivery Person" 
              className="w-full h-full object-contain"
            />
          </div>
          {/* Mobile Button */}
          <div className="lg:hidden mt-10 w-full sm:w-auto">
            <NotifyButton />
          </div>
        </div>

        {/* Right Section - Features */}
        <div className="w-full lg:w-1/3 space-y-8 max-w-md mx-auto lg:mx-0">
          {/* Fast Delivery Feature */}
          <div className="flex items-center space-x-6 bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <img 
                src={icon1} 
                alt="Fast Delivery" 
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain" 
              />
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-1">
                Super Fast Deliveries
              </h3>
            </div>
          </div>

          {/* Exclusive Deals Feature */}
          <div className="flex items-center space-x-6 bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <img 
                src={icon2} 
                alt="Exclusive Deals" 
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain" 
              />
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-1">
                Exclusive Deals
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">& Discounts</p>
            </div>
          </div>

          {/* User Friendly App Feature */}
          <div className="flex items-center space-x-6 bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <img 
                src={icon3} 
                alt="User Friendly App" 
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain" 
              />
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-1">
                User-Friendly App
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;