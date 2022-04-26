import AppContext from 'base/context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import Button from '../misc/Button';

const Header = () => {
  const context = React.useContext(AppContext);
  const router = useRouter();
  return (
    <div className="flex justify-between px-8 py-4 border-2 border-gray-200">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-xl font-bold mx-3 cursor-pointer">OLShop</span>
        </Link>
        <Link href="/products">
          <Button primary="true">Catalog</Button>
        </Link>
      </div>
      <div></div>
      <div className="w-40 flex justify-around">
        <Button className="w-12 h-12 flex">
          <FiUser />
        </Button>
        <Button
          className="w-12 h-12 flex relative"
          onClick={() => router.push('/cart')}
        >
          {context.cart.length > 0 && (
            <div className="w-5 h-5 rounded-full bg-blue-500 absolute -top-2 -right-2 text-xs text-white flex items-center justify-center">
              {context.cart.length}
            </div>
          )}
          <FiShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Header;
