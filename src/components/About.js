import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  useTheme,
} from "@mui/material";

function About() {
  const theme = useTheme();

  return (
    <Container>
      <Box py={6}>
        <Typography variant="h3" fontWeight={600} gutterBottom align="center">
          About Foodie Finder
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          Your digital companion for exploring delicious cuisines across the
          globe 🍽️
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={500} gutterBottom>
              🎯 Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Foodie Finder was created as a React Single Page Application to
              provide a fast, smooth, and engaging way for users to explore food
              items from different categories. Whether you're a food lover or
              just curious, this app brings a clean UI and dynamic routing to
              your fingertips.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={500} gutterBottom>
              💡 Why We Built This
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This project was developed as a collaborative effort by a team of
              four students using React and Material UI. The goal was not just
              to build a working app, but to design a visually appealing,
              accessible, and fully functional user experience that leverages
              real-world development practices.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        <Typography variant="h6" color="text.secondary" align="center">
          Built with ❤️ using React, React Router, and Material UI.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
