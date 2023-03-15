import { Button } from "antd";
const Fee = () => {
    return (
        <div id="Fee" className="w-full bg-slate-100">
            <div className="py-12 md:ml-24 mx-6"><span className="text-5xl font-[350]">Our recruitment fee structure</span></div>
            <div class=" mx-auto overflow-hidden w-[80%] md:w-1/2 lg:w-1/3 mb-12 mt-4">
                <p className="text-[17px] font-light text-center text-gray-700 tracking-wider">
                    We will provide the invoice and the contract. You pay our fee in USD to our US bank account
                </p>
            </div>
            <div class=" mx-auto  rounded overflow-hidden shadow-xl w-[80%] md:w-1/2 lg:w-1/3 bg-white">
                <div class="px-6 py-4 text-center">
                    <div class="text-3xl font-[400] tracking-wide my-2">Success Fee</div>
                    <div className="my-4 text-gray-400 font-light">
                        <span>No hire - no fee</span> <br />
                        <span>No prepayment</span><br />
                        <span>100 days free replacement</span>
                    </div>
                    <div className="my-10"><span className="text-[42px] font-[600]">12-19%</span></div>
                    <div className="space-y-5 ">
                        <div><span className=" font-semibold">of the placed employee's first year's base salary</span></div>
                        <div><span className="font-thin tracking-wide">up to $40,000 a year – </span> <span className="font-bold">19%</span></div>
                        <div><span className="font-thin tracking-wide">$40,001 - $50,000 a year – </span> <span className="font-bold">17%</span></div>
                        <div><span className="font-thin tracking-wide">$50,001 - $65,000 a year – </span> <span className="font-bold">14%</span></div>
                        <div><span className="font-thin tracking-wide">$65,001 a year and over – </span> <span className="font-bold">12%</span></div>
                    </div>
                    <Button className="mt-10 mb-6 bg-blue-400" size="large" type="primary"> Get a Quote</Button>

                </div>

            </div>
            <div className="py-10"></div>
        </div>
    );
}

export default Fee;