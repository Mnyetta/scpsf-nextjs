"use client";

import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <Fab
      color="primary"
      size="small"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 999
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}