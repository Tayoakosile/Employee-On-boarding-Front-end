import { BASE_API_URL } from '@/lib/utils';
// import { useAuthStore, useUtilStore } from '@/store/store';
import axios from 'axios';
import toast from 'react-hot-toast';

// import { useRouter } from 'next/router';

const useApi = () => {
  const JOL_BASE_URL = axios.create({
    baseURL: BASE_API_URL + "/api",
    headers: {},
  });
  // Add a response interceptor to handle errors globally
  JOL_BASE_URL.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth-token");
      if (token) {
        config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      }
    }
    return config;
  });

  JOL_BASE_URL.interceptors.response.use(
    (response) => response,
    (error) => {

      // Handle errors globally
      // console.log('error.response?.status :', error.response);
      console.log('error.response?.status :', error.response?.status);
      if (error.response?.status === 401) {
        toast.error('Unauthorized access. Please log in again.', {
          position: 'bottom-center'
        });
        window.location.href = '/login'
        localStorage.setItem("auth-token", "")
        console.error('Unauthorized access - redirecting to login');
        return;
      }
      if (error.response?.status === 429) {
        toast.error('Too many requests. Please try again later.', {
          position: 'bottom-center',
          duration: 4000
        });

      }
      if (error.response?.status === 404) {
        console.log('error.response :', error.response);
        toast.error('Page Not found', {
          position: 'bottom-center'
        });


        console.error('Page Not found');
      }

      if (error.response?.status === 403) {
        toast.error(`You do not have the permission to access this page, Please contact admin for more info.`, {
          position: 'bottom-center'
        });

        console.error('You do not have the permission to access this page, Please contact admin for more info. ');
        return Promise.reject(error);
      }
      if (error.response?.status === 500) {
        toast.error(`Oops! Something went wrong on our end.`, {
          position: 'bottom-center'
        });

        console.error('Page Not found');
      }
      else {
        console.error('API error:', error);
      }
      return Promise.reject(error);
    }
  );
  return { JOL_BASE_URL }
}

export default useApi