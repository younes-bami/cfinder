import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('/api/bookings/user/current', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setBookings(response.data);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Your Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            Coach ID: {booking.coachId} - Session Date: {new Date(booking.sessionDate).toLocaleString()} - Status: {booking.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookings;
