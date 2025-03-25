import React from 'react'
import Header from '../components/Header'

export default function page() {
    const links=[{name:"Dashboard",href:"/components/dashboard"},
                {name:"Users",href:"/components/users"},
                {name:"Products",href:"/components/products"},
               { name:"Orders",href:"/components/orders"}
    ]
    
  return (
      
     <Header links={links}/>
  )
}
