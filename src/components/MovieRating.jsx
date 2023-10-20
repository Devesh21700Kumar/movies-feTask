import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function MovieRating({ initialRating, onRate }) {
  const [rating, setRating] = useState(initialRating);
  const maxStars = 5;

  const handleStarClick = (star) => {
    if (star <= rating) {
      setRating(0); // Reset the rating if the clicked star is already selected
      onRate(0); // Notify the parent component
    } else {
      setRating(star);
      onRate(star);
    }
  };

  return (
    <div>
      {Array.from({ length: maxStars }).map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          style={{ cursor: 'pointer' }}
        >
          {index < rating ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
}

export default MovieRating;
