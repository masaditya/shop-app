import React from 'react';
import Button from 'components/misc/Button';
import type { NextPage } from 'next';
import AuthStateFn from 'function/auth/state';
const LoginPage: NextPage = () => {
  const state = AuthStateFn()
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-blue-500 w-full h-full flex justify-center items-center text-white">
        <div className="w-60 md:w-96">
          <p className="text-5xl font-extrabold ">
            Login <br /> to <br /> Continue
          </p>
          <form className="my-10" onSubmit={state.handleSubmit}>
            <input
              placeholder="Username"
              className="my-3 py-3 px-4 w-full text-gray-500 rounded-lg outline-none"
              type="text"
              name="username"
            />
            <input
              placeholder="Password"
              className="my-3 py-3 px-4 w-full text-gray-500 rounded-lg outline-none"
              type="password"
              name="password"
            />
            <Button type="submit" className="w-full mt-5">
              Login
            </Button>
          </form>
          <p className="text-xs"> username : mor_2314</p>
          <p className="text-xs"> password : 83r5^_</p>
        </div>
      </div>
      <div className="w-full h-full hidden md:flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
          alt="Login Illustration"
        />
      </div>
    </div>
  );
};

export default LoginPage;
