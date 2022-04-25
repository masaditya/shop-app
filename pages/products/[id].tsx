import React from 'react';
import type { NextPage } from 'next';
import ProductItem from 'components/Item';
import Header from 'components/Layout/Header';
import Tag from 'components/misc/Tag';
import Button from 'components/misc/Button';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import ProductStateFn from 'function/product/state';
import { Product } from 'base/types';
import { useRouter } from 'next/router';
import AppContext from 'base/context';
const Products: NextPage = () => {
  const router = useRouter();
  const state = ProductStateFn(5, router.query.id?.toString());
  const context = React.useContext(AppContext);
  return (
    <div>
      <Header />

      <div className="px-12 py-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center">
            <img
              className="object-contain h-96 w-96 rounded-2xl"
              src={state.productDetail?.image}
              alt="product image"
            />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-700">
              {' '}
              {state.productDetail?.title}{' '}
            </p>
            <div className="my-4">
              <span className="text-gray-300 text-sm line-through">
                ${' '}
                {state.productDetail?.price && state.productDetail?.price + 199}
                ,-
              </span>
              <p className="text-xl text-gray-500  font-semibold">
                $ {state.productDetail?.price},-
              </p>
            </div>
            <div>
              <p> {state.productDetail?.description} </p>
            </div>
            <div className="my-5 text-sm">
              <p className="mb-2">Variant : </p>
              <div className="w-96 grid grid-cols-4 gap-3">
                <Tag title="Blue" />
                <Tag title="Red" />
                <Tag title="Black" />
                <Tag title="Yellow" />
                <Tag title="Brown" />
                <Tag title="Gray" />
              </div>
            </div>
            <div className="flex mt-5">
              <Button
                className="mr-5 px-4"
                onClick={(e) =>
                  state.productDetail &&
                  context.setCart([...context.cart, state.productDetail])
                }
              >
                <FiShoppingCart className="mx-2" /> Add To Cart
              </Button>
              <Button primary className="mr-5 px-4">
                <FiShoppingBag className="mx-2" /> Buy Now
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10 md:px-20 ">
          {state.products.map((item: Product) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
