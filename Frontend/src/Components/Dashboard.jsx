import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [feedback, setFeedback] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://feedback-dashboard-q45h.onrender.com/get")
      .then((res) => {
        console.log(res);
        setFeedback(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteFeedback = (id) => {
    axios
      .delete(`https://feedback-dashboard-q45h.onrender.com/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function update(val) {
    navigate("/addfeedback", { state: { val } });
  }

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#ECECEC",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          marginBottom: 4,
          color: "#37474F",
        }}
      >
         Dashboard
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {feedback.map((dat) => (
          <Grid item xs={12} sm={6} md={4} key={dat._id}>
            <Card
              sx={{
                padding: 3,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              <Typography variant="subtitle1" sx={{ color: "#777" }}>
                Course ID: {dat._id}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#333",
                  marginTop: 1,
                  marginBottom: 2,
                }}
              >
                {dat.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  marginBottom: 2,
                  lineHeight: 1.5,
                  color: "#555",
                }}
              >
                {dat.comments}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: "#007BFF",
                  marginBottom: 3,
                }}
              >
                Overall Rating: {dat.rating}/5
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => update(dat)}
                >
                  Update
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => deleteFeedback(dat._id)}
                >
                  Delete
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
