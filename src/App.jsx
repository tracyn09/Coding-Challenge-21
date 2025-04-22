import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Gallery from './components/Gallery';

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
      <h1>Tour Gallery</h1>
      {/* ... Create a gallery component that maps over the tours array and renders TourCard for each */}
      <Gallery tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
