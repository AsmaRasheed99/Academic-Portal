import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter";

const Courses = (props) => {
  const Navigate = useNavigate();
  const [filteredCourses , setFilteredCourses] = useState()

  const [Courses, setCourses] = useState([]);
console.log(Courses)
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getAllCourses");
      setCourses(res.data);
      setFilteredCourses(res.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleNavigate = (e, id) => {
    e.preventDefault();
    Navigate(`/CourseDetails/${id}`);
  };

  return (
    <>
    <Filter Courses={Courses}  setFilteredCourses={setFilteredCourses}/>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 md:mx-5 lg:mx-0 lg:ms-10 my-10">
      
      {filteredCourses?.map((course) => (
        <Card key={course._id} className="max-w-sm ">
          <img
          className="h-36"
            alt={`Thumbnail for ${course.title}`}
            src={`http://localhost:5000/images/${course.thumbnail}`}
          />

          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {course.title}
          </h5>
         
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {course.subject}
          </p>
          <Button
            onClick={(e) => {
              handleNavigate(e, course._id);
            }}
          >
            Watch
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      ))}
    </div>
                </>
  );
};

export default Courses;
