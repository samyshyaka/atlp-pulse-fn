import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };
  return (
    <div className="h-screen flex bg-light-bg dark:bg-[#262E3D]">
      <div className="w-full max-w-2xl mx-auto mt-20 bg-white dark:bg-[#1F2A37] rounded-lg py-12 px-14">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center dark:text-white">
          Log in to your account
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email" className="dark:text-white">
              Email
            </label>
            <input
              type="email"
              className={`w-full p-2 text-primary dark:text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 dark:border-white dark:bg-[#1F2A37]`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="dark:text-white">
              Password
            </label>
            <input
              type="password"
              className={`w-full p-2 text-primary dark:text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 dark:border-white dark:bg-[#1F2A37]`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <Link to="/super-admin-dashboard">
              <button
                className={`w-full py-2 px-4 text-sm text-white bg-[#148FB6] rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
