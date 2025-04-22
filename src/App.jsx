import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TourCard from './components/TourCard';

function App() {
  // ... Store in state: tours, loading, error
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ... Fetch tours from https://course-api.com/react-tours-project using useEffect
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);
      try {
        // ... Use CORS proxy to fetch data
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // ... Include a "Not Interested" button that removes this tour when clicked
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Tours</h2>
        {/* ... Create a card component to display a tour's name, info, image, and price */}
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
