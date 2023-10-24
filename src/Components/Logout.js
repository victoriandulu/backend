import { useEffect } from "react";
import axios from "axios";

export const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        // Make a POST request to the logout endpoint
        await axios.post(
          'http://localhost:8000/logout/',
          {
            refresh_token: localStorage.getItem('refresh_token'),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );

        // Clear local storage and reset the Axios Authorization header
        localStorage.clear();
        axios.defaults.headers.common['Authorization'] = null;

        // Redirect to the login page
        window.location.href = '/login';
      } catch (e) {
        console.error('Logout not working', e);
      }
    };

    logout(); // Call the logout function

  }, []);

  return null; // You can return null or an empty div here, as this component doesn't render any visible content
};
