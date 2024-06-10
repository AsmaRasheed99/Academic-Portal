import axios from "axios";
import React, { useState } from "react";

const AddCourseForm = (props) => {
    const Id = props.UserApp.id

    
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        subject: "",
        description: "",
        image: "",
        video:""
        });
            const handleFileChange = (event) => {
                setFormData({...formData, [event.target.name] : event.target.files[0]});
              };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("title", formData.title)
    Data.append("category", formData.category)
    Data.append("subject", formData.subject)
    Data.append("description", formData.description)
    Data.append("image", formData.image)
    Data.append("video", formData.video)
    Data.append("Id", Id)
    console.log(formData.video)
    try {
        const res = await axios.post(`http://localhost:5000/api/courses`, Data)
        console.log(res)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="title" name="title" onChange={handleChange} />
        <input placeholder="category" name="category" onChange={handleChange} />
        <input placeholder="subject" name="subject" onChange={handleChange} />
        <input
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={handleFileChange} />
        <input type="file" name="video" onChange={handleFileChange} />
        <button type="submit ">submit</button>
      </form>
    </div>
  );
};

export default AddCourseForm;
