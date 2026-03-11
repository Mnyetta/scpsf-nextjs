"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  MenuItem
} from "@mui/material";

/* ---------------- TANZANIA PRISONS ---------------- */
const prisons = [
  { name: "Ukonga Central Prison", location: "Dar es Salaam" },
  { name: "Butimba Prison", location: "Mwanza" },
  { name: "Isanga Prison", location: "Dodoma" },
  { name: "Ruanda Prison", location: "Mbeya" },
  { name: "Keko Prison", location: "Dar es Salaam" },
  { name: "Arusha Central Prison", location: "Arusha" },
  { name: "Karanga Prison", location: "Kilimanjaro" },
  { name: "Uyui Prison", location: "Tabora" },
  { name: "Lindi Prison", location: "Lindi" },
  { name: "Mtwara Prison", location: "Mtwara" }
];

/* ---------------- ADMISSION OFFICES ---------------- */
const admissionOffices = [
  "Ukonga Central Prison Admission Office",
  "Butimba Prison Admission Office",
  "Isanga Prison Admission Office",
  "Ruanda Prison Admission Office",
  "Keko Prison Admission Office",
  "Karanga Prison Admission Office",
  "Arusha Central Prison Admission Office",
  "Uyui Prison Admission Office",
  "Lindi Prison Admission Office",
  "Mtwara Prison Admission Office"
];

/* ---------------- CRIMES ---------------- */
const predefinedCrimes = [
  "Theft",
  "Fraud",
  "Assault",
  "Burglary",
  "Robbery",
  "Drug Related Offense",
  "Corruption",
  "Financial Crime",
];

export default function SubmitCasePage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  /* ALERT SOUND */
  useEffect(() => {
    if (showDisclaimer) {
      const audio = new Audio("/alert.mp3");
      audio.volume = 0.6;
      audio.play().catch(() => {});
    }
  }, [showDisclaimer]);

  const [formData, setFormData] = useState({
    prisonerName: "",
    prisonerID: "",
    crimeDetails: "",
    manualCrime: "",
    guardianName: "",
    guardianContact: "",
    originalCaseNo: "",
    originalCaseRefNo: "",
    originalCourt: "",
    prisonName: "",
    prisonLocation: "",
    admissionOffice: "",
    dateOfImprisonment: ""
  });

  const [status, setStatus] = useState<any>(null);

  /* ---------------- CHANGE HANDLER ---------------- */
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "prisonName") {
      const prison = prisons.find(p => p.name === value);
      setFormData(prev => ({
        ...prev,
        prisonName: value,
        prisonLocation: prison ? prison.location : ""
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      ...formData,
      crimeDetails:
        formData.crimeDetails === "Other"
          ? formData.manualCrime
          : formData.crimeDetails
    };

    try {
      const res = await fetch("/api/submit-case", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setStatus({
        type: "success",
        message: "Case submitted successfully!"
      });

    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#7a0000,#b30000,#d4af37)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 10
      }}
    >

      {/* ---------------- DISCLAIMER ---------------- */}
      {showDisclaimer && (
        <Box
          sx={{
            position: "fixed",
            right: 40,
            bottom: 40,
            width: 360,
            background: "#1a1a1a",
            color: "#fff",
            p: 3,
            borderRadius: 3,
            border: "2px solid #ffd700",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            zIndex: 999
          }}
        >
          {/* Government Flag */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <img
              src="/images/thumb/tanzania-government-flag.png"
              alt="Tanzania Government Flag"
              style={{ width: 60, height: "auto" }}
            />
          </Box>

          <Typography sx={{ fontSize: 14, mb: 2, lineHeight: 1.6 }}>
            ⚖ <strong>Official Disclaimer</strong>
            <br /><br />
            This program provides legal assistance specifically for prisoners and covers:
            <br /><br />
            • Bail pending appeals for prisoners.
            <br />
            • Preparation of Memorandum and/or Petitions for Appeals.
            <br />
            • Applications for Revision.
            <br /><br />
            The targeted beneficiaries are prisoners who are <strong>not receiving legal aid services provided by the Government of Tanzania</strong>.
          </Typography>

          <Button
            variant="contained"
            onClick={() => setShowDisclaimer(false)}
            sx={{
              background: "linear-gradient(90deg,#e21b1b,#ffd700)",
              fontWeight: "bold"
            }}
          >
            I Understand
          </Button>
        </Box>
      )}

      {/* ---------------- FORM ---------------- */}
      <Container maxWidth="md">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 36,
            fontWeight: 700,
            mb: 4,
            color: "#fff"
          }}
        >
          Submit a Prisoner Case
        </Typography>

        {status && (
          <Alert severity={status.type} sx={{ mb: 3 }}>
            {status.message}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            background: "#fff",
            borderRadius: 4,
            p: 6,
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >

          {/* DATE OF IMPRISONMENT */}
          <TextField
            type="date"
            label="Date of Imprisonment"
            name="dateOfImprisonment"
            value={formData.dateOfImprisonment}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            helperText="Used to determine if the appeal or application is timeous."
          />

          <TextField label="Prisoner Name" name="prisonerName" onChange={handleChange} />
          <TextField label="Prisoner ID" name="prisonerID" onChange={handleChange} />

          <TextField
            select
            label="Crime Details"
            name="crimeDetails"
            value={formData.crimeDetails}
            onChange={handleChange}
          >
            {predefinedCrimes.map(c => (
              <MenuItem key={c} value={c}>{c}</MenuItem>
            ))}
            <MenuItem value="Other">Other</MenuItem>
          </TextField>

          {formData.crimeDetails === "Other" && (
            <TextField
              label="Manual Crime"
              name="manualCrime"
              onChange={handleChange}
            />
          )}

          <TextField label="Guardian Name" name="guardianName" onChange={handleChange} />
          <TextField label="Guardian Contact" name="guardianContact" onChange={handleChange} />

          <TextField label="Original Case No" name="originalCaseNo" onChange={handleChange} />
          <TextField label="Original Case Ref No" name="originalCaseRefNo" onChange={handleChange} />
          <TextField label="Original Court" name="originalCourt" onChange={handleChange} />

          <TextField
            select
            label="Prison Name"
            name="prisonName"
            onChange={handleChange}
          >
            {prisons.map(p => (
              <MenuItem key={p.name} value={p.name}>{p.name}</MenuItem>
            ))}
          </TextField>

          <TextField label="Prison Location" name="prisonLocation" value={formData.prisonLocation} />

          <TextField
            select
            label="Admission Office"
            name="admissionOffice"
            onChange={handleChange}
          >
            {admissionOffices.map(o => (
              <MenuItem key={o} value={o}>{o}</MenuItem>
            ))}
          </TextField>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              fontWeight: 700,
              background: "linear-gradient(90deg,#e21b1b,#ffd700)"
            }}
          >
            Submit Case
          </Button>

        </Box>
      </Container>
    </Box>
  );
}