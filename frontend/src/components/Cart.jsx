import React from 'react'
import Header from './Header' // Assuming you have a generic Header for this page

const Cart = () => {
    return (
        
        <div className="flex flex-col min-h-screen bg-background-dark text-white">
            <Header />

            
            <main className="mx-auto w-full max-w-6xl flex-grow p-4 lg:py-8 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    
                    <div className="lg:col-span-2">
                        <div className="flex flex-col gap-4">
                        
                            <div className="flex justify-between gap-4 rounded-xl bg-zinc-900/40 p-3">
                                <div className="flex items-start gap-4">
                                    <div className="size-[70px] shrink-0 rounded-lg bg-cover bg-center bg-no-repeat" data-alt="A gourmet dish of Truffle Risotto" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDA4icIkT7O72nnxf_BczOVeMGHjqsyLw2VE15jPPOXJfpUhDR843Nsm02tJ2akpY_DEfxauY13Bya5wutMP4jgtbGeOIYJJbT3l7GXGHPH0STcQ0r9IdmBTtfsdKoTrCJ_znhBEScUw_GWUOq3ULEgBZpCFbCtcKwAZpXijvva0BhSbgSQCfVcHnXWwuHT0A0_4ji5KCY37xLhtfpewHoP4NZ_YDb_UxnUm-bQIVlf_5vd8FpCyGZhK7QXErZ1Ltc-dfHcyHUa9Fk")' }}></div>
                                    <div className="flex flex-1 flex-col justify-center gap-1">
                                        <p className="text-base font-medium leading-normal">Truffle Risotto</p>
                                        <p className="text-sm font-semibold leading-normal text-primary">$22.50</p>
                                        <p className="text-sm font-normal leading-normal text-gray-400">Extra cheese</p>
                                    </div>
                                </div>
                                <div className="flex shrink-0 flex-col items-end justify-between">
                                    <button className="text-gray-500 transition-colors hover:text-red-500">
                                        
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-lg font-medium leading-normal transition-colors hover:bg-zinc-700">-</button>
                                        <span className="w-4 bg-transparent p-0 text-center text-base font-medium leading-normal">1</span>
                                        <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-primary text-background-dark text-lg font-medium leading-normal transition-colors hover:bg-primary/90">+</button>
                                    </div>
                                </div>
                            </div>
                
                            <div className="flex justify-between gap-4 rounded-xl bg-zinc-900/40 p-3">
                                <div className="flex items-start gap-4">

                                    <div className="size-[70px] shrink-0 rounded-lg bg-cover bg-center bg-no-repeat" data-alt="A classic Margherita Pizza with fresh basil" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDotKSl7mm8pAPQb1CbyPUeylPDsM7Q6rpfRg6bhGWfYaXrKogRteEc05vgMPfqADULXGoEbs9w3mAmn4fIyvZSnkjcfTU_dnbqLSR_ZvqfQBvwVaLKP7jLURIW3Yc_6dl6Ljj9y5oMHJWFHcfesLDonI8cvCpfwekXjzqnIm4vSb8jI1ZFjoKATg7VT1RYC4ZxRu9g92OaTWZzrZofVQ7OG5n65faDOhgeRgANvhdWjs7w1penlgH1GAxa38YGkSu5zDoVR9MZxj0")' }}></div>
                                    <div className="flex flex-1 flex-col justify-center gap-1">
                                        <p className="text-base font-medium leading-normal">Classic Margherita Pizza</p>
                                        <p className="text-sm font-semibold leading-normal text-primary">$18.00</p>
                                        <p className="text-sm font-normal leading-normal text-gray-400">Gluten-free crust</p>
                                    </div>
                                </div>
                                <div className="flex shrink-0 flex-col items-end justify-between">
                                    <button className="text-gray-500 transition-colors hover:text-red-500">
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span>
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-lg font-medium leading-normal transition-colors hover:bg-zinc-700">-</button>
                                        <span className="w-4 bg-transparent p-0 text-center text-base font-medium leading-normal">2</span>
                                        <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-primary text-background-dark text-lg font-medium leading-normal transition-colors hover:bg-primary/90">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex min-h-14 items-center justify-between gap-4 rounded-xl bg-zinc-900/40 px-4 py-3">
                                <div className="flex flex-1 items-center gap-4">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                                        <span className="material-symbols-outlined">sell</span>
                                    </div>
                                    <p className="flex-1 truncate text-base font-normal leading-normal">Add a promo code</p>
                                </div>
                                <div className="shrink-0">
                                    <div className="flex size-7 items-center justify-center">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:col-span-1 lg:mt-0">
                        <div className="lg:sticky lg:top-28">
                            <h2 className="mb-4 hidden text-xl font-bold lg:block">Order Summary</h2>
                            <div className="flex flex-col rounded-xl bg-zinc-900/40 p-4">
                                <div className="flex justify-between gap-x-6 py-2">
                                    <p className="text-sm font-normal leading-normal text-gray-400">Subtotal</p>
                                    <p className="text-right text-sm font-normal leading-normal">$58.50</p>
                                </div>
                                <div className="flex justify-between gap-x-6 py-2">
                                    <p className="text-sm font-normal leading-normal text-gray-400">Taxes &amp; Fees</p>
                                    <p className="text-right text-sm font-normal leading-normal">$4.68</p>
                                </div>
                                <div className="flex justify-between gap-x-6 py-2">
                                    <p className="text-sm font-normal leading-normal text-gray-400">Delivery</p>
                                    <p className="text-right text-sm font-normal leading-normal">$5.00</p>
                                </div>
                                <div className="my-3 border-t border-zinc-700"></div>
                                <div className="flex items-center justify-between gap-x-6 py-2">
                                    <p className="text-base font-bold leading-normal">Total</p>
                                    <p className="text-right text-xl font-bold leading-normal text-primary">$68.18</p>
                                </div>
                                
                                <button className="mt-4 hidden w-full transform rounded-xl bg-primary py-4 px-6 text-lg font-bold text-background-dark shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/90 lg:block">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            
            <footer className="fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-background-dark to-transparent p-4 lg:hidden">
                <button className="w-full transform rounded-xl bg-primary py-4 px-6 text-lg font-bold text-background-dark shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/90">
                    Proceed to Checkout
                </button>
            </footer>
        </div>
    )
}

export default Cart