import React from 'react'

const Navbar = () => {
    return(
        <>
            <nav className="sticky top-[72px] z-10 border-b border-surface-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="mx-auto flex w-full max-w-6xl gap-6 overflow-x-auto whitespace-nowrap px-4 scrollbar-hide md:justify-center">
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark" href="#">
                    <p className="text-sm font-bold leading-normal tracking-wide">Appetizers</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-4 text-text-primary-dark" href="#">
                    <p className="text-sm font-bold leading-normal tracking-wide">Main Course</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark" href="#">
                    <p className="text-sm font-bold leading-normal tracking-wide">Desserts</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark" href="#">
                    <p className="text-sm font-bold leading-normal tracking-wide">Soups &amp; Salads</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark" href="#">
                    <p className="text-sm font-bold leading-normal tracking-wide">Beverages</p>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar