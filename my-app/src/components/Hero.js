import React from 'react';

const Hero = () => {
  return (
    <div className="bg-marigold">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-white">
            <h1 className="text-6xl belanosima-semibold mb-4">Transform your body Transform your life</h1>
            <div className="mt-4 flex items-center">
            <a href="#" className="bg-white text-black text-lg font-semibold inline-block mr-4 py-3 px-4 rounded-lg flex items-center">
            <span className="mr-2 text-sm">Download on the</span>
                <img src="./apple-logo.png" alt="Apple Logo" className="h-6 mr-2" />
                App Store
              </a>
              <a href="#" className="bg-white text-black text-lg font-semibold inline-block py-3 px-4 rounded-lg flex items-center">
              <span className="text-sm">GET IT ON</span><br/>
                <img src="./google-logo.png" alt="Google Logo" className="h-6 mr-2" />
                Google Play
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center relative overflow-hidden">
            
          <div className="transform -skew-y-6">
                <img src="./phone.png" alt="Mobile Phone" className="w-full md:max-w-sm rounded-lg shadow-lg" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full "></div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Hero;
