import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Main from '@/components/Main';

const page = () => {
  return (
    <div>
    <div className="flex flex-wrap lg:flex-nowrap bg-white px-6 md:px-12 py-8 lg:py-16 gap-2">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 bg-[#2A254B] text-white p-6 md:p-12 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-extralight font-clash mb-4">It started with a small idea</h1>
        <p className="text-base md:text-lg mb-6">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <Button variant="default" className="w-[170Hug] md:w-auto  bg-[#4E4D93] h-[56Hug] gap-y-[10px] text-sm md:text-base px-6 py-3 text-white mt-4 md:mt-44 hover:bg-neutral-300 hover:text-[#2A254B]">
          View collection
        </Button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/Idea.png"
          alt="Story Image"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="flex flex-wrap lg:flex-nowrap bg-white px-6 md:px-12 py-8 lg:py-16">
    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/AboutImage.png" 
        alt="About Us Image"
        width={800}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-12">
      <h1 className="text-2xl md:text-3xl font-extralight font-clash text-[#2A254B] mb-4">
        Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite
      </h1>
      <p className="text-base md:text-lg text-[#505977] mb-6">
        When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
      </p>
      <p className="text-base md:text-lg text-[#505977] mb-6">
        Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique
        becomes the hotbed for the London interior design community.
      </p>
      <Link href="/contact">
      <Button variant="secondary" className=" bg-neutral-200 hover:bg-neutral-300 py-3 px-6 transition">
        Get in touch
      </Button>
      </Link>
    </div>
    </div>
    <Main/>
    </div>
  );
};

export default page;
