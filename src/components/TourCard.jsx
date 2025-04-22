import React from 'react';

// ... Create a card component to display a tour's name, info, image, and price
function TourCard({ id, name, info, image, price, removeTour }) {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h3>{name}</h3>
        <p>{info}</p>
        <p className="tour-price">Price: ${price}</p>
        {/* ... Include a "Not Interested" button that removes this tour when clicked */}
        <button onClick={() => removeTour(id)} className="not-interested-btn">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;