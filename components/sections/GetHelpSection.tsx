"use client";

import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { Gavel, Description, Psychology, Groups } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const helpItems = [
  {
    title: "Appeal Filing",
    description: "Petition / Memorandum filed to request judicial intervention. Example: A prisoner filing an appeal to challenge a magistrate's decision.",
    icon: <Gavel sx={{ fontSize: 40 }} />,
  },
  {
    title: "Revision & Review",
    description: "Aplication for revision to review lower court orders for errors of law or procedure. Example: Filing revision in High Court after Magistrate Court's judgment.",
    icon: <Description sx={{ fontSize: 40 }} />,
  },
  {
    title: "Legal Counselling",
    description: "Guidance to inmates on legal remedies and rights. Example: Advising on available appeals and petitions under High Court procedures.",
    icon: <Psychology sx={{ fontSize: 40 }} />,
  },
  {
    title: "Volunteer Lawyers",
    description:
      "Our network of lawyers represent prisoners in appellate courts.",
    icon: <Groups sx={{ fontSize: 40 }} />,
  },
];

export default function GetHelpSection() {
  const router = useRouter();

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 12,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box width="100%" maxWidth="1200px">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 5,
            letterSpacing: "0.6px",
            fontFamily: "'Montserrat', sans-serif",
            background:
              "linear-gradient(90deg,#1e3a8a,#b91c1c,#1e3a8a)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 3px 10px rgba(0,0,0,0.18)",
            position: "relative",
          }}
        >
          Get Legal Help
        </Typography>

        {/* Premium Adobe-style Background Plate */}
        <Box
          sx={{
            position: "relative",
            px: { xs: 3, md: 6 },
            py: 6,
            background: `
              radial-gradient(circle at 2px 2px, rgba(212,175,55,0.35) 1px, transparent 1px),
              linear-gradient(135deg,#7a0f0f,#b91c1c,#7a0f0f)
            `,
            backgroundSize: "22px 22px, cover",
            borderRadius: "10px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            clipPath:
              "polygon(0 0, 92% 0, 100% 14%, 100% 100%, 0 100%)",
          }}
        >
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {helpItems.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  onClick={() => router.push("/legal-aid")}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    width: "100%",
                    maxWidth: 260,
                    cursor: "pointer",
                    borderRadius: 3,
                    background: "linear-gradient(145deg,#f9f9fb,#e6ebf3)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                    transition: "all 0.5s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 25px 45px rgba(0,0,0,0.15)",
                      background: "linear-gradient(145deg,#e1e7f0,#d0d8e3)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: "#fff",
                      mb: 2,
                      width: 60,
                      height: 60,
                      mx: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#E21B1B,#1e3a8a)",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      color: "#1e3a8a",
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#E21B1B" },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      height: "0px",
                      overflow: "hidden",
                      opacity: 0,
                      transition: "all 0.5s ease",
                      pointerEvents: "none",
                      ".MuiPaper-root:hover &": {
                        height: "auto",
                        opacity: 1,
                        pointerEvents: "auto",
                      },
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}