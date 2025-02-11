import React from "react";
import { motion } from "framer-motion";
import phoneimg from '../assets/phone.png'
import bgimg from '../assets/bgimg.png'
import getplaystore from '../assets/getplaystore.png'
import appstore from '../assets/getappstore.svg'

import food5 from '../assets/food5.png'
import food6 from '../assets/food6.png'

const ScrollTriggered = () => {
  const foodAnimationVariants = {
    popUp: {
      hidden: { opacity: 0, scale: 0, y: 50 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    },
    slideIn: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -180, scale: 0 },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    }
  };

  const foodImages = [
    // Left side food image
   
   
    {
      position: "bottom-36 left-10 md:bottom-44 md:left-24 lg:bottom-44 lg:left-24",
      size: "w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40",
      animation: "rotateIn",
      delay: 0.6,
      image: food6
    },
    // Right side food image
    {
      position: "top-64 right-2  md:top-24 md:right-10 lg:top-14 lg:right-40",
      size: "w-24 h-24 md:w-48 md:h-48 lg:w-56 lg:h-56",
      animation: "popUp",
      delay: 0.3,
      image: food5
    },
   
 
    // Additional floating images
   
  
  ];

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="mx-auto max-w-6xl w-full pb-24 mt-2 relative">
      {/* Background section with lower z-index */}
      <motion.div
        className="overflow-hidden flex justify-center items-center relative z-0"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <div className="absolute w-full mt-80 md:mt-64 lg:mt-64">
          <img src={bgimg} alt="Background" className="w-full px-4"/>
        </div>
        
        {/* Phone with higher z-index than background but lower than food */}
        <motion.div
          className="w-[300px] h-[430px] flex justify-center items-center rounded-2xl relative z-10"
          style={{ transformOrigin: "10% 60%" }}
          variants={cardVariants}
        >
          <img src={phoneimg} alt="Phone" className="w-24 h-48 md:w-44 md:h-84 lg:w-48 lg:h-88" />
        </motion.div>
      </motion.div>

      {/* Food images with highest z-index */}
      <div className="absolute inset-0 z-20">
        {foodImages.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} ${item.size}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={foodAnimationVariants[item.animation]}
            whileHover={{ scale: 1.1 }}
            animate={floatingAnimation}
            transition={{ delay: item.delay }}
          >
            <img 
              // src={`/api/placeholder/${item.size.split('w-')[1]}/${item.size.split('h-')[1]}`}
              src={item.image}
              alt={`Food item ${index + 1}`}
              className={`${item.size} rounded-full object-cover`}
            />
          </motion.div>
        ))}
      </div>

      {/* App store buttons with highest z-index */}
      <div className="flex flex-row  gap-4 mt-11 justify-center relative z-20">
        <a href="#" className="inline-block">
          <img
            src={getplaystore}  
            alt="Get it on Google Play"
            className="h-8 w-auto md:h-16 lg:h-16"
          />
        </a>
        <a href="#" className="inline-block">
          <img
            src={appstore}
            alt="Download on the App Store"
            className="h-8 w-auto md:h-16 lg:h-16"
          />
        </a>
      </div>
    </div>
  );
};

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default ScrollTriggered;