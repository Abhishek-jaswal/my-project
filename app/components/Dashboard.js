import React from 'react'

export default function Dashboard() {
  return (
    <div>
       
        
          <h1 className="text-4xl text-center text-gray-600">Welcome to Admin Page</h1>
                <div className="justify-center gap-4  m-4 flex flex-wrap">
                <div className="bg-gray-500 p-4 m-4 rounded-lg shadow-lg">
                <h1>Assesment</h1>
                <h2>Click here to Schdule the assesment</h2>
                </div>
                <div className="bg-green-500 p-4 m-4 rounded-lg shadow-lg">
                <h1>Add Student</h1>
                <h2>Click here to Add the Student</h2>
                </div>
                <div className="bg-red-400 p-4 m-4 rounded-lg shadow-lg  ">
                <h1> Upcoming Assesment</h1>
                <h2>Click here to see upcoming assesment</h2>
                </div>
            </div>
            </div>
 
  )
}
