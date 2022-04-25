import type { NextPage } from 'next';
import React from 'react';
import ProductItem from 'components/Item';
import Header from 'components/Layout/Header';
import ProductStateFn from 'function/product/state';
import { Product } from 'base/types';
import { GetProductCategory } from 'function/product/api';
import Button from 'components/misc/Button';
const Products: NextPage = () => {
  const state = ProductStateFn();

  return (
    <div>
      <Header />
      <div className="px-12 py-6">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 border-r-2 h-full">
            <div>
              {state.categories.map((item) => {
                return (
                  <p key={item} className="mb-3">
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        state.setSelectedCategories(item)
                      }
                      checked={item === state.selectedCategories}
                      type="radio"
                      value={item}
                      name="category"
                    />
                    <span> {item} </span>
                  </p>
                );
              })}
              <Button onClick={()=> {
                state.setKeyword("")
                state.setSelectedCategories("")
              } }>Reset Filter</Button>
            </div>
          </div>
          <div className="col-span-4">
            <div className="p-5">
              <input
                placeholder="Type to search ..."
                className="w-full px-4 py-2 border-gray-300 outline-none border-2 rounded-lg"
                type="text"
                value={state.keyword}
                onChange={(e) => state.setKeyword(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {state.keyword !== ''
                ? state.searchResult &&
                  state.searchResult.map((item: Product) => (
                    <ProductItem key={item.id} {...item} />
                  ))
                : state.products.map((item: Product) => (
                    <ProductItem key={item.id} {...item} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
