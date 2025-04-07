import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import Footer from '../components/Footer.tsx'; // Import the Footer component

const Diagnostics = () => {
  // State for modal visibility
  const [showAddModal, setShowAddModal] = useState(false);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Diagnostic records array
  const diagnostics = [
    {
      id: 1,
      patientName: 'John Doe',
      testType: 'Blood Test',
      result: 'Normal',
      date: '2024-02-15',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      testType: 'X-ray',
      result: 'Abnormal',
      date: '2024-02-16',
    },
    {
      id: 3,
      patientName: 'Michael Johnson',
      testType: 'MRI',
      result: 'Normal',
      date: '2024-02-17',
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      testType: 'CT Scan',
      result: 'Abnormal',
      date: '2024-02-18',
    },
    {
      id: 5,
      patientName: 'David Wilson',
      testType: 'Urine Test',
      result: 'Normal',
      date: '2024-02-19',
    },
    {
      id: 6,
      patientName: 'Sophia Martinez',
      testType: 'Blood Test',
      result: 'Abnormal',
      date: '2024-02-20',
    },
    {
      id: 7,
      patientName: 'James Anderson',
      testType: 'X-ray',
      result: 'Normal',
      date: '2024-02-21',
    },
    {
      id: 8,
      patientName: 'Olivia Thomas',
      testType: 'MRI',
      result: 'Abnormal',
      date: '2024-02-22',
    },
    {
      id: 9,
      patientName: 'William Brown',
      testType: 'CT Scan',
      result: 'Normal',
      date: '2024-02-23',
    },
    {
      id: 10,
      patientName: 'Ava Taylor',
      testType: 'Urine Test',
      result: 'Abnormal',
      date: '2024-02-24',
    },
  ];

  // Filtered diagnostics based on search query
  const filteredDiagnostics = diagnostics.filter((diagnostic) =>
    diagnostic.patientName.toLowerCase().includes(searchQuery.toLowerCase())
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Diagnostic Management</h1>
        <button
          onClick={toggleAddModal}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Diagnostic
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search diagnostics..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Diagnostic Records Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test Type
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
            {filteredDiagnostics.map((diagnostic) => (
              <tr key={diagnostic.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{diagnostic.patientName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{diagnostic.testType}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      diagnostic.result === 'Normal'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {diagnostic.result}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {format(new Date(diagnostic.date), 'MMM d, yyyy')}
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

      {/* Add Diagnostic Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Add New Diagnostic</h2>
              <button onClick={toggleAddModal} className="text-gray-400 hover:text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-6">
              {/* Form fields go here */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Patient Name</label>
                <input
                  type="text"
                  placeholder="Enter patient name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Test Type</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                  <option value="Blood Test">Blood Test</option>
                  <option value="X-ray">X-ray</option>
                  <option value="MRI">MRI</option>
                  <option value="CT Scan">CT Scan</option>
                  <option value="Urine Test">Urine Test</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Result</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                  <option value="Normal">Normal</option>
                  <option value="Abnormal">Abnormal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
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
                  Save Diagnostic
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
export default Diagnostics;