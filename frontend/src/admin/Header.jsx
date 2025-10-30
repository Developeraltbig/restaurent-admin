import React from 'react';

const Header = () => {
  const profileImageUrl = "https://lh3.googleusercontent.com/a/ACg8ocK_S29XQxQZg-fIe-3zZ5-3Zz5I-Q5I-z-f-Q5I-z-f=s96-c"; // Example URL

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark bg-content-light/80 px-8 py-3 backdrop-blur-sm dark:bg-content-dark/80">
      <div className="flex items-center gap-8">
        <label className="relative flex h-10 w-full min-w-40 max-w-64 items-center">
          <span className="material-symbols-outlined absolute left-3 text-text-light-secondary dark:text-dark-secondary">search</span>
          <input className="form-input h-full w-full rounded-lg border-border-light bg-background-light pl-10 text-sm text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-background-dark dark:text-dark-primary dark:placeholder:text-dark-secondary" placeholder="Search orders, customers..." defaultValue="" />
        </label>
      </div>
      <div className="flex flex-1 items-center justify-end gap-6">
        <button className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-background-light text-text-light-secondary hover:bg-primary/10 dark:bg-background-dark dark:text-dark-secondary dark:hover:bg-primary/20">
          <span className="material-symbols-outlined text-2xl">notifications</span>
          <span className="absolute right-2.5 top-2.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-accent text-xs text-white"></span>
        </button>
        <div className="h-10 w-10 rounded-full bg-cover bg-center bg-no-repeat" data-alt="Admin profile picture" style={{ backgroundImage: `url("${profileImageUrl}")` }}></div>
      </div>
    </header>
  );
};

export default Header;