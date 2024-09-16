"use client";

import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
} from "react";

// Define the types for the payment data and context
interface PaymentData {
  fuelChoice: string;
  fuelType: string;
  plateNumber: string;
  amount: number;
}

interface PaymentContextType {
  userMoney: number;
  setUserMoney: React.Dispatch<React.SetStateAction<number>>;
  paymentData: PaymentData;
  updatePaymentData: (newData: Partial<PaymentData>) => void;
}

interface Props {
  children: ReactNode;
}

// Create the context
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Create a provider component
export const PaymentProvider: FC<Props> = ({ children }) => {
  // Initial user data
  const [userMoney, setUserMoney] = useState<number>(2000); // Initially 2000
  const [paymentData, setPaymentData] = useState<PaymentData>({
    fuelChoice: "",
    fuelType: "",
    plateNumber: "",
    amount: 0,
  });

  // Update the context data
  const updatePaymentData = (newData: Partial<PaymentData>) => {
    setPaymentData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <PaymentContext.Provider
      value={{ userMoney, setUserMoney, paymentData, updatePaymentData }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

// Custom hook to use the payment context
export const usePaymentContext = (): PaymentContextType => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePaymentContext must be used within a PaymentProvider");
  }
  return context;
};
