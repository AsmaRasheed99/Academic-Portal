import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeCourses = () => {
  const [Courses, setCourses] = useState([]);
 const Navigate = useNavigate()

  const oneCourse = ( e, id) => {
    e.preventDefault();
    Navigate(`/CourseDetails/${id}`);
  }
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getAllCourses");
      setCourses(res.data?.slice(0, 5));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-4">
      {Courses.map((course) => (
        <div className="rounded-lg shadow-lg bg-white w-72" key={course._id}>
          <iframe
            className=" w-full"
            src={`http://localhost:5000/videos/${course?.video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 cursor-pointer" onClick={(e)=>{oneCourse(e , course._id)}}>
              {course.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{course.subject} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCourses;
