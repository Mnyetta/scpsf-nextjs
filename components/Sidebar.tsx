"use client";

import { Box, Typography, List, ListItemButton, ListItemText, Badge } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const menu = [
    { label: "Dashboard", path: "/lawyers" },
    { label: "My Cases", path: "/lawyers/cases" },
    { label: "Notifications", path: "/lawyers/notifications" },
    { label: "Reports", path: "/lawyers/reports" },
  ];

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#1976d2",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        pt: 4,
        px: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 4, fontWeight: "bold" }}>
        SCPSF Advocate
      </Typography>

      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.label}
            selected={pathname === item.path}
            sx={{
              color: "#fff",
              mb: 1,
              "&.Mui-selected": { bgcolor: "#1565c0" },
            }}
          >
            <ListItemText primary={item.label} />
            {item.label === "Notifications" && <Badge badgeContent={4} color="error" />}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}