"use client";

import { Box, Typography, Button } from "@mui/material";

interface Step {
  name: string;
  status: "pending" | "in-progress" | "completed";
}

interface StepProgressProps {
  steps: Step[];
  onMarkComplete: (index: number) => void;
}

export default function StepProgress({ steps, onMarkComplete }: StepProgressProps) {
  return (
    <Box>
      {steps.map((step, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            p: 2,
            borderRadius: 2,
            bgcolor:
              step.status === "completed"
                ? "#c8e6c9"
                : step.status === "in-progress"
                ? "#fff9c4"
                : "#eeeeee",
          }}
        >
          <Typography>{step.name}</Typography>
          {step.status !== "completed" && (
            <Button variant="contained" size="small" onClick={() => onMarkComplete(i)}>
              Mark Complete
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
}