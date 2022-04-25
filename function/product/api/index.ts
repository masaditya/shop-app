import { AxiosResponse } from 'axios';
import { HTTPClientAuth} from '../../../base/http';
import * as Token from 'base/auth/token';

export const GetProducts = (limit: number | string = ""): Promise<AxiosResponse> => {
  return HTTPClientAuth(Token).get('/products?limit=' + limit);
};

export const GetCategories = (): Promise<AxiosResponse> => {
  return HTTPClientAuth(Token).get('/products/categories');
};

export const GetDetailProduct = (id?: number | string): Promise<AxiosResponse> => {
  return HTTPClientAuth(Token).get('/products/' + id);
};

export const GetProductCategory = (category : string): Promise<AxiosResponse> => {
  return HTTPClientAuth(Token).get('/products/category/'+category);
};