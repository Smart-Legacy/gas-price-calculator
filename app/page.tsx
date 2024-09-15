import React from "react";
import {
  FaEye,
  FaEyeSlash,
  FaBell,
  FaSearch,
  FaHome,
  FaFileAlt,
  FaMoneyBillWave,
  FaEllipsisH,
} from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 rounded-b-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Hi, Daniel</h2>
            <p className="text-sm">
              Balance (ETB) <FaEyeSlash className="inline" />
            </p>
            <p className="text-sm font-semibold">*********</p>
          </div>
          <div className="flex space-x-4">
            <FaSearch className="text-xl" />
            <FaBell className="text-xl" />
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="text-sm">
            <p>
              Commission (ETB) <FaEye className="inline" />
            </p>
            <p className="font-semibold">******</p>
          </div>
          <div className="text-sm">
            <p>
              Annuity Commission (ETB) <FaEye className="inline" />
            </p>
            <p className="font-semibold">******</p>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-4 px-4">
        <div className="grid grid-cols-2 gap-4">
          <Link
            href={"/fuelchoice"}
            className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center"
          >
            <FaMoneyBillWave className="text-green-500 text-2xl mb-2" />
            <span className="font-semibold">Fuel Payment</span>
          </Link>
          <button className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
            <FaMoneyBillWave className="text-green-500 text-2xl mb-2" />
            <span className="font-semibold">Receive Payment</span>
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="mt-6 px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="/ad.jpg"
            alt="Fuel Payment Banner"
            className="w-full h-24 object-cover"
          />
          <div className="p-2">
            <h3 className="text-green-500 font-bold">
              Pay your fuel payment via Telebirr
            </h3>
            <p className="text-xs text-gray-500">Digitalize your transaction</p>
          </div>
        </div>
      </div>

      {/* Menu/Navigation */}
      <div className="mt-6 px-4">
        <div className="grid grid-cols-5 gap-2 text-center">
          <button className="flex flex-col items-center">
            <FaFileAlt className="text-green-500 text-2xl" />
            <span className="text-xs">Report</span>
          </button>
          <button className="flex flex-col items-center">
            <FaMoneyBillWave className="text-green-500 text-2xl" />
            <span className="text-xs">Subsidy</span>
          </button>
          <button className="flex flex-col items-center">
            <FaMoneyBillWave className="text-yellow-500 text-2xl" />
            <span className="text-xs">Without Subsidy</span>
          </button>
          <button className="flex flex-col items-center">
            <FaFileAlt className="text-green-500 text-2xl" />
            <span className="text-xs">Org Fuel Coupon</span>
          </button>
          <button className="flex flex-col items-center">
            <FaEllipsisH className="text-green-500 text-2xl" />
            <span className="text-xs">More</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center">
            <FaHome className="text-green-500 text-2xl" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <FaFileAlt className="text-gray-500 text-2xl" />
            <span className="text-xs">Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
