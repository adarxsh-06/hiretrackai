import React from "react";
import { testimonial } from "@/data/testimonial";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300">
          What Our Users Say
        </h2>

        {/* Testimonials Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonial.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white dark:bg-gray-800 shadow-md dark:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-gray-700 rounded-xl 
            opacity-0 translate-x-[-50px] animate-slideIn delay-[${
              index * 200
            }ms]`}
            >
              <CardContent className="pt-6 p-6">
                <div className="flex flex-col space-y-4">
                  {/* Author Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        width={40}
                        height={40}
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="rounded-full object-cover border-2 border-primary/40 dark:border-primary/60"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-primary">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="relative text-gray-700 dark:text-gray-300 italic transition-colors duration-300">
                    <span className="text-4xl text-primary absolute -top-6 left-0">
                      “
                    </span>
                    {testimonial.quote}
                    <span className="text-4xl text-primary absolute -bottom-6 right-0">
                      ”
                    </span>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
