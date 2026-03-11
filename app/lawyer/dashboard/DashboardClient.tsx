"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Chip,
} from "@mui/material";

import Sidebar from "@/components/Sidebar";
import CaseCard from "@/components/CaseCard";
import PopupModal from "@/components/lawyer/PopupModal";

import toast, { Toaster } from "react-hot-toast";

export default function DashboardClient({
  cases,
  lawyerName,
  role,
}: {
  cases: any[];
  lawyerName: string;
  role: string;
}) {
  const [allCases, setAllCases] = useState(cases);
  const [search, setSearch] = useState("");
  const [selectedCase, setSelectedCase] = useState<any>(null);

  const [statusUpdate, setStatusUpdate] = useState("");
  const [closureReason, setClosureReason] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [lawyerNotes, setLawyerNotes] = useState("");

  useEffect(() => {
    setAllCases(cases);
  }, [cases]);

  /* ==============================
     CASE STEP UPDATE (COOKIE AUTH)
  ===============================*/
  const handleStepComplete = async (caseId: string, stepIndex: number) => {
    try {
      const res = await fetch("/api/lawyers/update-case-step", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ caseId, stepIndex }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Step updated");

        if (data.cases) {
          setAllCases(data.cases);
        }
      } else {
        toast.error("Failed to update step");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  /* ==============================
     DASHBOARD STATS
  ===============================*/

  const totalCases = allCases.length;
  const activeCases = allCases.filter((c) => c.status !== "COMPLETED").length;
  const submittedCases = allCases.filter((c) => c.status === "SUBMITTED").length;
  const closedCases = allCases.filter((c) => c.status === "COMPLETED").length;

  /* ==============================
     SEARCH FILTER
  ===============================*/

  const filteredCases = allCases.filter((c) =>
    c.prisoner_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#f6f8fb" }}>
      <Sidebar />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Toaster position="top-right" />

        {/* HEADER */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            ⚖ Lawyer Case Dashboard
          </Typography>

          <Typography color="text.secondary">
            {lawyerName} | {role}
          </Typography>
        </Box>

        {/* KPI SECTION */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Cases</Typography>
                <Typography variant="h4">{totalCases}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Active Cases</Typography>
                <Typography variant="h4">{activeCases}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Submitted</Typography>
                <Typography variant="h4">{submittedCases}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Closed</Typography>
                <Typography variant="h4">{closedCases}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* SEARCH BAR */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Search prisoner"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>

        {/* CASE LIST */}
        <Grid container spacing={3}>
          {filteredCases.length > 0 ? (
            filteredCases.map((c) => (
              <Grid item xs={12} md={6} key={c.id}>
                <Card
                  sx={{
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { transform: "scale(1.01)" },
                  }}
                  onClick={() => setSelectedCase(c)}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {c.prisoner_name}
                    </Typography>

                    <Typography color="text.secondary">
                      Case ID: {c.id}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                      {c.case_summary}
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      <Chip
                        label={c.status}
                        color={
                          c.status === "COMPLETED"
                            ? "success"
                            : c.status === "SUBMITTED"
                            ? "primary"
                            : "warning"
                        }
                      />
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <CaseCard
                        prisoner={c.prisoner_name}
                        caseNo={c.id}
                        onStepComplete={(stepIndex: number) =>
                          handleStepComplete(c.id, stepIndex)
                        }
                        steps={[
                          {
                            name: "Case Assignment",
                            status:
                              c.status === "ASSIGNED"
                                ? "completed"
                                : "pending",
                          },
                          {
                            name: "Case Analysis",
                            status:
                              c.status === "ANALYSIS"
                                ? "in-progress"
                                : "pending",
                          },
                          {
                            name: "Consultation",
                            status:
                              c.status === "CONSULTATION"
                                ? "in-progress"
                                : "pending",
                          },
                          {
                            name: "Preparation",
                            status:
                              c.status === "PREPARATION"
                                ? "in-progress"
                                : "pending",
                          },
                          {
                            name: "Court Submission",
                            status:
                              c.status === "SUBMITTED"
                                ? "completed"
                                : "pending",
                          },
                          {
                            name: "Follow-up",
                            status:
                              c.status === "FOLLOWUP"
                                ? "in-progress"
                                : "pending",
                          },
                          {
                            name: "Closure",
                            status:
                              c.status === "COMPLETED"
                                ? "completed"
                                : "pending",
                          },
                        ]}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No assigned cases</Typography>
          )}
        </Grid>

        {/* CASE UPDATE MODAL */}
        {selectedCase && (
          <PopupModal
            title={`Update Case: ${selectedCase.case_summary}`}
            isOpen={!!selectedCase}
            onClose={() => setSelectedCase(null)}
          >
            <select
              value={statusUpdate}
              onChange={(e) => setStatusUpdate(e.target.value)}
            >
              <option value="">Select document folder/state</option>

              <option value="pending-judgements">
                Pending Judgements
              </option>

              <option value="suspended-judgements">
                Suspended Judgements
              </option>

              <option value="completed-judgements">
                Completed Judgements
              </option>

              <option value="judgements">Judgements</option>
            </select>

            <textarea
              placeholder="Lawyer notes"
              value={lawyerNotes}
              onChange={(e) => setLawyerNotes(e.target.value)}
            />

            <input
              type="text"
              placeholder="Closure reason"
              value={closureReason}
              onChange={(e) => setClosureReason(e.target.value)}
            />

            <input
              type="file"
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
            />

            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() =>
                toast("Update logic not yet implemented")
              }
            >
              Submit
            </Button>
          </PopupModal>
        )}
      </Container>
    </Box>
  );
}