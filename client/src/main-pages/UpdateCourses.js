import axios from "axios";
import {
  Button,
  Card,
  Modal,
  TextInput,
  Label,
  Textarea,
  FileInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";

const UpdateCourses = (props) => {
  const [courses, setCourses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const TeacherCourses = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/getTeacherCourses/${props.UserApp?.id}`
      );
      setCourses(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (course) => {
    setCurrentCourse(course);
    setIsEditing(true);
  };

  const handleDeleteClick = (course) => {
    setCourseToDelete(course);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/DeleteCourse/${courseToDelete._id}`
      );
      setCourses(courses.filter((course) => course._id !== courseToDelete._id));
      setShowDeleteModal(false);
      setCourseToDelete(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditSubmit = async () => {
    try {
      console.log(currentCourse._id)
      await axios.put(
        `http://localhost:5000/api/UpdateCourse/${currentCourse._id}`,
        currentCourse
      );
      setCourses(
        courses.map((course) =>
          course._id === currentCourse._id ? currentCourse : course
        )
      );
      setIsEditing(false);
      setCurrentCourse(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    TeacherCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCourse({ ...currentCourse, [name]: value });
  };
  const handleFileChange = (event) => {
    setCurrentCourse({
      ...currentCourse,
      [event.target.name]: event.target.files[0],
    });
  };

  return (
    <div className="mx-5 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Card key={course._id} className="max-w-sm">
            <img
              src={`http://localhost:5000/public/images/${course.thumbnail}`}
              alt={`Thumbnail for ${course.title}`}
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {course.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {course.description}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {course.subject}
            </p>
            <div className="flex justify-end space-x-2">
              <Button onClick={() => handleEditClick(course)} color="info">
                Edit
              </Button>
              <Button onClick={() => handleDeleteClick(course)} color="failure">
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {isEditing && (
        <Modal show={isEditing} onClose={() => setIsEditing(false)}>
          <Modal.Header>Edit Course</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <TextInput
                  id="title"
                  name="title"
                  value={currentCourse.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={currentCourse.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <TextInput
                  id="subject"
                  name="subject"
                  value={currentCourse.subject}
                  onChange={handleChange}
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
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-end">
            <Button onClick={handleEditSubmit}>Save</Button>
            <Button color="gray" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {showDeleteModal && (
        <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
          <Modal.Header>Delete Course</Modal.Header>
          <Modal.Body>
            ARE YOU SURE YOU WANT TO DELETE THIS COURSE "{courseToDelete.title}"? 
          </Modal.Body>
          <Modal.Footer>
            <Button color="failure" onClick={handleDeleteConfirm}>
              Delete
            </Button>
            <Button color="gray" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default UpdateCourses;
