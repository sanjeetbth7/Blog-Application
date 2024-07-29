import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "flowbite-react";
import {OAuth }from "../Components/";

import { signInStart, signInFailure, signInSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [formData, setFomData] = useState({});
  const {loading, error:errorMessage} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const handleChange = (e) => {
    setFomData({ ...formData, [e.target.id]: e.target.value.trim()});
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure("All fields required to be filled!"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
   
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-20 mx-auto max-w-[450px]">
      <div className="flex p-3 max-w-3xl mx-auto flex-col">
        {/* top */}
        <div className="m-auto">
          <div className="self-center whitespace-nowrap p-0">
            <img src="./img/logo-vert.png" className="h-[72px] m-0 p-0" />
          </div>
        </div>

        {/* down */}

        <div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button type="submit" gradientDuoTone="greenToBlue" disabled={loading}>
            {loading ? (<>
                <Spinner size='sm' />
                <span className="pl-3">Loading...</span>
              </>) : ("Sign in")}
            </Button>
            <OAuth/>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Haven't an account? </span>
            <Link to="/sign-Up" className="text-blue-500 font-bold">
            Sign Up
            </Link>
          </div>
          {errorMessage && <Alert className="mt-5" color="failure" >{errorMessage}</Alert>}
        </div>
      </div>
    </div>
  );
}

