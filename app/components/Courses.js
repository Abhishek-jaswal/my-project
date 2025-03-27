"use client";
import React, { useState } from 'react'

export default function Courses() {
 
    const courses = ["IT", "Electrical", "JCB"];

    const studentsData = {
      IT: [
        { id: 1, name: "John Doe", email: "john@example.com", contact: "1234567890", joiningDate: "2024-01-15", profilePic: "https://via.placeholder.com/50", courseDuration: "6 months", feesStatus: "Paid", attendance: "85%", performance: "A" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", contact: "9876543210", joiningDate: "2024-02-10", profilePic: "https://via.placeholder.com/50", courseDuration: "6 months", feesStatus: "Pending", attendance: "90%", performance: "B+" },
      ],
      Electrical: [
        { id: 3, name: "Alice Brown", email: "alice@example.com", contact: "5678901234", joiningDate: "2024-03-05", profilePic: "https://via.placeholder.com/50", courseDuration: "8 months", feesStatus: "Paid", attendance: "88%", performance: "A-" },
        { id: 4, name: "Bob White", email: "bob@example.com", contact: "6789012345", joiningDate: "2024-03-12", profilePic: "https://via.placeholder.com/50", courseDuration: "8 months", feesStatus: "Pending", attendance: "75%", performance: "B" },
      ],
      JCB: [
        { id: 5, name: "Charlie Black", email: "charlie@example.com", contact: "7890123456", joiningDate: "2024-04-01", profilePic: "https://via.placeholder.com/50", courseDuration: "4 months", feesStatus: "Paid", attendance: "95%", performance: "A+" },
      ],
    };
  
    const [selectedCourse, setSelectedCourse] = useState("IT");
  
    return (
      <div className="max-w-auto mx-auto bg-gray-500 shadow-lg text-gray-800 rounded-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Select a Course</h2>
        <select
          className="w-full p-2 border rounded-lg mb-4"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          {courses.map((course) => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
  
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Students: {studentsData[selectedCourse].length}</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Profile</th>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Contact</th>
                <th className="border px-4 py-2">Joining Date</th>
                <th className="border px-4 py-2">Course Duration</th>
                <th className="border px-4 py-2">Fees Status</th>
                <th className="border px-4 py-2">Attendance</th>
                <th className="border px-4 py-2">Performance</th>
              </tr>
            </thead>
            <tbody>
              {studentsData[selectedCourse].map((student) => (
                <tr key={student.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2"><img src={student.profilePic} alt="Profile" className="w-10 h-10 rounded-full mx-auto" /></td>
                  <td className="border px-4 py-2">{student.id}</td>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.email}</td>
                  <td className="border px-4 py-2">{student.contact}</td>
                  <td className="border px-4 py-2">{student.joiningDate}</td>
                  <td className="border px-4 py-2">{student.courseDuration}</td>
                  <td className="border px-4 py-2">{student.feesStatus}</td>
                  <td className="border px-4 py-2">{student.attendance}</td>
                  <td className="border px-4 py-2">{student.performance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };