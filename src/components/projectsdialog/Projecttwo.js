// MyDialog.js
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "../projectsdialog/projectfile.css";
import CloseIcon from "@mui/icons-material/Close";
import qliq from "../../images/portfolio-img/qliquor-portfoliopic.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Project2 = () => {
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
        <h2 className="section-one-heading">Q Liquor </h2>
        <p>Website Design and Development</p>
      </div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle sx={{ textAlign: "right" }}>Q Liquors</DialogTitle>
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
                src={qliq}
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
                QLiquors is a local business shop running on the heart of
                dallas. Located in South Fort Worth. The newly opened business
                has been delivering customer satisfaction. The site has been
                created with Wordpress. As the site is not currently selling
                anything online and has only been selling in-store. Wordpress
                has been a perfect combination for the store. With its low cost
                features and hundreds of plugins to use from, I have created
                this site with the perfect requirement needed for a community
                based local store
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

export default Project2;
