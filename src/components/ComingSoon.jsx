  import React from "react";
  import bgimg from "../assets/comingsoonimg.png";
  import biryani from "../assets/biryani.png";
  import milkshake from "../assets/milkshake.png";
  import phoneimg from "../assets/phone.png";
  import playStoreIcon from "../assets/playstore.png";
  import appStoreIcon from "../assets/appstore.png";

  const ComingSoon = () => {
    // Replace with your actual Play Store URL
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.hungreli";

    return (
      <div className="relative w-full max-w-7xl mx-auto px-4 my-8 md:my-16 lg:my-28">
        <div className="relative min-h-[400px] md:h-[60vh] lg:h-[63vh]">
          {/* Background Image - Orange curved rectangle */}
          <div className="absolute inset-0">
            <img 
              src={bgimg} 
              alt="" 
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full">
            {/* Text and Phone Container */}
            <div className="flex items-center h-full pt-8">
              {/* Left Side with Phone */}
              <div className="relative ml-4 md:ml-8 lg:ml-24">
                <img
                  src={phoneimg}
                  alt="Hungreli App"
                  className="w-48 md:w-56 lg:w-68 h-auto [filter:drop-shadow(0_20px_20px_rgba(0,0,0,0.3))_drop-shadow(0_35px_35px_rgba(0,0,0,0.20))_drop-shadow(0_50px_65px_rgba(0,0,0,0.19))]"
                />
              </div>

              {/* Right Side with Text */}
              <div className="text-white ml-4 md:ml-6 lg:ml-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 drop-shadow-lg">
                  Get Started Now
                </h2>
                <p className="text-xl md:text-2xl opacity-80">Download the App</p>
              </div>
            </div>

            {/* Store Icons Container - Positioned at bottom */}
            <div className="absolute bottom-0 left-1/2 md:left-1/3 lg:left-1/3  -translate-x-1/24  flex gap-3 md:gap-6 lg:gap-8">
              {/* Play Store Button */}
              <a 
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-t-full w-20 h-20 md:28 md:28 lg:w-28 lg:h-28 flex items-center justify-center pt-4 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src={playStoreIcon}
                  alt="Get it on Play Store"
                  className="w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20 object-contain p-1 pl-2 mb-4"
                />
              </a>
              
              {/* App Store Coming Soon */}
              <div className="relative">
                <div className="bg-white/80 rounded-t-full w-20 h-20 md:w-28 md:h-28 lg:w-28 lg:h-28 flex items-center justify-center pt-4">
                  <img
                    src={appStoreIcon}
                    alt="App Store"
                    className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain opacity-50 mb-4"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white text-xs md:text:sm lg:text-sm font-medium bg-black/50 px-2 md:px-3 lg:px-3 py-1 rounded-full whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Floating Food Images */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Biryani Image */}
            <div className="absolute top-0 right-0 md:-top-20 lg:-top-40 md:-right-8 lg:-right-16">
              <img
                src={biryani}
                alt="Biryani"
                className="hidden md:block w-64 md:w-80 lg:w-76 h-auto object-contain z-20 transform -rotate-12 -skew-x-6 hover:scale-105 transition-transform drop-shadow-2xl"
              />
            </div>

            {/* Milkshake Image */}
            <div className="absolute bottom-0 right-0 md:-bottom-8 lg:-bottom-16 md:right-24 lg:right-32">
              <img
                src={milkshake}
                alt="Bubble Tea"
                className="hidden md:block w-32 md:w-36 lg:w-44 h-auto object-contain z-20 -rotate-12 transform drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ComingSoon;