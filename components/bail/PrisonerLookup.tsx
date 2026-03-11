"use client";

import { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";

interface PrisonerLookupProps {
  onLookup: (data: any) => void;
}

export default function PrisonerLookup({ onLookup }: PrisonerLookupProps) {
  const [prisonNumber, setPrisonNumber] = useState("");
  const [error, setError] = useState("");

  const handleLookup = async () => {
    if (!prisonNumber) {
      setError("Prisoner Number is required");
      return;
    }

    try {
      const res = await fetch(`/api/prisoners/lookup?number=${prisonNumber}`);
      const data = await res.json();

      if (data.exists) {
        onLookup(data.prisoner);
        setError("");
      } else {
        onLookup({ prisoner_name: "", prison_number: prisonNumber, guardian_name: "", guardian_contact: "" });
        setError("");
      }
    } catch (err) {
      setError("Lookup failed. Try again.");
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Prisoner Number"
        value={prisonNumber}
        onChange={(e) => setPrisonNumber(e.target.value)}
        onBlur={handleLookup}
        sx={{ mb: 1 }}
      />
      {error && (
        <Typography sx={{ color: "red", fontSize: 13, mb: 1 }}>{error}</Typography>
      )}
      <Button variant="contained" onClick={handleLookup} sx={{ background: "linear-gradient(90deg,#1e3a8a,#d4af37)" }}>
        Lookup Prisoner
      </Button>
    </Box>
  );
}