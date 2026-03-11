"use client";

import { Box, Typography, IconButton, Collapse } from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  image_path: string;
}

export default function OurWorkSection() {
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/work-items");
      const data = await res.json();
      setWorkItems(data);
    }
    fetchData();
  }, []);

  const toggleOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 2, md: 6 },
        background: "linear-gradient(135deg, #f0f3f8 0%, #e1e7ee 100%)",
        borderRadius: 4,
        boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 6,
          color: "#1e3a8a",
          textShadow: "2px 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        Our Work
      </Typography>

      <Box
        sx={{
          position: "relative",
          ml: "16px",
          pl: "75px",
          borderLeft: "4px solid #1e3a8a",
        }}
      >
        {workItems.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                mb: 6,
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                },
              }}
            >
              {/* Bullet */}
              <Box
                sx={{
                  position: "absolute",
                  left: "-10px",
                  top: "20px",
                  width: "20px",
                  height: "20px",
                  background: "linear-gradient(135deg, #1e3a8a, #E21B1B)",
                  borderRadius: "50%",
                  zIndex: 1,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
              />

              {/* Image */}
              <Box sx={{ flex: 1, maxWidth: 200 }}>
                <img
                  src={item.image_path}
                  alt={item.title}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>

              {/* Text + Expand */}
              <Box sx={{ flex: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    pr: 2,
                    py: 1,
                    borderRadius: 2,
                    background: isOpen
                      ? "linear-gradient(90deg, #f1f5f9, #e2e8f0)"
                      : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(90deg, #f1f5f9, #e2e8f0)",
                    },
                  }}
                  onClick={() => toggleOpen(idx)}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#1e3a8a",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <IconButton
                    size="small"
                    sx={{
                      transition: "all 0.3s ease",
                      color: "#E21B1B",
                      "&:hover": { color: "#1e3a8a" },
                    }}
                  >
                    {isOpen ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </Box>

                <Collapse in={isOpen}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, lineHeight: 1.6, transition: "all 0.3s ease" }}
                  >
                    {item.description}
                  </Typography>
                </Collapse>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}