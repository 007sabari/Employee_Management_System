import React from "react";

const TeamLeaderDashboard = () => {
  const tasks = [
    {
      id: "1",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "2",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "3",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "4",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "5",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "6",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "7",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "8",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "9",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
    {
      id: "10",
      Employee_name: "Empty",
      name: "Empty",
      description: "Empty",
      startDate: "10-00-0000",
      endDate: "00-00-0000",
      Assigned_by: "Empty",
    },
  ];

  return (
    <div>
      <h1 className="text-blue-800  text-center p-2 mx-auto rounded-xl w-full sm:w-[96%] font-black font-sans text-2xl">
        Team Leader Task View
      </h1>
      <div className="p-2 mt-7 lg:mt-16 container mx-auto w-full sm:w-[70%] border drop-shadow-2xl shadow-2xl rounded-xl">
        <div className="overflow-auto max-h-96 border border-gray-300 rounded-lg">
          <table className="min-w-full divide-y divide-gray-300 hover:table-fixed">
            <thead className="table-auto sticky top-0 bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  Member Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  Task Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  Start Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  End Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  Assigned by
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {task.Employee_name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {task.name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {task.description}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {task.startDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {task.endDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {task.Assigned_by}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TeamLeaderDashboard;
