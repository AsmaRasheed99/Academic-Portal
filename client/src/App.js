import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './main-pages/Homepage'
import Registrationpage from './main-pages/Registrationpage'
import LoginPage from './main-pages/LoginPage'
import axios from 'axios'
import Courses from './main-pages/Courses'
import Course from './main-pages/Course'
import AddCourse from './main-pages/AddCourse'
import UpdateCourses from './main-pages/UpdateCourses'

function App() {
  const [UserApp, setUserApp] = useState("");
console.log(UserApp)
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
      <Navbar UserApp={UserApp} />
      <Routes>
        <Route path="/" element={<Homepage UserApp={UserApp}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Registrationpage />} />
        <Route path="/AddCourse" element={<AddCourse UserApp={UserApp} />} />
        <Route path="/UpdateCourses" element={<UpdateCourses UserApp={UserApp} />} />
        <Route path="/CourseDetails/:id" element={<Course />} />
        <Route path="/Allcourses" element={<Courses UserApp={UserApp}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
