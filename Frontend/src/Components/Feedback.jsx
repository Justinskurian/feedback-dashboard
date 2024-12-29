import { Box, Button, Grid, MenuItem, TextField, Typography, Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Feedback = () => {
  const location = useLocation();
  const [feedback, setFeedback] = useState({
    name: "",
    comments: "",
    rating: "",
  });

  useEffect(() => {
    if (location.state != null) {
      setFeedback({
        ...feedback,
        name: location.state.val.name,
        comments: location.state.val.comments,
        rating: location.state.val.rating,
      });
    } else {
      setFeedback({ ...feedback, name: "", comments: "", rating: "" });
    }
  }, []);

  const sendButton = () => {
    if (location.state != null) {
      axios
        .put(`https://feedback-dashboard-q45h.onrender.com/edit/` + location.state.val._id, feedback)
        .then((res) => {
          alert(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(`https://feedback-dashboard-q45h.onrender.com/add`, feedback)
        .then((res) => {
          alert(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ECECEC",
      }}
    >
      <Card
        sx={{
          padding: "30px",
          width: "600px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", marginBottom: "20px", color: "#37474F" }}
        >
          Feedback Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Course Name"
              variant="outlined"
              name="name"
              value={feedback.name}
              onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Feedback"
              multiline
              rows={4}
              name="feedback"
              value={feedback.comments}
              onChange={(e) => setFeedback({ ...feedback, comments: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              id="outlined-select-rating"
              label="Rating (1 to 5)"
              value={feedback.rating}
              onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
              helperText="Please select your rating"
            >
              {[1, 2, 3, 4, 5].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={sendButton}
              sx={{
                backgroundColor: "#37474F",
                "&:hover": { backgroundColor: "#37474F" },
                padding: "10px 0",
                fontSize: "16px",
              }}
            >
              Send Feedback
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Feedback;
