const Process = () => {
    return(
        <div id="Process" className="bg-blue-50 pt-16 pb-16">
            <p className="text-4xl pl-40">Our process</p>
            <div className="Step-1 flex pl-44 pt-10">
                <div className="Step1">
                    <p className="text-lg font-bold">STEP-1</p>
                </div>
                <div className="Details">
                    <p className="text-lg font-bold pl-7">Fill in <span> the form</span> and sign the contract (DocuSign)</p>
                    <p className="text-blue-400 pl-7 text-lg font-bold pt-4">Duration: 3 minutes</p>
                    <p className="text-base pl-7 pt-4">You sign a standard recruiter contract (no hire - no fee) <br /> with Coders Valley and send us your requirements.</p>
                    <p className="text-base pl-7 pt-4">We edit your vacancy for the specifics of the Latin <br /> America market and start the search.</p>
                </div>
                <div className="Image pl-24">
                    <img src="https://thumb.tildacdn.com/tild6265-3636-4830-a562-336630393935/-/format/webp/image_10.png" alt="" />
                </div>
            </div>
            <div className="Step-2 flex pl-44">
                <div className="Step2">
                    <p className="text-lg font-bold">STEP-2</p>
                </div>
                <div className="Details">
                    <p className="text-lg font-bold pl-7">First Candidates</p>
                    <p className="text-blue-400 pl-7 text-lg font-bold pt-4">Duration: 2 working days</p>
                    <p className="text-base pl-7 pt-4">You will receive your first 2-3 candidates by email within <br /> 2 working days.</p>
                </div>
                <div className="Image">
                    <img src="https://static.tildacdn.com/tild6464-3138-4662-a233-643139393133/Group_33.svg" alt="" />
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
            <div className="Step-3 flex pl-44">
                <div className="Step3">
                    <p className="text-lg font-bold">STEP-3</p>
                </div>
                <div className="Details">
                    <p className="text-lg font-bold pl-7">Search for candidates and conduct interviews</p>
                    <p className="text-blue-400 pl-7 text-lg font-bold pt-4">Duration: 1-2 weeks</p>
                    <p className="text-base pl-7 pt-4">We search for candidates and conduct initial interviews <br /> and technical interviews.</p>
                    <p className="text-base pl-7 pt-4">You can see our review of their CV, portfolio, and <br /> interview feedback.</p>
                    <p className="text-base pl-7 pt-4">You will receive another 7-10 candidates within 1-2 weeks <br /> (it depends on the complexity of the job). We will <br /> organize a joint interview of your team with the <br /> candidates that you like.</p>
                </div>
                <div className="Image flex">
                    <img src="https://thumb.tildacdn.com/tild3231-3261-4637-b138-376437666161/-/format/webp/_1_1_1.png" alt="" />
                    <div className=""><img src="https://static.tildacdn.com/tild6536-6462-4638-a633-343362346137/320_px_10_fps.gif" className="relative" alt="" /></div>
                    
                </div>
            </div>
            <div className="Step-4 flex pl-44">
                <div className="Step4">
                    <p className="text-lg font-bold">STEP-4</p>
                </div>
                <div className="Details">
                    <p className="text-lg font-bold pl-7">Job offer</p>
                    <p className="text-blue-400 pl-7 text-lg font-bold pt-4">Duration: 1 day</p>
                    <p className="text-base pl-7 pt-4">If the chosen talent interviews well, and is suitable for <br /> you, we then agree on a Job Offer with you and become <br /> the middle person between you and the candidate.</p>
                    <p className="text-base pl-7 pt-4">We help you organize the workflow with the developer: <br /> agreement and conclusion of the contract, onboarding, <br /> payment details, and so on.</p>
                    <p className="text-base pl-7 pt-4">Once you've hired your developer, our relationship is <br /> complete and a fee is paid.</p>
                </div>
                <div className="Image">
                    <img src="https://static.tildacdn.com/tild3935-3036-4563-b765-353938626361/Group_48.svg" alt="" />
                </div>
            </div>
            
        </div>

    )
}
export default Process;
