import axios from "axios";
import React, { useEffect } from "react";

const Courses = (props) => {

  const fetchCourses = async () => {
      try {
      const res = await axios.get("http://localhost:5000/api/getAllCourses");
      // console.log(res.data);
    } catch (error) {
     console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
    TeacherCourses()
    OneCourse()
  }, []);

  const TeacherCourses = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/getTeacherCourses/${props.UserApp.id}`);
      // console.log(res.data);
    } catch (error) {
     console.error(error);
    }
  }

  const OneCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/getCourse/66674dd507f2de3a68175fe1`);
      console.log(res.data);
    } catch (error) {
     console.error(error);
    }
  }



  return <div>Cour g g g  ggggggggggggggggses</div>;
};

export default Courses;
