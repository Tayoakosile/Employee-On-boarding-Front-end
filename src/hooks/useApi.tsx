import { BASE_API_URL } from '@/lib/utils';
// import { useAuthStore, useUtilStore } from '@/store/store';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

// import { useRouter } from 'next/router';

const useApi = () => {


  const [user_role, setUserRole] = useState('admin')
  const JOL_BASE_URL = axios.create({
    baseURL: BASE_API_URL + "/api",
    headers: {},
  });


  // Add a response interceptor to handle errors globally
  JOL_BASE_URL.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
      const user_role = `${localStorage.getItem("sleeky_user_role") === 'undefined' ? '' : localStorage.getItem("sleeky_user_role") === "null" ? "" : localStorage.getItem("sleeky_user_role")}`;
      setUserRole(user_role?.toString() as string)
      const token = `${localStorage.getItem("auth-token")}`;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  JOL_BASE_URL.interceptors.response.use(
    (response) => response,
    (error) => {

      if (error.response?.status === 401) {
        toast.error('Unauthorized access. Please log in again.', {
          position: 'bottom-center'
        });
        setTimeout(() => {

          window.location.href = `/${user_role}/login`
          // localStorage.setItem("auth-token", "")
          console.error('Unauthorized access - redirecting to login');
        }, 1000);
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