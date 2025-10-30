// frontend/src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // <-- STEP 1: Import Link

const Footer = () => {
    return(
        // The empty fragment <>...</> is not needed here
        <footer className="fixed bottom-0 left-0 right-0 z-20 p-4">
            <div className="mx-auto flex h-16 w-full max-w-lg items-center justify-between rounded-full bg-primary px-5 shadow-lg md:max-w-6xl md:rounded-lg">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-black">3 ITEMS</span>
                    <span className="text-lg font-bold text-black">$96.25</span>
                </div>
                
                {/* STEP 2 & 3: Replace <button> with <Link> and add the `to` prop */}
                <Link to="/cart" className="flex items-center gap-2 text-base font-bold text-black">
                    <span>VIEW CART</span>
                    <span className="material-symbols-outlined">shopping_bag</span>
                </Link>

            </div>
        </footer>
    )
}

export default Footer;