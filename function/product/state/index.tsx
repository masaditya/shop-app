import { AxiosError, AxiosResponse } from 'axios';
import { Product } from 'base/types';
import { GetCategories, GetDetailProduct, GetProducts } from 'function/product/api';
import React from 'react';

const ProductStateFn = (limit?: number, id?: number | string) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [productDetail, setProductDetail] = React.useState<Product>()

  React.useEffect(() => {
    Promise.all([GetProducts(limit), GetCategories()])
      .then(([res1, res2]: AxiosResponse[]) => {
        setProducts(res1.data);
        setCategories(res2.data);
      })
      .catch((err: AxiosError) => console.log(err.response?.data));
  }, []);

  React.useEffect(() => {
    if (id) {
      Promise.all([GetProducts(limit), GetDetailProduct(id)])
        .then(([res1, res2]: AxiosResponse[]) => {
          setProducts(res1.data);
          setProductDetail(res2.data);
        })
        .catch((err: AxiosError) => console.log(err.response?.data));
    }
  }, [id]);

  return { products, categories, productDetail };
};

export default ProductStateFn;
