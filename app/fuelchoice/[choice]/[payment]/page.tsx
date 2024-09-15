"use client";

import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FuelPayment() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex gap-2 mb-4">
        {" "}
        <Link href={"/fuelchoice/choice"} className="mt-1">
          <FaChevronLeft />
        </Link>{" "}
        <h1 className="text-xl font-semibold ">Fuel Payment</h1>
      </div>

      {/* Eligibility Info Section */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Eligibility Car Type</span>
          <span>Addis Ababa Taxi</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Car Color</span>
          <span>አረንጓዴ ቀለም</span> {/* Example text in Amharic */}
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Eligibility</span>
          <span>VALID</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Plate Number</span>
          <span>1AA06104</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Eligible fuel per day in liter</span>
          <span>25</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Mobile Number</span>
          <span>251920718590</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Fuel Type</span>
          <span>Benzene</span>
        </div>
      </div>

      {/* Input Section for Amount */}
      <div className="mt-6">
        <label className="block text-lg font-semibold mb-2" htmlFor="amount">
          Amount
        </label>
        <div className="flex w-full p-3 border rounded-lg shadow-md bg-white">
          <input
            id="amount"
            type="number"
            placeholder="Enter Amount"
            className="w-5/6"
          />
          <span className="block text-right mt-1 text-sm">ETB</span>
        </div>
      </div>

      {/* Fixed Next Button at the Bottom */}
      <div className="fixed bottom-0 left-0 w-full px-4 pb-4 mb-4">
        <button
          className="bg-blue-600 text-white w-full py-3 rounded-lg text-lg font-semibold shadow-md"
          onClick={() => {
            router.push(`/payment`);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
