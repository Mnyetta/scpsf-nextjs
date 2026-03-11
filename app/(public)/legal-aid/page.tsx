"use client";

import { Container, Paper, Typography, Box, Grid } from "@mui/material";
import LegalAidMinimap from "@/components/ui/LegalAidMinimap";

export default function LegalAidGuidePage() {
  // Sections for the minimap
  const legalAidSections = [
    { id: "overview", label: "Overview", description: "Introduction to legal aid" },
    { id: "eligibility", label: "Eligibility", description: "Who qualifies" },
    { id: "steps", label: "Steps to Request Aid", description: "Step-by-step guidance" },
    { id: "tips", label: "Tips & Advice", description: "Best practices" },
  ];

  return (
    <Container
      sx={{
        py: 10,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        background: "#f5f5f7",
      }}
    >
      {/* Minimap */}
      <LegalAidMinimap sections={legalAidSections} />

      {/* Overview Section */}
      <Paper
        id="overview"
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 3,
          maxWidth: 900,
          width: "100%",
          background: "linear-gradient(120deg, #ffffff, #eef2f7)",
          mb: 6,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: "#005bb5" }}>
          Legal Aid Overview
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, whiteSpace: "pre-line" }}>
          Legal aid ensures that all prisoners have access to justice, regardless of their financial situation. 
          This guide is for prisoners who are not beneficiaries of the Tanzanian government legal aid system.
        </Typography>
      </Paper>

      {/* Eligibility Section */}
      <Paper
        id="eligibility"
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 3,
          maxWidth: 900,
          width: "100%",
          background: "linear-gradient(120deg, #fefefe, #e6f0ff)",
          mb: 6,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: "#0071e3" }}>
          Who Can Request Legal Aid
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          This guidance is intended for prisoners who:
        </Typography>
        <ul>
          <li>Are not covered by government legal aid programs.</li>
          <li>Need assistance to file petitions, appeals, or case revisions.</li>
          <li>Have access to a guardian, family member, or legal representative to assist with submissions.</li>
        </ul>
      </Paper>

      {/* Steps Section */}
      <Paper
        id="steps"
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 3,
          maxWidth: 900,
          width: "100%",
          background: "linear-gradient(120deg, #ffffff, #f0f5ff)",
          mb: 6,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: "#005bb5" }}>
          Steps to Request Legal Aid
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, whiteSpace: "pre-line" }}>
          Follow these steps to request legal aid outside government services:
        </Typography>
        <ol>
          <li>Identify and record your prison name and prisoner number accurately.</li>
          <li>Engage your guardian or a trusted legal representative to assist with submissions.</li>
          <li>Keep track of your case number and court region.</li>
          <li>Prepare a clear and honest summary of your case.</li>
          <li>Understand the types of legal support: petitions, appeals, and case revisions.</li>
          <li>Maintain all documents and correspondence carefully for reference.</li>
        </ol>
      </Paper>

      {/* Tips Section */}
      <Paper
        id="tips"
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 3,
          maxWidth: 900,
          width: "100%",
          background: "linear-gradient(120deg, #fefefe, #e6f0ff)",
          mb: 6,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: "#0071e3" }}>
          Tips & Best Practices
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Keep copies of all submissions for your records.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Follow court instructions and deadlines precisely.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Seek assistance from family or legal aid volunteers if needed.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Use simple, clear language when writing case summaries.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Always note your tracking numbers and dates for reference.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Keep communication respectful and professional.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}