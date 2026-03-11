"use client";

import Image from "next/image";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import EducationSearch from "@/components/EducationSearch"; // ✅ import

const lawyers = [
  {
    name: "Adv. MDIMI THOMAS ILANGA",
    role: "Position in the NGO: BOARD MEMBER,LLB.HOLDER",
    image: "/founders/ndimi thomas.jpg",
  },
  {
    name: "Adv. EMMANUEL PAUL MNG’ARWE",
    role: "Position in the NGO: BOARD MEMBER,LLM IN HUMAN RIGHTS LAW",
    image: "/founders/EMMANUEL PAUL.jpg",
  },
  {
    name: "Adv. JUMA DAVID MWITA",
    role: "Position in the NGO: BOARD MEMBER,LL.M in International Laws and Advocate with Roll ",
    image: "/founders/Juma David Mwita.jpg",
  },
];

export default function LawyersPage() {
  return (
    <Container sx={{ py: 10 }}>

      {/* HERO SECTION */}
      <Box id="hero" sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Legal Team
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: 850,
            mx: "auto",
            mb: 8,
            color: "text.secondary",
            lineHeight: 1.7,
          }}
        >
          SECOND CHANCE PRISONERS' SUPPORT FOUNDATION (SCPSF) works with
          dedicated lawyers committed to ensuring equal access to justice
          for prisoners not covered by government legal aid services.
        </Typography>
      </Box>

      {/* ABOUT / LAWYERS GRID SECTION */}
      <Box id="about" sx={{ mb: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {lawyers.map((lawyer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: 10,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 150,
                    height: 150,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #1976d2",
                    transition: "transform 0.5s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    width={150}
                    height={150}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </Box>

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 0.5,
                      color: "#1976d2",
                    }}
                  >
                    {lawyer.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic", mb: 1 }}
                  >
                    {lawyer.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* PROGRAMS / VISION SECTION */}
      <Box
        id="programs"
        sx={{
          mt: 12,
          px: { xs: 2, md: 0 },
          py: 6,
          background: "linear-gradient(135deg, #8B0000, #A00000)",
          position: "relative",
          overflow: "hidden",
          mb: 6,
          clipPath: "polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 0% 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "radial-gradient(#FFD700 2px, transparent 2px)",
            backgroundSize: "20px 20px",
            opacity: 0.2,
            zIndex: 0,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#FFD700",
              textShadow: "0 0 5px #000",
            }}
          >
            Vision
          </Typography>
          <Typography sx={{ mb: 2, lineHeight: 1.8, color: "#fff" }}>
            To be a Tanzania reputable, just, equitable, credible, and a leading high quality legal aid service provider assisting timely equal access to justice for prisoners who are not automatically covered by Government legal aid service, the indigent, marginalized, and vulnerable (children, women, extremely old age, sick) populations of prisoners.   
          </Typography>
          <Typography sx={{ mb: 2, lineHeight: 1.8, color: "#fff" }}>
            To fill the gaps between the beneficiaries of automatic Government legal aid service, and those who are marginalized by the law and the indigent populations of prisoners who cannot afford to meet costs for legal service.  
          </Typography>
        </Box>
      </Box>

      {/* IMPACT / MISSION SECTION */}
      <Box
        id="impact"
        sx={{
          mt: 0,
          px: { xs: 2, md: 0 },
          py: 6,
          background: "linear-gradient(135deg, #A00000, #B22222)",
          position: "relative",
          overflow: "hidden",
          mb: 6,
          clipPath: "polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 0% 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "radial-gradient(#FFD700 2px, transparent 2px)",
            backgroundSize: "20px 20px",
            opacity: 0.2,
            zIndex: 0,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#FFD700",
              textShadow: "0 0 5px #000",
            }}
          >
            Mission
          </Typography>
          <Typography sx={{ lineHeight: 1.8, color: "#fff" }}>
            To enhance and provide timely and high-quality equal access to justice for prisoners who are without legal representation, and or without automatic government legal aid service, the indigent, the marginalized and vulnerable populations of prisoners.  
          </Typography>
        </Box>
      </Box>

      {/* CONTACT / OBJECTIVES SECTION */}
      <Box
        id="contact"
        sx={{
          mt: 0,
          px: { xs: 2, md: 0 },
          py: 6,
          background: "linear-gradient(135deg, #B22222, #C41E3A)",
          position: "relative",
          overflow: "hidden",
          clipPath: "polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 0% 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "radial-gradient(#FFD700 2px, transparent 2px)",
            backgroundSize: "20px 20px",
            opacity: 0.2,
            zIndex: 0,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#FFD700",
              textShadow: "0 0 5px #000",
            }}
          >
            Key Objectives
          </Typography>
          <Box
            component="ul"
            sx={{
              pl: 0,
              lineHeight: 1.8,
              color: "#fff",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              "& li": {
                position: "relative",
                paddingLeft: 5,
                fontWeight: 500,
                fontSize: 16,
                "&::before": {
                  content: '"⚖️"',
                  position: "absolute",
                  left: 0,
                  top: "0.1em",
                  fontSize: 18,
                  color: "#FFD700",
                  textShadow: "0 0 4px rgba(0,0,0,0.5)",
                },
              },
            }}
          >
            <li>Provide pro bono legal services to prisoners who cannot afford legal representation.</li>
            <li>Prepare applications for review and revision including chamber summons and supporting affidavits.</li>
            <li>Assist prisoners in preparing applications for bail pending appeal.</li>
            <li>Draft and file memoranda of appeal and petitions of appeal for inmates.</li>
            <li>Offer free and high-quality legal aid services to prisoners not covered by the Government legal aid scheme.</li>
            <li>Provide legal representation for prisoners in deserving cases.</li>
            <li>Deliver legal education to inmates on their legal rights.</li>
            <li>Train prison-based paralegal officers on appeal, revision, and review procedures.</li>
            <li>Promote awareness among prisoners about their right to appeal, revision, and review.</li>
            <li>Develop and prepare strategic litigation for prisoners’ appeals, revisions, and reviews.</li>
          </Box>
        </Box>
      </Box>

      {/* EDUCATIONAL SEARCH / ELASTIC SEARCH SECTION */}
      <Box
        id="education"
        sx={{
          mt: 8,
          px: { xs: 2, md: 0 },
          py: 6,
          background: "linear-gradient(135deg, #4B0000, #6A0000)",
          borderRadius: "0 0 20px 0",
          position: "relative",
          overflow: "hidden",
          mb: 8,
          clipPath: "polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 0% 100%)",
        }}
      >
        <EducationSearch /> {/* ✅ fully integrated */}
      </Box>
    </Container>
  );
}

