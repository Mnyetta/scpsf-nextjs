"use client";

import { useState } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import StepProgress from "./StepProgress";
import toast from "react-hot-toast";

interface Step {
  name: string;
  status: "pending" | "in-progress" | "completed";
}

interface CaseCardProps {
  caseId: string;
  prisoner: string;
  steps: Step[];
}

export default function CaseCard({ caseId, prisoner, steps }: CaseCardProps) {
  const [currentSteps, setCurrentSteps] = useState(steps);

  const handleStepComplete = async (stepIndex: number) => {
    try {
      // API call to update step status in database
      const token = localStorage.getItem("token");
      if (!token) return toast.error("Not logged in");

      const res = await fetch("/api/lawyers/update-case-step", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ caseId, stepIndex }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(`✅ Step "${currentSteps[stepIndex].name}" marked complete`);

        // Update local state
        const updatedSteps = [...currentSteps];
        updatedSteps[stepIndex].status = "completed";
        setCurrentSteps(updatedSteps);
      } else {
        toast.error(data.error || "Failed to update step");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  return (
    <Card sx={{ mb: 3, p: 2, borderRadius: 3, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", color: "#1976d2" }}>
          {prisoner} | Case ID: {caseId}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <StepProgress steps={currentSteps} onMarkComplete={handleStepComplete} />
        </Box>
      </CardContent>
    </Card>
  );
}