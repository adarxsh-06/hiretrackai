"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);
  
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          {/* Title */}
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">
            A Futuristic Career Guide
            <br />
            <span className="block dark:text-white">
              Professional Greatness
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="relative overflow-hidden px-8 text-white border border-violet-600 dark:border-violet-600
             bg-transparent group transition-all duration-300 ease-in-out"
            >
              {/* Wave Fill Effect */}
              <span
                className="absolute inset-0 bg-violet-600 dark:bg-violet-600 w-full h-full 
                   scale-x-0 group-hover:scale-x-100 transition-transform duration-[2000ms] 
                   ease-[cubic-bezier(0.25,1,0.5,1)] 
                   clip-path-[polygon(0% 100%, 25% 80%, 50% 100%, 75% 80%, 100% 100%, 100% 0%, 0% 0%)]"
              ></span>

              {/* Button Text (Always Visible) */}
              <span className="relative z-10 text-black font-semibold dark:text-white">
                Get Started
              </span>
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/banner.webp"}
              width={1040}
              height={500}
              alt="dashboard preview"
              className="rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700 mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
