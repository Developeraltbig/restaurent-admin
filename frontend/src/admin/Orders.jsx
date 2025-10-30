import React from 'react'

const Orders = () => {
    return(
        <>
            <main class="flex-1 p-8">
                <div class="flex flex-col gap-6 rounded-xl border border-border-light bg-content-light p-6 dark:border-border-dark dark:bg-content-dark">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-semibold text-text-light-primary dark:text-dark-primary">All Orders</h3>
                        <button class="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm hover:bg-primary/90">
                            <span class="material-symbols-outlined">add_circle</span>
                            <span class="truncate">Create Order</span>
                        </button>
                    </div>
                    
                    <div class="flex flex-wrap items-center gap-4">
                        <label class="relative flex h-10 w-full min-w-40 max-w-64 items-center">
                            <span class="material-symbols-outlined absolute left-3 text-text-light-secondary dark:text-dark-secondary">search</span>
                            <input class="form-input h-full w-full rounded-lg border-border-light bg-background-light pl-10 text-sm text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-background-dark dark:text-dark-primary dark:placeholder:text-dark-secondary" placeholder="Search by ID or name..." />
                        </label>
                        <select class="form-select h-10 rounded-lg border-border-light bg-background-light text-sm text-text-light-primary focus:border-primary focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-background-dark dark:text-dark-primary">
                            <option>All Statuses</option>
                            <option>Preparing</option>
                            <option>Ready for Pickup</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                        </select>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="border-b border-border-light dark:border-border-dark">
                                    <th class="py-3 pr-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary">Order ID</th>
                                    <th class="py-3 px-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary">Name</th>
                                    <th class="py-3 px-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary">Dishes</th>
                                    <th class="py-3 px-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary">Amount</th>
                                    <th class="py-3 px-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary">Status</th>
                                    <th class="py-3 pl-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-light last:border-0 dark:border-border-dark">
                                    <td class="py-4 pr-4 text-sm font-medium text-text-light-primary dark:text-dark-primary">#1024</td>
                                    <td class="px-4 py-4 text-sm text-text-light-secondary dark:text-dark-secondary">John Doe</td>
                                    <td class="px-4 py-4 text-sm text-text-light-secondary dark:text-dark-secondary">1x Truffle Pasta, 1x Coke</td>
                                    <td class="px-4 py-4 text-sm font-medium text-text-light-primary dark:text-dark-primary">$45.50</td>
                                    <td class="px-4 py-4"><span class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">Delivered</span></td>
                                    <td class="py-4 pl-4 text-right"><button class="text-text-light-secondary dark:text-dark-secondary"><span class="material-symbols-outlined">more_horiz</span></button></td>
                                </tr>
                                <tr class="border-b border-border-light last:border-0 dark:border-border-dark">
                                    <td class="py-4 pr-4 text-sm font-medium text-text-light-primary dark:text-dark-primary">#1023</td>
                                    <td class="px-4 py-4 text-sm text-text-light-secondary dark:text-dark-secondary">Jane Smith</td>
                                    <td class="px-4 py-4 text-sm text-text-light-secondary dark:text-dark-secondary">2x Margherita Pizza</td>
                                    <td class="px-4 py-4 text-sm font-medium text-text-light-primary dark:text-dark-primary">$36.00</td>
                                    <td class="px-4 py-4"><span class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Preparing</span></td>
                                    <td class="py-4 pl-4 text-right"><button class="text-text-light-secondary dark:text-dark-secondary"><span class="material-symbols-outlined">more_horiz</span></button></td>
                                </tr>
                                <tr class="border-b border-border-light last:border-0 dark:border-border-dark">
                                    <td class="py-4 pr-4 text-sm font-medium text-text-light-primary dark:text-dark-primary">#1022</td>
                                    <td class="px-4 py-4 text-sm text-text-light-secondary dark:text-dark-secondary">Sam Wilson</td>
                                    <td class="px-4 py-4 text-sm text-text-light-secondary dark:text-dark-secondary">1x Seared Scallops, 1x Water</td>
                                    <td class="px-4 py-4 text-sm font-medium text-text-light-primary dark:text-dark-primary">$34.75</td>
                                    <td class="px-4 py-4"><span class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Ready for Pickup</span></td>
                                    <td class="py-4 pl-4 text-right"><button class="text-text-light-secondary dark:text-dark-secondary"><span class="material-symbols-outlined">more_horiz</span></button></td>
                                </tr>
                                <tr class="border-b border-border-light last:border-0 dark:border-border-dark">
                                    <td class="py-4 pr-4 text-sm font-medium text-text-light-primary dark:text-dark-primary">#1021</td>
                                    <td class="px-4 py-4 text-sm text-text-light-secondary dark:text-dark-secondary">Mike Johnson</td>
                                    <td class="px-4 py-4 text-sm text-text-light-secondary dark:text-dark-secondary">1x Filet Mignon</td>
                                    <td class="px-4 py-4 text-sm font-medium text-text-light-primary dark:text-dark-primary">$55.00</td>
                                    <td class="px-4 py-4"><span class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">Cancelled</span></td>
                                    <td class="py-4 pl-4 text-right"><button class="text-text-light-secondary dark:text-dark-secondary"><span class="material-symbols-outlined">more_horiz</span></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Orders