import { GetToken } from 'base/auth/token';
import { Product } from 'base/types';
import React from 'react';

const AppContext = React.createContext({
  products: [] as Product[],
  setProducts: (values: Product[]) => {},
  isLogin: false,
  setIsLogin: (value: boolean) => {},
  cart : [] as Product[],
  setCart: (values: Product[]) => {},
});

export default AppContext;
