// MyDialog.js
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "../projectsdialog/projectfile.css";
import CloseIcon from "@mui/icons-material/Close";
import arte from "../../images/portfolio-img/arte-portfoliopic.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Project1 = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="portfolio-containerone" onClick={handleClickOpen}></div>
      <div className="portfolio-description">
        <h2 className="section-one-heading">ArteVestire</h2>
        <p>Website Design and Development</p>
      </div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ textAlign: "right" }}>Arte Vestire</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                flex=" 1 1 50%"
                p={1}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <img
                  src={arte}
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
                  Developed a versatile Shopify e-commerce platform offering a
                  wide range of t-shirt designs, ensuring a seamless shopping
                  experience with secure payment processing and efficient
                  inventory management.
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

export default Project1;
