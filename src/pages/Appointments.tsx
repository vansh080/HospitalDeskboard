import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import Footer from '../components/Footer.tsx'; // Import the Footer component


const Appointments = () => {
  // State for modal visibility
  const [showAddModal, setShowAddModal] = useState(false);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Sample appointment records
  const appointments = [
    {
      id: 1,
      patientName: 'John Doe',
      doctorName: 'Dr. Smith',
      date: '2024-03-01',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      doctorName: 'Dr. Johnson',
      date: '2024-03-02',
      time: '11:30 AM',
      status: 'Pending',
    },
    {
      id: 3,
      patientName: 'Michael Johnson',
      doctorName: 'Dr. Williams',
      date: '2024-03-03',
      time: '02:00 PM',
      status: 'Canceled',
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      doctorName: 'Dr. Brown',
      date: '2024-03-04',
      time: '09:00 AM',
      status: 'Confirmed',
    },
    {
      id: 5,
      patientName: 'David Wilson',
      doctorName: 'Dr. Taylor',
      date: '2024-03-05',
      time: '04:30 PM',
      status: 'Pending',
    },
  ];

  // Filtered appointments based on search query
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.date.includes(searchQuery)
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
        <h1 className="text-2xl font-bold text-gray-900">Appointment Management</h1>
        <button
          onClick={toggleAddModal}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Appointment
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Appointment Records Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
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
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{appointment.doctorName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {format(new Date(appointment.date), 'MMM d, yyyy')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{appointment.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      appointment.status === 'Confirmed'
                        ? 'bg-green-100 text-green-800'
                        : appointment.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {appointment.status}
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

      {/* Add Appointment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Add New Appointment</h2>
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

              {/* Doctor Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Doctor Name*</label>
                <input
                  type="text"
                  placeholder="Enter doctor name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
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

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Time*</label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Status*</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Canceled">Canceled</option>
                </select>
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
                  Save Appointment
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
export default Appointments;