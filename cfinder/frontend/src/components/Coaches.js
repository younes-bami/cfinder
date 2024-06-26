import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Coaches() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const response = await axios.get('/api/coaches');
        setCoaches(response.data);
      } catch (error) {
        console.error('Error fetching coaches:', error);
      }
    };

    fetchCoaches();
  }, []);

  return (
    <div>
      <h1>Coaches</h1>
      <ul>
        {coaches.map((coach) => (
          <li key={coach._id}>
            <h2>{coach.bio}</h2>
            <p>Disciplines: {coach.disciplines.join(', ')}</p>
            <p>Rating: {coach.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coaches;
