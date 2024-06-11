import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Course = () => {
  const [course, setCourse] = useState();
  const [teacher, setTeacher] = useState();
  const { id } = useParams();

  const OneCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/getCourse/${id}`);
      setCourse(res.data);
      const teacher = await axios.get(`http://localhost:5000/api/users/${course.teacherId}`)
      setTeacher(teacher.data)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    OneCourse();
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-10">
          <div className="mx-auto w-full lg:max-w-xl  rounded-lg text-center ">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {course?.title}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              {course?.description}{" "}
            </p>
          </div>
          <div>
            <iframe
              className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src={`http://localhost:5000/public/images/${course?.video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
