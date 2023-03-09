const Footer = () => {
    return(
        <div>
        <div className="footer bg-zinc-600 flex justify-items-stretch bottom-0">
            <div className="1 pt-11">
                <img src="images/logo.svg" className="pl-40 h-14" />
                <img src="images/linkedin.png" className= " pl-40 pt- h-10 px-9" />
                <p className="pl-40 font-thin text-xs">© 2022 Coders Valley. All rights reserved.</p> 
            </div>
            <div className="2 pl-32 pt-11 text-zinc-400 text-medium space-y-3" >
                <p>Menu</p>
                <p>Process</p>
                <p>Testimonials</p>
                <p>Contact</p>
                <p className="font-semibold">Book a Call</p>
            </div>
            <div className="3 pl-32 pt-11 text-zinc-400 ">
                <p>Policy</p>
                <p>Privacy Policy </p>
                <p>PCookie Policy</p>
            </div>
            <div className="4 pl-32 pt-11 text-zinc-400 ">
                <p>Address</p>
                <p>44 Montgomery St, San Francisco,
                    CA 94104, United States</p>
                <p>Av. Alm. Barroso, 81, Rio de Janeiro,
                    20031-004, Brazil</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;