import AppContext from 'base/context';
import React from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

type CheckoutFormType = {
  full_name?: string;
  address?: string;
  email?: string;
};

const CartStateFn = () => {
  const context = React.useContext(AppContext);
  const router = useRouter()
  const [checkoutForm, setCheckoutForm] = React.useState<CheckoutFormType>();

  const totalPrice = React.useMemo(() => {
    return context.cart.reduce((n, { price }) => n + price, 0);
  }, [context.cart]);

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        'service_kij5kx5',
        'template_02i1fzc',
        {...checkoutForm, total_price : totalPrice},
        'user_sYf18yxIGrfZK4FOuEUjN'
      )
      .then((res) => {
        console.log(res);
        context.setCart([])
        router.push("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    totalPrice,
    context,
    handleCheckout,
    checkoutForm,
    setCheckoutForm,
  };
};

export default CartStateFn;
