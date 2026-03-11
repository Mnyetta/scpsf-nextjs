"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";

interface BailSummaryProps {
  data: any;
}

export default function BailSummaryCard({ data }: BailSummaryProps) {
  return (
    <Card
      sx={{
        mt: 5,
        p: 3,
        borderRadius: 3,
        maxWidth: 500,
        mx: "auto",
        boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
        background: "linear-gradient(145deg,#ffffff,#f4f6fb)",
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Bail Request Summary
        </Typography>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Prisoner Name:
          </Typography>
          <Typography variant="subtitle1">{data.prisoner_name}</Typography>
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Prison Number:
          </Typography>
          <Typography variant="subtitle1">{data.prison_number}</Typography>
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Guardian Name:
          </Typography>
          <Typography variant="subtitle1">{data.guardian_name}</Typography>
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Guardian Contact:
          </Typography>
          <Typography variant="subtitle1">{data.guardian_contact}</Typography>
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Reason for Bail Pending Appeal:
          </Typography>
          <Typography variant="subtitle1">{data.reason}</Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Status: <strong>{data.status}</strong>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}