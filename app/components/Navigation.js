import React from 'react'
import Dashboard from './Dashboard'

export default function Navigation() {
    const links = [{ name: "Dashboard", href: "/admin" },
    { name: "Profile", href: "/admin/Profile" },
    { name: "Courses", href: "/admin/Profile/courses" },
    { name: "AddStudent", href: "/admin/Profile/courses/addStudent" },
    { name: "Orders", href: "/components/orders" },
    {avatar: "student", src:"https://via.placeholder.com/150"}
    ]
    return (
        <div>
            <main>
                <nav className="bg-gray-800 p-4 flex justify-between items-center">
                    <h1 className="text-white text-2xl">Admin Portal</h1>
                    <button className="text-white text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button>
                </nav>


                <div className="flex">
                    {/*        on mobile screen this will be hidden and on show a button when clicked will show the sidebar and button not shown on desktopscreen only show in mobile screen
 */}            <div className="bg-gray-700 w-1/6 h-screen ">
                        <ul>
                            {/*  <a key={link.} href={link.href}>
                {link.name} */}
                <img
            src={links.src}
            alt="Profile Avatar"
            className="w-24 h-24 mt-4 rounded-full mx-auto border-4 border-gray-200"
          />
                            {links.map((link) => {
                                return  <><a className='p-4 block' key={link.name} href={link.href}>
                                    {link.name}</a></> 
                            })}
                            {/*    <a className='p-4 block'  href="app/components/Dashboard.js">Dashboard</a>
                    <a className='p-4 block'  href="/components/ProfileDetails">Profile</a>
                    <a className='p-4 block'  href="/components/Products">Products</a>
                    <a className='p-4 block'  href="/components/Orders">Orders</a> */}

                        </ul>
                    </div>
                    <div className="bg-gray-100 w-5/6 h-screen ">
                        <Dashboard/>
                    </div>

                </div>
            </main>      
    </div>
  )
}
