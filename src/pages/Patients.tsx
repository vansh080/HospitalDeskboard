/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react'; // Import event types
import { Search, Filter, Plus, X, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import Footer from '../components/Footer.tsx'; // Import the Footer component

const Patients = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    salutation: 'Mr',
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    age: '',
    gender: 'Male',
    phone: '',
    landline: '',
    email: '',
    address: '',
    country: 'India',
    state: '',
    membership: 'General',
    occupation: '',
    bloodGroup: '',
    maritalStatus: 'Unmarried',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAddModal(false);
    alert('Patient registered successfully!');
  };

  // Modal for registering a new patient
  const RegisterPatientModal = () => (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setShowAddModal(false)}
        />
        <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Register New Patient</h2>
            <button
              onClick={() => setShowAddModal(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Salutation */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Salutation</label>
                <select
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                </select>
              </div>

              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              {/* Middle Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth*</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender*</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Country*</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="India">India</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700">State*</label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              {/* Blood Group */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              {/* Address */}
              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Register Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // Sample patient data
  const patients = [
    {
      id: 1,
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      phone: '+1 234 567 890',
      lastVisit: '2024-02-15',
      nextAppointment: '2024-03-01',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      gender: 'Female',
      phone: '+1 234 567 891',
      lastVisit: '2024-01-20',
      nextAppointment: '2024-03-10',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      age: 52,
      gender: 'Male',
      phone: '+1 234 567 892',
      lastVisit: '2024-02-05',
      nextAppointment: '2024-03-15',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 29,
      gender: 'Female',
      phone: '+1 234 567 893',
      lastVisit: '2024-01-10',
      nextAppointment: '2024-03-20',
      status: 'Active',
    },
    {
      id: 5,
      name: 'David Wilson',
      age: 60,
      gender: 'Male',
      phone: '+1 234 567 894',
      lastVisit: '2024-02-25',
      nextAppointment: '2024-03-25',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Sophia Martinez',
      age: 38,
      gender: 'Female',
      phone: '+1 234 567 895',
      lastVisit: '2024-01-15',
      nextAppointment: '2024-03-30',
      status: 'Inactive',
    },
    {
      id: 7,
      name: 'James Anderson',
      age: 47,
      gender: 'Male',
      phone: '+1 234 567 896',
      lastVisit: '2024-02-01',
      nextAppointment: '2024-04-05',
      status: 'Active',
    },
    {
      id: 8,
      name: 'Olivia Thomas',
      age: 26,
      gender: 'Female',
      phone: '+1 234 567 897',
      lastVisit: '2024-01-25',
      nextAppointment: '2024-04-10',
      status: 'Active',
    },
    {
      id: 9,
      name: 'William Brown',
      age: 55,
      gender: 'Male',
      phone: '+1 234 567 898',
      lastVisit: '2024-02-10',
      nextAppointment: '2024-04-15',
      status: 'Inactive',
    },
    {
      id: 10,
      name: 'Ava Taylor',
      age: 31,
      gender: 'Female',
      phone: '+1 234 567 899',
      lastVisit: '2024-01-30',
      nextAppointment: '2024-04-20',
      status: 'Active',
    },
    {
      id: 11,
      name: 'Liam Garcia',
      age: 42,
      gender: 'Male',
      phone: '+1 234 567 900',
      lastVisit: '2024-02-20',
      nextAppointment: '2024-04-25',
      status: 'Active',
    },
    {
      id: 12,
      name: 'Isabella Clark',
      age: 37,
      gender: 'Female',
      phone: '+1 234 567 901',
      lastVisit: '2024-01-05',
      nextAppointment: '2024-05-01',
      status: 'Inactive',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Patient Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Register New Patient
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search patients..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Export
              </button>
            </div>
          </div>

          {/* Patient Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Visit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Appointment
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
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={`https://i.pravatar.cc/40?img=${patient.id}`}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                          <div className="text-sm text-gray-500">
                            {patient.age} yrs • {patient.gender}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {format(new Date(patient.lastVisit), 'MMM d, yyyy')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {format(new Date(patient.nextAppointment), 'MMM d, yyyy')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Render the modal if showAddModal is true */}
      {showAddModal && <RegisterPatientModal />}
    </div>
  );
};
 <Footer/>
export default Patients;