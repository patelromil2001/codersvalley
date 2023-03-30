import { Link } from "react-scroll";

const Process = () => {

    return (
        <div>
            <div id="Process" className="bg-amber-50 pt-16 pb-16 ">
                <p className="text-4xl pl-5 lg:pl-40">Our process</p>
                <div className="lg:w-[50%] w-[90%]">

                <div>
                    <div className="Step-1 flex pl-5 lg:pl-44 pt-10 ">
                        <div className="Step1">
                            <p className="text-lg font-bold">STEP-1</p>
                        </div>
                        <div className="Details">
                            <p className="text-lg font-bold pl-7">Fill in <Link to="Quote" smooth={true} className="text-blue-400 underline cursor-pointer" offset={-60}>the form</Link> and sign the contract (DocuSign)</p>
                            <p className="text-blue-400 pl-7 text-lg font-bold pt-2">Duration: 3 minutes</p>
                            <p className="text-base pl-7 pt-2">You sign a standard recruiter contract (no hire - no fee) with Coders Valley and send us your requirements.</p>
                            <p className="text-base pl-7 pt-4">We edit your vacancy for the specifics of the Latin America market and start the search.</p>
                        </div>
                    </div>
                    <div className="Image pl-24">
                        {/* <img src="https://thumb.tildacdn.com/tild6265-3636-4830-a562-336630393935/-/format/webp/image_10.png" alt="" /> */}
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
                                <p className="text-base pl-7 pt-">You will receive your first 2-3 candidates by email within 2 working days.</p>
                            </div>
                        </div>
                        <div className="Image ml-20 mt-5">
                            {/* <img src="https://static.tildacdn.com/tild6464-3138-4662-a233-643139393133/Group_33.svg" alt="" /> */}
                            {/* images 
                    0 https://static.tildacdn.com/tild6133-6464-4335-a434-666261356562/Group_47.svg
                    1 https://static.tildacdn.com/tild3433-6364-4634-b937-383537353465/Group_34.svg
                    2 https://static.tildacdn.com/tild3061-3162-4566-a137-346130316335/Group_37.svg
                    3 https://static.tildacdn.com/tild6332-6633-4436-a333-636534343932/Group_40.svg 
                    4 https://static.tildacdn.com/tild6262-3765-4236-b931-343065303830/Group_39.svg
                    5 https://static.tildacdn.com/tild3839-3636-4261-a162-336338663336/Group_36.svg
                    */}
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
                                <p className="text-base pl-7 pt-4">We search for candidates and conduct initial interviews and technical interviews.</p>
                                <p className="text-base pl-7 pt-4">You can see our review of their CV, portfolio, and interview feedback.</p>
                                <p className="text-base pl-7 pt-4">You will receive another 7-10 candidates within 1-2 weeks (it depends on the complexity of the job). We will organize a joint interview of your team with the candidates that you like.</p>
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
                            <p className="text-base pl-7 pt-4">If the chosen talent interviews well, and is suitable for`` you, we then agree on a Job Offer with you and become`` the middle person between you and the candidate.</p>
                            <p className="text-base pl-7 pt-4">We help you organize the workflow with the developer:`` agreement and conclusion of the contract, onboarding,`` payment details, and so on.</p>
                            <p className="text-base pl-7 pt-4">Once you've hired your developer, our relationship is`` complete and a fee is paid.</p>
                        </div>
                        <div className="Image">
                            {/* <img src="https://static.tildacdn.com/tild3935-3036-4563-b765-353938626361/Group_48.svg" alt="" /> */}
                        </div>
                    </div>


                </div>

            </div>

            <div className="container mb-10 ">
                <div className=" lg:px-44 pt-16 pb-16 px-7 md:flex lg:mt-28" >
                    <div className="w-[90%] lg:w-[40%]">
                        <p className="lg:text-5xl text-3xl font-extrabold lg:my-16">We work in a team, directly with your HR and CTO</p>
                    </div>
                    <div className="w-[90%] lg:w-[60%] md:ml-12 ">
                        <p className="text-xl mt-3 font-bold text-blue-400" >We don't replace your HR function, we augment it.</p>
                        <p className="text-xl mt-3">We only help your recruiting team to work more effectively in the local markets of Latin America, and make your potential hiring net that much wider.</p>
                        <p className="text-xl mt-3">We work effectively with passive candidates: more than 50% of top developers do not post their resumes on recruitment sites.</p>
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
