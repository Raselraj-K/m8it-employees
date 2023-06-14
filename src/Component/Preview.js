import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Link } from "react-router-dom";
function Preview() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div className="list_container">
          <h3 className="title">Employee Info</h3>
          <div className="preview_container_header">
            <h3 className="title">Karthikeyan E</h3>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Link to="/" className="back">
                Prev
              </Link>
              <span style={{ color: "#74788D" }}>Edit Info</span>
              <MoreVertOutlinedIcon />
            </span>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              className="left"
              style={{
                borderRight: "1px solid #CED4DA",
                width: "70%",
              }}
            >
              <h4 style={{ padding: "10px 0", color: "#495057" }}>
                Basic Info
              </h4>
              <div style={{ margin: "20px 20px 20px 0" }}>
                <div className="basic_info">
                  <div className="details-left">
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                      }}
                    >
                      <span className="label">Contact</span>
                      <span className="value">+91 7788998877</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                      }}
                    >
                      <span className="label">Mail ID</span>
                      <span className="value">sheronrasel@gmail.com</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                      }}
                    >
                      <span className="label">Gender</span>
                      <span className="value">Male</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                      }}
                    >
                      <span className="label">Aadhar ID</span>
                      <span className="value">7777 4444 5555</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                      }}
                    >
                      <span className="label">Address</span>
                      <span className="value" style={{ flexWrap: "wrap" }}>
                        41/32, AXR Street,Edamalaipatti pudur, Trichy
                      </span>
                    </div>
                  </div>
                  <div className="details_right">
                    <div style={{ display: "flex", gap: "15px" }}>
                      <span className="label">Father name</span>
                      <span className="value">Eswaran K</span>
                    </div>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <span className="label">Birth Date</span>
                      <span className="value">19/11/1997</span>
                    </div>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <span className="label">Marrital Statue</span>
                      <span className="value">Un-married</span>
                    </div>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <span className="label">Caste/Religion</span>
                      <span className="value">None</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bank_account_container">
                <h4>Bank Account</h4>
                <div
                  className="bank_account"
                  style={{ margin: "20px 20px 20px 0" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <span className="label">Name</span>
                    <span className="value">Karthikeyan E</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span className="label">Bank Name</span>
                    <span className="value">ICICI bank</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="image_frame">
                {/* <CollectionsIcon /> */}
              </div>
              <div className="image_details">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span className="label">Emp.ID</span>
                  <span className="value">#M8001k</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span className="label">Join Date</span>
                  <span className="value">24/Msay/2023</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span className="label">PF Number</span>
                  <span className="value">1587s45965</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span className="label">Blood Group</span>
                  <span className="value">B+ve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
