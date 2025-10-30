import React from 'react'

const Qr = () => {
    return (
        <>
            <main class="flex-1 p-6 lg:p-10">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-wrap justify-between gap-3 mb-8">
                    <div class="flex flex-col gap-1">
                        <h1 class="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">QR Code Generator</h1>
                        <p class="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Create, view, and manage QR codes for your tables.</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-1 flex flex-col gap-6">
                        <div class="bg-white dark:bg-subtle-dark/50 p-6 rounded-xl border border-border-light dark:border-border-dark">
                        <h2 class="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-2">Create New QR Code</h2>
                        <p class="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pb-4">Enter a table number to generate a unique QR code.</p>
                        <label class="flex flex-col w-full">
                            <p class="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Table Number</p>
                            <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" placeholder="Enter table number, e.g., '12A'" value="12A"/>
                        </label>
                        </div>
                        <div class="bg-white dark:bg-subtle-dark/50 p-6 rounded-xl border border-border-light dark:border-border-dark flex flex-col items-center gap-6">
                        <h3 class="text-text-light dark:text-text-dark text-lg font-bold">Preview for Table: 12A</h3>
                        <div class="bg-white p-4 rounded-lg">
                            <img class="w-48 h-48" data-alt="Generated QR code for table 12A" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnvWI2-xmodEUGIVHiuhNGjYSObQO_zv78QVNcEjseYZ3JmHY-eh4D3HusuIjaixk6OMXFRLspWYfCfUbHOJB_QfEsQzgSo-CPhgk2G2g1I8w3xyNUC-giPLvxoinvoFIqWSEXqtszBAMrL5GFDoT_5G1ZtvsLJLPP9QY8bUsQbXrfZDu9p9ysXuJ5a29WGwhPA5U-aa-ZUFTQZjFHXVe8h70wiffXmSvRBYP11U6IgJFRl0WCPvTn0qJQ1dVYObxfrD3GiOOCj54"/>
                        </div>
                        <button class="flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                        <span class="material-symbols-outlined">download</span>
                        <span class="truncate">Download QR Code</span>
                        </button>
                        </div>
                    </div>
                    <div class="lg:col-span-2 bg-white dark:bg-subtle-dark/50 p-6 rounded-xl border border-border-light dark:border-border-dark">
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
                        <h2 class="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em]">Generated QR History</h2>
                        <div class="relative w-full sm:w-64">
                            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">search</span>
                            <input class="form-input w-full rounded-lg text-sm pl-10 pr-4 py-2 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-none" placeholder="Search by table number..."/>
                        </div>
                        </div>
                        <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="border-b border-border-light dark:border-border-dark">
                                <tr>
                                    <th class="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Table Number</th>
                                    <th class="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Generated On</th>
                                    <th class="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-light dark:border-border-dark hover:bg-subtle-light/50 dark:hover:bg-background-dark transition-colors">
                                    <td class="p-4 font-medium text-text-light dark:text-text-dark">Table 8</td>
                                    <td class="p-4 text-gray-500 dark:text-gray-400">2023-10-28</td>
                                    <td class="p-4">
                                    <div class="flex items-center justify-end gap-2">
                                        <button aria-label="Download QR code for Table 8" class="p-2 rounded-lg hover:bg-subtle-light dark:hover:bg-subtle-dark text-gray-600 dark:text-gray-300 transition-colors">
                                        <span class="material-symbols-outlined text-xl">download</span>
                                        </button>
                                        <button aria-label="Delete QR code for Table 8" class="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition-colors">
                                        <span class="material-symbols-outlined text-xl">delete</span>
                                        </button>
                                    </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-light dark:border-border-dark hover:bg-subtle-light/50 dark:hover:bg-background-dark transition-colors">
                                    <td class="p-4 font-medium text-text-light dark:text-text-dark">Patio 3</td>
                                    <td class="p-4 text-gray-500 dark:text-gray-400">2023-10-27</td>
                                    <td class="p-4">
                                    <div class="flex items-center justify-end gap-2">
                                        <button aria-label="Download QR code for Patio 3" class="p-2 rounded-lg hover:bg-subtle-light dark:hover:bg-subtle-dark text-gray-600 dark:text-gray-300 transition-colors">
                                        <span class="material-symbols-outlined text-xl">download</span>
                                        </button>
                                        <button aria-label="Delete QR code for Patio 3" class="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition-colors">
                                        <span class="material-symbols-outlined text-xl">delete</span>
                                        </button>
                                    </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-light dark:border-border-dark hover:bg-subtle-light/50 dark:hover:bg-background-dark transition-colors">
                                    <td class="p-4 font-medium text-text-light dark:text-text-dark">Table 15B</td>
                                    <td class="p-4 text-gray-500 dark:text-gray-400">2023-10-26</td>
                                    <td class="p-4">
                                    <div class="flex items-center justify-end gap-2">
                                        <button aria-label="Download QR code for Table 15B" class="p-2 rounded-lg hover:bg-subtle-light dark:hover:bg-subtle-dark text-gray-600 dark:text-gray-300 transition-colors">
                                        <span class="material-symbols-outlined text-xl">download</span>
                                        </button>
                                        <button aria-label="Delete QR code for Table 15B" class="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition-colors">
                                        <span class="material-symbols-outlined text-xl">delete</span>
                                        </button>
                                    </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div class="flex flex-col items-center justify-center text-center py-16">
                        <span class="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-600 mb-4">qr_code_scanner</span>
                        <h3 class="text-lg font-semibold text-text-light dark:text-text-dark">No QR Codes Generated Yet</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Use the form on the left to create your first QR code.</p>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </>
    )
}

export default Qr;