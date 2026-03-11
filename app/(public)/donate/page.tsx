"use client";

import { useState } from "react";
import Image from "next/image";

type PaymentMethod = "mpesa" | "tigo" | "airtel" | "card";

const paymentImages: Record<PaymentMethod, string> = {
  mpesa: "/payment images/M-mpesa.png",
  tigo: "/payment images/YAS.png",
  airtel: "/payment images/airtel-money.jfif",
  card: "/payment images/YAS.png",
};

export default function DonatePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");

  const handleSelectMethod = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setStep(2);
  };

  const handlePaymentSubmit = () => {
    alert(
      `Simulated Payment:\nAmount: ${amount} Tsh\nMethod: ${selectedMethod?.toUpperCase()}\nPhone: ${phone}`
    );
    setStep(1);
    setSelectedMethod(null);
    setPhone("");
    setPassword("");
    setAmount("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Donate to SCPSF</h1>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2>Select Payment Method</h2>
            <div className="grid">
              {(["mpesa", "tigo", "airtel", "card"] as PaymentMethod[]).map((method) => (
                <div
                  key={method}
                  className="grid-item"
                  onClick={() => handleSelectMethod(method)}
                >
                  <Image
                    src={paymentImages[method]}
                    alt={method}
                    width={70}
                    height={70}
                    style={{ objectFit: "contain" }}
                  />
                  <span>{method.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2>Enter Phone Number for {selectedMethod?.toUpperCase()}</h2>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="number"
              placeholder="Donation Amount (Tsh)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="primary" onClick={() => setStep(3)}>
              Proceed to Payment
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2>Enter Payment PIN for {selectedMethod?.toUpperCase()}</h2>
            <input
              type="password"
              placeholder="PIN"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary" onClick={handlePaymentSubmit}>
              Confirm Payment
            </button>
          </>
        )}

        <button
          className="cancel"
          onClick={() => {
            setStep(1);
            setSelectedMethod(null);
            setPhone("");
            setPassword("");
            setAmount("");
          }}
        >
          Cancel / Change Method
        </button>
      </div>

      <style jsx>{`
        .container {
          padding: 3rem 1rem;
          display: flex;
          justify-content: center;
        }
        .card {
          max-width: 600px;
          width: 100%;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .grid-item {
          cursor: pointer;
          border: 2px solid #E21B1B;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s;
        }
        .grid-item:hover {
          transform: scale(1.05);
        }
        input {
          width: 100%;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }
        button {
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 0.5rem;
        }
        .primary {
          background-color: #E21B1B;
          color: #fff;
        }
        .primary:hover {
          background-color: #B71C1C;
        }
        .cancel {
          background-color: transparent;
          color: #333;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}