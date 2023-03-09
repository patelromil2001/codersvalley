const Navbar = () => {
    return (
      <nav className=" py-2 bg-cyan-100 text-black flex justify-between sticky">
        <img src="images/logo.svg" className="pt-3 h-10 px-9" />
        <ul className="px-10 py-4 flex justify-end space-x-9 font-medium">
            <li className="mx-2 cursor-pointer">About</li>
            <li className="mx-2 cursor-pointer">Salaries</li>
            <li className="mx-2 cursor-pointer">Process</li>
            <li className="mx-2 cursor-pointer">Testimonials</li>
            <li className="mx-2 cursor-pointer">Fees</li>
            <li className="mx-2 cursor-pointer">Contractor payroll & management</li>
            <li className="mx-2 cursor-pointer">Get a Quote</li>
        </ul>
    </nav>
    );
  }
   
  export default Navbar;