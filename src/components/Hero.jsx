import React from 'react';
import { motion } from 'framer-motion';
import middleimg from "../assets/1-02.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

const Hero = () => {
  // Enhanced Button Component with animations
  const NotifyButton = () => {
    // Pulse animation keyframes
    const pulseVariants = {
      initial: { scale: 1, boxShadow: "0 0 0 0 rgba(81, 154, 111, 0.7)" },
      pulse: {
        scale: [1, 1.02, 1],
        boxShadow: [
          "0 0 0 0 rgba(81, 154, 111, 0.7)",
          "0 0 0 10px rgba(81, 154, 111, 0)",
          "0 0 0 0 rgba(81, 154, 111, 0)"
        ],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      },
      hover: {
        scale: 1.05,
        backgroundColor: '#458c63',
        boxShadow: "0 5px 15px rgba(81, 154, 111, 0.4)",
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    };

    return (
      <a href="https://play.google.com/store/apps/details?id=com.hungreli">
        <motion.button 
          className="bg-[#519A6F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg w-full sm:w-auto text-base sm:text-lg font-medium tracking-wide cursor-pointer"
          variants={pulseVariants}
          initial="initial"
          animate="pulse"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          Download the app
        </motion.button>
      </a>
    );
  };

  // Heading text animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Color text animation variants
  const colorTextVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Subtitle animation variants
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // [Previous animation variants remain the same]
  const imageAnimationVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0,
      x: 50
    },
    show: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  const FeatureCard = ({ icon, title, subtitle }) => (
    <motion.div 
      className="flex items-center space-x-4 sm:space-x-6 bg-white p-3 sm:p-4 rounded-lg"
      variants={featureVariants}
      whileHover="hover"
    >
      <motion.div 
        className="flex-shrink-0"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={icon} 
          alt={title} 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" 
        />
      </motion.div>
      <div>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-16">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-8 xl:gap-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 sm:mb-10 lg:mb-0">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            <div className="inline-flex flex-wrap justify-center lg:justify-start gap-x-2 sm:gap-x-3">
              <motion.span 
                className="text-[#EE5A36] font-extrabold whitespace-nowrap"
                variants={colorTextVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Beat the Hunger
              </motion.span>
              <motion.span 
                className="text-gray-900 font-extrabold whitespace-nowrap"
                variants={colorTextVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                Stay Hungreli!
              </motion.span>
            </div>
          </motion.h1>
          <motion.p 
            className="text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 text-base sm:text-lg md:text-xl leading-relaxed"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            A food delivery experience like never before. Faster, smarter, and made for food lovers.
          </motion.p>
          <div className="hidden lg:block">
            <NotifyButton />
          </div>
        </div>

        {/* Center Section - Animated Delivery Person Image */}
        <div className="w-full lg:w-1/3 mb-8 sm:mb-10 lg:mb-0 flex flex-col items-center relative">
          <motion.div 
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:translate-x-8"
            initial="initial"
            animate={["animate", "float"]}
            variants={imageAnimationVariants}
          >
            <img 
              src={middleimg} 
              alt="Delivery Person" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="lg:hidden mt-8 w-full sm:w-auto">
            <NotifyButton />
          </div>
        </div>

        {/* Right Section - Animated Features */}
        <motion.div 
          className="w-full lg:w-1/3 space-y-6 sm:space-y-8 max-w-md mx-auto lg:mx-0"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <FeatureCard 
            icon={icon1}
            title="Super Fast Deliveries"
          />
          
          <FeatureCard 
            icon={icon2}
            title="Exclusive Deals"
            subtitle="& Discounts"
          />
          
          <FeatureCard 
            icon={icon3}
            title="User-Friendly App"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;