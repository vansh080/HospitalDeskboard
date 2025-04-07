import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import Footer from '../components/Footer.tsx'; // Import the Footer component


const Pharmacy = () => {
  // State for modal visibility
  const [showAddModal, setShowAddModal] = useState(false);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Sample pharmacy records
  const pharmacyRecords = [
    {
      id: 1,
      medicineName: 'Paracetamol',
      category: 'Painkiller',
      quantity: 100,
      expiryDate: '2025-12-31',
      price: '$5.00',
    },
    {
      id: 2,
      medicineName: 'Amoxicillin',
      category: 'Antibiotic',
      quantity: 50,
      expiryDate: '2024-08-15',
      price: '$8.00',
    },
    {
      id: 3,
      medicineName: 'Ibuprofen',
      category: 'Anti-inflammatory',
      quantity: 75,
      expiryDate: '2026-03-10',
      price: '$6.50',
    },
    {
      id: 4,
      medicineName: 'Lisinopril',
      category: 'Blood Pressure',
      quantity: 200,
      expiryDate: '2025-07-20',
      price: '$10.00',
    },
    {
      id: 5,
      medicineName: 'Atorvastatin',
      category: 'Cholesterol',
      quantity: 150,
      expiryDate: '2024-11-05',
      price: '$12.00',
    },
  ];

  // Filtered pharmacy records based on search query
  const filteredRecords = pharmacyRecords.filter((record) =>
    record.medicineName.toLowerCase().includes(searchQuery.toLowerCase())
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
        <h1 className="text-2xl font-bold text-gray-900">Pharmacy Management</h1>
        <button
          onClick={toggleAddModal}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Medicine
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search medicines..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Pharmacy Records Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Medicine Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiry Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{record.medicineName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      record.quantity > 50 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {record.quantity} units
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {format(new Date(record.expiryDate), 'MMM d, yyyy')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Medicine Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Add New Medicine</h2>
              <button onClick={toggleAddModal} className="text-gray-400 hover:text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-6">
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

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Category*</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" required>
                  <option value="">Select Category</option>
                  <option value="Painkiller">Painkiller</option>
                  <option value="Antibiotic">Antibiotic</option>
                  <option value="Anti-inflammatory">Anti-inflammatory</option>
                  <option value="Blood Pressure">Blood Pressure</option>
                  <option value="Cholesterol">Cholesterol</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity*</label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              {/* Expiry Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date*</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Price*</label>
                <input
                  type="text"
                  placeholder="Enter price"
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
                  Save Medicine
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
export default Pharmacy;