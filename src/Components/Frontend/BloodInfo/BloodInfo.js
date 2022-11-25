import React from "react";
import { Link } from "react-router-dom";
import "./BloodInfo.css";
function BloodInfo() {
  return (
    <div className=" bg-base-70 py-3">
      {" "}
      <div className="divider mx-10 pt-5">
        <h3 className="text-3xl font-bold mb-2 ">রক্ত খুঁজুন </h3>
      </div>
      <div className=" bg-base-150 px-5 py-5">
        <div className="hero-content flex-col lg:flex-row ">
          <a href="https://ibb.co/k1pH3jX">
            <img
              src="https://i.ibb.co/4dcmszp/header-bg.jpg"
              className="max-w-lg rounded-lg shadow-2xl object-contain w-full"
              alt="header-bg"
              border="0"
            />
          </a>
          <div className="w-full">
            <h3 className="text-3xl font-bold"> রক্ত দিন, জীবন বাঁচান!</h3>
            <p className="py-6">
              মুমূর্ষু মানুষকে রক্তদান করে আপনি পাচ্ছেন মানসিক তৃপ্তি। কারণ, এত
              বড় দান যা আর কোনোভাবেই সম্ভব নয়।নিয়মিত রক্তদানকারীর হৃদরোগ ও
              হার্ট অ্যাটাকের ঝুঁকি কম অনেকটাই। রক্তে কোলেসটোরলের উপস্থিতি কমাতে
              সাহায্য করে নিয়মিত রক্তদান।
            </p>
            <label
              htmlFor="my-modal-1"
              className="btn modal-button btn-primary mx-2"
            >
              রক্ত দান করুন
            </label>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative backdrop-blur-sm z-40">
                <label
                  htmlFor="my-modal-1"
                  className="btn btn-danger btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold text-center py-5">
                  আপনার রক্তই পারে অন্যের জীবন বাঁচাতে !
                </h3>
                <section className="d">
                  <div className=" text-gray-800 py-5">
                    <div>
                      <div>
                        <form>
                          {/* Email input */}
                          <div className="mb-6">
                            <input
                              type="text"
                              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput2"
                              placeholder="আপনার নাম লিখুন... "
                            />
                          </div>{" "}
                          {/* Password input */}
                          <div className="mb-6">
                            <input
                              type="text"
                              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput2"
                              placeholder=" আপনার রক্তের  গ্রুপের নাম..."
                            />
                          </div>
                          {/* Password input */}
                          <div className="mb-6">
                            <input
                              type="number"
                              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput2"
                              placeholder="আপনার ফোন নাম্বার লিখুন..."
                            />
                          </div>
                          <div className="form-group mb-6">
                            <textarea
                              className=" form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                              id="exampleFormControlTextarea13"
                              rows="3"
                              placeholder="ব্যক্তিগত ঠিকানা লিখুন..."
                            ></textarea>
                          </div>
                          <div className="text-center lg:text-left">
                            <button
                              type="submit"
                              className=" w-full  px-6  py-2.5  bg-blue-600 text-white font-medium text-xs  leading-tight uppercase  rounded  shadow-md hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              Send
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>{" "}
            <Link to="/doners">
              <label
                htmlFor="my-bfinder-3"
                className="btn b-button btn-primary"
              >
                রক্ত খুঁজুন
              </label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodInfo;
