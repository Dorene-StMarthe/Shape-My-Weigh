import React, { useState, useEffect } from 'react';

const Features = () => {
  const [reviews, setReviews] = useState([
    { id: 1, text: 'Great feature!', rating: 5 },
    { id: 2, text: 'Could be better', rating: 3 },
    { id: 3, text: 'Not impressed', rating: 2 },
    { id: 4, text: 'Amazing!', rating: 5 }
  ]);

  useEffect(() => {
    // Fetch reviews from backend here if needed
  }, []);

  return (
    <div style={{ backgroundColor: 'black', backgroundImage: 'url("./featurebg.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh' }}>
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reviews.map(review => (
            <div key={review.id} className="bg-white/50 rounded-lg p-8 hover:scale-110 transition-transform duration-300">
              <div className="h-full">
                <p>{review.text}</p>
                <p>Rating: {review.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

