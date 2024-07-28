import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "flowbite-react";
export default function SignUp() {
  const [formData, setFomData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFomData({ ...formData, [e.target.id]: e.target.value.trim()});
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      setErrorMessage("All fields required to be filled!");
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data);
      setLoading(false);
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage("Failed to signup, please try again later!");
      // console.log(error);
    }
  };

  return (
    <div className="min-h-screen mt-20 mx-auto max-w-[450px]">
      <div className="flex p-3 max-w-3xl mx-auto flex-col">
        {/* top */}
        <div className="m-auto">
          <div className="self-center whitespace-nowrap p-0">
            <img src="./img/logo-vert.png" className="h-12 m-0 p-0" />
          </div>
        </div>

        {/* down */}

        <div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
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
              </>) : ("Sign Up")}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account? </span>
            <Link to="/sign-in" className="text-blue-500 font-bold">
            Sign In
            </Link>
          </div>
          {errorMessage && <Alert className="mt-5" color="failure" >{errorMessage}</Alert>}
        </div>
      </div>
    </div>
  );
}
