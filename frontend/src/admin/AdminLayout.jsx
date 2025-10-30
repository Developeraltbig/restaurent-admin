import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

const AdminLayout = () => {
  return (
    // The #admin-panel ID is crucial for the Tailwind styles to apply correctly
    <div id="admin-panel" >
      <div className="font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-dark-primary">
        <div className="flex h-screen">
          <Navbar />
          {/* Main Content */}
          <div className="flex flex-1 flex-col overflow-y-auto">
            <Header />
            
              <Outlet />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;