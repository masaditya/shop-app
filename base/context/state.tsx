import { GetToken } from 'base/auth/token';
import { Product } from 'base/types';
import { useRouter } from 'next/router';
import React from 'react';

const ContextState = () => {
  const router = useRouter();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLogin, setIsLogin] = React.useState(false);
  const [cart, setCart] = React.useState<Product[]>([])

  React.useEffect(() => {
    // Client-side-only code
    if (typeof window !== 'undefined' && GetToken() !== '') {
      setIsLogin(true);
    } else {
      router.push('/login');
    }
  }, []);

  return {
    products, setProducts,
    isLogin, setIsLogin,
    cart, setCart
  };
};
export default ContextState;
