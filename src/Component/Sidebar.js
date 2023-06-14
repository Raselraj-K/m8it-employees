import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div id="side_bar">
      <div className="list">
        <GridViewOutlinedIcon />
        <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Dashboard</span>
      </div>
      <div className="list active">
        <PermIdentityOutlinedIcon />
        <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Employee</span>
        <ExpandMoreOutlinedIcon style={{ marginLeft: "50px" }} />
      </div>
      <div className="list sub">
        <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Inhouse</span>
      </div>
      <div className="list sub">
        <span style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Ex-employees
        </span>
      </div>
      <div className="list sub">
        <span style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Add Employees
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
