import axios from "axios";
import React, { useState } from "react";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import backgroundImage from '../../images/background.png';
import Swal from "sweetalert2";
const AddCourseForm = (props) => {
  const Id = props.props.UserApp?.id;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subject: "",
    description: "",
    image: "",
    video: "",
  });
  const handleFileChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.files[0] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("title", formData.title);
    Data.append("category", formData.category);
    Data.append("subject", formData.subject);
    Data.append("description", formData.description);
    Data.append("image", formData.image);
    Data.append("video", formData.video);
    Data.append("Id", Id);
    console.log(Id);
    try {
      const res = await axios.post(`http://localhost:5000/api/courses`, Data);
      console.log(res);
      Swal.Fire('Your Course is successfully submitted')
      setFormData({
        title: "",
        category: "",
        subject: "",
        description: "",
        image: "",
        video: "",
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
<div className="flex justify-start items-center h-screen bg-cover bg-center  " style={{ backgroundImage: `url(${backgroundImage})` }}>
  
<form onSubmit={handleSubmit} className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-14 py-8 bg-slate-50 shadow-lg rounded-lg ms-80">
        <div className="mb-2 block">
          <Label htmlFor="small" value="Title" />
          <TextInput
            placeholder="title"
            name="title"
            onChange={handleChange}
            type="text"
            sizing="md"
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="small" value="Category" />
          <TextInput
            placeholder="category"
            name="category"
            onChange={handleChange}
            type="text"
            sizing="md"
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="small" value="Subject" />
          <TextInput
            placeholder="subject"
            name="subject"
            onChange={handleChange}
            type="text"
            sizing="md"
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="small" value="Description" />
          <Textarea
            placeholder="description"
            name="description"
            onChange={handleChange}
            type="text"
            sizing="md"
          />
        </div>

        <div className="mb-2 block">
          <Label htmlFor="small" value="Thumbnail" />
          <FileInput
            type="file"
            name="image"
            onChange={handleFileChange}
            sizing="md"
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="small" value="Video" />
          <FileInput
            type="file"
            name="video"
            onChange={handleFileChange}
            sizing="md"
          />
        </div>

        <div className="flex justify-end mt-5">
      <Button type="submit">submit</Button>
    </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
