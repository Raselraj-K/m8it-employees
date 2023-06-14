import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
function EmployeeList() {
  const handleChangePage = () => {
    return;
  };
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="list_container">
          <div className="container_header">
            <h3 className="title">Employee</h3>
            <span>
              <span
                style={{
                  color: "#495057",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Dashboard
              </span>{" "}
              /
              <span
                style={{
                  color: "#74788D",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {" "}
                Employee
              </span>
            </span>
          </div>
          <div className="add_employee">
            <div>
              <button
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Add Employee
              </button>
            </div>
            <div>
              <TuneOutlinedIcon style={{ cursor: "pointer" }} />
              <MoreVertOutlinedIcon style={{ cursor: "pointer" }} />
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableBody>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ color: "#343A40", fontWeight: "700" }}
                  >
                    {"SI.No"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      textAlign: "center",
                      color: "#343A40",
                      fontWeight: "700",
                    }}
                    align="right"
                  >
                    {"ID"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      textAlign: "center",
                      color: "#343A40",
                      fontWeight: "700",
                    }}
                    align="right"
                  >
                    {"Image"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      textAlign: "center",
                      color: "#343A40",
                      fontWeight: "700",
                    }}
                    align="right"
                  >
                    {"Name"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      textAlign: "center",
                      color: "#343A40",
                      fontWeight: "700",
                    }}
                    align="right"
                  >
                    {"Floor"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      textAlign: "center",
                      color: "#343A40",
                      fontWeight: "700",
                    }}
                    align="right"
                  >
                    {"Joined On"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      textAlign: "center",
                      color: "#343A40",
                      fontWeight: "700",
                    }}
                    align="right"
                  >
                    {"Status"}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {"01"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                    align="right"
                  >
                    {"#M8001k"}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="employee_image"></div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"Eabi"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"04"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"May 12, 2023 3:30 PM"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <button className="employee_status">Working</button>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <Link className="preview" to="/preview">
                      Preview
                    </Link>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {"02"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                    align="right"
                  >
                    {"#M8002k"}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="employee_image"></div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"Vagima"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"04"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"May 12, 2023 3:30 PM"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <button className="employee_status leave">Leave</button>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <Link className="preview" to="/preview">
                      Preview
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {"03"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                    align="right"
                  >
                    {"#M8003k"}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="employee_image"></div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"Sheron"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"04"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"May 12, 2023 3:30 PM"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <button className="employee_status">Working</button>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <Link className="preview" to="/preview">
                      Preview
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {"04"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                    align="right"
                  >
                    {"#M8004k"}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="employee_image"></div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"Raselraj"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"02"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"May 12, 2023 3:30 PM"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <button className="employee_status">Working</button>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <Link className="preview" to="/preview">
                      Preview
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {"05"}
                  </TableCell>
                  <TableCell
                    style={{
                      width: 160,
                      fontFamily: "'DM Sans', sans-serif",
                      textAlign: "center",
                    }}
                    align="right"
                  >
                    {"#M8005k"}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="employee_image"></div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"Karthikeyan"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"06"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    {"May 12, 2023 3:30 PM"}
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <button className="employee_status">Working</button>
                  </TableCell>
                  <TableCell
                    style={{ width: 160, textAlign: "center" }}
                    align="right"
                  >
                    <Link className="preview" to="/preview">
                      Preview
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                count={10}
                rowsPerPage={10}
                page={1}
                onPageChange={handleChangePage}
              />
              <TableFooter>
                <TableRow></TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
