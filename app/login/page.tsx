import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <div className="w-full max-w-xs p-4  ">
        <div className="text-center mb-4">
          <img
            src="/telebirr.jpg"
            alt="Telebirr Logo"
            className="mx-auto h-16 w-60"
          />
          <h1 className="text-xl font-bold mt-2">Welcome to Telebirr</h1>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="shortCode"
            >
              Short Code
            </label>
            <input
              id="shortCode"
              type="text"
              placeholder="559654"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="operatorID"
            >
              Operator ID
            </label>
            <input
              id="operatorID"
              type="text"
              placeholder="474115"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-xs text-center text-gray-500 mt-4">
          ©2023 Ethio Telecom. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
