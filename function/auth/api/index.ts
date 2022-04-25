import { AxiosResponse } from 'axios';
import { HTTPClientNonAuth } from '../../../base/http';

export const Login = (username:string, password:string): Promise<AxiosResponse> => {
  return HTTPClientNonAuth().post('/auth/login', {username, password});
};
