import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

function Contact() {
  return (
    <Container>
      <Box py={6} display="flex" justifyContent="center">
        <Card
          sx={{
            maxWidth: 600,
            width: "100%",
            p: 3,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              fontWeight={600}
              gutterBottom
              align="center"
            >
              Contact Us
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ mb: 3 }}
            >
              Have a question, suggestion, or just want to say hello? Drop us a
              message below! ✉️
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                margin="normal"
                label="Your Name"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
              <Box textAlign="center" mt={3}>
                <Button type="submit" variant="contained" size="large">
                  Send Message
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Contact;
