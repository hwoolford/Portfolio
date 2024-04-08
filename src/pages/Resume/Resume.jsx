import "../Resume/Resume.css"

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const myResumeUrl = 'https://drive.google.com/uc?export=download&id=1xswcAVGO-o6Jwi9ElT28pwEr_1_e5jaG';

  const handleDownloadResume = () => {
    window.open(myResumeUrl);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        id="basic-button"
        className="download-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: 'white' }}
      >
        Resume
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Paper sx={{ width: 250, maxWidth: "100%" }}>
          <MenuList>
            <MenuItem onClick={handleDownloadResume}>
              <ListItemIcon>
                <DownloadIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Download Resume</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Menu>
    </div>
  );
}
