import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="w-10/12 flex flex-row justify-center items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center mx-5 ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg flex items-center"><b>{title}</b></h3>
      <p className="mt-1 text-white text-sm md:w-10/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services" id="technology">
    <div className="flex flex-col items-center justify-between md:p-20 py-12 px-4"> {/* mf:flex-row */}
      <div className="flex-1 flex flex-col justify-center items-center mb-5 w-full">
        <h1 className="w-full flex items-center justify-center text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Key Objectives
          {/* <br />
          continue to improve */}
        </h1>
        <p className="text-start my-2 text-white font-light md:w-10/12 w-11/12 text-base">
          The project aims to achieve key objectives like :
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Transparency"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Blockchain enhances transparency in government fund allocation and tracking by providing real-time visibility of transactions on a distributed ledger, enabling verification of fund flows."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Efficiency"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Efficiency in government fund allocation can be improved by leveraging smart contracts, which automate processes, eliminate intermediaries, and ensure accurate and timely fund disbursements."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Security"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Blockchain's security measures, such as cryptographic encryption and decentralized consensus, protect against fraud and unauthorized access, ensuring the integrity and confidentiality of government fund transactions."
        />
        <ServiceCard
          color="bg-[#4c0f61]"
          title="Accountability"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="The immutability of blockchain records and the ability to track and audit fund transactions promote accountability, allowing for the permanent and transparent recording of allocation and utilization of funds by government entities."
        />
      </div>
    </div>
  </div>
);

export default Services;
