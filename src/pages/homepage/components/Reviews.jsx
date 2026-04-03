import { useEffect, useState } from 'react';
import '../../../styles/Reviews.css';

const reviews = [
  {
    name: 'Sarah J.',
    rating: 5,
    text: 'Absolutely amazing service! My house has never been this clean.',
  },
  {
    name: 'Michael P.',
    rating: 5,
    text: 'Professional, thorough, and friendly. Highly recommend!',
  },
  {
    name: 'Emma W.',
    rating: 5,
    text: "They went above and beyond. I'll definitely use them again!",
  },
  {
    name: 'John D.',
    rating: 5,
    text: 'Fantastic job! My office looks spotless.',
  },
  {
    name: 'Lisa K.',
    rating: 5,
    text: 'The team was prompt, efficient, and very detail-oriented.',
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reviews-carousel">
      <div className="review">
        <div className="review-stars">
          {'*'.repeat(reviews[currentIndex].rating)} {'o'.repeat(5 - reviews[currentIndex].rating)}
        </div>
        <p className="review-text">&quot;{reviews[currentIndex].text}&quot;</p>
        <p className="review-author">- {reviews[currentIndex].name}</p>
      </div>

      <div className="carousel-dots">
        {reviews.map((_, index) => (
          <span
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            key={index}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
