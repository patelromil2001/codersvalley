import { Typewriter } from "react-simple-typewriter";

const Home = () => {

    return (
        <div className="home">

            <div class="main w-full overflow-hidden sm:inline-block  lg:flex bg-cyan-50 text-5xl pl-10 md:pl-20 lg:pl-40 pt-32 font-bold space-y-2 object-right-bottom bg-[url('https://thumb.tildacdn.com/tild3834-3666-4836-a136-613033396335/-/format/webp/Group_32.png')] from-slate-100 to-indigo-500" >
                <div className="">
                    <div className="">
                        <p><span class="text-blue-800">Help</span> US-based companies</p>
                        <p><span class="text-blue-800">hire</span> incredible English-speaking</p>
                        <p><span class="text-blue-800">remote</span> software engineers</p>
                        <p>from Latin America</p>
                    </div>

                    <div className="py-10">
                        <div className="rectangle flex bg-cyan-200 w-[75%]  lg:w-[36rem] md:h-14 h-[90px]   rounded text-3xl font-[400]">
                            <img src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" className="pt-4 h-10 pl-6 pr-5" alt="1" />
                            <div className="mt-2">
                                <Typewriter
                                    words={['Hire a Software developer', 'Hire a web developer', 'Hire a whole team']}
                                    cursor
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
                </div>
                <div className=" sm:pl-1 md:pl-1 lg:pl-20">
                    <div className="pb-3"><div className="rectangle animate-pulse w-96 h-16 rounded-xl bg-gradient-to-r from-red-400 to-yellow-400"> <p className="text-[11px] pt-1 pl-3">Our Sucess Fee</p> <p className="text-2xl font-bold pl-3">$4.800</p> </div></div>
                    <div className="flex">
                        <div className=""><div className="rectangle animate-pulse w-28 h-10 rounded-xl bg-gradient-to-r from-red-400 to-yellow-400"> <p className="text-[11px] pt-1 pl-3">Our Sucess Fee</p> <p className="text-2xl font-bold pl-3">$4.800</p> </div></div>
                        <div className="pl-3"><div className="rectangle animate-pulse w-10 h-36 rounded-xl bg-gradient-to-r from-red-400 to-yellow-400"> <p className="text-[11px] pt-1 pl-3">Our Sucess Fee</p> <p className="text-2xl font-bold pl-3">$4.800</p> </div></div>
                        <div className="pl-3"><div className="rectangle animate-pulse w-52 h-10 rounded-xl bg-gradient-to-r from-red-400 to-yellow-400"> <p className="text-[11px] pt-1 pl-3">Our Sucess Fee</p> <p className="text-2xl font-bold pl-3">$4.800</p> </div></div>
                    </div>
                </div>
            </div>
            <div className=" bg-white flex">
                <div className=" h-auto w-[10%] md:w-[8%] lg:[6%] bg-cyan-50"></div>

                <div className=" pl-24">
                    <p className="text-4xl pt-9">Companies we've worked with</p>
                    <p className="text-xl pt-4">150+ US and UK-based clients</p>
                    <div className="py-5 space-y-10 md:space-y-0 lg:space-y-0 grid md:grid-cols-3 md:grid-rows-3 md:gap-10 lg:pt-10 lg:pr-36 lg:gap-20 lg:grid-cols-5 lg:grid-rows-3">
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
                        <a href="https://digitalgenius.com/"><img src="https://digitalgenius.com/wp-content/uploads/2021/06/logo-dark.svg" alt="" /></a>
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
            </div>
        </div>


    )
}



export default Home;