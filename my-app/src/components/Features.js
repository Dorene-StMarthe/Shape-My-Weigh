import React from 'react';

const Features = () => {
  return (
    <div style={{ backgroundColor: 'black', backgroundImage: 'url("./featurebg.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh' }}>
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-8 hover:scale-110 transition-transform duration-300">Grid 1</div>
          <div className="bg-yellow rounded-lg p-8 hover:scale-110 transition-transform duration-300">Grid 2</div>
          <div className="bg-gray rounded-lg p-8 hover:scale-110 transition-transform duration-300">Grid 3</div>
          <div className="bg-marigold rounded-lg p-8 hover:scale-110 transition-transform duration-300">Grid 4</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
