import React from "react";
import "../components/Institutions/Institutions";
import Sidebar from "../components/SideBar/sidebar";
import Navbar from "../components/NavBar/navbar";
import Institutions from "../components/Institutions/Institutions";
import { Layout } from "antd";

const { Sider, Content } = Layout;
const siderStyle = {
  // overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
  background: "#1E1E2D",
};

const InstitutionsPage = () => {
  return (
    <Layout>
      {/* Sidebar */}
      <Sider width={256} style={siderStyle}>
        <Sidebar />
      </Sider>

      {/* Main Content */}
      <Layout>
        {/* Navbar */}
        <Navbar />

        {/* Body Content */}
        <Content className="content">
          <Institutions />
        </Content>
      </Layout>
    </Layout>
  );
};

export default InstitutionsPage;
