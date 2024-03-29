import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="w-full">
            <div className="footer w-full lg:flex lg:justify-center lg:space-x-[-20px] bg-gray-200  px-10 py-10 text-justify">
                <div className="space-y-4 pt-11">
                    <div className="flex space-x-4">
                        <img src="./images/recruitment.png" className="lg:pl-40 h-14" /><br />
                        <p className="text-4xl font-mono font-bold">RECRUITER</p>
                    </div>
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" className= " lg:pl-40 h-10 px-9" /> <br /> <br /> */}
                    <p className="lg:pl-40 font-thin text-black text-xs">© 2023 Company Name. All rights reserved.</p>
                </div>
                <div className="2 lg:pl-36 pt-11  space-y-3 text-align-center" >
                    <p className="font-bold text-xl">Menu</p>
                    <p className="cursor-pointer text-black text-base hover:text-slate-400"><Link to='Data' smooth={true} offset={-60}>Data</Link></p>
                    {/* <p className="cursor-pointer text-black text-base hover:text-slate-400"><Link to='Testimonials' smooth={true} offset={-60}>Testimonials</Link></p> */}
                    <p className="cursor-pointer text-black text-base hover:text-slate-400"><Link to='Quote' smooth={true} offset={-60}>Contact</Link></p>
                    <p className="cursor-pointer text-black text-base hover:text-slate-400"><Link to='Quote' smooth={true} offset={-60}>Book a Call</Link></p>
                </div>
                <div className="3 lg:pl-36 pt-11 space-y-3">
                    <p className="font-bold text-black text-xl">Policy</p>
                    <p className="text-black text-base hover:text-slate-400">Privacy Policy </p>
                    <p className="text-black text-base hover:text-slate-400">Cookie Policy</p>
                </div>
                <div className="4 lg:pl-36 pt-11 text-black space-y-3">
                    <p className="font-bold text-xl">Address</p>
                    <p>59 Southfield Rd, Concord, <br /> MA 01742, USA</p>

                </div>
            </div>
        </div>
    )
}

export default Footer;