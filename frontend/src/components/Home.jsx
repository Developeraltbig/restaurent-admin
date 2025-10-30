import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Navbar from './Navbar';
import menuData from '../data/menuData.json'; // Step 1: Import the data

// Step 2: Create a reusable component for displaying a single menu item
const MenuItem = ({ item }) => {
    // We will add the 'addToCart' functionality here in the next step
    const handleAddToCart = () => {
        console.log(`Adding ${item.name} to cart.`);
        // This is where the cart logic will go
    };

    return (
        <div className="flex items-stretch justify-between gap-4">
            <div className="flex flex-[2_2_0px] flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h3 className="text-text-primary-dark text-base font-bold leading-tight">{item.name}</h3>
                    <p className="text-text-secondary-dark text-sm font-normal leading-normal">{item.description}</p>
                </div>
                <p className="text-primary font-bold text-base">${item.price.toFixed(2)}</p>
                <button
                    onClick={handleAddToCart}
                    className="flex w-fit min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-full bg-surface-dark px-4 pr-2 text-sm font-medium leading-normal text-text-primary-dark transition-colors hover:bg-primary/20 flex-row-reverse h-8"
                >
                    <span className="material-symbols-outlined text-base">add</span>
                    <span className="truncate">Add</span>
                </button>
            </div>
            <div
                className="aspect-square flex-1 rounded-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${item.image}")` }}
                aria-label={item.name}
            ></div>
        </div>
    );
};


const Home = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="flex flex-col min-h-screen bg-background-dark">
                <Header />
                <Navbar />

                <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-28 lg:px-8">
                    {/* Step 3: Map over the categories from the JSON file */}
                    {menuData.map((category) => (
                        <div key={category.category} className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-text-primary-dark border-b-2 border-primary pb-2">
                                {category.category}
                            </h2>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                                {/* For each category, map over the first 4 items */}
                                {category.items.slice(0, 4).map((item) => (
                                    <MenuItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Home;