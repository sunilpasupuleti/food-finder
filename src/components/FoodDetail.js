import React from "react";
import { useParams, Link } from "react-router-dom";
import foodsData from "../data/foods.json";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

function FoodDetail() {
  const { id } = useParams();
  const food = foodsData.find((item) => item.id === parseInt(id));

  if (!food) {
    return (
      <Container>
        <Box py={5} textAlign="center">
          <Typography variant="h4" color="error" gutterBottom>
            Food item not found
          </Typography>
          <Button variant="contained" component={Link} to="/foods">
            Go Back
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box py={6}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={food.image}
                alt={food.name}
                sx={{ height: { xs: 250, md: 400 }, objectFit: "cover" }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" fontWeight={600} gutterBottom>
                {food.name}
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                fontWeight={500}
                gutterBottom
              >
                Category: {food.category}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {food.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/foods"
                sx={{ mt: 3 }}
              >
                ← Back to List
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default FoodDetail;
