import { createContext, useState, useEffect } from 'react';
import api from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token found:', !!token);
    
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get('/auth/me');
      console.log('User data received:', response.data);
      setUser(response.data.user);
    } catch (error) {
      console.error('Error fetching user:', error);
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    console.log('Login attempt for:', email);
    try {
      const response = await api.post('/auth/signin', { email, password });
      console.log('Full login response:', response.data);
      
      // Try multiple possible token locations
      let token = null;
      
      if (response.data?.access_token) {
        token = response.data.access_token;
      } else if (response.data?.session?.access_token) {
        token = response.data.session.access_token;
      } else if (response.data?.data?.session?.access_token) {
        token = response.data.data.session.access_token;
      }
      
      console.log('Token extracted:', !!token);
      
      if (!token) {
        throw new Error('No access token received from server');
      }
      
      localStorage.setItem('token', token);
      await fetchUser();
      return response.data;
      
    } catch (error) {
      console.error('Login error in context:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};