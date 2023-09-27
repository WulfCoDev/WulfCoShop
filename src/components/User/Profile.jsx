import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import * as api from '../../utils/api';
import './Profile.css';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);

  console.log("Current User:", currentUser); // Debugging line

  useEffect(() => {
    if (currentUser && currentUser.id) {
      api.fetchSingleUser(currentUser.id)
        .then(data => {
          console.log("Fetched Data:", data); // Debugging line
          setUserData(data);
        })
        .catch(error => {
          console.error('Failed to fetch user data:', error);
        });
    }
  }, [currentUser]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h1>{`Welcome, ${userData.name.firstname} ${userData.name.lastname}`}</h1>
      <p>{`Username: ${userData.username}`}</p>
      <p>{`Email: ${userData.email}`}</p>
      <p>{`Phone: ${userData.phone}`}</p>
      <p>{`Address: ${userData.address.number}, ${userData.address.street}, ${userData.address.city}, ${userData.address.zipcode}`}</p>

      {/* Add more user details here as needed */}
    </div>
  );
};

export default ProfilePage;