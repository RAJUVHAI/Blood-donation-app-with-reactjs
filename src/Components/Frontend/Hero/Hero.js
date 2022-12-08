import React from "react";
import { motion, useScroll } from "framer-motion";
import "./Hero.css";
const Hero = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      {" "}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="active1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="active1"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden right-0  left-0  md:block absolute text-center">
              <h5 className="text-xl">
                রক্তে কোলেসটোরলের উপস্থিতি কমাতে সাহায্য করে নিয়মিত রক্তদান।
              </h5>
              <p>
                নিয়মিত স্বেচ্ছায় রক্তদানের মাধ্যমে বিনা খরচে জানা যায় নিজের
                শরীরে বড় কোনো রোগ আছে কিনা। যেমন : হেপাটাইটিস-বি,
                হেপাটাইটিস-সি, সিফিলিস, এইচআইভি (এইডস) ইত্যাদি।
              </p>
            </div>{" "}
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">
                {" "}
                নিয়মিত রক্তদানকারীর হৃদরোগ ও হার্ট অ্যাটাকের ঝুঁকি কম অনেকটাই
              </h5>
              <p>
                সম্প্রতি ইংল্যান্ডের এক গবেষণায় দেখা গেছে, নিয়মিত স্বেচ্ছায়
                রক্তদানকারী জটিল বা দুরারোগ্য রোগ-ব্যাধি থেকে মুক্ত থাকেন
                অনেকাংশে। যেমন, নিয়মিত রক্তদান ক্যান্সার প্রতিরোধে সহায়ক।
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">
                রক্তে কোলেসটোরলের উপস্থিতি কমাতে সাহায্য করে নিয়মিত রক্তদান।
              </h5>
              <p>
                রক্তদানে আপনার নিজের অর্থ সাশ্রয়-ও হয়। রক্তদান কেন্দ্রের
                মাধ্যমে রক্ত দিলে পাঁচটি পরীক্ষা সম্পূর্ণ বিনা খরচে করে দেয়া
                হয় যা বাইরে করলে খরচ লাগবে প্রায় তিন হাজার টাকার মতো। সেগুলো
                হলো-এইচআইভি/এইডস, হেপাটাইটিস-বি, হেপাটাইটিস-সি, ম্যালেরিয়া ও
                সিফিলিস। তাছাড়া রক্তের গ্রুপও নির্ণয় করা হয়।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
