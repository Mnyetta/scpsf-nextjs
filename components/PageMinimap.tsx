"use client";

import { Box, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
  description: string;
}

const sections: Section[] = [
  { id: "hero", label: "Hero Section", description: "Welcome & introduction" },
  { id: "preamble", label: "Preamble", description: "Foundation preamble text" },
  { id: "board", label: "Board Members", description: "Meet our board" },
  { id: "contact", label: "Contact", description: "Connect with us" },
];

export default function PageMinimap() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollPercent((scrollTop / docHeight) * 100);

      let current: string | null = null;
      for (let s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
          current = s.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: "fixed",
        right: 12,
        top: "10%",
        width: isHovered ? 180 : 12,
        height: "80%",
        background: "rgba(0,0,0,0.1)",
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "4px",
        zIndex: 9999,
        transition: "width 0.3s ease",
        overflow: "visible",
        "@media(max-width:768px)": { display: "none" }, // hide on mobile
      }}
    >
      {sections.map((s) => {
        const el = document.getElementById(s.id);
        const sectionHeight = el ? el.offsetHeight : 100;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const heightPercent = (sectionHeight / totalHeight) * 100;
        const isActive = activeSection === s.id;

        return (
          <Tooltip
            key={s.id}
            title={`${s.label}: ${s.description}`}
            placement="left"
            arrow
          >
            <Box
              onClick={() => scrollToSection(s.id)}
              sx={{
                position: "relative",
                height: `${heightPercent}%`,
                width: "100%",
                marginBottom: "2px",
                borderRadius: 3,
                background: isActive ? "#38bdf8" : "#888",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { transform: "scaleX(1.2)", background: "#06b6d4" },
              }}
            />
          </Tooltip>
        );
      })}

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          top: `${scrollPercent}%`,
          left: 0,
          width: "100%",
          height: 4,
          background: "#E21B1B",
          borderRadius: 2,
          transform: "translateY(-50%)",
          transition: "top 0.2s",
        }}
      />
    </Box>
  );
}