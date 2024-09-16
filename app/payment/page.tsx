"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePaymentContext } from "@/context/PaymentContext";

/**
 * Here we calculate the amount of gas purchased and the amount of money that goes for carbon emission
 * Let 𝑃 be the price per liter of gas (e.g., 75).
 * Let 𝐶 be the carbon cut percentage (in this case, 1% or 0.01).
 * Let 𝑀 be the total amount of money the user pays (e.g., 1000).
 * The user needs to pay for both gas and the 1% carbon emission cut.
 * Total cost breakdown: When the user pays 𝑀, 1% of the amount is taken for carbon, and the rest is used to buy gas. So, only (1−𝐶)×𝑀(1−C)×M is used for gas.
 * For example, if the user pays 1000, only 99% of it (i.e., 0.99 × 1000) is used for gas.
 * Gas purchased: The user pays 𝑃 per liter, so the amount of gas they get is the money spent on gas divided by the price per liter:
 * Gas bought=((1−𝐶)×𝑀)/𝑃
 */

export default function ProcessingPage() {
  const { userMoney, paymentData, updatePaymentData, setUserMoney } =
    usePaymentContext();
  const router = useRouter();

  const [gasPurchased, setGasPurchased] = useState<number | undefined>();
  const [carbonPurchased, setCarbonPurchased] = useState<number | undefined>();
  const C = 0.001;
  const price = 75;

  useEffect(() => {
    const gas = ((1 - C) * paymentData.amount) / price;
    setGasPurchased(gas);
    const carbon = C * paymentData.amount;
    setCarbonPurchased(carbon);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // const money = 1800;

  // const carbonPaidPrice = C * money;
  // const gasPurchased1 = ((1 - C) * money) / price;

  return (
    <div className="flex flex-col items-center  h-screen bg-white px-4 text-black mb-6 pt-12">
      {/* Processing Icon */}
      <div className="mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Processing Text */}
      {gasPurchased == undefined || carbonPurchased == undefined ? (
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold">Processing</h1>
          <p className="text-gray-500">Wait for customer confirmation</p>
        </div>
      ) : null}

      {/* Amount */}
      <div className="text-center">
        <p className="text-lg font-semibold">Amount</p>
        <p className="text-3xl font-bold mt-1">
          {paymentData.amount} <span className="text-lg">ETB</span>
        </p>
      </div>

      {gasPurchased == undefined || carbonPurchased == undefined ? (
        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4 w-full">
          <div className="flex justify-between">
            <span className="font-semibold">Plate Number</span>
            <span>{paymentData.plateNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Paid</span>
            <span>{paymentData.amount} &nbsp; Br</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Fuel Type</span>
            <span>{paymentData.fuelType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Gas Price</span>
            <span>{price} &nbsp; Br</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Purchased Gas Amount</span>
            <span>{gasPurchased} &nbsp; Ltr</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Carbon Emission Paid Price</span>
            <span>{carbonPurchased} &nbsp; Br</span>
          </div>
        </div>
      )}

      {/* Fixed finish Button at the Bottom */}
      <div className="fixed bottom-0 left-0 w-full px-4 pb-4 mb-1">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white w-full py-3 rounded-lg text-lg font-semibold shadow-md mb-2"
        >
          Print Bill
        </button>
        <button
          className="bg-blue-600 text-white w-full py-3 rounded-lg text-lg font-semibold shadow-md"
          onClick={() => {
            router.push(`/`);
          }}
        >
          Finish
        </button>
      </div>
    </div>
  );
}
