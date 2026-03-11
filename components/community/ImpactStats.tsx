"use client"

import { Box, Card, Typography } from "@mui/material"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GavelIcon from '@mui/icons-material/Gavel'
import SchoolIcon from '@mui/icons-material/School'

export default function ImpactStats() {
  const stats = [
    {
      number: "500+",
      label: "Prisoners Assisted",
      icon: <EmojiEventsIcon sx={{ fontSize: 50, color: "#1e3a8a" }} />,
    },
    {
      number: "120+",
      label: "Appeals Prepared",
      icon: <GavelIcon sx={{ fontSize: 50, color: "#1e3a8a" }} />,
    },
    {
      number: "50+",
      label: "Law Students Trained",
      icon: <SchoolIcon sx={{ fontSize: 50, color: "#1e3a8a" }} />,
    },
  ]

  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 3, md: 6 },
        background: "#f6f8fb",
        display: "flex",
        justifyContent: "center",
        gap: { xs: 4, md: 6 },
        flexWrap: { xs: "wrap", md: "nowrap" }, // single row on desktop
      }}
    >
      {stats.map((stat, index) => (
        <Card
          key={index}
          elevation={8}
          sx={{
            width: { xs: "100%", sm: 280, md: 300 }, // fixed width for single row
            minHeight: 280,
            borderRadius: 5,
            textAlign: "center",
            py: 6,
            px: 3,
            background: "linear-gradient(145deg,#e0e7ff,#f6f8fb)",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: 3 }}>{stat.icon}</Box>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#1e3a8a", mb: 1 }}
          >
            {stat.number}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#475569", fontSize: 16, lineHeight: 1.6 }}
          >
            {stat.label}
          </Typography>
        </Card>
      ))}
    </Box>
  )
}