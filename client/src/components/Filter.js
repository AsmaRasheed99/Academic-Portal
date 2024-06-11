import React, { useState } from "react";

const Filter = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subject: "",
    teacher: "",
  });
  console.log(formData);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = props?.Courses.filter((course) => {
      return (
        course?.title.toLowerCase().includes(formData.title.toLowerCase()) &&
        course?.category
          .toLowerCase()
          .includes(formData.category.toLowerCase()) &&
        course?.subject.toLowerCase().includes(formData.subject.toLowerCase()) &&
        course.teacherDetails?.firstName?.toLowerCase().includes(formData.teacher.toLowerCase())
      );
    });
    props.setFilteredCourses(filteredData);
  };
 const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      subject: "",
      teacher: "",
    });
    props.setFilteredCourses(props.Courses)
 }
  return (
    <div className="flex items-center justify-center mt-5">
      <form
        className="rounded-xl  bg-white p-3  w-[80%]"
        onSubmit={handleSubmit}
      >
        <p className="mt-1 text-sm">Use filters to further refine search</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col">
            <label
              htmlFor="Title"
              className="text-stone-600 text-sm font-medium"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              placeholder="title"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-1 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Subject"
              className="text-stone-600 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}

              placeholder="subject"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-1 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Teacher"
              className="text-stone-600 text-sm font-medium"
            >
              Teacher
            </label>
            <input
              type="text"
              name="teacher"
              value={formData.teacher}

              placeholder="Teacher"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-1 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Category"
              className="text-stone-600 text-sm font-medium"
            >
              Category
            </label>
            <select
              name="category"
              value={formData.category}

              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-1 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >

              <option defaultValue=""></option>
              <option>Business</option>
              <option>Art</option>
              <option>Development</option>
              <option>Science</option>
              <option>Languages</option>
              <option>Music</option>
            </select>
          </div>
        </div>
        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
          <button onClick={handleReset} className="active:scale-95 rounded-lg bg-gray-200 px-8 py-1 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">
            Reset
          </button>
          <button
            className="active:scale-95 rounded-lg bg-[#0e7490] px-8 py-1 font-medium text-white outline-none focus:ring hover:opacity-90"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
