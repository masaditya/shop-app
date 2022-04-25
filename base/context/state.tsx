import { GetToken } from 'base/auth/token';
import { Product } from 'base/types';
import { useRouter } from 'next/router';
import React from 'react';

const ContextState = () => {
  const router = useRouter();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLogin, setIsLogin] = React.useState(false);
  const [cart, setCart] = React.useState<Product[]>([]);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && GetToken() !== '') {
      setIsLogin(true);
    } else {
      router.push('/login');
    }
  }, []);

  React.useEffect(() => {
    let cartData = localStorage.getItem('shop_app_cart');
    cartData && setCart(JSON.parse(cartData));
  }, []);

  React.useEffect(() => {
    cart.length > 0 &&
      localStorage.setItem('shop_app_cart', JSON.stringify(cart));
  }, [cart]);

  const removeItemCart = React.useCallback((index : number) => {
    setCart(values => values.filter((item, i)=> i !== index))
  }, [cart]);

  return {
    products,
    setProducts,
    isLogin,
    setIsLogin,
    cart,
    setCart,
    removeItemCart
  };
};
export default ContextState;
