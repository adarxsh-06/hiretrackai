import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="w-full">
      <div className="mx-auto py-24 px-6 sm:px-10 md:px-16 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg transition-all duration-500">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl transition-colors duration-300">
            Ready to Accelerate Your Career?
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-[600px] text-white/90 md:text-xl transition-colors duration-300">
            Join thousands of professionals who are advancing their careers with
            AI-powered guidance.
          </p>

          {/* Button */}
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-6 mt-5 bg-white animate-bounce text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-500 shadow-md hover:shadow-lg"
            >
              Start Your Journey Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
