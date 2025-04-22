import { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  // ... Store in state: tours, loading, error
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ... Fetch tours from https://course-api.com/react-tours-project using useEffect
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

  useEffect(() => {
    fetchTours();
  }, []);

  // If loading is true, display "Loading..."
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // If error, display an error message
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // If no tours are left, show a "Refresh" button to refetch the data
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  // Else, render Gallery with tour data
  return (
    <>
      <h1>Tour Gallery</h1>
      {/* ... Create a gallery component that maps over the tours array and renders TourCard for each */}
      <Gallery tours={tours} removeTour={(id) => setTours((prev) => prev.filter((tour) => tour.id !== id))} />
    </>
  );
}

export default App;
