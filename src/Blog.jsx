const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: 'Coding Journey.',
            description: 'From Coding to Leading: Inspiring Stories of India Best Software Developers'
        },
        {
            id: 2,
            title: 'Coding Stories',
            description: 'How Indian Software Developers are Shaping the Future of Technology'
        },
        {
            id: 3,
            title: 'Coding Challenges',
            description: 'How Indian Software Developers are Addressing the Challenges of Cybersecurity'
        },
        {
            id: 4,
            title: 'Break Stereotypes',
            description: 'The Rise of Indian Women in Software Development: Breaking Barriers and Shattering Stereotypes'
        },

    ]
    return (
        <div className="w-full bg-slate-100 pb-32">
            <div className="py-12 md:ml-24 mx-6"><span className="text-5xl font-[350]">Blog</span></div>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">


                <div className="grid gap-12 lg:grid-cols-4 grid-cols-1 md:grid-cols-2">

                    {
                        blogs.map((blog) =>
                            <div className="p-3 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-lg hover:shadow-2xl transition duration-500">
                                <div className="pl-0 p-5">
                                    <div className="space-y-2 h-full flex flex-col">
                                        <div className="space-y-4">
                                            <h4 className="text-2xl ml-2 font-semibold text-cyan-900">{blog.title}</h4>
                                            <p className="text-gray-600 ml-2">{blog.description}</p>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div>
                                            <a href="#" className=" w-max flex text-cyan-600 ml-2">
                                                <span>Read more</span>
                                            <svg  xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0891b2" className=" mt-[1.5px] ml-1 w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Blog;