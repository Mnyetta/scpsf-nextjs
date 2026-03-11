"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import useSectionTracker from "./SectionTracker";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" },
];

export default function ScrollNavigator() {

  const [visible, setVisible] = useState(false);

  const activeSection = useSectionTracker(
    sections.map((s) => s.id)
  );

  useEffect(() => {

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        right: 15,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {sections.map((section) => {

        const active = activeSection === section.id;

        return (
          <Box
            key={section.id}
            onClick={() => scrollTo(section.id)}
            title={section.label}
            sx={{
              width: active ? 16 : 12,
              height: active ? 16 : 12,
              borderRadius: "50%",
              background: active ? "#38bdf8" : "#888",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
          />
        );

      })}
    </Box>
  );
}