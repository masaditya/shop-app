'use strict';

export const FindAPIBaseURL = (): string =>
  process.env.FAKE_STORE_BASE_URL || "https://fakestoreapi.com";