import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();  // For navigation after logout

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/profile');
        setUser(res.data.user);
      } catch (err) {
        console.log('Not logged in');
      }
    };
    fetchProfile();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post('/api/logout', {}, { withCredentials: true });
      navigate('/login');  // Redirect to login page after logout
    } catch (err) {
      console.log('Logout failed');
    }
  };

  // If user is not logged in
  if (!user) {
    return <div className="text-center mt-20">Please login to view your profile.</div>;
  }

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
      <p className="mt-4">This is your protected profile page.</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
