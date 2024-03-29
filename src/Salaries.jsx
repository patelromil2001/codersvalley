import React from "react";
import { Button, Modal } from 'antd';

function Salaries() {
  const [showModal, setShowModal] = React.useState(false);
  const tableData = [
    {
      id: 1,
      position: 'Front End Engineer (JavaScript, React, Next, Vue, Nuxt, Angular, TypeScript)',
      indSalary: 35,
      latinSalary: 50,
      costSavings: 15,
    },
    {
      id: 2,
      position: 'Back End Engineer (Java, Python, PHP, Go, Ruby, C#, C, C++, F#, Elixir, Erlang, Rust, Scala, Perl)',
      indSalary: 30,
      latinSalary: 45,
      costSavings: 15,
    },
    {
      id: 3,
      position: 'Mobile Engineer (Swift, Kotlin, Objective-C, Java, React Native, Xamarine)r',
      indSalary: 48,
      latinSalary: 63,
      costSavings: 15,
    },
    {
      id: 4,
      position: 'DevOps Engineer',
      indSalary: 55,
      latinSalary: 70,
      costSavings: 15,
    },
    {
      id: 5,
      position: 'Data Engineer',
      indSalary: 30,
      latinSalary: 45,
      costSavings: 15,
    },
    {
      id: 6,
      position: 'Data Analyst',
      indSalary: 25,
      latinSalary: 40,
      costSavings: 15,
    },
    {
      id: 7,
      position: 'Data Scientist',
      indSalary: 32,
      latinSalary: 47,
      costSavings: 15,
    },
    {
      id: 8,
      position: 'QA (automation)',
      indSalary: 23,
      latinSalary: 38,
      costSavings: 15,
    },
    {
      id: 9,
      position: 'QA (manual)',
      indSalary: 15,
      latinSalary: 25,
      costSavings: 10,
    },
    {
      id: 10,
      position: 'Designer (UX/UI, Web, Graphic, Motion, 3D/2D, Video Editor)',
      indSalary: 14,
      latinSalary: 24,
      costSavings: 10,
    },
    {
      id: 11,
      position: 'Project Manager',
      indSalary: 21,
      latinSalary: 33,
      costSavings: 12,
    },
    {
      id: 12,
      position: 'Product Manager',
      indSalary: 21,
      latinSalary: 33,
      costSavings: 12,
    },
    {
      id: 13,
      position: 'Scrum Master',
      indSalary: 20,
      latinSalary: 31,
      costSavings: 11,
    },
    {
      id: 14,
      position: 'Marketing Manager (Paid Media, Social Media, Digital Marketing, Performance Marketing, SEO)',
      indSalary: 10,
      latinSalary: 16,
      costSavings: 6,
    },
  ];

  return (
    <div id="Salaries">
      <div className="mx-auto pb-6 sm:px-6 lg:px-8 bg-white">
        <div className="overflow-hidden max-w-7xl mx-auto my-6">
          <table className="min-w-full divide-y-[3px] divide-dotted divide-gray-300 overflow-x-auto block md:overflow-x-hidden md:inline-table  " >
            <thead >
              <tr>
                <th className="px-6 py-7 text-left  ">
                  <span className="font-sans font-normal  tracking-wide text-4xl "> Tech Talent's annual salary, $*</span>
                  <br />  <span className="text-sm font-mono font-normal tracking-tight">*4-6 years of experience</span>
                </th>

                <th className="px-6 py-3 tracking-wider text-lg text-center">
                  <span className="font-sans font-normal"> India </span>
                  <br />  <span className="text-sm font-mono font-extralight tracking-tight  text-gray-500">Average Salary, $</span>
                </th>
                <th className="px-6 py-3 tracking-wider text-lg text-center">
                  <span className="font-sans font-normal"> Latin America </span>
                  <br />  <span className="text-sm font-mono font-extralight tracking-tight  text-gray-500">Average Salary, $</span>
                </th>
                <th className="px-2 py-3 tracking-wider text-lg text-center bg-green-200">
                  <span className="font-sans font-semibold"> Your Annual Savings </span>
                  <br />  <span className="text-sm font-mono font-extralight tracking-tight  text-gray-500 ">Average Salary, $</span>
                </th>

              </tr>
            </thead>
            <tbody className="divide-y-[3px] divide-dotted divide-gray-300">
              {tableData.map((row) => (
                <tr className="" key={row.id}>
                  <td className="px-6 py-[26px]  text-[15px] font-medium text-gray-900 " >
                    <span > {row.position}</span>
                  </td>
                  <td className="px-6 py-[26px] whitespace-nowrap text-base text-center">
                    {`$${row.indSalary}k`}
                  </td>
                  <td className="px-6 py-[26px] whitespace-nowrap text-base text-center">
                    {`$${row.latinSalary}k`}
                  </td>
                  <td className="px-6 py-[26px] whitespace-nowrap text-base text-center bg-green-200 font-semibold">
                    {`$${row.costSavings}k`}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gray-100">
        <section className="text-gray-600 body-font">
          
          <div className="container mx-auto flex px-7 lg:px-36 py-24 md:flex-row flex-col">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 lg:pl-20">
              <img className="object-cover rounded" alt="hero" src="./images/rocket.png" />
            </div>
            
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-5xl text-3xl mb-4  text-gray-900">Get our free
                <br className="hidden lg:inline-block" />Step-by-Step Guide
              </h1>
              <p className="mb-8 mt-4 leading-relaxed text-lg tracking-wide">How does a US-based startup <br />
                recruits strong software engineers <br />
                quickly (2 weeks) and 60% cheaper</p>
              <div className="flex justify-center">
                <Button size="large" type="primary" className="text-gray- bg-blue-400"
                  onClick={() => setShowModal(true)}>Get a free .pdf</Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Modal
        open={showModal}
        title={[<span className="text-xl">Fill out a brief information about you  and get<br /> our Guide</span>]}
        // onOk={handleOk}
        onCancel={() => setShowModal(false)}
        footer={[

        ]}
      >
        <div className="mt-8 mb-12">
          <form action="#" className="space-y-6">

            <div className="flex justify-center items-center">
              <label className='relative cursor-pointer'>
                <input type="text" placeholder="Input" className='h-12 w-80 lg:w-96 px-6 text-base text-black border-gray-400 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-400 placeholder-opacity-0 transition duration-200'
                  required />
                <span className='text-base text-gray-500 bg-white text-opacity-80 absolute left-5 top-3 px-1 transition duration-200 input-text'>
                  Your Name</span>
              </label>
            </div>

            <div className="flex justify-center items-center">
              <label className='relative cursor-pointer'>
                <input type="text" placeholder="Input" className='h-12 w-80 lg:w-96 px-6 text-base text-black border-gray-400 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-400 placeholder-opacity-0 transition duration-200'
                  required />
                <span className='text-base text-gray-500 bg-white text-opacity-80 absolute left-5 top-3 px-1 transition duration-200 input-text'>
                  Your Job Title</span>
              </label>
            </div>

            <div className="flex justify-center items-center">
              <label className='relative cursor-pointer'>
                <input type="email" placeholder="Input" className='h-12 w-80 lg:w-96 px-6 text-base text-black border-gray-400 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-400 placeholder-opacity-0 transition duration-200'
                  required />
                <span className='text-base text-gray-500 bg-white text-opacity-80 absolute left-5 top-3 px-1 transition duration-200 input-text'>
                  Your Business email</span>
              </label>
            </div>
            
            <button
              formMethod="get"
              formAction="./dummy.pdf"
              type="submit"
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-xl outline-none focus:outline-none mx-10 ease-linear transition-all duration-150"
            >
              Get a free .pdf
            </button>

          </form>
        </div>
      </Modal>

    </div>
  );
}

export default Salaries;
