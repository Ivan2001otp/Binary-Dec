import React, { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { navigation, company } = config;
    const logo: string = company.logo;

    return (
        <>
            {/* Background SVG for larger screens */}
            <svg
                className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2`}
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
                <Popover>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav
                            aria-label="Global"
                            className="flex items-center justify-between sm:h-10 relative"
                        >
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="w-full md:w-auto">
                                    <div className="flex items-center">
                                        <div>
                                            <img alt="logo" className="h-16 w-auto sm:h-16" src={logo} />
                                        </div>
                                        <div>
                                            <h2 className="text-xl text-zinc-900 font-medium">BinaryDec</h2>
                                        </div>
                                    </div>

                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button
                                            className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`hidden md:flex gap-10 ${isMobile ? 'flex' : ''}`}
                            >
                                {navigation.map((item) => (
                                    <Link
                                        spy={true}
                                        active="active"
                                        smooth={true}
                                        duration={1000}
                                        key={item.name}
                                        to={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transform hover:translate-y-1 transition-transform"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="max-w-sm absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div
                                className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
                            >
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img className="h-8 w-auto" src={logo} alt="logo" />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button
                                            className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                                        >
                                            <span className="sr-only">Close main menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <Link
                                            spy={true}
                                            active="active"
                                            smooth={true}
                                            duration={1000}
                                            key={item.name}
                                            to={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transform hover:translate-y-1 transition-transform"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </>
    );
};

export default Menu;
