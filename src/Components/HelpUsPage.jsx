import React from "react";
import PageHeader from "./PageHeader";

function HelpUsPage() {
  return (
    <div>
      <PageHeader text={"Help Us"} />
      <div className="flex justify-around p-4">
        <div className="flex flex-col gap-3 text-left text-xl">
          <h1 className="font-semibold">For Indian Donors</h1>
          <p>Bank Of Baroda</p>
          <p>
            <span className="font-semibold ">City</span>:Nagpur
          </p>
          <p>
            <span className="font-semibold ">Contact No</span>: +91 8010996763
          </p>
          <p>
            <span className="font-semibold ">Account Name</span>: Suvidha Mahila
            Mandal
          </p>
          <p>
            <span className="font-semibold ">Suvidha Account No</span>
            :9784100027609
          </p>
          <p>
            <span className="font-semibold ">IFSC Code</span>: BARB0DBKPAR
          </p>
        </div>
        <div className="w-80 h-80 ">
          <img
            src={process.env.PUBLIC_URL + `/images/home/qrCode.png`}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HelpUsPage;
