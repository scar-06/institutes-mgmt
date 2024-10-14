import React from "react";
import "./sidebar.css";
import { Menu } from "antd";
import { UserOutlined, BankOutlined, LogoutOutlined } from "@ant-design/icons";
import companyLogo from "../../assets/Hemisphere.png";
import dashboardLogo from "../../assets/Layout 4 blocks.png";
import systemUsersLogo from "../../assets/Layout 5 blocks.png";
import institutionsLogo from "../../assets/Bank_Green.png";
import approvalsLogo from "../../assets/Layout 4 blocks_3.png";
import logoutLogo from "../../assets/Layout 4 blocks_4.png";
import { PiBinoculars } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img className="sidebar-logo" src={companyLogo} alt="Company Logo" />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="custom-sidebar-menu"
        items={[
          {
            key: "1",
            icon: (
              <img
                className="sidebar-menu-icon"
                src={dashboardLogo}
                alt="Dashboard Logo"
              />
            ),
            label: "Dashboard",
          },
          { key: "2", label: "USERS", className: "sidebar-menu-section" },
          {
            key: "3",
            icon: (
              <img
                className="sidebar-menu-icon"
                src={systemUsersLogo}
                alt="System Users Logo"
              />
            ),
            label: "System Users",
          },
          {
            key: "4",
            icon: (
              <img
                className="sidebar-menu-icon"
                src={institutionsLogo}
                alt="Institutions Logo"
              />
            ),
            label: "Institutions",
          },
          { key: "5", label: "OPERATIONS", className: "sidebar-menu-section" },
          {
            key: "6",
            icon: (
              <img
                className="sidebar-menu-icon"
                src={approvalsLogo}
                alt="Approvals Logo"
              />
            ),
            label: "Approvals",
          },
          {
            key: "7",
            icon: <PiBinoculars className="sidebar-menu-icon" />,
            label: "Audit Trails",
          },
          { key: "8", label: "ACTIONS", className: "sidebar-menu-section" },
          {
            key: "9",
            icon: (
              <img
                className="sidebar-menu-icon"
                src={logoutLogo}
                alt="Approvals Logo"
              />
            ),
            label: "Logout",
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
