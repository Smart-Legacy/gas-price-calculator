"use client";

import React from "react";
import {
  FaChevronRight,
  FaGasPump,
  FaOilCan,
  FaIndustry,
  FaReceipt,
} from "react-icons/fa";
import { RiGasStationLine } from "react-icons/ri";
import { PiGasCanBold } from "react-icons/pi";
import { MdOilBarrel } from "react-icons/md";
import { useRouter } from "next/navigation";

const FuelPaymentPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white py-4 px-6 shadow-md flex items-center justify-between">
        <h2 className="text-lg font-semibold">Fuel Payment</h2>
      </div>

      {/* Fuel Payment Options */}
      <div className="mt-4 px-4">
        <div className="space-y-4">
          {/* Subsidy Option */}
          <button
            className="bg-white flex justify-between items-center p-4 rounded shadow-md w-full"
            onClick={() => {
              router.push("/fuelchoice/money");
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-1 rounded-3xl">
                <RiGasStationLine className="text-white text-2xl" />
              </div>

              <span className="font-medium text-sm">Subsidy</span>
            </div>
            <FaChevronRight className="text-gray-400 text-xl" />
          </button>

          {/* Without Subsidy Option */}
          <button className="bg-white flex justify-between items-center p-4 rounded shadow-md w-full">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500 p-1 rounded-3xl">
                <RiGasStationLine className="text-white text-2xl" />
              </div>
              <span className="font-medium text-sm">Without Subsidy</span>
            </div>
            <FaChevronRight className="text-gray-400 text-xl" />
          </button>

          {/* Organization Fuel Payment Option */}
          <button className="bg-white flex justify-between items-center p-4 rounded shadow-md w-full">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-1 rounded-3xl">
                <FaReceipt className="text-white text-2xl" />
              </div>
              <span className="font-medium text-sm">
                Organization Fuel Payment (Coupon)
              </span>
            </div>
            <FaChevronRight className="text-gray-400 text-xl" />
          </button>

          {/* Barrel Option */}
          <button className="bg-white flex justify-between items-center p-4 rounded shadow-md w-full">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-1 rounded-3xl">
                <MdOilBarrel className="text-white text-2xl" />
              </div>
              <span className="font-medium text-sm">Barrel</span>
            </div>
            <FaChevronRight className="text-gray-400 text-xl" />
          </button>

          {/* Kerosene Option */}
          <button className="bg-white flex justify-between items-center p-4 rounded shadow-md w-full">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-1 rounded-3xl">
                <PiGasCanBold className="text-white text-2xl" />
              </div>
              <span className="font-medium text-sm">Kerosene</span>
            </div>
            <FaChevronRight className="text-gray-400 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuelPaymentPage;
