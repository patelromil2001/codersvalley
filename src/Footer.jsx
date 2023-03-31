import { Link } from "react-scroll";

const Footer = () => {
    return(
        <div className="w-full">
            <div className="footer w-full lg:flex bg-amber-50  px-10 py-10 text-justify">
                <div className="1 pt-11">
                    <img src="https://www.pngkey.com/png/full/529-5291672_sample-logo-png-transparent-background.png" className="lg:pl-40 h-14" /><br />
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" className= " lg:pl-40 h-10 px-9" /> <br /> <br />
                    <p className="lg:pl-40 font-thin text-black text-xs">© 2022 Company Name. All rights reserved.</p> 
                </div>
                <div className="2 lg:pl-36 pt-11 text-black text-base space-y-3 text-align-center" >
                    <p className="font-bold text-xl">Menu</p>
                    <p className="cursor-pointer"><Link to='Process' smooth={true} offset={-60}>Process</Link></p>
                    <p className="cursor-pointer"><Link to='Testimonials' smooth={true} offset={-60}>Testimonials</Link></p>
                    <p className="cursor-pointer"><Link to='Quote' smooth={true} offset={-60}>Contact</Link></p>
                    <p>Book a Call</p> 
                </div>
                <div className="3 lg:pl-36 pt-11 text-black space-y-3">
                    <p className="font-bold text-xl">Policy</p>
                    <p>Privacy Policy </p>
                    <p>Cookie Policy</p>
                </div>
                <div className="4 lg:pl-36 pt-11 text-black space-y-3">
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