import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import Footer from '../components/Footer.tsx'; // Import the Footer component

const Prescription = () => {
  // State for modal visibility
  const [showAddModal, setShowAddModal] = useState(false);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Sample prescription records
  const prescriptions = [
    {
      id: 1,
      patientName: 'John Doe',
      medicineName: 'Paracetamol',
      dosage: '500mg',
      frequency: 'Twice Daily',
      startDate: '2024-02-15',
      endDate: '2024-03-15',
      status: 'Active',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      medicineName: 'Amoxicillin',
      dosage: '250mg',
      frequency: 'Thrice Daily',
      startDate: '2024-02-16',
      endDate: '2024-03-20',
      status: 'Inactive',
    },
    {
      id: 3,
      patientName: 'Michael Johnson',
      medicineName: 'Ibuprofen',
      dosage: '400mg',
      frequency: 'Once Daily',
      startDate: '2024-02-17',
      endDate: '2024-03-18',
      status: 'Active',
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      medicineName: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once Daily',
      startDate: '2024-02-18',
      endDate: '2024-03-25',
      status: 'Inactive',
    },
    {
      id: 5,
      patientName: 'David Wilson',
      medicineName: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once Daily',
      startDate: '2024-02-19',
      endDate: '2024-03-30',
      status: 'Active',
    },
  ];

  // Filtered prescriptions based on search query
  const filteredPrescriptions = prescriptions.filter((prescription) =>
    prescription.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prescription.medicineName.toLowerCase().includes(searchQuery.toLowerCase())
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
        <h1 className="text-2xl font-bold text-gray-900">Prescription Management</h1>
        <button
          onClick={toggleAddModal}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Prescription
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search prescriptions..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Prescription Records Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Medicine Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dosage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Frequency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPrescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{prescription.patientName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{prescription.medicineName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{prescription.dosage}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{prescription.frequency}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {format(new Date(prescription.startDate), 'MMM d, yyyy')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {format(new Date(prescription.endDate), 'MMM d, yyyy')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      prescription.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {prescription.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Prescription Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Add New Prescription</h2>
              <button onClick={toggleAddModal} className="text-gray-400 hover:text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-6">
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

              {/* Medicine Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Medicine Name*</label>
                <input
                  type="text"
                  placeholder="Enter medicine name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              {/* Dosage */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Dosage*</label>
                <input
                  type="text"
                  placeholder="Enter dosage (e.g., 500mg)"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Frequency*</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required>
                  <option value="">Select Frequency</option>
                  <option value="Once Daily">Once Daily</option>
                  <option value="Twice Daily">Twice Daily</option>
                  <option value="Thrice Daily">Thrice Daily</option>
                </select>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date*</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date*</label>
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
                  Save Prescription
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
export default Prescription;