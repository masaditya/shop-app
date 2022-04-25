import { AxiosResponse } from 'axios';
import { HTTPClientAuth} from '../../../base/http';
import * as Token from 'base/auth/token';

export const GetCart = (limit: number | string = ""): Promise<AxiosResponse> => {
  return HTTPClientAuth(Token).get('/products?limit=' + limit);
};
