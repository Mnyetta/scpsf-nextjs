"use client"

import Image from "next/image"
import { Box, Grid, Card, CardContent, Typography } from "@mui/material"

const programs = [
  {
    title: "Prisoners Legal Aid Program",
    description:
      "We assist prisoners who lack legal representation by preparing appeals, revision applications and court documents.",
    image: "/images/prison-program.jfif",
  },
  {
    title: "Prison Legal Education",
    description:
      "We educate inmates about their legal rights including the right to appeal, revision and review.",
    image: "/images/legal-education.webp",
  },
  {
    title: "Prison Paralegal Training",
    description:
      "Training prison-based paralegals and volunteers to assist inmates with legal procedures.",
    image: "/images/prison-paralegal.webp",
  },
  {
    title: "Post Release Reintegration",
    description:
      "Helping former prisoners reintegrate into society as peace keepers and role models.",
    image: "/images/reintegration.webp",
  },
]

export default function ProgramsGrid() {
  return (
    <Box sx={{ py: 12, px: { xs: 3, md: 10 }, background: "#fafafa" }}>
      
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 700, mb: 8 }}
      >
        Our Community Programs
      </Typography>

      <Grid container spacing={5}>
        {programs.map((program, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                }}
              />

              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  {program.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {program.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}