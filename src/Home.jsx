import { Typewriter } from "react-simple-typewriter";

const Home = () => {

    return (
        <div id="Home" className="home">

            <div class="main w-full  lg:-mt-[84px] h-full sm:inline-block lg:flex pl-10 md:pl-20 lg:pl-40 pt-32 lg:pt-48 font-bold space-y-2  " >
                <div className="">
                    <div className=" w-[40%] lg:pt-5 lg:text-4xl text-3xl md:text-3xl ">
                        <p>Help US-based companies
                            hire incredible English-speaking
                            remote software engineers
                            from Latin America</p>
                    </div>

                    <div className="py-10">
                        <div className="rectangle flex bg-amber-100  w-[90%]   lg:w-[36rem] md:h-14  h-[90px]   rounded-3xl text-lg lg:text-2xl font-[400]">
                            <img src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" className="pt-4 h-9 lg:h-10 pl-6 pr-5" alt="1" />
                            <div className="mt-3">
                                <Typewriter
                                    words={[
                                        'Software Engineer $45,000 annually',
                                        'Senior UX/UI Designer $24,000 annually',
                                        'Senior DevOps Engineer $38,000 annually',
                                        'Senior Data Engineer $43,000 annually',
                                        'Project Manager $33,000 annually',
                                        'Senior Data Engineer $43,000 annually'
                                    ]}
                                    cursor
                                    typeSpeed={100}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                    loop={0}
                                />
                            </div>

                        </div>
                    </div>

                    <div>
                        <p className="text-[28px]">Save from $29,000 to $74,000 a year per talent*</p>
                        <p className="text-[9px]">*based on salary data from the indeed.com and talent.com</p>
                        <p className="text-[15px] pt-9"><span className="font-bold">Countries we've worked with:</span> Brazil, Argentina, Chile, Uruguay, Costa Rica, Ecuador, Columbia,</p>
                        <p className="text-[15px] pb-9"> Peru, Mexico, Cuba, Dominican Republic, Panama</p>
                    </div>
                    <div className="flex">
                        <div className=" ">
                            <p className="text-4xl font-semibold pt-9 mx-auto">Companies we've worked with</p>
                            <p className="text-xl font-semibold pt-4">150+ US and UK-based clients</p>
                            {/* <div className="py-5 space-y-10 md:space-y-0 lg:space-y-0 grid md:grid-cols-3 md:grid-rows-3 md:gap-10 lg:pt-10 lg:pr-36 lg:gap-20 lg:grid-cols-5 lg:grid-rows-3"> */}

                        </div>
                    </div>
                </div>


                {/* IMAGE Gradiant */}
                {/* <div className="hidden lg:block md:pl-1 pt-5">
                    <div className="pl-5">
                        <p className="text-6xl font-bold">$120,000</p>
                        <div className="pb-5 -m-5 ">
                            <div className="rectangle w-96 h-16 rounded-xl bg-gradient-to-r from-red-400 to-yellow-400 pl-5 pb-10">
                                <p className="text-sm font-medium pt-5 ">Backend Engineer Salary in the US </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-3">
                        <div className="">
                            <div className="rectangle w-28 h-10 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 pl-5">
                                <p className="text-2xl font-bold">$50k</p>
                                <p className="text-xs pt-1">Salary of Same developer in Latin America</p>
                            </div>
                        </div>
                        <div className="pl-3">
                            <div className="rectangle w-10 h-36 rounded-xl bg-gradient-to-tr from-red-300 to-yellow-300"></div>
                        </div>
                        <div className="pl-3">
                            <div className="rectangle w-52 h-10 rounded-xl bg-gradient-to-r from-green-400 to-blue-400">
                                <p className="text-2xl font-bold pl-3">$63k</p>
                                <p className="text-xs pl-3">You save on every hire at this level for this role</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs -m-10 pl-44">Our recruitment fee at % of <br /> the first year's base salary</p>
                </div>
                #FAFDF3

                color code 
                
                // Small Size
                <div className="block lg:hidden sm:pl-1 md:pl-1 ">
                    <div className="pl-5">
                        <p className="text-3xl font-bold">$120,000</p>
                        <div className="pb-5 -m-5 "><div className="rectangle w-72 h-8 rounded-xl bg-gradient-to-r from-red-400 to-yellow-400 pl-5 pb-10"><p className="text-sm font-medium pt-5 ">Backend Engineer Salary in the US </p>  </div></div>
                    </div>
                    <div className="flex pt-3">
                        <div className=""><div className="rectangle w-24 h-5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 pl-5"> <p className="text-base font-bold">$50k</p> <p className="text-xs pt-1">Salary of Same developer in Latin America</p> </div></div>
                        <div className="pl-3"><div className="rectangle w-5 h-20 rounded-xl bg-blue-400"></div></div>
                        <div className="pl-3"><div className="rectangle w-36 h-5 rounded-xl bg-gradient-to-r from-green-400 to-blue-400"> <p className="text-2xl font-bold pl-3">$63k</p> <p className="text-xs pl-3">You save on every hire at this level for this role</p>  </div></div>
                    </div>
                    <p className="text-xs -m-10 pl-44">Our recruitment fee at % of <br /> the first year's base salary</p>
                </div> */}
            </div>





            <div className="relative mx-auto" >

                <div className=" rounded-3xl bg-amber-100 w-[80%] mt-10 mx-auto p-10  ">
                    <span className="flex">
                        {/* 1 */}
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                    </span>

                    <span className="flex">
                        {/* 2 */}
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                    </span>
                </div>


            </div>
        </div >
    )
}



export default Home;