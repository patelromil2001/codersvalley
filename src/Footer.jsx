const Footer = () => {
    return(
        <div>
        <div className="footer bg-zinc-600 flex px-10 py-10 text-justify">
            <div className="1 pt-11">
                <img src="https://static.tildacdn.com/tild6630-3465-4136-b830-656135383539/logo.svg" className="pl-40 h-14" /><br />
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" className= " pl-40 h-10 px-9" /> <br /> <br />
                <p className="pl-40 font-thin text-xs">© 2022 Coders Valley. All rights reserved.</p> 
            </div>
            <div className="2 pl-36 pt-11 text-zinc-400 text-base space-y-3 text-align-center" >
                <p className="font-bold text-xl">Menu</p>
                <p>Process</p>
                <p>Testimonials</p>
                <p>Contact</p>
                <p>Book a Call</p> 
            </div>
            <div className="3 pl-36 pt-11 text-zinc-400 space-y-3">
                <p className="font-bold text-xl">Policy</p>
                <p>Privacy Policy </p>
                <p>Cookie Policy</p>
            </div>
            <div className="4 pl-36 pt-11 text-zinc-400 space-y-3">
                <p className="font-bold text-xl">Address</p>
                <p>44 Montgomery St, San Francisco,<br />
                    CA 94104, United States</p>
                <p>Av. Alm. Barroso, 81, Rio de Janeiro,<br />
                    20031-004, Brazil</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;