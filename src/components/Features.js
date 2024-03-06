import React from 'react';

const Features = () => {
  return (
    <div style={{ backgroundColor: 'black', backgroundImage: 'url("./featurebg.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh' }}>
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-8 hover:scale-110 transition-transform duration-300">Grid 1
          <div className="h-full">Grid 1</div>
          </div>
          <div className="bg-midnight/50 rounded-lg p-8 hover:scale-110 transition-transform duration-300">Grid 2
          <div className="h-full">Grid 2</div>
          </div>
          <div className="bg-gray/50 rounded-lg p-8 hover:scale-110 transition-transform duration-300">Grid 3
          <div className="h-full">Grid 3</div>
          </div>
          <div className="bg-marigold/50 rounded-lg p-8 hover:scale-110 transition-transform duration-300">Grid 4
          <div className="h-full">Grid 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
