import Cookies from 'js-cookie';

export const getAdminToken = () => {
  if (typeof window === undefined) {
    return null;
  }
  return Cookies.get('adminAuthToken');
};
