import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { FiPlusCircle } from 'react-icons/fi';
import { Product } from 'base/types';
import Link from 'next/link';
import AppContext from 'base/context';

const ProductItem: React.FC<HTMLProps<HTMLDivElement> & Product> = (props) => {
  const context = React.useContext(AppContext)
  return (
    <div
      className={classNames(
        'w-48 mx-auto p-4 rounded-xl bg-gray-100 '
      )}
    >
      <Link href={`/products/${props.id}`}>
        <div className="cursor-pointer">
          <img
            className="object-cover h-48 w-full rounded-lg"
            src={props.image}
            alt="Product"
          />
          <div className="w-full">
            <p className="mt-3 font-semibold text-sm text-gray-500 truncate text-ellipsis">
              {props.title}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-end">
        <p className="mt-2 font-bold">$ {props.price},-</p>

        <button onClick={e => context.setCart([...context.cart, props])} >
          <FiPlusCircle className="text-blue-500 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
