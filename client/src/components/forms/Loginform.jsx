import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/usersLogin', { email: email, password: password} )
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("auth", res.data?.token);
        window.location.href = "http://localhost:3000/";
      } else {

        Swal.fire(res.data.error);
      }
  } catch (error) {
      Swal.fire(`${error.response.data?.error}`);
    }
  };
  return (
    <form className="flex flex-col gap-4 " onSubmit={handleLogin}>
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
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Password" />
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
      </div>
  
      <Button  type="submit">
        Login
      </Button>

    </form>
  );
};

export default Loginform;
