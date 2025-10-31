import React from 'react'
import Header from './Header'


const Thanks = () => {
    return(
        <>
        <div className="flex flex-col min-h-screen bg-background-dark text-white">
            <Header />
            <main className="flex w-full flex-1 flex-col items-center justify-center p-4 text-center">

                <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-xl bg-surface-dark p-8 shadow-lg">
                    
            
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-background-dark">
                
                    <div className="absolute h-full w-full animate-ping rounded-full bg-primary/50 opacity-75"></div>
                    <span className="material-symbols-outlined text-5xl text-primary relative">
                        dinner_dining
                    </span>
                    </div>

                    <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-text-primary-dark">Thank You!</h1>
                    <p className="text-lg text-text-secondary-dark">Your feast is being prepared.</p>
                    </div>

                
                    <div className="w-full rounded-lg border border-primary/20 bg-background-dark p-4 text-left">
                    <div className="flex items-baseline justify-between">
                        <p className="text-sm text-text-secondary-dark">Order Number</p>
                        <p className="text-xl font-semibold tracking-wider text-text-primary-dark">#TCD-86753</p>
                    </div>
                    <hr className="my-3 border-surface-dark" />
                    <div className="flex items-baseline justify-between">
                        <p className="text-sm text-text-secondary-dark">Estimated Arrival</p>
                        <p className="text-xl font-bold text-primary">25-30 Minutes</p>
                    </div>
                    </div>

                
                    <a href="#" className="mt-4 flex w-full max-w-xs cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-base font-bold text-background-dark transition-transform hover:scale-105">
                    <span className="material-symbols-outlined">home</span>
                    <span>Return to Menu</span>
                    </a>

                </div>
            </main>
        </div>
        </>
    )
}

export default Thanks