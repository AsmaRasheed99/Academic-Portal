import React from "react";
import Registrationform from "../components/forms/Registrationform";
import Illustration from "../images/RegistrationIllustraion.png";
const Registrationpage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[90vh] ">
        <div className="w-1/2 px-10 lg:inline-block hidden">
          <img alt="" src={Illustration} />
        </div>
        <div className="lg:w-1/3 md:w-3/4 sm:w-full lg:px-10 ">
          <Registrationform />
        </div>
      </div>
    </>
  );
};

export default Registrationpage;
