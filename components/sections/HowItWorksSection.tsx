"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const howItWorksContent = [
  {
    number: "1",
    title: "VISION",
    description: `To be a Tanzania reputable, just, equitable, and a leading quality legal aid service provider assisting timely equal access to justice for prisoners who are not automatically covered by Government legal aid program/scheme.
    
- The Foundation shall conduct its functions without being determined by wealth, social status, or ability to pay.
- Enhance fair and timely appeal, revision, or review hearing in courts for prisoners not covered by automatic government legal aid.
- Contribute to Tanzania National Development Vision 2025-2050 by ensuring post-released prisoners are reformed and role models.
- Train practical lawyers in prisoners’ rights through internships for undergraduate and postgraduate law students.
- Fill gaps between automatic government legal aid beneficiaries and marginalized prisoners.`,
  },
  {
    number: "2",
    title: "MISSION",
    description: `Enhance and provide timely equal access to justice for prisoners who are without legal representation and/or not covered by automatic government legal aid service:

- Prepare memoranda, petitions, chamber summons & affidavits for revision/review.
- Provide timely and quality legal aid representation in appellate courts.
- Educate inmates about their legal rights, appeals, and review processes.
- Prepare strategic litigation for prisoners’ appeals, revisions, and reviews.`,
  },
  {
    number: "3",
    title: "OBJECTIVES",
    description: `- Promote timely equal access to justice for prisoners without automatic legal aid.
- Prepare review & revision applications, bail pending appeal, petitions for prisoners who cannot afford legal services.
- Offer legal counselling for appeals, revisions, and sentence reviews.
- Reduce prolonged detention and delays in appeal/revision/review.
- Promote legal awareness and equal rights education in prisons.
- Train and support prison-based paralegals and legal aid volunteers.
- Engage in research, policy analysis, and advocacy for criminal justice reforms.
- Support post-release legal guidance and reintegration into society.
- Ensure prisoners have new hope and are a positive influence in their communities.
- Coordinate with prison units in the Northern zone for eligibility verification.
- Provide practical training for undergraduate and postgraduate law interns.`,
  },
];

export default function HowItWorksSection() {
  return (
    <Box
      sx={{
        py: 10,
        background: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 1px),
                     linear-gradient(180deg,#fdfaf3,#f4efe4,#faf7f1)`,
        backgroundSize: "26px 26px, cover",
      }}
    >
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
        <Box width="100%" maxWidth="1200px">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 7,
              letterSpacing: "0.6px",
              fontFamily: "'Montserrat', sans-serif",
              background: "linear-gradient(90deg,#8b6f2a,#d4af37,#8b6f2a)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 3px 10px rgba(0,0,0,0.15)",
            }}
          >
            How It Works
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {howItWorksContent.map((step, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "left",
                    borderRadius: 3,
                    width: "100%",
                    maxWidth: 350,
                    minHeight: 300,
                    background: "linear-gradient(145deg,#ffffff,#f6f4ee)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#8b6f2a",
                      fontSize: 14,
                      mb: 1,
                      letterSpacing: "0.5px",
                    }}
                  >
                    STEP {step.number}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2, color: "#5b4820" }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 13, whiteSpace: "pre-line" }}
                  >
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}