"use client"; // Ensure this is present at the top

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "@/graphql/queries";

export default function Courses() {
  const courses = ["IT", "Electrical", "JCB"];
  const [selectedCourse, setSelectedCourse] = useState("IT");

  const { loading, error, data } = useQuery(GET_STUDENTS, {
    variables: { course: selectedCourse },
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

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

      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Total Students: {data?.students?.length || 0}
      </h3>

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
            {data?.students?.map((student) => (
              <tr key={student.id} className="hover:bg-gray-400">
                <td className="border px-4 py-2">
                  <img
                    src={student.profilePic}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
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
}
