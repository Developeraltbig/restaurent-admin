import React from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active styling

const Navbar = () => {
  // Style for active NavLink
  const activeLinkStyle = {
    backgroundColor: 'rgba(39, 174, 96, 0.2)', // bg-primary/20
    color: '#27AE60', // text-primary
  };

  return (
    <aside className="hidden md:flex h-full w-64 flex-col border-r border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark p-4">
      <div className="flex items-center gap-3 p-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
          <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-text-light-primary dark:text-dark-primary">TCD</h1>
          <p className="text-sm font-normal text-text-light-secondary dark:text-dark-secondary">Admin Panel</p>
        </div>
      </div>
      <nav className="mt-8 flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2">
          <NavLink to="/admin" end className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-light-secondary hover:bg-primary/10 dark:text-dark-secondary dark:hover:bg-primary/20" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            <span className="material-symbols-outlined text-2xl">dashboard</span>
            <p className="text-sm font-medium">Dashboard</p>
          </NavLink>
          <NavLink to="/admin/orders" className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-light-secondary hover:bg-primary/10 dark:text-dark-secondary dark:hover:bg-primary/20" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            <span className="material-symbols-outlined text-2xl">receipt_long</span>
            <p className="text-sm font-medium">Orders</p>
          </NavLink>
          <NavLink to="/admin/menu" className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-light-secondary hover:bg-primary/10 dark:text-dark-secondary dark:hover:bg-primary/20" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            <span className="material-symbols-outlined text-2xl">restaurant</span>
            <p className="text-sm font-medium">Menu</p>
          </NavLink>
          <NavLink to="/admin/QrCode" className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-light-secondary hover:bg-primary/10 dark:text-dark-secondary dark:hover:bg-primary/20" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            <span class="material-symbols-outlined text-text-light dark:text-text-dark">qr_code_2</span>
            <p className="text-sm font-medium">Qr Codes</p>
          </NavLink>
          <NavLink to="/admin/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-light-secondary hover:bg-primary/10 dark:text-dark-secondary dark:hover:bg-primary/20" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            <span className="material-symbols-outlined text-2xl">settings</span>
            <p className="text-sm font-medium">Settings</p>
          </NavLink>
          
         
        </div>
        <div className="flex flex-col gap-1">
           <button href="http://localhost:5173/" class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span class="truncate">View Website</span>
          </button>
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-light-secondary hover:bg-primary/10 dark:text-dark-secondary dark:hover:bg-primary/20">
            <span className="material-symbols-outlined text-2xl">logout</span>
            <p className="text-sm font-medium">Log Out</p>
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;