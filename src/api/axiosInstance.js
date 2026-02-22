import axisos from 'axios';

const axiosInstance = axisos.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  headers: {    
    'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    'Content-Type': 'application/json',
  },
});
export default axiosInstance;