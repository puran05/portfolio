// MyDialog.js
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import img1 from "../images/img1.png";
import Icon from "@mui/material/Icon";
import "./css-styles/dialog.css";
import CloseIcon from "@mui/icons-material/Close";
import img2 from "../images/img2.png";
import showcase from "../images/showcase-img.png";

const MyDialog = () => {
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
        <h2 className="section-one-heading">ArteVestire </h2>
        <p>Website Design and Development</p>
      </div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a paragraph inside the dialog window.
          </DialogContentText>
          <img
            src={showcase}
            alt="Description"
            style={{ width: "100%", height: "auto" }}
          />
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

export default MyDialog;
