import { Link } from "react-scroll";

const Process = () => {

    return (
        <div>
            <div id="Process" className="bg-amber-50 pt-16 pb-16 ">
                <p className="text-4xl pl-5 lg:pl-40">Our process</p>
                <div className="Image pl-24 lg:block hidden absolute right-10 ">
                    <img src="./images/progress.png" alt="" className="h-[600px] " />
                </div>
                <div className="lg:w-[50%] w-[90%]">

                    <div>

                        <div className="Step-1 flex pl-5 lg:pl-44 pt-10 ">
                            <div className="Step1">
                                <p className="text-lg font-bold">STEP-1</p>
                            </div>
                            <div className="Details">
                                <p className="text-lg font-bold pl-7">Fill in <Link to="Quote" smooth={true} className="text-blue-400 underline cursor-pointer" offset={-60}>the form</Link> and sign the contract (DocuSign)</p>
                                <p className="text-blue-400 pl-7 text-lg font-bold pt-2">Duration: 3 minutes</p>
                                <p className="text-base pl-7 pt-2">You give us your specifications and execute a normal recruiter contract with Coders Valley (no hire, no charge).</p>
                                <p className="text-base pl-7 pt-4">We begin the hunt after editing your opening to reflect the demands of the Latin American industry.</p>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="Step-2 flex pl-5 lg:pl-44 pt-4">
                            <div className="Step2">
                                <p className="text-lg font-bold">STEP-2</p>
                            </div>
                            <div className="Details">
                                <p className="text-lg font-bold pl-7">First Candidates</p>
                                <p className="text-blue-400 pl-7 text-lg font-bold pt-2">Duration: 2 working days</p>
                                <p className="text-base pl-7 pt-">Within two business days, you will receive an email with your first 2-3 prospects.</p>
                            </div>
                        </div>
                        <div className="Image ml-20 mt-5">
                        </div>
                    </div>

                    <div className="flex-auto">
                        <div className="Step-3 flex pt-4 pl-5 lg:pl-44">
                            <div className="Step3">
                                <p className="text-lg font-bold">STEP-3</p>
                            </div>
                            <div className="Details">
                                <p className="text-lg font-bold pl-7">Search for candidates and conduct interviews</p>
                                <p className="text-blue-400 pl-7 text-lg font-bold pt-4">Duration: 1-2 weeks</p>
                                <p className="text-base pl-7 pt-4">We perform early interviews, technical interviews, and applicant searches.</p>
                                <p className="text-base pl-7 pt-4">You can examine our evaluation of their resume, portfolio, and interview comments.</p>
                                <p className="text-base pl-7 pt-4">Within 1-2 weeks, you'll get another 7-10 prospects. (it depends on the complexity of the job). We'll arrange for your team and the prospects you like to meet together.</p>
                            </div>
                        </div>
                        {/* <div className="Image">
                        <img src="https://thumb.tildacdn.com/tild3231-3261-4637-b138-376437666161/-/format/webp/_1_1_1.png"  className="absolute ml-8" alt="" />
                        <img src="https://static.tildacdn.com/tild6536-6462-4638-a633-343362346137/320_px_10_fps.gif" className="relative h-32 top-6 left-[105px]" alt="" />
                    </div> */}

                    </div>


                    <div className="Step-4 flex pl-5 lg:pl-44">
                        <div className="Step4">
                            <p className="text-lg font-bold">STEP-4</p>
                        </div>
                        <div className="Details">
                            <p className="text-lg font-bold pl-7">Job offer</p>
                            <p className="text-blue-400 pl-7 text-lg font-bold pt-4">Duration: 1 day</p>
                            <p className="text-base pl-7 pt-4">If the selected talent does well in the interview and is a good fit for you, we then settle on a job offer with you and act as the intermediary between you and the applicant.</p>
                            <p className="text-base pl-7 pt-4">We assist you in setting up the process with the coder, including contract agreement and completion, onboarding, payment information, and so forth.</p>
                            <p className="text-base pl-7 pt-4">Our partnership is concluded once you've engaged your developer, and a charge is given.</p>
                        </div>

                        <div className="Image">
                            {/* <img src="https://static.tildacdn.com/tild3935-3036-4563-b765-353938626361/Group_48.svg" alt="" /> */}
                        </div>
                    </div>
                    <div className="p-3 my-5 ml-10 lg:ml-60 lg:p-6 flex bg-white rounded-lg shadow-lg">
                        <div>
                            <img src="https://static.tildacdn.com/tild6635-3262-4461-a631-653037353538/Vector.svg" className="h-32" alt="" />
                        </div>
                        <p className="text-base pl-7 pt-4" >If the developer quits before the 100-day mark or you dismiss him, we will locate a substitute at no cost to you.</p>
                    </div>


                </div>

            </div>

            <div className="container mb-10 ">
                <div className=" lg:px-44 pt-10   pb-16 px-7 md:flex " >
                    <div className="w-[90%] lg:w-[40%]">
                        <p className="lg:text-5xl text-3xl font-extrabold lg:my-16">We work in a team, directly with your HR and CTO</p>
                    </div>
                    <div className="w-[90%] lg:w-[60%] md:ml-12 ">
                        <p className="text-xl mt-3 font-bold text-blue-400" >We don't replace your HR function, we augment it.</p>
                        <p className="text-xl mt-3">We only assist your hiring team in working more productively in India's local marketplaces and expand the scope of your prospective hiring pool.
                        </p>
                        <p className="text-xl mt-3">We work effectively with passive candidates: more than 50% of top developers do not publish their resumes on recruitment sites.</p>
                        <p className="text-xl mt-3">We understand our market - our extensive network connections to both in-work, actively looking and post-graduate talent means we have access to a huge market across multiple countries.</p>
                    </div>
                </div>
                <hr className="lg:hidden h-2 text-blue-300"></hr>

                <div className="lg:px-28 px-7 mx-auto">
                    <p className="text-3xl font-bold pt-5">Interaction with your contractor</p>
                    <div className=" container mx-auto md:flex">
                        <div className="mt-10 md:w-[33%] BOX w-fit p-5 m-0 rounded-lg border-4 ">
                            <img src="https://static.tildacdn.com/tild3264-3862-4664-b666-333238656538/Vector.svg" alt="" />
                            <p className="text-xl mt-3 font-bold text-blue-400">MANAGEMENT</p>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>Developers will have knowledge of spoken and written English</p>
                            </div>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>Your developer will work directly with you, as well as with the rest of your team (via Agile/Scrum, Jira, Zoom, Slack, Git, etc.)</p>
                            </div>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>They work according to your time zone or with a difference of no more than 3 hours</p>
                            </div>
                        </div>
                        <div className="mt-10 md:w-[33%] md:ml-5 BOX w-fit p-5 m-0 rounded-lg border-4 ">
                            <img src="https://static.tildacdn.com/tild3066-3062-4638-a663-616562653665/Vector.svg" className="h-12" alt="" />
                            <p className="text-xl mt-3 font-bold text-blue-400">FINANCE ARRANGEMENT</p>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>You pay your developer directly, we do not manage his salary or payroll</p>
                            </div>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>Pay your contractor direct to the developer's Wise bank account and receive an invoice directly from the developer</p>
                            </div>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>You can also pay via Deel, Remote.com, Fiverr, Upwork or other predetermined channels</p>
                            </div>
                        </div>
                        <div className="mt-10 md:w-[33%] md:ml-5 BOX w-fit p-5 m-0 rounded-lg border-4 ">
                            <img src="https://static.tildacdn.com/tild3332-6131-4237-a638-373334643337/Vector.svg" alt="" />
                            <p className="text-xl mt-3 font-bold text-blue-400">LEGAL ARRANGEMENT</p>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>Contract and organise NDAs directly with the developer. We only help in the search</p>
                            </div>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>We will help you build and negotiate the right contract</p>
                            </div>
                            <div className="flex">
                                <img className="h-7" src="https://www.svgrepo.com/show/450680/bullet-point.svg" alt="" />
                                <p>We will do everything in our power to reduce paperwork and improve efficiency</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </div>


    )
}
export default Process;
