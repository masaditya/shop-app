import { AxiosError, AxiosResponse } from 'axios';
import { Product } from 'base/types';
import {
  GetCategories,
  GetDetailProduct,
  GetProductCategory,
  GetProducts,
} from 'function/product/api';
import React from 'react';

const ProductStateFn = (limit?: number, id?: number | string) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [productDetail, setProductDetail] = React.useState<Product>();

  const [keyword, setKeyword] = React.useState('');

  React.useEffect(() => {}, []);

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

  const searchResult = React.useMemo(() => {
    if (keyword !== '') {
      let exp = new RegExp(keyword, 'gi');
      return products.filter((item) => item.title?.match(exp));
    }
  }, [keyword, products]);

  const [selectedCategories, setSelectedCategories] = React.useState('');

  React.useEffect(() => {
    if (selectedCategories !== '') {
      GetProductCategory(selectedCategories).then((res) => {
        setProducts(res.data);
      });
    } else {
      console.log('MLAKU');
      Promise.all([GetProducts(limit), GetCategories()])
        .then(([res1, res2]: AxiosResponse[]) => {
          setProducts(res1.data);
          setCategories(res2.data);
        })
        .catch((err: AxiosError) => console.log(err.response?.data));
    }
  }, [selectedCategories]);

  return {
    products,
    categories,
    productDetail,
    keyword,
    setKeyword,
    searchResult,
    setSelectedCategories,
    selectedCategories,
  };
};

export default ProductStateFn;
