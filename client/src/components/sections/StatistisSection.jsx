import axios from "axios";
import React, { useEffect, useState } from "react";

const StatistisSection = () => {
  const [Teachers, setTeachers] = useState();
  const [Students, setStudents] = useState();
  const [Courses, setCourses] = useState();

  const getData = async () => {
    try {
        const teachers = await axios.get("http://localhost:5000/api/getAllTeachers");
        setTeachers(teachers.data.length);
        const students = await axios.get("http://localhost:5000/api/getAllStudents");
         setStudents(students.data.length);
        const courses = await axios.get("http://localhost:5000/api/getAllCourses");
         setCourses(courses.data.length);
    } catch (error) {
        console.log(error.message)
    }
   
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className=" dark:bg-gray-900 shadow-xl lg:mx-20 sm:mx-5 rounded-lg mb-20 bg-slate-50">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            We are educators, mentors, and tech enthusiasts. Innovators and
            problem solvers. Focused enough to be responsive and supportive, but
            expansive enough to offer the resources and connections you need.
            Committed to your success.{" "}
          </p>
          <p>
            We blend expertise with passion to deliver the educational
            experience you desire.
          </p>
        </div>
        <section class="bg-slate-50 dark:bg-gray-900">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{Teachers}</dt>
                <dd class="font-light text-gray-500 dark:text-gray-400">
                  Teachers
                </dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{Students}</dt>
                <dd class="font-light text-gray-500 dark:text-gray-400">
                  Students
                </dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{Courses}</dt>
                <dd class="font-light text-gray-500 dark:text-gray-400">
                  Courses
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </section>
  );
};

export default StatistisSection;
