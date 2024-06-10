import React from "react";
import Loginform from "../components/forms/Loginform";
import Illustration from '../images/RegistrationIllustraion.png'
const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[90vh] ">
        <div className="w-1/2 px-10 lg:inline-block hidden">
          <img alt="" src={Illustration} />
        </div>
        <div className="lg:w-1/3 md:w-3/4 sm:w-full lg:px-10 ">
          <Loginform />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
