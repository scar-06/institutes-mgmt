import React, { useState } from "react";
import "./institutions.css";
import StatsCards from "../StatsCards/stats-card";
import SearchBar from "../SearchBar/search-bar";
import emptyLogo from "../../assets/No Files.png";
import backIcon from "../../assets/Back.png";
import {
  Row,
  Col,
  Card,
  Button,
  Tabs,
  Form,
  Input,
  Select,
  Steps,
  DatePicker,
  message,
} from "antd";
import InstitutionForm from "./institutions-form";

const { Step } = Steps;

const Institutions = () => {
  const [isAddingInstitution, setIsAddingInstitution] = useState(false); // controls view
  const [currentStep, setCurrentStep] = useState(0); // controls Step navigation

  const handleGoBack = () => {
    setCurrentStep(currentStep - 1);
    if (currentStep === 0) {
      setIsAddingInstitution(false);
      setCurrentStep(0);
    }
  };

  // Function to render the forms for each Step
  const renderForm = () => {
    return (
      <InstitutionForm
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        setIsAddingInstitution={setIsAddingInstitution}
      />
    );
  };

  return (
    <div className="institutions-container">
      {isAddingInstitution ? (
        <Card style={{ marginTop: "20px", textAlign: "center" }}>
          <Steps
            current={currentStep}
            style={{ marginBottom: "20px" }}
            className="custom-steps"
          >
            <Step title="Institution Details" />
            <Step title="Contact Person" />
            <Step title="Personalization" />
            <Step title="Transaction Permissions" />
          </Steps>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <img
              className=""
              src={backIcon}
              alt="Company Logo"
              onClick={handleGoBack}
              style={{ cursor: "pointer" }}
            />
          </div>
          {renderForm()}
        </Card>
      ) : (
        <>
          <StatsCards />
          <Card
            style={{ marginTop: "20px", textAlign: "center", height: "531px" }}
          >
            <h2 style={{ textAlign: "left" }}>Institutions</h2>
            <SearchBar />
            <img src={emptyLogo} alt="No Available Institutions" />
            <p>No Available Institutions Found</p>
            <Button
              type="primary"
              style={{ marginTop: "20px", backgroundColor: "green" }}
              onClick={() => setIsAddingInstitution(true)} // Switch to the form view
            >
              + Add New Institution
            </Button>
          </Card>
        </>
      )}
    </div>
  );
};

export default Institutions;
