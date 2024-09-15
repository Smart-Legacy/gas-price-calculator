"use client";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { choice: string } }) => {
  const router = useRouter();
  const [fuelType, setFuelType] = useState<string>("Benzene");
  const [plateRegion, setPlateRegion] = useState<string>("AA");
  const [plateNumber, setPlateNumber] = useState<string>("06104");

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Header */}
      <div className=" py-4 px-6  flex items-center justify-left gap-2">
        <Link href={"/fuelchoice"}>
          <FaChevronLeft />
        </Link>
        <h2 className="text-lg font-semibold">Subsidy</h2>
      </div>

      {/* Fuel Type Selection */}
      <div className="mt-6 px-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="font-semibold text-gray-700">Fuel Type</h3>

          <div className="mt-4 flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Benzene"
                checked={fuelType === "Benzene"}
                onChange={(e) => setFuelType(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>Benzene</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Diesel"
                checked={fuelType === "Diesel"}
                onChange={(e) => setFuelType(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>Diesel</span>
            </label>
          </div>
        </div>
      </div>

      {/* Plate Number Selection */}
      <div className="mt-6 px-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="font-semibold text-gray-700">Plate Number</h3>

          <div className="mt-4 flex space-x-4">
            {/* Dropdown for first section (e.g., '1') */}
            <select className="form-select bg-gray-100 border rounded-md p-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>

            {/* Dropdown for second section (e.g., 'AA') */}
            <select
              value={plateRegion}
              onChange={(e) => setPlateRegion(e.target.value)}
              className="form-select bg-gray-100 border rounded-md p-2"
            >
              <option>AA</option>
              <option>AB</option>
              <option>AC</option>
            </select>

            {/* Input for last section (e.g., '06104') */}
            <input
              type="text"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              className="form-input bg-gray-100 border rounded-md p-2 w-1/2"
              placeholder="06104"
            />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="fixed bottom-0 left-0 w-full px-4 pb-4 mb-4">
        <button
          className="bg-blue-600 text-white w-full py-3 rounded-lg text-lg font-semibold shadow-md"
          onClick={() => {
            router.push(`/fuelchoice/${params.choice}/payment`);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
