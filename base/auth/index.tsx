import { useRouter } from 'next/router';
import React from 'react';
import { GetToken } from './token';

const useAuth = (pathname: string = '/login') => {
  const router = useRouter();
  React.useEffect(() => {
    if (GetToken() === '') router.push(pathname);
  }, []);

  return null;
};

export default useAuth;
