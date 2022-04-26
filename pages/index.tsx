import type { NextPage } from 'next';
import ProductItem from 'components/Item';
import Header from 'components/Layout/Header';
import ProductStateFn from 'function/product/state';
import { Product } from 'base/types';
import Link from 'next/link';
const Home: NextPage = () => {
  const state = ProductStateFn(5);
  return (
    <div>
      <Header />
      <div className="px-12 py-6">
        <div className="rounded-xl bg-blue-500 w-full h-56 relative">
          <p className="text-7xl font-extrabold text-white absolute top-1/3 transform rotate-12 right-1/2">Belanja Sekarang</p>
          <p className="text-7xl font-extrabold text-white absolute top-1/3 transform rotate-12 left-1/2">Bayar Setelah Lebaran</p>
        </div>
        <div className="flex justify-between items-center my-6">
          <h2 className="text-3xl font-bold text-gray-500">Popular</h2>
          <Link href="/products">
            <h2 className="text-blue-500 cursor-pointer">See All</h2>
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-7">
          {state.products.map((item: Product) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
