"use client";

import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import PageMinimap from "@/components/PageMinimap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const boardMembers = [
  {
    name: "EMMANUEL PAUL MNG’ARWE",
    position: "BOARD MEMBER",
    dob: "25/12/1982",
    nationality: "TANZANIAN",
    nida: "19821225-11101-00002-24",
    gender: "MALE",
    marital: "MARRIED",
    education: "LL.M in Human Rights, Advocate Roll No.7809",
    image: "/founders/EMMANUEL PAUL.jpg",
  },
  {
    name: "JUMA DAVID MWITA",
    position: "BOARD MEMBER",
    dob: "22/08/1974",
    nationality: "TANZANIAN",
    nida: "19740822-23306-00001-26",
    gender: "MALE",
    marital: "MARRIED",
    education: "LL.M in International Laws, Advocate Roll No.8189",
    image: "/founders/Juma David Mwita.jpg",
  },
  {
    name: "MARIAGORETH MALIGA",
    position: "FOUNDER AND BOARD MEMBER",
    dob: "25/11/1986",
    nationality: "TANZANIAN",
    nida: "19861125-25113-00002-18",
    gender: "FEMALE",
    marital: "MARRIED",
    region: "KILIMANJARO MOSHI",
    phone: "+255621197454",
    email: "marymaliga73@gmail.com",
    occupation: "TEACHER",
    employer: "MOSHI MUNICIPAL DIRECTOR",
    image: "/founders/founder3.jpg",
  },
  {
    name: "WITNESS JULIUS SHOO",
    position: "FOUNDER",
    dob: "18/09/1975",
    nationality: "TANZANIAN",
    nida: "19750918-25101-00001-11",
    gender: "FEMALE",
    marital: "MARRIED",
    region: "KILIMANJARO MOSHI",
    phone: "+255767314161",
    occupation: "ACCOUNTANT",
    employer: "MOSHI URBAN WATER SUPPLY AND SEWAGE AUTHORITY",
    image: "/founders/founder2.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <Box sx={{ position: "relative", background: "#fff", color: "#000" }}>
      {/* Header */}
      <Box sx={{ width: "100%" }}>
        <Navbar />
      </Box>

      <PageMinimap />

      {/* Hero / Page Title */}
      <Box id="hero" sx={{ mb: 6, px: { xs: 2, md: 8 }, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#0f172a" }}>
          About Us
        </Typography>
      </Box>

      {/* Preamble Section */}
      <Box id="preamble" sx={{ mb: 6, px: { xs: 2, md: 8 } }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "1.4rem", md: "1.6rem" },
            letterSpacing: "1px",
            color: "#1e3a8a",
            background: "linear-gradient(90deg, #1e3a8a, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          PREAMBLE
        </Typography>

        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.8,
            color: "#334155",
            textShadow: "0px 1px 2px rgba(0,0,0,0.05)",
            background: "linear-gradient(to right, #f0f4f8, #ffffff)",
            padding: 2,
            borderRadius: 2,
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          Recognizing that equality of human beings and equal access to justice are fundamental human rights as provided by articles 12 (1) (2) 13 (1), (2) and 107A (2) (a) of the Constitution of the United Republic of Tanzania, Cap.2 Revised Edition, 2023.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.8,
            color: "#334155",
            textShadow: "0px 1px 2px rgba(0,0,0,0.05)",
            background: "linear-gradient(to right, #f0f4f8, #ffffff)",
            padding: 2,
            borderRadius: 2,
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          Acknowledging that prisoners like any other human being need a second chance for rejuvenation or rehabilitation.
          The Foundation deals with indigent, vulnerable, (children, women, sick, adult of extremely old age), and marginalized populations of prisoners who are not automatic beneficiaries of legal aid service offered by the Government owing the undenied facts that, as it stands, the automatic government legal aid service deals with accused and prisoners who are charged with capital offences such as murder, manslaughter and attempted murder among remained limited number of offences.
        </Typography>
      </Box>

      {/* Board Members Section */}
      <Box id="board" sx={{ mb: 6, px: { xs: 2, md: 8 } }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4, color: "#1e3a8a" }}>
          BOARD MEMBERS
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {boardMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
             <Card
  sx={{
    height: 388, // increased by 8px
    background: "linear-gradient(145deg, #ffffff, #f0f0f5)",
    borderRadius: 4,
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
    },
  }}
>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    height: 200,
                    objectFit: "contain",
                    borderRadius: "8px 8px 0 0",
                    background: "#e0e0e0",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5, color: "#0f172a" }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1, color: "#2563eb" }}>
                    {member.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      whiteSpace: "pre-line",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "#334155",
                      background: "#f8fafc",
                      padding: 1.5,
                      borderRadius: 1.5,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    {`DOB: ${member.dob}
Nationality: ${member.nationality}
NIDA: ${member.nida}
Gender: ${member.gender}
Marital Status: ${member.marital || ""}
${member.region ? `Region: ${member.region}` : ""}
${member.phone ? `Phone: ${member.phone}` : ""}
${member.email ? `Email: ${member.email}` : ""}
Education/Occupation: ${member.education || member.occupation}
Employer: ${member.employer || ""}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer full width */}
      <Box sx={{ width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
}
