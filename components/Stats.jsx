import React from "react";
import { WavyBackground } from "./ui/wavy-background";

const StatsSection = () => {
  return (
    <section className="relative h-[20rem] overflow-hidden flex items-center justify-center py-12 md:py-24">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="container mx-auto px-4 md:px-6 pb-10">
          <h1 className="text-3xl font-bold tracking-tighter text-center mb-20">Statistics</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7C65A] via-[#ED5E58] via-[#946DC4] to-[#717FF0]">
                50+
              </h3>
              <p className="text-muted-foreground/90">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7C65A] via-[#ED5E58] via-[#946DC4] to-[#717FF0]">
                1000+
              </h3>
              <p className="text-muted-foreground/90">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7C65A] via-[#ED5E58] via-[#946DC4] to-[#717FF0]">
                95%
              </h3>
              <p className="text-muted-foreground/90">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7C65A] via-[#ED5E58] via-[#946DC4] to-[#717FF0]">
                24/7
              </h3>
              <p className="text-muted-foreground/90">AI Support</p>
            </div>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default StatsSection;
