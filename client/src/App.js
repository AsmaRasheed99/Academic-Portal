import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './main-pages/Homepage'
import Registrationpage from './main-pages/Registrationpage'
import LoginPage from './main-pages/LoginPage'
import axios from 'axios'
import AddCourseForm from './components/forms/AddCourseForm'
import Courses from './main-pages/Courses'

function App() {
  const [UserApp, setUserApp] = useState("");

  // console.log( UserApp)
  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
       if (token) {
        const res = await axios.get('http://localhost:5000/protected', {
          headers: {
            authorization: token
            }
            })
            setUserApp(res.data.user)
       }
    } catch (error) {
      console.error(error.message)
    }
  };
  
  useEffect(() => {
    fetchProtectedData();
  }, [])


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Registrationpage />} />
        <Route path="/courses" element={<AddCourseForm UserApp={UserApp} />} />
        <Route path="/Allcourses" element={<Courses UserApp={UserApp}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
