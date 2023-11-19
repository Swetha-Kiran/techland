import axios from 'axios';
import { getToken } from './get_auth_token';

const httptl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


// Change request data/error here
httptl.interceptors.request.use(
  (config) => {
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impib3JvOTk5QGdtYWlsLmNvbSIsIl9pZCI6IjY1NTg1Y2YyMGRhNTFiZDZkNmVjNjk2MiIsImlhdCI6MTcwMDMxMDQ1MSwiZXhwIjoxNzAwOTE1MjUxfQ.FTML-mxm_E87LzeUJrwy195UdQMroH9rCwtAOTAH_ns';

    const token = getToken();

    // console.log("token in httpl instance", token);
    if (config.headers.includeAuthorizationToken !== false) {
        config.headers.Authorization = `Bearer ${token || ''}`;
      }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httptl;
