// MyDialog.js
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "../projectsdialog/projectfile.css";
import CloseIcon from "@mui/icons-material/Close";
import ZoomB from "../../images/portfolio-img/zoom-portfoliopic.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

const Project3 = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="portfolio-containerone" onClick={handleClickOpen}>
        {/* <img src={showcase} className="img-fluid test-image" alt="Showcase" /> */}
      </div>
      <div className="portfolio-description">
        <h2 className="section-one-heading">Zoom Bikes</h2>
        <p>Website Design and Development</p>
      </div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ textAlign: "right" }}>Zoom Bikes</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                flex=" 1 1 50%"
                p={1}
                display="flex"
                flexDirection="column"
                justify-content="space-between"
              >
                <img
                  src={ZoomB}
                  alt="Description"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                flex="1 1 50%"
                p={1}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                margin-top="10%"
              >
                <Typography variant="body1" gutterBottom>
                  This MERN stack project has been created as a replica of
                  e-commerce website for a side project. Github code of the
                  project can be found on the link below. Feel free to check it
                  out and send some suggestion my way. I will really appreciate
                  it.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Close
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Project3;
