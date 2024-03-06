import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after a delay to trigger animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-marigold ${loaded ? 'animate-hero' : ''}`}>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`text-white ${loaded ? 'animate-hero-content' : ''}`}>
            <h1 className="text-7xl belanosima-semibold mb-4 py-20">Transform your body Transform your life</h1>
            <div className="mt-4 flex items-center">
              <a href="#" className="bg-white text-black text-lg font-semibold inline-block mr-4 py-3 px-4 rounded-lg flex items-center">
                <img src="./apple-logo.png" alt="Apple Logo" className="h-6 mr-2" />
                <span className="text-sm">Download on the
                <br/>App Store</span>
              </a>
              <a href="#" className="bg-white text-black text-lg font-semibold inline-block py-3 px-4 rounded-lg flex items-center">
                <img src="./google-logo.png" alt="Google Logo" className="h-6 mr-2" />
                <span className="text-sm">GET IT ON
                  <br/>Google Play</span>
              </a>
            </div>
          </div>
          <div className={`flex justify-center items-center relative overflow-hidden ${loaded ? 'animate-hero-phone' : ''}`}>
            <div className="transform -skew-y-6">
              <img src="./phone.png" alt="Mobile Phone" className="w-full md:max-w-sm rounded-lg " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

