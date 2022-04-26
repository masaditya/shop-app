import React from 'react';
import type { NextPage } from 'next';
import { Product } from 'base/types';
import Header from 'components/Layout/Header';
import Button from 'components/misc/Button';
import { FiTrash } from 'react-icons/fi';
import CartStateFn from 'function/cart/state';
import { useRouter } from 'next/router';
const CartPage: NextPage = () => {
  const router = useRouter();
  const { context, totalPrice } = CartStateFn();
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 p-10">
        <div className="col-span-2">
          <p className="text-2xl font-extrabold text-gray-500">Your Cart</p>
          {context.cart.map((item: Product, i: number) => {
            return (
              <div key={i} className="flex my-3" >
                <div className="p-4 w-36 h-48 border-2 rounded-lg">
                  <img
                    className=" w-full h-full rounded-lg object-cover"
                    src={item.image}
                    alt={item.image}
                  />
                </div>
                <div className="ml-5 flex-col flex justify-between py-4">
                  <p onClick={()=> router.push("/products/"+item.id)} className="text-lg font-semibold cursor-pointer">{item.title}</p>
                  <p className="text-gray-500 font-bold my-5">
                    $ {item.price},-
                  </p>
                  <Button
                    onClick={(e) => context.removeItemCart(i)}
                    danger
                    className="mb-0 mt-auto"
                  >
                    <FiTrash className="mx-2" /> Remove Item
                  </Button>
                </div>
                <div></div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="h-64 border-2 rounded flex p-5 flex-col">
            <div className="flex justify-between items-center py-2">
              <p>Total Item : </p>
              <p className="font-semibold"> {context.cart.length} item(s)</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Total Price : </p>
              <p className="font-semibold"> $ {totalPrice},- </p>
            </div>
            <Button onClick={()=> router.push("/checkout")} primary="true" className="w-full mt-auto">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
