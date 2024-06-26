import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);

  useEffect(() => {
    const fetchCoach = async () => {
      try {
        const response = await axios.get(`/api/coaches/${id}`);
        setCoach(response.data);
      } catch (error) {
        console.error('Error fetching coach profile:', error);
      }
    };

    fetchCoach();
  }, [id]);

  if (!coach) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{coach.bio}</h1>
      <p>Disciplines: {coach.disciplines.join(', ')}</p>
      <p>Rating: {coach.rating}</p>
      {/* Ajoutez plus de détails sur le coach ici */}
    </div>
  );
}

export default Profile;
