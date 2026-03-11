"use client";

import { useState } from "react";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";
import PrisonerLookup from "./PrisonerLookup";
import BailSummaryCard from "./BailSummaryCard";

export default function BailForm() {
  const [formData, setFormData] = useState<any>(null);
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState<any>(null);

  const handleLookup = (data: any) => {
    setFormData(data);
    setSubmitted(null); // reset summary on new lookup
  };

  const handleSubmit = async () => {
    if (!formData || !reason) return;

    try {
      const res = await fetch("/api/bail-requests/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prisoner_id: formData.id,
          reason,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted({ ...formData, reason, status: data.bailRequest.status });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: 3,
        boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
        background: "linear-gradient(145deg,#ffffff,#f4f6fb)",
      }}
    >
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 700 }}>
        Bail Pending Appeal Form
      </Typography>

      <PrisonerLookup onLookup={handleLookup} />

      {formData && !submitted && (
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Prisoner Name"
            value={formData.prisoner_name}
            onChange={(e) => setFormData({ ...formData, prisoner_name: e.target.value })}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Guardian Name"
            value={formData.guardian_name}
            onChange={(e) => setFormData({ ...formData, guardian_name: e.target.value })}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Guardian Contact"
            value={formData.guardian_contact}
            onChange={(e) => setFormData({ ...formData, guardian_contact: e.target.value })}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Reason for Bail Pending Appeal"
            multiline
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ background: "linear-gradient(90deg,#1e3a8a,#d4af37)", py: 1.5 }}
            onClick={handleSubmit}
          >
            Submit Bail Request
          </Button>
        </Box>
      )}

      {submitted && <BailSummaryCard data={submitted} />}
    </Paper>
  );
}