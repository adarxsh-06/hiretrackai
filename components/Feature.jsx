import { features } from "@/data/features";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-gray-900 dark:text-white">
          Powerful Features for Your Career Growth
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 
                     hover:shadow-lg dark:hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800"
            >
              <CardContent className="pt-6 text-center flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
