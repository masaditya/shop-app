import { GetToken, SetToken } from 'base/auth/token';
import { useRouter } from 'next/router';
import React from 'react';
import { Login } from '../api';

const AuthStateFn = () => {
  const router = useRouter();
  React.useEffect(() => {
    if (typeof window !== 'undefined' && GetToken() !== '') {
      router.push('/');
    }
  }, []);
  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // @ts-ignore
      Login(e.target[0].value, e.target[1].value).then((res) => {
        SetToken(res.data.token);
        router.push('/');
      });
    },
    []
  );
  return {
    handleSubmit,
  };
};

export default AuthStateFn;
