import React from 'react';
import CustomerReview from '../components/CustomerReview';

const ReviewPage = () => {
  // Generate some sample customer reviews
  const customerReviews = [
    { name: 'Jamal Smith', review: 'Shape My Weigh has been an incredible journey for me. I\'ve never been this fit!' },
    { name: 'Lauren Washington', review: 'I\'m so grateful for Shape My Weigh. It\'s helped me transform my body and my mindset.' },
    { name: 'Malik Johnson', review: 'Shape My Weigh is the real deal. It\'s like having a personal trainer in your pocket!' },
    { name: 'Aisha Williams', review: 'Thanks to Shape My Weigh, I feel stronger and more confident than ever before.' },
    { name: 'Tyrone Jones', review: 'I was skeptical at first, but Shape My Weigh exceeded all my expectations. Highly recommended!' },
    { name: 'Ebony Davis', review: 'I love Shape My Weigh! It\'s helped me make fitness a part of my lifestyle.' },
    { name: 'John Doe', review: 'I love Shape My Weigh! It helped me achieve my fitness goals.' },
    { name: 'Jane Smith', review: 'This app is amazing! I have never felt better.' },
    
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-marigold">Shape My Weigh</h1>
      <p className="text-gray-700 mb-8">Welcome to Shape My Weigh. Here are some customer reviews:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customerReviews.map((review, index) => (
          <CustomerReview key={index} name={review.name} review={review.review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
