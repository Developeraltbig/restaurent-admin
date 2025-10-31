import React from 'react';

const Login = () => {
  return (
    <div id="admin-panel" className="font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-dark-primary">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md rounded-xl border border-border-light bg-content-light p-8 dark:border-border-dark dark:bg-content-dark">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-4xl">restaurant_menu</span>
            </div>
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-text-light-secondary dark:text-dark-secondary">Welcome back to TCD Admin Panel</p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" type="email" required className="form-input mt-1 block w-full rounded-lg border-border-light bg-background-light text-sm focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-background-dark" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" required className="form-input mt-1 block w-full rounded-lg border-border-light bg-background-light text-sm focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-background-dark" />
            </div>
            <button type="submit" className="flex w-full h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm hover:bg-primary/90">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;