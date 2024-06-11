import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
const Nav = (props) => {
  const role = props.UserApp.role;
  const token = localStorage.getItem("auth");

  const handleLogout = async (e) => {
    e.preventDefault();
     localStorage.removeItem("auth");
     window.location.href = "http://localhost:3000/";
     console.log("logged out");
  }

  return (
    <Navbar fluid rounded className="shadow-md">
      <Navbar.Brand
        as={Link}
        href="https://flowbite-react.com"
        className="px-5"
      >
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Mind<span className="text-[#0e7490] text-3xl">Q</span>uest
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="px-5 ">
        <Navbar.Link className="text-lg flex  items-center h-full">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link className="text-lg flex  items-center h-full" href="#">
          <Link to="/Allcourses">Courses</Link>
        </Navbar.Link>
        {role === "teacher" ? (
          <>
          <Navbar.Link className="text-lg flex  items-center h-full" href="#">
            <Link to="/AddCourse">Create New Course</Link>
          </Navbar.Link>
          <Navbar.Link className="text-lg flex  items-center h-full" href="#">
            <Link to="/UpdateCourses">Courses Management</Link>
          </Navbar.Link>
          </>
        ) : null}

        <Navbar.Link
          className="text-lg flex  items-center h-full"
        
        >
         <Link to='/aboutus'>About us</Link> 
        </Navbar.Link>
        <Navbar.Link
          className="text-lg flex  items-center h-full"
          href="#"
        ></Navbar.Link>
        {token ? (
          <>
            {" "}
            <Navbar.Link className="text-lg flex  items-center h-full" href="">
              {" "}
                <Button className="p-0 m-0 " onClick={(e)=>{handleLogout(e)}}>Log out</Button>
            </Navbar.Link>
          </>
        ) : (
          <>
            {" "}
            <Navbar.Link className="text-lg flex  items-center h-full" href="">
              {" "}
              <Link to="/login">
                <Button className="p-0 m-0 ">Log in</Button>
              </Link>
            </Navbar.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
