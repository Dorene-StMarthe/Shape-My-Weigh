import React from 'react';

const Hero = () => {
  return (
    <div className="bg-marigold">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-white">
            <h1 className="text-6xl belanosima-semibold mb-4">Transform your body Transform your life</h1>
            <a href="#" className="text-lg text-white belanosima-regular mt-4 inline-block hover:underline">Learn More</a>
          </div>
          <div className="flex justify-center items-center">
            <img src="./hero-image.jpg" alt="Hero" className="w-full md:max-w-sm rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
