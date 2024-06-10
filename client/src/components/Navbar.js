import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import img from "../images/RegistrationIllustraion.png";
const Nav = () => {
  return (
    <Navbar fluid rounded className="shadow-sm">
      <Navbar.Brand as={Link} href="https://flowbite-react.com" className="px-5">
        <img src={img} className="mr-3 h-8 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="px-5 ">
        <Navbar.Link active className="text-lg flex  items-center h-full">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link className="text-lg flex  items-center h-full" as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="text-lg flex  items-center h-full" href="#"><Link to='/Allcourses'>Courses</Link></Navbar.Link>
        <Navbar.Link className="text-lg flex  items-center h-full" href="#">Pricing</Navbar.Link>
        <Navbar.Link className="text-lg flex  items-center h-full" href="">
          {" "}
          <Link to='/login'>
          <Button className="p-0 m-0 ">Log in</Button>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
