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
          <Box display="flex" flexDirection="row">
            <Box
              flex=" 1 1 50%"
              p={1}
              display="flex"
              flexDirection="column"
              justify-content="space-between"
            >
              <img
                src={arte}
                alt="Description"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box
              flex="1 1 50%"
              p={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              margin-top="10%"
            >
              <Typography variant="body1" gutterBottom>
                ArteVestire is a comprehensive e-commerce platform I developed
                to provide users with a seamless shopping experience. The brand
                focuses on selling a diverse variety of t-shirts, not limited to
                a single design but offering numerous variations. Using Shopify,
                I created a user-friendly interface that ensures a smooth
                experience from browsing products to adding items to the cart
                and checking out. The payment processing is handled securely by
                the platform itself, so both users and the client can be assured
                of secure transactions. Shopify's features, including multiple
                payment options and efficient inventory management, further
                enhance the user experience and operational efficiency of the
                platform.
              </Typography>
            </Box>
          </Box>
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
