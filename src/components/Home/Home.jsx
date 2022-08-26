import React from 'react'
import { Link} from "react-router-dom";
import {Routes,Route} from "react-router-dom"
import ContactsPage from './../Contacts Page/ContactsPage';
function Home() {
  return (
    <div>
    <h1>Contact management</h1>
     <div className='info-contact'> 
     Contact management is the process of storing and tracking data on customers and leads.
In addition to providing quick access to customer data, investing in contact management can help you grow and diversify your customer base.
Upgrading to customer relationship management software can provide advanced data that allows you to increase engagement between your company and its customers.
This article is for business owners who want to improve their customer relationships using contact management software. 
Gone are the days of exchanging napkin notes and business cards. In today’s fast-paced business world, it can be hard to remember every customer’s name and their individual  preferences. That’s why it’s essential to store data electronically, share it with team members when needed and continuously gather information to successfully interact with clients and customers.
     </div>
<div className='page'>     <Link to="/contactpage" className='page-of contact'>ContactsPage</Link></div>
    </div>
  )
}

export default Home