import React from 'react'

const Navbar = () => {
    return(
        <>
            <nav class="sticky top-[72px] z-10 border-b border-surface-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div
                    class="mx-auto flex w-full max-w-6xl gap-6 overflow-x-auto whitespace-nowrap px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scroll-smooth md:justify-center"
                >
                    <a
                    class="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-4 text-text-primary-dark min-w-fit hover:text-primary transition-colors duration-200"
                    href="#"
                    >
                    <p class="text-sm font-bold leading-normal tracking-wide">Main Course</p>
                    </a>

                    <a
                    class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark min-w-fit hover:text-primary transition-colors duration-200"
                    href="#"
                    >
                    <p class="text-sm font-bold leading-normal tracking-wide">Appetizers</p>
                    </a>

                    <a
                    class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark min-w-fit hover:text-primary transition-colors duration-200"
                    href="#"
                    >
                    <p class="text-sm font-bold leading-normal tracking-wide">Desserts</p>
                    </a>

                    <a
                    class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark min-w-fit hover:text-primary transition-colors duration-200"
                    href="#"
                    >
                    <p class="text-sm font-bold leading-normal tracking-wide">Soups &amp; Salads</p>
                    </a>

                    <a
                    class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark min-w-fit hover:text-primary transition-colors duration-200"
                    href="#"
                    >
                    <p class="text-sm font-bold leading-normal tracking-wide">Beverages</p>
                    </a>

                    <a
                    class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark min-w-fit hover:text-primary transition-colors duration-200"
                    href="#"
                    >
                    <p class="text-sm font-bold leading-normal tracking-wide">Specials</p>
                    </a>

                    <a
                    class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4 text-text-secondary-dark min-w-fit hover:text-primary transition-colors duration-200"
                    href="#"
                    >
                    <p class="text-sm font-bold leading-normal tracking-wide">Chef’s Picks</p>
                    </a>
                </div>
            </nav>

        </>
    )
}

export default Navbar