import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#37474F", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "1px" }}
            >
              Admin Panel
            </Typography>
            <Link to={"/"} style={{ color: "white", textDecoration: "none", marginRight: "16px" }}>
              <Button color="inherit" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
                Dashboard
              </Button>
            </Link>

            <Link to={"/addfeedback"} style={{ color: "white", textDecoration: "none" }}>
              <Button color="inherit" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
                Add Feedback
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
