"use client";

import { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";

export default function EducationSearch() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState({ en: "", sw: "" });
  const [open, setOpen] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    const res = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setAnswer({ en: data.answer_en, sw: data.answer_sw });
    setOpen(true);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSearch} sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4, flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Type your question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "12px 16px",
            fontSize: 16,
            borderRadius: 6,
            border: "2px solid #FFD700",
            width: 300,
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 24px",
            background: "linear-gradient(90deg,#FFD700,#FFA500)",
            border: "none",
            borderRadius: 6,
            fontWeight: "bold",
            cursor: "pointer",
            color: "#4B0000",
          }}
        >
          Search
        </button>
      </Box>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#4B0000",
          borderRadius: 2,
          p: 4,
          width: { xs: "90%", md: 500 },
          boxShadow: 24,
          color: "#fff",
        }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#FFD700" }}>Guidance (English)</Typography>
          <Typography sx={{ mb: 2 }}>{answer.en}</Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 2, color: "#FFD700" }}>Mwongozo (Swahili)</Typography>
          <Typography>{answer.sw}</Typography>
        </Box>
      </Modal>
    </>
  );
}