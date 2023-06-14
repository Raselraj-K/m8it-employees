import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Header() {
  const iconColor = { color: "#fff" };
  return (
    <div id="header">
      <div className="title">
        <span className="title_name">App Title</span>
      </div>
      <div className="header_right">
        <SearchIcon style={iconColor} />
        <NotificationsNoneSharpIcon style={iconColor} />
        <SettingsOutlinedIcon style={iconColor} />
        <img
          className="profile_img"
          src="https://lh3.googleusercontent.com/ogw/AOLn63G_za-DTqZRehnaViBROuGguI69GAY7Q1ebdLULJw=s32-c-mo"
          alt=""
        />
        <span className="super_admin">Super admin</span>
      </div>
    </div>
  );
}

export default Header;
