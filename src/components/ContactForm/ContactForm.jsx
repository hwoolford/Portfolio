import "../ContactForm/ContactForm.css";

import { useState } from "react";
import {
  Box,
  Button,
  Grid,
} from "@mui/material/";
import SendIcon from "@mui/icons-material/Send";
import { validateEmail } from "../../utils/validateEmail";


export default function ContactForm() {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      return;
    }

    console.log(errors)

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  };


  return (
    <>
      <h2 className="send-message">Send Me a Message</h2>
      <div className="form-container">
          <Box
          container="true"
            noValidate
            autoComplete="off"
            sx={{ flexGrow: 1 }}
          > 
            <form className="form" name="contact" method="post" data-netlify="true" onSubmit={handleFormSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <Grid container spacing={3} justifyContent="center">
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  justifyContent="center"
                  alignItems="center"
                 > 
                  <input
                    type="text"
                    required
                    className="inputBox"
                    name="name"
                    id="name"
                    aria-label="Full Name"
                    placeholder="Full Name"
                    value={name}
                    onChange={handleInputChange}
                  ></input>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <input
                    type="email"
                    required
                    className="inputBox"
                    name="email"
                    id="email"
                    aria-label="Email Address"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleInputChange}
                  ></input>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <textarea
                    type="text"
                    required
                    className="inputBox"
                    name="message"
                    id="message"
                    aria-label="Your Message"
                    placeholder="Your Message"
                    value={message}
                    onChange={handleInputChange}
                  ></textarea>
                </Grid>
                <div className="button-container">
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
      </div>
    </>
  );
}
