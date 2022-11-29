import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../Layouts/Frontend/Footer";
import Navbar from "../../Layouts/Frontend/Navbar";
const baseURL = "https://dummyjson.com/users";

function DonersList() {
  const [doners, setDoners] = useState(null);
  // live search start state
  const [query, setQuery] = useState("");
  // live seacrch end state
  //  const handleSubmit= ()=>{
  //   return doners.filter(
  //     (elems) =>
  //       elems.firstName.toLowerCase().includes(query) ||
  //       elems.phone.toLowerCase().includes(query) ||
  //       elems.bloodGroup.toLowerCase().includes(query) ||
  //       elems.email.toLowerCase().includes(query) ||
  //       elems.birthDate.toLowerCase().includes(query)
  //   );
  //  }
  //doner  search by blood group
  const [Items, setItems] = useState("");
  const filterItem = (categDonerItem) => {
    const updatedItems = doners.filter((curElem) => {
      return curElem.email === categDonerItem;
    });
    setItems(updatedItems);
  };
  useEffect(() => {
    // fetch data
    axios.get(baseURL).then((response) => {
      setDoners(response.data.users);
    });
  }, []);
  if (!doners) return "Loading...";
  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-10 drop-shadow-sm">
        <h3 className="text-3xl font-bold mb-2 py-2 text-center">
          টাকা বন্ধু বানায়; রক্ত ভাই বানায়।
        </h3>
        <div className=" flex  justify-between ">
          {" "}
          <div className="flex">
            <div>
              <button
                className="btn  btn-primary "
                onClick={() => filterItem("atuny0@sohu.com")}
              >
                রক্ত দান করুন
              </button>{" "}
            </div>
            <div className="flex justify-center">
              <div className="mb-3 ">
                <select
                  className="form-select appearance-none
                  block
                  w-full
                  px-4
                  py-3
                  
                  mx-2
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>All</option>
                  <option onClick={() => filterItem("a+")} value={1}>
                    A
                  </option>
                  <option value={2}>B</option>
                  <option value={3}>AB</option>
                  <option value={4}>O</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn  btn-primary " type="submit ">
                  Live Searching...
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full drop-shadow-sm border ">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Blood Group
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Last Donation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doners
                    .filter(
                      (elems) =>
                        elems.firstName.toLowerCase().includes(query) ||
                        elems.phone.toLowerCase().includes(query) ||
                        elems.bloodGroup.toLowerCase().includes(query) ||
                        elems.email.toLowerCase().includes(query) ||
                        elems.birthDate.toLowerCase().includes(query)
                    )
                    .map((items, index) => {
                      return (
                        <>
                          <tr className="bg-white  border-b">
                            <td
                              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                              key={index}
                            >
                              {items.id}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {items.firstName}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {items.phone}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {items.bloodGroup.toLowerCase()}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {items.email}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {items.birthDate}
                            </td>
                          </tr>
                        </>
                      );
                    })}{" "}
                </tbody>
              </table>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonersList;
