import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {auth,gooprovider,gitprovider } from "./config";
import { signInWithPopup } from "firebase/auth";
 import { Formik } from "formik";
import Footer from "../../Layouts/Frontend/Footer";
import Navbar from "../../Layouts/Frontend/Navbar";
import Home from "../Home";

export default function Signin() {
     const [goovalue,setgooValue] =useState("")
       const [gitvalue, setgitValue] = useState("");
    //google auth
     const GooglehandleClick = ()=>{
        signInWithPopup(auth,gooprovider).then((data)=>{
            setgooValue(data.user.email);
            localStorage.setItem("email",data.user.email)
        })
        
    }
    //github auth
     const GithandleClick = () => {
       signInWithPopup(auth, gitprovider).then((data) => {
         setgitValue(data.user.email);
         localStorage.setItem("email", data.user.email);
       });
     };
    


 useEffect(() => {
   setgooValue(localStorage.getItem("email"));
   setgitValue(localStorage.getItem("email"));
 }, []);
  return (
    <div>
      {goovalue || gitvalue ? (
        <Home />
      ) : (
        <>
          {" "}
          <Navbar />
          <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
              <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="not show"
                  />
                </div>
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0  ">
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = " Email is Required!";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      if (!values.password) {
                        errors.password = " Password is Required!";
                      } else {
                        if (values.password.length < 8) {
                          errors.password = " Password is must 8 character ";
                        }
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-row items-center justify-center lg:justify-start">
                          <p className="text-lg mb-0 mr-4">Sign in with</p>
                          <button
                            type="button"
                            onClick={GooglehandleClick}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block p-3 bg-white-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white-700 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                          >
                            {/* google */}
                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                              <path
                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                fill="#4285f4"
                              />
                              <path
                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                fill="#34a853"
                              />
                              <path
                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                fill="#fbbc04"
                              />
                              <path
                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                fill="#ea4335"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={GithandleClick}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block p-3 bg-white-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white-700 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                          >
                            {/* github */}
                            <svg className="w-5" viewBox="0 0 32 32">
                              <path
                                fillRule="evenodd"
                                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                          <p className="text-center font-semibold mx-4 mb-0">
                            Or
                          </p>
                        </div>
                        {/* Email input */}
                        <div className="mb-6">
                          <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Email address"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <span className="text-red-700">
                            {" "}
                            {errors.email && touched.email && errors.email}
                          </span>
                        </div>
                        {/* Password input */}
                        <div className="mb-6">
                          <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          <span className="text-red-700">
                            {" "}
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                          <div className="form-group form-check">
                            <input
                              type="checkbox"
                              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              id="exampleCheck2"
                            />

                            <label
                              className="form-check-label inline-block text-gray-800"
                              htmlFor="exampleCheck2"
                            >
                              Remember me
                            </label>
                          </div>
                          <a href="#!" className="text-gray-800">
                            Forgot password?
                          </a>
                        </div>
                        <div className="text-center lg:text-left">
                          <button
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Login
                          </button>
                          <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                            Don't have an account?
                            <Link
                              to="/signup"
                              href="#!"
                              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >
                              Register
                            </Link>
                          </p>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}


      