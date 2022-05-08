import axios from "axios";

const axiosPrivate = axios.create({});

// Add a request interceptor
axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(!config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
   
    return response;
  }, function (error) {
    
    if(error.response.status === 403){
        
    }
    return Promise.reject(error);
  });

  export default axiosPrivate;