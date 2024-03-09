
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How can I create a workout plan?",
      answer: "You can create a workout plan by navigating to the 'Create Plan' section and selecting the exercises you want to include."
    },
    {
      question: "Can I delete a workout from my plan?",
      answer: "Yes, you can delete a workout from your plan by clicking on the delete icon next to the workout."
    },
    {
      question: "Is it possible to edit my workout plan?",
      answer: "Absolutely! You can edit your workout plan by clicking on the edit icon next to the workout."
    },
    {
      question: "How do I track my workouts?",
      answer: "You can track your workouts by going to the 'Track Workout' section and logging your exercises and progress."
    },
    {
      question: "Can I customize my workout program?",
      answer: "Yes, you can customize your workout program by adding or removing exercises and adjusting the sets and reps."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

