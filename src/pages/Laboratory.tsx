import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import Footer from '../components/Footer.tsx'; // Import the Footer component

const Laboratory = () => {
  // State for modal visibility
  const [showAddModal, setShowAddModal] = useState(false);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Sample laboratory records
  const labRecords = [
    {
      id: 1,
      testName: 'Blood Test',
      patientName: 'John Doe',
      result: 'Normal',
      date: '2024-02-15',
    },
    {
      id: 2,
      testName: 'X-ray',
      patientName: 'Jane Smith',
      result: 'Abnormal',
      date: '2024-02-16',
    },
    {
      id: 3,
      testName: 'MRI',
      patientName: 'Michael Johnson',
      result: 'Normal',
      date: '2024-02-17',
    },
    {
      id: 4,
      testName: 'CT Scan',
      patientName: 'Emily Davis',
      result: 'Abnormal',
      date: '2024-02-18',
    },
    {
      id: 5,
      testName: 'Urine Test',
      patientName: 'David Wilson',
      result: 'Normal',
      date: '2024-02-19',
    },
  ];

  // Filtered laboratory records based on search query
  const filteredLabRecords = labRecords.filter((record) =>
    record.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle add modal toggle
  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Laboratory Management</h1>
        <button
          onClick={toggleAddModal}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Test Result
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search laboratory records..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Laboratory Records Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Result
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLabRecords.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{record.testName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.patientName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      record.result === 'Normal'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {record.result}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {format(new Date(record.date), 'MMM d, yyyy')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Test Result Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Add New Test Result</h2>
              <button onClick={toggleAddModal} className="text-gray-400 hover:text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-6">
              {/* Test Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Test Name*</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required>
                  <option value="">Select Test</option>
                  <option value="Blood Test">Blood Test</option>
                  <option value="X-ray">X-ray</option>
                  <option value="MRI">MRI</option>
                  <option value="CT Scan">CT Scan</option>
                  <option value="Urine Test">Urine Test</option>
                </select>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Patient Name*</label>
                <input
                  type="text"
                  placeholder="Enter patient name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              {/* Result */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Result*</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required>
                  <option value="">Select Result</option>
                  <option value="Normal">Normal</option>
                  <option value="Abnormal">Abnormal</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Date*</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={toggleAddModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Save Test Result
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
 <Footer/>
export default Laboratory;