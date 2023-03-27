const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis minus praesentium cum ipsum. Exercitationem!'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis minus praesentium cum ipsum. Exercitationem!'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis minus praesentium cum ipsum. Exercitationem!'
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis minus praesentium cum ipsu Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis minus praesentium cum ipsum. Exercitationem!'
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
                                    <div className="space-y-2">
                                        <div className="space-y-4">
                                            <h4 className="text-2xl ml-2 font-semibold text-cyan-900">{blog.title}</h4>
                                            <p className="text-gray-600 ml-2">{blog.description}</p>
                                        </div>
                                        <div>
                                        <a href="#" className="block w-max text-cyan-600 ml-2">Read more</a></div>
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