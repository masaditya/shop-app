'use-strict';

export const GetToken = (): string => {
  return localStorage.getItem('shop_app_token') || '';
};

export const SetToken = (token: string): void => {
  localStorage.setItem('shop_app_token', token);
};

export const ClearTokenUser = (): void => {
  localStorage.clear();
};
