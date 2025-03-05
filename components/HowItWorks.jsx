import React from "react";
import { howItWorks } from "@/data/howItWorks";

const HowItWorks = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            How It Works
          </h2>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Four simple steps to accelerate your career growth
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl 
                     bg-white dark:bg-gray-800 shadow-md dark:shadow-lg 
                     transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
