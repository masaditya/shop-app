import type { NextPage } from 'next';
import ProductItem from 'components/Item';
import Header from 'components/Layout/Header';
import ProductStateFn from 'function/product/state';
import { Product } from 'base/types';
const Products: NextPage = () => {

  const state = ProductStateFn()

  return (
    <div>
      <Header />

      <div className="px-12 py-6">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 border-r-2 h-full"></div>
          <div className="col-span-4">
            <div className="p-5">
              <input
                placeholder="Type to search ..."
                className="w-full px-4 py-2 border-gray-300 outline-none border-2 rounded-lg"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {state.products.map((item : Product)=> <ProductItem key={item.id} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
