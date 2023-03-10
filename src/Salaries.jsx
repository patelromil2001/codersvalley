function Salaries() {
    const tableData = [
        {
          id: 1,
          position: 'Junior Developer',
          salary: 50000,
          hourlyRate: 25,
          costSavings: 30000,
        },
        { id: 2,
          position: 'Intermediate Developer',
          salary: 80000,
          hourlyRate: 40,
          costSavings: 48000,
        },
        { id: 3,
          position: 'Senior Developer',
          salary: 120000,
          hourlyRate: 60,
          costSavings: 72000,
        },
        { id: 4,
            position: 'Senior Developer',
            salary: 120000,
            hourlyRate: 60,
            costSavings: 72000,
          },
          { id: 5,
            position: 'Senior Developer',
            salary: 120000,
            hourlyRate: 60,
            costSavings: 72000,
          },
      ];
      
    return ( 
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
  );
}

export default Salaries;