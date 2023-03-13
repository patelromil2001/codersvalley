import React, { useEffect } from "react";

function Salaries() {
  const [showModal, setShowModal] = React.useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'unset'
    }
  }, [showModal])
  const tableData = [
    {
      id: 1,
      position: 'Junior Developer',
      salary: 50000,
      hourlyRate: 25,
      costSavings: 30000,
    },
    {
      id: 2,
      position: 'Intermediate Developer',
      salary: 80000,
      hourlyRate: 40,
      costSavings: 48000,
    },
    {
      id: 3,
      position: 'Senior Developer',
      salary: 120000,
      hourlyRate: 60,
      costSavings: 72000,
    },
    {
      id: 4,
      position: 'Senior Developer',
      salary: 120000,
      hourlyRate: 60,
      costSavings: 72000,
    },
    {
      id: 5,
      position: 'Senior Developer',
      salary: 120000,
      hourlyRate: 60,
      costSavings: 72000,
    },
  ];

  return (
    <>
      <div className=" mx-auto py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden max-w-7xl mx-auto my-6">
          <table className="min-w-full mx-auto divide-y-[3px] divide-dotted divide-gray-300 ">
            <thead >
              <tr>
                <th className="px-6 py-7 text-left  ">
                  <span className="font-sans font-normal  tracking-wide text-4xl "> Tech Talent's annual salary, $*</span>
                  <br />  <span className="text-sm font-mono font-normal tracking-tight">*4-6 years of experience</span>
                </th>

                <th className="px-6 py-3 tracking-wider text-lg text-center">
                  <span className="font-sans font-normal"> Latin America </span>
                  <br />  <span className="text-sm font-mono font-extralight tracking-tight  text-gray-500">Average Salary, $</span>
                </th>
                <th className="px-6 py-3 tracking-wider text-lg text-center">
                  <span className="font-sans font-normal"> US </span>
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
                  <td className="px-6 py-[26px] whitespace-nowrap text-[15px] font-medium text-gray-900">
                    {row.position}
                  </td>
                  <td className="px-6 py-[26px] whitespace-nowrap text-base text-center">
                    {`$${row.salary}`}
                  </td>
                  <td className="px-6 py-[26px] whitespace-nowrap text-base text-center">
                    {`$${row.hourlyRate}`}
                  </td>
                  <td className="px-6 py-[26px] whitespace-nowrap text-base text-center bg-green-200">
                    {`$${row.costSavings}`}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gray-200">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-5xl text-3xl mb-4  text-gray-900">Get now our free
                <br className="hidden lg:inline-block" />Step-by-Step Guide
              </h1>
              <p className="mb-8 mt-4 leading-relaxed text-lg tracking-wide">How does a US-based startup <br />
                recruits strong software engineers <br />
                quickly (2 weeks) and 60% cheaper</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-500 border-0 py-4 px-10 focus:outline-none hover:bg-blue-600 rounded text-sm font-bold"
                  onClick={() => setShowModal(true)}>Get a free .pdf</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {showModal ? (
        <>
          <div
            className="transition duration-300 ease-in-out justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-gray-500"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Fill out a brief information <br /> about you and get our Guide
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-25 float-right text-4xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {/*pdf form*/}

                    <div className="">
                      <form action="#" className="space-y-8">
                        
                        <div className="flex justify-center items-center">
                          <label className='relative cursor-pointer'>
                            <input type="text" placeholder="Input" className='h-14 w-96 px-6 text-xl text-black border-gray-200 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-400 placeholder-opacity-0 transition duration-200' 
                            required/>
                            <span className='text-lg text-gray-400 bg-white text-opacity-80 absolute left-5 top-3 px-1 transition duration-200 input-text'>
                              Your Name</span>
                          </label>
                        </div>

                        <div className="flex justify-center items-center">
                          <label className='relative cursor-pointer'>
                            <input type="text" placeholder="Input" className='h-14 w-96 px-6 text-xl text-black border-gray-200 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-400 placeholder-opacity-0 transition duration-200' 
                            required/>
                            <span className='text-lg text-gray-400 bg-white text-opacity-80 absolute left-5 top-3 px-1 transition duration-200 input-text'>
                              Your Job Title</span>
                          </label>
                        </div>

                        <div className="flex justify-center items-center">
                          <label className='relative cursor-pointer'>
                            <input type="email" placeholder="Input" className='h-14 w-96 px-6 text-xl text-black border-gray-200 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-400 placeholder-opacity-0 transition duration-200' 
                            required/>
                            <span className='text-lg text-gray-400 bg-white text-opacity-80 absolute left-5 top-3 px-1 transition duration-200 input-text'>
                              Your Business email</span>
                          </label>
                        </div>
                        <div className="flex flex-grow items-center pt-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            onClick={() => setShowModal(false)}
                          >
                            Get a free .pdf
                          </button>
                        </div>
                      </form>
                    </div>

                  </p>
                </div>
                {/*footer*/}

              </div>
            </div>
          </div>
        </>
      ) : null}

    </>
  );
}

export default Salaries;