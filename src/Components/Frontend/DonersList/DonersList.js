import React, { useState } from "react";
import Footer from "../../Layouts/Frontend/Footer";
import Navbar from "../../Layouts/Frontend/Navbar";
import DonersData from "../DonersData/DonersData";
function DonersList() {
  const [doners, setDoners] = useState(DonersData);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-10 drop-shadow-sm">
        <h3 className="text-3xl font-bold mb-2 py-2 text-center">
          টাকা বন্ধু বানায়; রক্ত ভাই বানায়।
        </h3>
        <div className=" d-flex   drop-shadow-sm">
          {" "}
          <button className="btn  btn-primary ">রক্ত দান করুন</button>
          <button className="btn  btn-primary mx-5 ">রক্ত দান করুন</button>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full drop-shadow-sm ">
                <thead className="bg-white border-b">
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
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doners.map((items) => {
                    return (
                      <>
                        <tr className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {items.id}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {items.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {"01" + items.number}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {items.bloodGroup}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {items.address}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonersList;
