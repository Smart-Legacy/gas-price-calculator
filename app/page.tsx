"use client";

import { useState } from "react";

const CarbonCalculator = () => {
  // Retrieve the environment variables
  const fuelPrice = parseFloat(process.env.NEXT_PUBLIC_FUEL_PRICE || "0");
  const carbonPercentage = parseFloat(
    process.env.NEXT_PUBLIC_CARBON_PERCENTAGE || "0"
  );

  // State to store the number of liters bought
  const [liters, setLiters] = useState<number>(0);

  // Calculate the carbon contribution
  const carbonContribution = (fuelPrice * liters * carbonPercentage) / 100;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Carbon Contribution Calculator
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Liters of Fuel Bought:
          </label>
          <input
            type="number"
            value={liters}
            onChange={(e) => setLiters(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter number of liters"
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            Fuel Price per Liter:{" "}
            <span className="font-bold">${fuelPrice}</span>
          </p>
          <p className="text-gray-700">
            Carbon Percentage:{" "}
            <span className="font-bold">{carbonPercentage}%</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-800">
            Your Carbon Contribution:{" "}
            <span className="text-green-500">
              ${carbonContribution.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;
