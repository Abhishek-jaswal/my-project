"use client"
import React, { useState } from 'react'

export default function AddStudentDetails() {
  const courses = ["IT", "Electrical", "JCB"];
  const [studentsData, setStudentsData] = useState({
    IT: [
      { id: 1, name: "John Doe", email: "john@example.com", contact: "1234567890", joiningDate: "2024-01-15", profilePic: "https://via.placeholder.com/50", courseDuration: "6 months", feesStatus: "Paid", attendance: "85%", performance: "A" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", contact: "9876543210", joiningDate: "2024-02-10", profilePic: "https://via.placeholder.com/50", courseDuration: "6 months", feesStatus: "Pending", attendance: "90%", performance: "B+" },
    ],
    Electrical: [],
    JCB: [],
  });

  const [selectedCourse, setSelectedCourse] = useState("IT");
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    joiningDate: "",
    profilePic: "",
    courseDuration: "",
    feesStatus: "",
    attendance: "",
    performance: "",
  });

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.contact) return;
    setStudentsData((prev) => ({
      ...prev,
      [selectedCourse]: [...prev[selectedCourse], { ...newStudent, id: prev[selectedCourse].length + 1 }],
    }));
    setNewStudent({ id: "", name: "", email: "", contact: "", joiningDate: "", profilePic: "", courseDuration: "", feesStatus: "", attendance: "", performance: "" });
  };

  return (
    <div className="max-w-auto mx-auto bg-gray-500 text-gray-800 shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Student</h2>
      <select
        className="w-full p-2 border rounded-lg mb-4"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}>
      
        {courses.map((course) => (
          <option key={course} value={course}>{course}</option>
        ))}
      </select>

      <div className="mb-4">
        <input className="border p-2 m-2 rounded-lg" placeholder="Name" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
        <input className="border p-2 m-2 rounded-lg" placeholder="Email" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} />
        <input className="border p-2 m-2 rounded-lg" placeholder="Contact" value={newStudent.contact} onChange={(e) => setNewStudent({ ...newStudent, contact: e.target.value })} />
        <input className="border p-2 m-2 rounded-lg" placeholder="Joining Date" value={newStudent.joiningDate} onChange={(e) => setNewStudent({ ...newStudent, joiningDate: e.target.value })} />
        <input className="border p-2 m-2 rounded-lg" placeholder="Profile Pic" value={newStudent.profilePic} onChange={(e) => setNewStudent({ ...newStudent, profilePic: e.target.value })} />
        <input className="border p-2 m-2 rounded-lg" placeholder="Course Duration" value={newStudent.courseDuration} onChange={(e) => setNewStudent({ ...newStudent, courseDuration: e.target.value })} />
        <input className="border p-2 m-2 rounded-lg" placeholder="Fees Status" value={newStudent.feesStatus} onChange={(e) => setNewStudent({ ...newStudent, feesStatus: e.target.value })} />
        <input className="border p-2 m-2 rounded-lg" placeholder="Attendance" value={newStudent.attendance} onChange={(e) => setNewStudent({ ...newStudent, attendance: e.target.value })} />
        <input className="border p-2 m-2 rounded-lg" placeholder="Performance" value={newStudent.performance} onChange={(e) => setNewStudent({ ...newStudent, performance: e.target.value })} />
        <br />
        <button className="bg-blue-500 text-white p-2 rounded ml-2" onClick={handleAddStudent}>Add</button>
      </div>
       <hr className='border-gray-900 '></hr>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Contact</th>
              <th className="border px-4 py-2">Joining Date</th>
              <th className="border px-4 py-2">Course Duration</th>
              <th className="border px-4 py-2">Fees Status</th>
              <th className="border px-4 py-2">Attendance</th>
              <th className="border px-4 py-2">Performance
              </th>
            </tr>
          </thead>
          <tbody>
            {studentsData[selectedCourse].map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{student.id}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.contact}</td>
                <td className='border px-4 py-2'>{student.joiningDate}</td>
                <td className='border px-4 py-2'>{student.courseDuration}</td>
                <td className='border px-4 py-2'>{student.feesStatus}</td>
                <td className='border px-4 py-2'>{student.attendance}</td>
                <td className='border px-4 py-2'>{student.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
