import React from "react";

const Menu = () => {
    return (
        <>
            
            <main class="flex-1 p-8">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    
                    <div class="flex flex-col gap-6 rounded-xl border border-border-light bg-content-light p-6 dark:border-border-dark dark:bg-content-dark">
                        <h3 class="text-lg font-semibold text-text-light-primary dark:text-dark-primary">Manage Categories</h3>
                        <form class="flex flex-col gap-4">
                            <div>
                                <label for="categoryName" class="mb-2 block text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Add New Category</label>
                                <input type="text" id="categoryName" class="form-input w-full rounded-lg border-border-light bg-background-light text-sm text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-background-dark dark:text-dark-primary dark:placeholder:text-dark-secondary" placeholder="e.g., Appetizers" />
                            </div>
                            <button type="submit" class="flex h-10 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary text-sm font-bold text-white shadow-sm hover:bg-primary/90">
                                <span class="truncate">Add Category</span>
                            </button>
                        </form>
                        <div class="my-2 border-t border-border-light dark:border-border-dark"></div>
                        <div>
                            <h4 class="mb-4 text-base font-semibold text-text-light-primary dark:text-dark-primary">Existing Categories</h4>
                            <ul class="space-y-3">
                                <li class="flex items-center justify-between rounded-lg bg-background-light p-3 dark:bg-background-dark">
                                    <span class="text-sm font-medium">Main Course</span>
                                    <button class="text-danger"><span class="material-symbols-outlined text-xl">delete</span></button>
                                </li>
                                <li class="flex items-center justify-between rounded-lg bg-background-light p-3 dark:bg-background-dark">
                                    <span class="text-sm font-medium">Desserts</span>
                                    <button class="text-danger"><span class="material-symbols-outlined text-xl">delete</span></button>
                                </li>
                                <li class="flex items-center justify-between rounded-lg bg-background-light p-3 dark:bg-background-dark">
                                    <span class="text-sm font-medium">Beverages</span>
                                    <button class="text-danger"><span class="material-symbols-outlined text-xl">delete</span></button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    
                    <div class="flex flex-col gap-6 rounded-xl border border-border-light bg-content-light p-6 dark:border-border-dark dark:bg-content-dark">
                        <h3 class="text-lg font-semibold text-text-light-primary dark:text-dark-primary">Upload New Menu Item</h3>
                        <form class="flex flex-col gap-4">
                            <div>
                                <label for="itemId" class="mb-2 block text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Item ID</label>
                                <input type="text" id="itemId" class="form-input w-full rounded-lg border-border-light bg-background-light text-sm" placeholder="e.g., 201" />
                            </div>
                            <div>
                                <label for="itemCategory" class="mb-2 block text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Category</label>
                                <select id="itemCategory" class="form-select w-full rounded-lg border-border-light bg-background-light text-sm">
                                    <option>Select a category</option>
                                    <option>Main Course</option>
                                    <option>Desserts</option>
                                    <option>Beverages</option>
                                </select>
                            </div>
                             <div>
                                <label for="dishName" class="mb-2 block text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Dish Name</label>
                                <input type="text" id="dishName" class="form-input w-full rounded-lg border-border-light bg-background-light text-sm" placeholder="e.g., Black Truffle Pasta" />
                            </div>
                            <div>
                                <label for="description" class="mb-2 block text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Description</label>
                                <textarea id="description" rows="3" class="form-textarea w-full rounded-lg border-border-light bg-background-light text-sm" placeholder="A short description of the dish..."></textarea>
                            </div>
                            <div>
                                <label for="price" class="mb-2 block text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Price</label>
                                <div class="relative">
                                    <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-text-light-secondary dark:text-dark-secondary">$</span>
                                    <input type="number" id="price" class="form-input w-full rounded-lg border-border-light bg-background-light pl-7 text-sm" placeholder="0.00" step="0.01" />
                                </div>
                            </div>
                             <div>
                                <label class="mb-2 block text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Image</label>
                                <label for="imageUpload" class="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border-light bg-background-light p-6 text-center hover:border-primary dark:border-border-dark dark:bg-background-dark">
                                    <span class="material-symbols-outlined text-primary">upload_file</span>
                                    <span class="text-sm font-medium text-text-light-secondary dark:text-dark-secondary">Click to upload or drag and drop</span>
                                </label>
                                <input id="imageUpload" type="file" class="hidden" />
                            </div>
                            <button type="submit" class="mt-2 flex h-10 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary text-sm font-bold text-white shadow-sm hover:bg-primary/90">
                                <span class="truncate">Upload Item</span>
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Menu;