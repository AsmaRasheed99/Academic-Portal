import React from "react";

const CategoriesSection = () => {
  return (
    <div className="px-2 py-20 w-full flex justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div className="lg:w-1/2">
          <div
            className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97")',
            }}
          ></div>
        </div>
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
          <h2 className="text-3xl text-gray-800 font-bold">
          The Rise of Data Ethics Courses in Data Science Education          </h2>
          <p className="mt-4 text-gray-600">
          In recent years, data science has rapidly expanded, driven by advancements in big data, machine learning, and artificial intelligence. This growth has heightened awareness of the ethical implications of data use and analysis. This article explores the emergence and significance of specialized data ethics courses within data science programs, focusing on their curriculum, pedagogy, and impact on students and the broader data science community.


          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
