import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      id:'Home',
      name : 'Home'
    },
    {
      id: 'About',
      name: 'About'
    },
    {
      id: 'Salaries',
      name: 'Salaries'
    },
    {
      id: 'Process',
      name: 'Process'
    },
    {
      id: 'Testimonials',
      name: 'Testimonials'
    },
    {
      id: 'Fee',
      name: 'Fee'
    },
    {
      id: 'Contractor',
      name: 'Contractor payroll & management'
    },
    {
      id: 'Quote',
      name: 'Get A Quote'
    },
  ]

  return (
    <div className="sticky pt-5 top-0 left-0  z-50 ">
      <nav className="bg-white bg-scroll rounded-2xl w-[90%] mx-auto"  >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt=""
                />
              </div>
              <div className="hidden lg:block ml-auto">
                <div className="ml-10 flex items-baseline space-x-4">

                  {navItems.map((item) =>
                    <Link to={item.id} smooth={true} offset={-60}>
                      <button
                        className=" text-black hover:text-amber-100 px-3 py-2 rounded-md text-lg font-mono"
                      >
                        {item.name}
                      </button></Link>
                  )}

                </div>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                  </svg>

                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>

                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                {navItems.map((item) =>

                  <Link to={item.id} smooth={true} offset={-380} onClick={() =>
                    setIsOpen(false)
                  }>
                    <button
                      className=" text-black hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
