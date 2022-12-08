import React from "react";

function Service() {
  return (
    <div id="Services">
      <section className="mb-20 px-10 text-gray-700">
        <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
          <div className="divider pt-5">
            <h3 className="text-3xl font-bold mb-2 text-gray-900">সেবাসমূহ</h3>
          </div>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            “মুমূর্ষ রোগীর প্রাণের টানে, এগিয়ে আসুন রক্তদানে”
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="card w-100 glass bg-indigo-600">
            <figure>
              <img
                className=" w-48"
                src="https://www.save.life/site/themes/savelife/assets/images/icons/about/blood-plus.svg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">What we do ?</h2>
              <p>
                We connect blood donors with recipients, without any
                intermediary such as blood banks, for an efficient and seamless
                process
              </p>
            </div>
          </div>
          <div className="card w-100 glass bg-indigo-600">
            <figure>
              <img
                className=" w-48"
                src="https://www.save.life/site/themes/savelife/assets/images/icons/about/global-health.svg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Innovative</h2>
              <p>
                Save Life Connect is an innovative approach to address global
                health. We provide immediate access to blood donors.
              </p>
            </div>
          </div>
          <div className="card w-100 glass bg-indigo-600">
            <figure>
              <img
                className=" w-48"
                src="https://www.save.life/site/themes/savelife/assets/images/icons/about/network.svg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Network</h2>
              <p>
                Savelife is one of several community organizations working
                together as a network that responds to emergencies in an
                efficient manner.
              </p>
            </div>
          </div>
          <div className="card w-100 glass bg-indigo-600">
            <figure>
              <img
                className="w-48"
                src="https://www.save.life/site/themes/savelife/assets/images/icons/about/save.svg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center ">Life hack</h2>
              <p>
                Save Life We are a non profit foundation and our main objective
                is to make sure that everything is done to protect vulnerable
                persons. Help us by making a gift !
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
