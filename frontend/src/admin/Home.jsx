import React from 'react';

const Home = () => {
  return (
    <main className="flex-1 p-8">
      {/* PageHeading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-light-primary dark:text-dark-primary">Welcome back, Admin!</h1>
          <p className="text-base font-normal text-text-light-secondary dark:text-dark-secondary">Here's what's happening with your restaurant today.</p>
        </div>
        <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm hover:bg-primary/90">
          <span className="material-symbols-outlined">add_circle</span>
          <span className="truncate">Add New Order</span>
        </button>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat Cards... */}
        <div className="flex flex-col gap-2 rounded-xl border border-border-light bg-content-light p-5 dark:border-border-dark dark:bg-content-dark">
            <p className="text-base font-medium text-text-light-secondary dark:text-dark-secondary">Today's Sales</p>
            <p className="text-3xl font-bold tracking-tight text-text-light-primary dark:text-dark-primary">$1,250</p>
            <p className="text-sm font-medium text-success">+5.2% from yesterday</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-border-light bg-content-light p-5 dark:border-border-dark dark:bg-content-dark">
            <p className="text-base font-medium text-text-light-secondary dark:text-dark-secondary">New Orders</p>
            <p className="text-3xl font-bold tracking-tight text-text-light-primary dark:text-dark-primary">32</p>
            <p className="text-sm font-medium text-success">+10% from yesterday</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-border-light bg-content-light p-5 dark:border-border-dark dark:bg-content-dark">
            <p className="text-base font-medium text-text-light-secondary dark:text-dark-secondary">Pending Payments</p>
            <p className="text-3xl font-bold tracking-tight text-text-light-primary dark:text-dark-primary">4</p>
            <p className="text-sm font-medium text-danger">-2.1% from yesterday</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-border-light bg-content-light p-5 dark:border-border-dark dark:bg-content-dark">
            <p className="text-base font-medium text-text-light-secondary dark:text-dark-secondary">Total Customers</p>
            <p className="text-3xl font-bold tracking-tight text-text-light-primary dark:text-dark-primary">512</p>
            <p className="text-sm font-medium text-success">+1.5% this month</p>
        </div>
      </div>
      
      {/* Charts */}
      {/* ... The rest of the main content from code.html goes here ... */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sales Overview */}
      </div>

      {/* Recent Orders Table */}
      <div className="mt-6 flex flex-col gap-4 rounded-xl border border-border-light bg-content-light p-6 dark:border-border-dark dark:bg-content-dark">
        <h3 className="text-lg font-semibold text-text-light-primary dark:text-dark-primary">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            {/* Table content... */}
          </table>
        </div>
      </div>
    </main>
  );
};

export default Home;