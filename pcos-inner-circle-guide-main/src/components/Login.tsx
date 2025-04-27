import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';  // Import the toast hook

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();  // Access the toast function
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { username, password });
      setMessage(res.data.message);
      toast({
        title: 'Login Successful!',
        description: 'Welcome back 🎉',
        duration: 3000,
      });
      navigate('/profile'); // Redirect after login
    } catch (err: any) {
      setMessage(err.response?.data?.error || 'Login failed');
      toast({
        title: 'Login Failed',
        description: 'Incorrect username or password.',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
        <button className="bg-green-500 hover:bg-green-600 text-white p-2 w-full rounded" type="submit">
          Login
        </button>
        {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
