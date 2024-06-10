import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Registrationform = () => {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const role = params.get('role')
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailp, setEmailp] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordp, setPasswordp] = useState("");

  const [repeatPassword, setRepeatPassword] = useState("");
  const [confirmPasswordp, setConfirmPasswordp] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [phonep, setPhonep] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [namep, setNamep] = useState("");

  function validateName(name) {
    if (name === "") {
      setNamep("! Please enter your name");
      setNameError(true);
      return false;
    } else {
      setNamep("");
      setNameError(false);
      return true;
    }
  }

  function validateEmail(userEmail) {
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setEmailp("! E-mail must be in a valid format such as example@gmail.com");
      setEmailError(true);
      return false;
    } else {
      setEmailp("");
      setEmailError(false);
      return true;
    }
  }

  function validatePhone(userPhone) {
    if (!/^07[0-9]{8}$/.test(userPhone)) {
      setPhonep("! Phone number must be 10 digits starting with 07");
      setPhoneError(true);
      return false;
    } else {
      setPhonep("");
      setPhoneError(false);
      return true;
    }
  }

  function validatePassword(userPassword) {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(userPassword)) {
      setPasswordp(
        "! Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character"
      );
      setPasswordError(true);
      return false;
    } else {
      setPasswordp("");
      setPasswordError(false);
      return true;
    }
  }

  function validateConfirmPassword() {
    if (password !== repeatPassword) {
      setConfirmPasswordp("! Passwords do not match");
      setPasswordError(true);
      return false;
    } else {
      setConfirmPasswordp("");
      setPasswordError(false);
      return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword();
    const isNameValid = validateName(name);
    const isPhoneValid = validatePhone(phone);

    if (
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isNameValid &&
      isPhoneValid
    ) {
      try {
        const formData = {
          name: name,
          email: email,
          phone: phone,
          password: password,
          role: role,
        };
        console.log(formData);
        const res = await axios.post(
          "http://localhost:5000/api/users",
          formData
        );
        if (res.status === 200) {
          localStorage.setItem("auth", res.data.token);
          window.location.href = "http://localhost:3000/";
        } else {

          Swal.fire(res.data.error);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Email" />
        </div>
        <TextInput
          id="email2"
          type="email"
          placeholder="name@gmail.com"
          required
          shadow
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailError && <p className="text-red-500">{emailp}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          required
          shadow
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {nameError && <p className="text-red-500">{namep}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Phone Number" />
        </div>
        <TextInput
          id="phone"
          type="text"
          placeholder="07XXXXXXXX"
          required
          shadow
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        {phoneError && <p className="text-red-500">{phonep}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput
          id="password2"
          type="password"
          required
          shadow
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {passwordError && <p className="text-red-500">{passwordp}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required
          shadow
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
        />
        {passwordError && <p className="text-red-500">{confirmPasswordp}</p>}
      </div>
      <div className="flex items-center gap-2">
        <Checkbox color="dark" id="agree" required />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link
            to="#"
            className="text-[#4786b7] hover:underline dark:text-[#1b374c]"
          >
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button color="dark" type="submit">
        Create an account
      </Button>
      <span className="text-dark font-semibold text-xs px-4">
        Already have an account?{" "}
        <Link to="/login" className="text-[#4786b7]">
          Login Here
        </Link>
      </span>
    </form>
  );
};

export default Registrationform;
