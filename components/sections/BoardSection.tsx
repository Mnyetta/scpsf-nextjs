"use client";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";

const boardMembers = [
  {
    name: "EMMANUEL PAUL MNG’ARWE",
    role: "Board Member",
    bio: "Position in the NGO: BOARD MEMBER",
    image: "/founders/EMMANUEL PAUL.jpg",
  },
  {
    name: "WITNESS JULIUS SHOO",
    role: "Board Member",
    bio: "Position in the NGO: FOUNDER",
    image: "/founders/founder2.jpg",
  },
  {
    name: "MARIAGORETH MALIGA",
    role: "Board Member",
    bio: "Position in the NGO: FOUNDER AND BOARD MEMBER",
    image: "/founders/founder3.jpg",
  },
  {
    name: "JUMA DAVID MWITA",
    role: "Founder",
    bio: "Position in the NGO: BOARD MEMBER",
    image: "/founders/founder4.jpg",
  },
];

export default function BoardSection() {
  return (
    <Box
      sx={{
        py: 10,

        /* transition from gold → navy */
        background: `
        radial-gradient(circle at 2px 2px, rgba(212,175,55,0.25) 1px, transparent 1px),
        linear-gradient(180deg,#f4efe4,#eef1f8,#e3e8f4)
        `,
        backgroundSize: "26px 26px, cover",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box width="100%" maxWidth="1200px">

          {/* Premium Apple/Stripe Heading */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 7,
              letterSpacing: "0.6px",
              fontFamily: "'Montserrat', sans-serif",

              background:
                "linear-gradient(90deg,#1e3a8a,#d4af37,#1e3a8a)",
              backgroundSize: "200% auto",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

              textShadow: "0px 3px 10px rgba(0,0,0,0.15)",
            }}
          >
            Board of Trustees
          </Typography>

          {/* Premium Plate */}
          <Box
            sx={{
              px: { xs: 3, md: 6 },
              py: 6,

              background:
                "linear-gradient(145deg,#ffffff,#f4f6fb)",

              borderRadius: 3,

              boxShadow:
                "0 25px 55px rgba(0,0,0,0.08)",

              clipPath:
                "polygon(0 0, 94% 0, 100% 12%, 100% 100%, 0 100%)",
            }}
          >

            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="stretch"
            >
              {boardMembers.map((member, i) => (
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

                  <Card
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 3,

                      width: "100%",
                      maxWidth: 260,

                      background:
                        "linear-gradient(145deg,#ffffff,#f5f7fb)",

                      boxShadow:
                        "0 15px 35px rgba(0,0,0,0.08)",

                      transition: "all 0.35s ease",

                      "&:hover": {
                        transform: "translateY(-10px) scale(1.03)",
                        boxShadow:
                          "0 28px 55px rgba(0,0,0,0.18)",
                      },
                    }}
                  >

                    {/* Image */}
                    <Box
                      sx={{
                        width: "100%",
                        height: 220,
                        overflow: "hidden",
                        position: "relative",
                        "&:hover img": {
                          transform: "scale(1.12)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={member.image}
                        alt={member.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                        }}
                      />

                      {/* Hover Overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          bgcolor: "rgba(15,23,42,0.75)",

                          backdropFilter: "blur(3px)",

                          color: "#fff",
                          opacity: 0,

                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",

                          px: 2,
                          textAlign: "center",

                          transition: "opacity 0.35s ease",

                          "&:hover": {
                            opacity: 1,
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: "bold",
                            mb: 1,
                            color: "#d4af37",
                          }}
                        >
                          {member.role}
                        </Typography>

                        <Typography variant="body2">
                          {member.bio}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Name */}
                    <CardContent
                      sx={{
                        textAlign: "center",
                        py: 2.5,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: 15,
                          letterSpacing: "0.4px",
                          color: "#1e293b",
                        }}
                      >
                        {member.name}
                      </Typography>
                    </CardContent>

                  </Card>

                </Grid>
              ))}
            </Grid>

          </Box>

        </Box>
      </Container>
    </Box>
  );
}