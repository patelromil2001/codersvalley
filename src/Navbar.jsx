const Navbar = () => {
    return (
      <nav className=" py-2 bg-cyan-100 text-black flex sticky top-0 z-50 justify-between ">
        <img src="https://static.tildacdn.com/tild6630-3465-4136-b830-656135383539/logo.svg" className="pt-3 h-10 px-9 flex justify-start" />
        <ul className="px-10 py-4 flex flex-row space-x-9 font-medium justify-end ">
            <li className="mx-2 cursor-pointer">About</li>
            <li className="mx-2 cursor-pointer">Salaries</li>
            <li className="mx-2 cursor-pointer">Process</li>
            <li className="mx-2 cursor-pointer">Testimonials</li>
            <li className="mx-2 cursor-pointer">Fees</li>
            <li className="mx-2 cursor-pointer">Contractor payroll & management</li>
            <li className="mx-2 cursor-pointer">Get A Quote</li>
        </ul>
    </nav>
    );
  }
   
  export default Navbar;