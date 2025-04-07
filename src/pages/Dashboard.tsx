import React, { useState } from 'react';
import { Activity, Users, UserCheck, Clock } from 'lucide-react';
import { jsPDF } from 'jspdf'; // For PDF generation
import * as XLSX from 'xlsx'; // For Excel export
import image1 from '../images/bg-hospital.png'; // First image
import image2 from '../images/patient.jpg'; // Second image
import image3 from '../images/staff.png'; // Third image
import Footer from '../components/Footer.tsx'; // Import the Footer component

const Dashboard = () => {
  const stats = [
    { name: 'Total Patients', value: '2,345', icon: Users, trend: '+12%' },
    { name: 'Active Staff', value: '148', icon: UserCheck, trend: '+4%' },
    { name: 'Daily Appointments', value: '86', icon: Clock, trend: '+8%' },
    { name: 'Patient Recovery', value: '94%', icon: Activity, trend: '+2%' },
  ];

  // State for export format selection
  const [exportFormat, setExportFormat] = useState('csv');
  const [showReportModal, setShowReportModal] = useState(false);

  // Handle export functionality
  const handleExport = () => {
    const data = [['Metric', 'Value', 'Trend'], ...stats.map((stat) => [stat.name, stat.value, stat.trend])];
    if (exportFormat === 'csv') {
      const csvContent = `data:text/csv;charset=utf-8,${data.map((row) => row.join(',')).join('\n')}`;
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'dashboard-stats.csv');
      document.body.appendChild(link);
      link.click();
    } else if (exportFormat === 'pdf') {
      const doc = new jsPDF();
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('Dashboard Statistics', 10, 10);
      const startX = 10;
      const startY = 20;
      const rowHeight = 10;
      const colWidths = [70, 40, 40];
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Metric', startX, startY);
      doc.text('Value', startX + colWidths[0], startY);
      doc.text('Trend', startX + colWidths[0] + colWidths[1], startY);
      doc.setLineWidth(0.1);
      doc.line(startX, startY + 2, startX + colWidths[0] + colWidths[1] + colWidths[2], startY + 2);
      doc.setFont('helvetica', 'normal');
      stats.forEach((stat, index) => {
        const yPos = startY + (index + 1) * rowHeight;
        doc.text(stat.name, startX, yPos);
        doc.text(stat.value, startX + colWidths[0], yPos);
        doc.text(stat.trend, startX + colWidths[0] + colWidths[1], yPos);
      });
      doc.save('dashboard-stats.pdf');
    } else if (exportFormat === 'xlsx') {
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Dashboard Stats');
      XLSX.writeFile(workbook, 'dashboard-stats.xlsx');
    }
  };

  // Handle generate report functionality
  const handleGenerateReport = () => {
    setShowReportModal(true);
  };

  const closeReportModal = () => {
    setShowReportModal(false);
  };

  return (
    <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-blue-600 p-4 text-white rounded-lg shadow">
        <h1 className="text-2xl font-bold">Hospital Management System</h1>
        <div className="flex items-center space-x-3">
  {/* Export Button with Dropdown */}
  <div className="relative inline-flex">
    <button
      onClick={handleExport}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50 focus:outline-none"
    >
      Export
    </button>
    <select
      value={exportFormat}
      onChange={(e) => setExportFormat(e.target.value)}
      className="px-2 py-2 text-sm text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-lg hover:bg-gray-50 focus:outline-none"
    >
      <option value="csv">CSV</option>
      <option value="pdf">PDF</option>
      <option value="xlsx">Excel</option>
    </select>
  </div>
  {/* Generate Report Button */}
  <button
    onClick={handleGenerateReport}
    className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-900 focus:outline-none"
  >
    Generate Report
  </button>
</div>
      </div>

      {/* Prominent Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={image1} alt="Hospital" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
            <h3 className="text-lg font-semibold">Hospital Overview</h3>
            <p className="text-sm">A brief description of the hospital's facilities.</p>
          </div>
        </div>
        {/* Image 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={image2} alt="Patients" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
            <h3 className="text-lg font-semibold">Patient Care</h3>
            <p className="text-sm">Focus on patient care and satisfaction.</p>
          </div>
        </div>
        {/* Image 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={image3} alt="Staff" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
            <h3 className="text-lg font-semibold">Dedicated Staff</h3>
            <p className="text-sm">Meet our dedicated and professional staff.</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
        <img
          src={image1}
          alt="Decorative Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow relative z-10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">{stat.trend}</span>
                <span className="text-sm text-gray-600"> vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Appointments Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Appointments</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src={`https://i.pravatar.cc/40?img=${i + 1}`}
                  alt="Patient"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Patient {i + 1}</p>
                <p className="text-sm text-gray-500">General Checkup</p>
              </div>
              <div className="ml-auto">
                <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Confirmed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Generated Report</h2>
              <button onClick={closeReportModal} className="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-700">
                Below is a preview of the generated report based on the current dashboard data.
              </p>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Metric
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stats.map((stat) => (
                    <tr key={stat.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stat.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stat.value}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stat.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeReportModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const doc = new jsPDF();
                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(16);
                    doc.text('Generated Report', 10, 10);
                    const startX = 10;
                    const startY = 20;
                    const rowHeight = 10;
                    const colWidths = [70, 40, 40];
                    doc.setFontSize(12);
                    doc.setFont('helvetica', 'bold');
                    doc.text('Metric', startX, startY);
                    doc.text('Value', startX + colWidths[0], startY);
                    doc.text('Trend', startX + colWidths[0] + colWidths[1], startY);
                    doc.setLineWidth(0.1);
                    doc.line(startX, startY + 2, startX + colWidths[0] + colWidths[1] + colWidths[2], startY + 2);
                    doc.setFont('helvetica', 'normal');
                    stats.forEach((stat, index) => {
                      const yPos = startY + (index + 1) * rowHeight;
                      doc.text(stat.name, startX, yPos);
                      doc.text(stat.value, startX + colWidths[0], yPos);
                      doc.text(stat.trend, startX + colWidths[0] + colWidths[1], yPos);
                    });
                    doc.save('generated-report.pdf');
                    closeReportModal();
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;