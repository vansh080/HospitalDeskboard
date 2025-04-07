import React, { useState } from 'react';
import { Search, Plus, Mail, Phone, X } from 'lucide-react';
import Footer from '../components/Footer.tsx'; // Import the Footer component
const Staff = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  
  const staff = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      role: 'Cardiologist',
      department: 'Cardiology',
      email: 'sarah.smith@hospital.com',
      phone: '+1 234 567 890',
    },
    {
      id: 2,
      name: 'Dr. Michael Johnson',
      role: 'Neurologist',
      department: 'Neurology',
      email: 'michael.j@hospital.com',
      phone: '+1 234 567 891',
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      role: 'Pediatrician',
      department: 'Pediatrics',
      email: 'emily.d@hospital.com',
      phone: '+1 234 567 892',
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      role: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      email: 'james.w@hospital.com',
      phone: '+1 234 567 893',
    },
    {
      id: 5,
      name: 'Dr. Olivia Brown',
      role: 'Dermatologist',
      department: 'Dermatology',
      email: 'olivia.b@hospital.com',
      phone: '+1 234 567 894',
    },
    {
      id: 6,
      name: 'Dr. Robert Taylor',
      role: 'General Surgeon',
      department: 'Surgery',
      email: 'robert.t@hospital.com',
      phone: '+1 234 567 895',
    },
    {
      id: 7,
      name: 'Dr. Sophia Anderson',
      role: 'Ophthalmologist',
      department: 'Ophthalmology',
      email: 'sophia.a@hospital.com',
      phone: '+1 234 567 896',
    },
    {
      id: 8,
      name: 'Dr. William Martinez',
      role: 'Radiologist',
      department: 'Radiology',
      email: 'william.m@hospital.com',
      phone: '+1 234 567 897',
    },
    {
      id: 9,
      name: 'Dr. Ava Thomas',
      role: 'Gynecologist',
      department: 'Gynecology',
      email: 'ava.t@hospital.com',
      phone: '+1 234 567 898',
    },
    {
      id: 10,
      name: 'Dr. Liam Jackson',
      role: 'ENT Specialist',
      department: 'ENT',
      email: 'liam.j@hospital.com',
      phone: '+1 234 567 899',
    },
  ];
  const AddStaffModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Add New Staff Member</h2>
          <button
            onClick={() => setShowAddModal(false)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          setShowAddModal(false);
          alert('Staff member added successfully!');
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Add Staff Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Medical Staff</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Staff Member
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search staff members..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {staff.map((member) => (
          <div
            key={member.id}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full"
                src={`https://i.pravatar.cc/64?img=${member.id}`}
                alt={member.name}
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">{member.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">{member.phone}</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
                View Profile
              </button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100">
                Schedule
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && <AddStaffModal />}
    </div>
  );
};
 <Footer/>
export default Staff;