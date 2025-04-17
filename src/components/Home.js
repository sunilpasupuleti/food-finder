import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />
      <Container sx={{ zIndex: 2 }}>
        <Stack spacing={3}>
          <Typography variant="h2" fontWeight={700}>
            Welcome to{" "}
            <span style={{ color: theme.palette.primary.main }}>
              Foodie Finder
            </span>
          </Typography>
          <Typography variant="h6" color="white">
            Craving something tasty? Browse the finest food items across
            cuisines!
          </Typography>
          <Button
            component={Link}
            to="/foods"
            variant="contained"
            size="large"
            sx={{ alignSelf: "center", width: "200px" }}
          >
            Browse Foods
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
