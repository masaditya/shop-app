import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/Layout/Header';
import Button from 'components/misc/Button';
import CartStateFn from 'function/cart/state';
const CartPage: NextPage = () => {
  const state = CartStateFn();
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 p-10">
        <form
          onSubmit={state.handleCheckout}
          className="col-span-2 px-10"
        >
          <p className="text-2xl font-extrabold text-gray-500">Checkout</p>
          <div className="grid grid-cols-2   gap-4 mt-5">
            <div>
              <p className="mb-5">Full name</p>
              <p className="mb-10">Address</p>
              <p className="mb-5">Email</p>
            </div>
            <div>
              <input
                className="w-full border px-4 py-1 mb-2 text-sm"
                type="text"
                value={state.checkoutForm?.full_name}
                onChange={(e)=> state.setCheckoutForm({...state.checkoutForm, full_name : e.target.value})}
              />
              <textarea
                className="w-full border px-4 py-1 mb-2 text-sm"
                value={state.checkoutForm?.address}
                onChange={(e)=> state.setCheckoutForm({...state.checkoutForm, address : e.target.value})}
              />
              <input
                className="w-full border px-4 py-1 mb-2 text-sm"
                type="text"
                value={state.checkoutForm?.email}
                onChange={(e)=> state.setCheckoutForm({...state.checkoutForm, email : e.target.value})}
              />
            </div>
          </div>
          <Button type="submit" primary="true" className="w-full mt-auto">
            Checkout
          </Button>
        </form>
        <div>
          <div className="h-64 border-2 rounded flex p-5 flex-col">
            <p className="font-semibold">Order Summary</p>
            <hr className="my-2" />
            <div className="flex justify-between items-center py-2">
              <p>Total Item : </p>
              <p className="font-semibold">
                {' '}
                {state.context.cart.length} item(s)
              </p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Total Price : </p>
              <p className="font-semibold"> $ {state.totalPrice},- </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
