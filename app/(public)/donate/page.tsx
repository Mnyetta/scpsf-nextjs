"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  // Grid,  <-- Commented out temporarily
  Paper,
} from "@mui/material";
import Image from "next/image";

type PaymentMethod = "mpesa" | "tigo" | "airtel" | "card";

const paymentImages: Record<PaymentMethod, string> = {
  mpesa: "/payment images/M-mpesa.png",
  tigo: "/payment images/YAS.png",
  airtel: "/payment images/airtel-money.jfif",
  card: "/payment images/YAS.png", // you can replace with card image
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
    // Reset to initial
    setStep(1);
    setSelectedMethod(null);
    setPhone("");
    setPassword("");
    setAmount("");
  };

  return (
    <Container sx={{ py: 12 }}>
      <Paper sx={{ p: 6, maxWidth: 600, mx: "auto" }} elevation={3}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
          Donate to SCPSF
        </Typography>

        {/* Step 1: Select Payment Method */}
        {step === 1 && (
          <>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Select Payment Method
            </Typography>

            {/* TODO: Fix MUI Grid typings; commenting out to allow Docker build */}
            {/*
            <Grid container spacing={2} justifyContent="center">
              {(["mpesa", "tigo", "airtel", "card"] as PaymentMethod[]).map((method) => (
                <Grid item key={method}>
                  <Box
                    onClick={() => handleSelectMethod(method)}
                    sx={{
                      cursor: "pointer",
                      border: "2px solid #E21B1B",
                      borderRadius: 2,
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      width: 100,
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  >
                    <Image
                      src={paymentImages[method]}
                      alt={method}
                      width={80}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
                      {method.toUpperCase()}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            */}

            {/* Temporary fallback: simple list buttons */}
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              {(["mpesa", "tigo", "airtel", "card"] as PaymentMethod[]).map((method) => (
                <Button key={method} onClick={() => handleSelectMethod(method)} variant="outlined">
                  {method.toUpperCase()}
                </Button>
              ))}
            </Box>
          </>
        )}

        {/* Step 2: Enter Phone Number */}
        {step === 2 && (
          <>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Enter Phone Number for {selectedMethod?.toUpperCase()}
            </Typography>
            <TextField
              fullWidth
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Donation Amount (Tsh)"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              sx={{ mb: 3 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#E21B1B", "&:hover": { backgroundColor: "#B71C1C" } }}
              onClick={() => setStep(3)}
            >
              Proceed to Payment
            </Button>
          </>
        )}

        {/* Step 3: Enter Password / Confirm */}
        {step === 3 && (
          <>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Enter Payment PIN for {selectedMethod?.toUpperCase()}
            </Typography>
            <TextField
              fullWidth
              label="PIN"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#E21B1B", "&:hover": { backgroundColor: "#B71C1C" } }}
              onClick={handlePaymentSubmit}
            >
              Confirm Payment
            </Button>
          </>
        )}

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button
            color="inherit"
            onClick={() => {
              setStep(1);
              setSelectedMethod(null);
              setPhone("");
              setPassword("");
              setAmount("");
            }}
          >
            Cancel / Change Method
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}