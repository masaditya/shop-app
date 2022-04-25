import AppContext from 'base/context';
import React from 'react';

const CartStateFn = () => {
  const context = React.useContext(AppContext);

  const totalPrice = React.useMemo(() => {
    return context.cart.reduce((n, { price }) => n + price, 0);
  }, [context.cart]);

  return {
    totalPrice,
    context,
  };
};

export default CartStateFn;
