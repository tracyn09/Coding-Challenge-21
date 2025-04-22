import React from 'react';
import TourCard from './TourCard';

// ... Create a gallery component that maps over the tours array and renders TourCard for each
function Gallery({ tours, removeTour }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          removeTour={removeTour}
        />
      ))}
    </div>
  );
}

export default Gallery;