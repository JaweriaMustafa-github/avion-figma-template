import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-neutral-100 w-full h-[704px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-0"></div>

      {/* Content */}
      <div className="relative bg-white p-8 shadow-lg w-[630px] h-[444px] ml-[500px]">
        <h2 className="text-3xl font-normal w-[513px] h-[90Hug] text-[#22202E] mb-4">
          Luxury homeware for people who love timeless design quality
        </h2>
        <p className="text-[#5B5676] mb-6">
          Shop the new Spring 2022 collection today
        </p>
        <Button variant="secondary" className="w-[170Hug] h-[56Hug] gap-y-[10px] px-[32px] py-[16px] text-[#2A254B] mt-44">View Collection</Button>
      </div>
    </section>
  );
};

export default Hero;

