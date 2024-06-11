import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            {" "}
            Welcome to{" "}
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Mind<span className="text-[#0e7490] text-2xl">Q</span>uest
            </span>
            , your gateway to a world of knowledge and learning. Our platform is
            dedicated to providing students, educators, and lifelong learners
            with easy access to a wide array of academic resources and tools. We
            offer comprehensive course materials, interactive learning modules,
            and a supportive community to help you achieve your educational
            goals. Whether you are seeking to deepen your understanding of a
            subject, prepare for exams, or enhance your teaching methods, our
            portal is designed to meet your needs. Join us on this journey of
            exploration and growth, and discover the power of education to
            transform lives.
          </p>
        </div>
        <div className="w-full lg:w-6/12 ">
          <img
            className="w-full h-full"
            src="https://media.istockphoto.com/id/2099254345/photo/concept-of-document-management-using-symbols-on-a-virtual-screen-erp.jpg?s=612x612&w=0&k=20&c=j1R67cYdgFyJP-3ItUnsM-9NqyIFfT8EcUNFAxRdTC4="
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-full flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
          Our journey started with a simple mission: to make education
            accessible and engaging for everyone. Founded by passionate
            educators and technologists, we aimed to bridge the gap between
            traditional learning and the digital age. What began with a few
            courses and resources has grown into a dynamic academic community,
            offering a diverse range of subjects and interactive tools. Driven
            by our commitment to quality and innovation, we support students,
            teachers, and lifelong learners in their educational pursuits. As we
            continue to grow and adapt, we remain dedicated to making learning
            accessible, innovative, and excellent for all. Join us in
            transforming the way the world learns.
          </p>
        </div>
     
      </div>
    </div>
  );
};

export default About;
