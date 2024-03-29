import { Typewriter } from "react-simple-typewriter";

const Home = () => {

    return (
        <div id="Home" className="home">

            <div class="main w-full  lg:-mt-[150px] h-full sm:inline-block lg:flex pl-10 md:pl-20 lg:pl-40 pt-5 lg:pt-48 font-bold space-y-2  " >
                <div className="lg:flex">
                    <div className="">
                        <div className="w-[90%] lg:w-[50%] lg:pt-5 lg:text-4xl text-3xl md:text-3xl  flex">
                            <p>Recruit outstanding English-speaking remote software developers from India for US-based businesses.
                            </p>
                            <div className="hidden lg:block">
                                <img src="/images/hero.png" className="h-[50%] w-[30%] absolute right-[10%]  " alt="" />
                            </div>
                        </div>
                        <div className="lg:hidden mx-auto -ml-10">
                            <img src="/images/hero.png" className="p-8" alt="" />
                        </div>
                        <div className="py-10 ">
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



                        {/* <div className="pt-10">

                            <p className="text-[28px]">Save from $29,000 to $74,000 a year per talent*</p>
                            <p className="text-[9px]">*based on salary data from the indeed.com and talent.com</p>
                            <p className="text-[15px] pt-9"><span className="font-bold">Countries we've worked with:</span> Brazil, Argentina, Chile, Uruguay, Costa Rica, Ecuador, Columbia,</p>
                            <p className="text-[15px] pb-9"> Peru, Mexico, Cuba, Dominican Republic, Panama</p>
                        </div> */}
                        {/* <div className="pt-5 ">
                            <div className="   lg:w-[35%]  ">
                                <p className="font-bold text-2xl">Countries we've worked with:</p>
                                <p className="text-[15px] pt-3"> Brazil, Argentina, Chile, Uruguay, Costa Rica, Ecuador, Columbia, Peru, Mexico, Cuba, Dominican Republic, Panama</p>
                            </div>
                        </div> */}




                    </div>
                </div>
            </div>
            <div className="flex justify-center relative lg:mt-32 w-full">

                <p className="text-4xl  font-semibold pt-9 mx-auto">Our Clientele</p>

            </div>


            {/* Marquee-1 */}
            <div className="relative mx-auto" >
                <div className=" rounded-3xl bg-amber-100 w-[80%] mt-10 mx-auto p-1  ">
                    <div className="relative flex overflow-x-hidden">
                        <div className="py-6 animate-marquee whitespace-nowrap flex space space-x-4">
                            <img src="/images/marquee/1.png" alt="2" />
                            <img src="/images/marquee/2.png" alt="2" />
                            <img src="/images/marquee/3.png" alt="2" />
                            <img src="/images/marquee/4.png" alt="2" />
                            <img src="/images/marquee/5.png" alt="2" />
                            <img src="/images/marquee/6.png" alt="2" />
                            <img src="/images/marquee/7.png" alt="2" />
                            <img src="/images/marquee/8.png" alt="2" />
                            {/*<img src="/images/marquee/9.png" alt="2" />
                             <img src="/images/marquee/10.png" alt="2" />
                            <img src="/images/marquee/11.png" alt="2" />
                            <img src="/images/marquee/12.png" alt="2" />
                            <img src="/images/marquee/13.png" alt="2" />
                            <img src="/images/marquee/14.png" alt="2" />
                            <img src="/images/marquee/15.png" alt="2" />
                            <img src="/images/marquee/16.png" alt="2" />
                            <img src="/images/marquee/17.png" alt="2" />
                            <img src="/images/marquee/18.png" alt="2" />
                            <img src="/images/marquee/19.png" alt="2" />
                            <img src="/images/marquee/20.png" alt="2" />
                            <img src="/images/marquee/21.png" alt="2" />
                            <img src="/images/marquee/22.png" alt="2" />
                            <img src="/images/marquee/23.png" alt="2" />
                            <img src="/images/marquee/24.png" alt="2" />
                            <img src="/images/marquee/25.png" alt="2" />
                            <img src="/images/marquee/26.png" alt="2" />
                            <img src="/images/marquee/27.png" alt="2" />
                            <img src="/images/marquee/28.png" alt="2" />
                            <img src="/images/marquee/29.png" alt="2" />
                            <img src="/images/marquee/30.png" alt="2" />
                            <img src="/images/marquee/31.png" alt="2" />
                            <img src="/images/marquee/32.png" alt="2" />
                            <img src="/images/marquee/33.png" alt="2" />
                            <img src="/images/marquee/34.png" alt="2" /> */}







                        </div>

                        <div class="absolute top-0 py-6 animate-marquee2 whitespace-nowrap flex space-x-4">
                            <img src="/images/marquee/1.png" alt="2" />
                            <img src="/images/marquee/2.png" alt="2" />
                            <img src="/images/marquee/3.png" alt="2" />
                            <img src="/images/marquee/4.png" alt="2" />
                            <img src="/images/marquee/5.png" alt="2" />
                            <img src="/images/marquee/6.png" alt="2" />
                            <img src="/images/marquee/7.png" alt="2" />
                            <img src="/images/marquee/8.png" alt="2" />
                            {/*<img src="/images/marquee/9.png" alt="2" />
                            <img src="/images/marquee/10.png" alt="2" />
                            <img src="/images/marquee/11.png" alt="2" />
                            <img src="/images/marquee/12.png" alt="2" />
                            <img src="/images/marquee/13.png" alt="2" />
                            <img src="/images/marquee/14.png" alt="2" />
                            <img src="/images/marquee/15.png" alt="2" />
                            <img src="/images/marquee/16.png" alt="2" />
                            <img src="/images/marquee/17.png" alt="2" />
                            <img src="/images/marquee/18.png" alt="2" />
                            <img src="/images/marquee/19.png" alt="2" />
                            <img src="/images/marquee/20.png" alt="2" />
                            <img src="/images/marquee/21.png" alt="2" />
                            <img src="/images/marquee/22.png" alt="2" />
                            <img src="/images/marquee/23.png" alt="2" />
                            <img src="/images/marquee/24.png" alt="2" />
                            <img src="/images/marquee/25.png" alt="2" />
                            <img src="/images/marquee/26.png" alt="2" />
                            <img src="/images/marquee/27.png" alt="2" />
                            <img src="/images/marquee/28.png" alt="2" />
                            <img src="/images/marquee/29.png" alt="2" />
                            <img src="/images/marquee/30.png" alt="2" />
                            <img src="/images/marquee/31.png" alt="2" />
                            <img src="/images/marquee/32.png" alt="2" />
                            <img src="/images/marquee/33.png" alt="2" />
                            <img src="/images/marquee/34.png" alt="2" /> */}




                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden  lg:justify-evenly pt-10 lg:place-items-center lg:flex">
                <img src="/images/Team work.png" className="w-[20%] h-[20%]     " alt="" />


                <div className="w-[90%] lg:w-[30%] h-fit  rounded-xl border-4 relative right-20  px-9 py-5 m-0  border-amber-100">
                    <p className="text-lg">India has been a popular destination for outsourcing software development for many years due to its large pool of skilled software developers, favorable business environment, and cost-effectiveness.</p>
                </div>

            </div>

        </div >
    )
}



export default Home;




{/* IMAGE Gradiant */ }
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
                </div> */}

{/* color code  */ }
{/* #FAFDF3 */ }

{/* Small Size */ }
{/* <div className="block lg:hidden sm:pl-1 md:pl-1 ">
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



{/* <div className="relative mx-auto" >
                <div className=" rounded-3xl bg-amber-100 w-[80%] mt-10 mx-auto lg:p-10 p-3 md:p-8  ">
                    <div className="py-12 animate-marquee whitespace-nowrap">
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                    </div>

                    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                    </div>
                </div>
            </div> */}