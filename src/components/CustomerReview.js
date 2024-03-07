import React from 'react';

const CustomerReview = ({ name, review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="font-semibold text-midnight">{name}</p>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

export default CustomerReview;
