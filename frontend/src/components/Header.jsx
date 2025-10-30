import React from 'react'

const Header = () => {
    return(
        <>
        <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-4 pb-2">
                <div className="text-text-primary-dark flex size-12 shrink-0 items-center justify-start">
                <span className="material-symbols-outlined text-primary text-3xl">restaurant_menu</span>
                </div>
                <img className="items-center" src="https://thecourtyarddiaries.com/images/Courtyard-logo-new.png" alt="Logo" width="200" height="100" />
                <div className="flex w-12 items-center justify-end">
                <button className="flex h-12 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent p-0 text-text-primary-dark min-w-0">
                    <span className="material-symbols-outlined">search</span>
                </button>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header