import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';  // Import the toast hook

const Signup: React.FC = () => {
  const { toast } = useToast();  // Access the toast function
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/signup', { username, password });
      setMessage(res.data.message);
      setUsername('');
      setPassword('');
      toast({
        title: 'Signup Successful!',
        description: 'Welcome to the platform 🎉',
        duration: 3000,
      });
    } catch (err: any) {
      setMessage(err.response?.data?.error || 'Signup failed');
      toast({
        title: 'Signup Failed',
        description: 'There was an error during signup.',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded" type="submit">
          Sign Up
        </button>
        {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
