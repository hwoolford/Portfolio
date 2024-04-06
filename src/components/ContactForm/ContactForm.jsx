import "../ContactForm/ContactForm.css";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material/";
import SendIcon from "@mui/icons-material/Send";
import { validateEmail } from "../../utils/validateEmail";

const theme = createTheme({
  palette: {
    primary: {
      main: "#219ebc",
    },
    secondary: {
      main: "#ef0d8d",
    },
  },
});

export default function Contact2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Field is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      setErrors({
        name: name ? "" : "Please fill out this field",
        email: email ? "" : "Please fill out this field",
        message: message ? "" : "Please fill out this field",
      });
      return;
    }

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <>
      <h2 className="send-message">Send Me a Message</h2>
      <div className="form-container">
        <ThemeProvider theme={theme}>
          <Box
            container="true"
            noValidate
            autoComplete="off"
            sx={{ flexGrow: 1 }}
          >
            <form
              className="form"
              name="contact"
              onSubmit={handleFormSubmit}
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Grid container spacing={3} justifyContent="center">
                <Grid
                  item
                  xs={12}
                  md={12}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextField
                    variant="outlined"
                    required
                    className="inputBox"
                    name="name"
                    id="name"
                    label="Full Name"
                    color="primary"
                    focused
                    value={name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextField
                    variant="outlined"
                    required
                    className="inputBox"
                    name="email"
                    id="email"
                    label="Email Address"
                    color="primary"
                    focused
                    value={email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <TextField
                    variant="outlined"
                    required
                    className="inputBox"
                    name="message"
                    id="message"
                    label="Your Message"
                    color="primary"
                    focused
                    value={message}
                    multiline
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  {errors.message && (
                    <p className="error-text">{errors.message}</p>
                  )}
                </Grid>
                <div className="btn-container">
                  <Grid item xs={12} md={12} justifyContent="center" container>
                    <Button
                      variant="contained"
                      type="submit"
                      endIcon={<SendIcon style={{ fontSize: "2.75rem" }} />}
                    >
                      Send
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </form>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}
