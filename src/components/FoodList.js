import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import foodsData from "../data/foods.json";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(foodsData);
  }, []);

  return (
    <Container>
      <Box py={6}>
        <Typography
          variant="h3"
          fontWeight={600}
          gutterBottom
          align="center"
          color="primary"
        >
          Browse Delicious Foods
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          gutterBottom
          sx={{ mb: 5 }}
        >
          Explore a handpicked collection of popular dishes across the globe 🍱
        </Typography>

        <Grid container spacing={4}>
          {foods.map((food) => (
            <Grid item xs={12} sm={6} md={4} key={food.id}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  transition: "0.3s",
                  borderRadius: 3,
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={food.image}
                  alt={food.name}
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {food.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Category: {food.category}
                  </Typography>
                </CardContent>
                <Box textAlign="center" pb={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/foods/${food.id}`}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default FoodList;
