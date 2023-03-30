import React from "react";
import Body from "../BodySection/Body";
import Sidebar from "../SidebarSection/Sidebar";
import "./adminproducts.css";

const AdminProducts = () => {
  return (
    <div className="body">
      <div className="containerAdmin">
        <Sidebar />
        <div className="adminProductContent"></div>
      </div>
    </div>
  );
};

export default AdminProducts;
