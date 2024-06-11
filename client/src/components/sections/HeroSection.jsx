import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = (props) => {
  const navigate = useNavigate();

  const handleRole = (role) => {
    console.log(role);
    navigate(`/signup?role=${role}`);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Discover a World of Learning Opportunities
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From resources to mentorship, MindQuest provide the tools you need
            to excel in your academic endeavors.
          </p>
          {props.props.UserApp ? (
            <>
              <p>
                <span className="text-4xl text-[#0e7490] font-bold mr-2">Welcome</span> <span className="text-2xl">{props.props.UserApp?.username}</span>
              </p>
            </>
          ) : (
            <>
              {" "}
              <Button
                onClick={() => handleRole("teacher")}
                className="inline-flex items-center justify-center mr-3"
              >
                Get Started As A Teacher
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
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
              <Button
                onClick={() => handleRole("student")}
                className="inline-flex items-center justify-center text-black bg-light border border-gray-300 hover:text-white"
              >
                Get Started As A Student{" "}
              </Button>
            </>
          )}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
