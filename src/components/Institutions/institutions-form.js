import React, { useState } from "react";
import "./institutions.css";
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
  Checkbox,
  DatePicker,
  Modal,
  Upload,
  message,
} from "antd";
import firstInstituteBigLogo from "../../assets/Light Theme Template.png";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const { Step } = Steps;

const InstitutionForm = ({
  currentStep,
  setCurrentStep,
  setIsAddingInstitution,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [isCancelConfirmationVisible, setIsCancelConfirmationVisible] =
    useState(false);
  const [isCancelSuccessVisible, setIsCancelSuccessVisible] = useState(false);
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  // Form data state to capture each section's data
  const [formData, setFormData] = useState({
    institutionDetails: {},
    contactPerson: {},
    personalization: {},
    transactionPermissions: {},
  });

  // To handle form submission for each Step
  const onFormSubmit = (values) => {
    console.log("Form values: ", values);
    const updatedFormData = { ...formData };

    if (currentStep === 0) updatedFormData.institutionDetails = values;
    if (currentStep === 1) updatedFormData.contactPerson = values;
    if (currentStep === 2) updatedFormData.personalization = values;
    if (currentStep === 3) updatedFormData.transactionPermissions = values;

    setFormData(updatedFormData);

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      form.resetFields();
    } else {
      setIsConfirmationVisible(true);
    }
  };

  const handleFinalSubmit = () => {
    // Final submission logic here after confirmation
    setIsConfirmationVisible(false); // Hide confirmation modal
    setIsSuccessVisible(true); // Show success modal
    message.success("Institution added successfully!");
    setIsAddingInstitution(false); // Reset to the list view after submission
    setCurrentStep(0);
    form.resetFields();
    console.log("Final Data: ", formData);
  };

  const handleCancel = () => {
    setIsConfirmationVisible(false); // Close confirmation modal
  };

  const handleSuccessClose = () => {
    setIsSuccessVisible(false); // Close success modal
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please complete the required fields.");
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const plainOptions = [
    "Account Opening",
    "Airtime & Data",
    "Bill Payments",
    "Deposit",
    "Balance Inquiry",
    "Card Request",
    "USSD",
    "Virtual Account Transfers",
    "Withdrawal",
  ];

  const handleCancelClick = () => {
    setIsCancelConfirmationVisible(true);
  };

  const handleCancelConfirmation = () => {
    setIsCancelConfirmationVisible(false);
    setIsCancelSuccessVisible(true);
  };

  const handleCancelAbort = () => {
    setIsCancelConfirmationVisible(false);
  };

  const handleCancelSuccessClose = () => {
    setIsCancelSuccessVisible(false);
    setIsAddingInstitution(false);
    setCurrentStep(0);
    form.resetFields();
  };
  return (
    <>
      <Form
        form={form}
        onFinish={onFormSubmit}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        initialValues={formData[currentStep]}
      >
        {/* Render different forms based on the current Step */}
        {currentStep === 0 && (
          <>
            <h2 style={{ textAlign: "left" }}>Primary Information</h2>
            <br />
            <Form.Item
              label="Institution Name"
              name="institutionName"
              rules={[
                {
                  required: true,
                  message: "Please input the institution name!",
                },
              ]}
            >
              <Input style={{ width: "624px", float: "left" }} />
            </Form.Item>

            <Row gutter={16}>
              <Col>
                <Form.Item
                  label="Institution Email address"
                  name="institutionEmail"
                  rules={[
                    { required: true, message: "Please input the email!" },
                  ]}
                >
                  <Input style={{ width: "300px", float: "left" }} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label="Institution Phone number"
                  name="institutionPhone"
                  rules={[
                    {
                      required: true,
                      message: "Please input the phone number!",
                    },
                  ]}
                >
                  <Input style={{ width: "300px", float: "left" }} />
                </Form.Item>
              </Col>
            </Row>

            <h2 style={{ textAlign: "left" }}>Institution Location</h2>
            <br />
            <Row gutter={16}>
              <Col>
                <Form.Item
                  label="State"
                  name="state"
                  rules={[
                    {
                      required: true,
                      message: "Please specify the state!",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select a state"
                    optionFilterProp="label"
                    style={{ width: "300px", float: "left" }}
                    onChange={onChange}
                    onSearch={onSearch}
                    options={[
                      {
                        value: "Lagos",
                        label: "Lagos",
                      },
                      {
                        value: "Abuja",
                        label: "Abuja",
                      },
                      {
                        value: "Rivers",
                        label: "Rivers",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  label="LGA"
                  name="lga"
                  rules={[
                    { required: true, message: "Please specify the LGA!" },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select an LGA"
                    optionFilterProp="label"
                    style={{ width: "300px", float: "left" }}
                    onChange={onChange}
                    onSearch={onSearch}
                    options={[
                      {
                        value: "LGA 1",
                        label: "LGA 1",
                      },
                      {
                        value: "LGA 2",
                        label: "LGA 2",
                      },
                      {
                        value: "LGA 3",
                        label: "LGA 3",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please input the address!" }]}
            >
              <Input style={{ width: "624px", float: "left" }} />
            </Form.Item>
          </>
        )}
        {currentStep === 1 && (
          <>
            <h2 style={{ textAlign: "left" }}>Contact Admin Information</h2>
            <br />

            <Row gutter={16}>
              <Col>
                <Form.Item
                  label="First Name"
                  name="contactPersonFirstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input the contact person's first name!",
                    },
                  ]}
                >
                  <Input style={{ width: "300px", float: "left" }} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  label="Last Name"
                  name="contactPersonLastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input the contact person's last name!",
                    },
                  ]}
                >
                  <Input style={{ width: "300px", float: "left" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col>
                <Form.Item
                  label="Email address"
                  name="contactPersonEmail"
                  rules={[
                    {
                      required: true,
                      message: "Please input the contact person's email!",
                    },
                  ]}
                >
                  <Input style={{ width: "300px", float: "left" }} />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  label="Phone number"
                  name="contactPersonPhone"
                  rules={[
                    {
                      required: true,
                      message: "Please input the contact person's number!",
                    },
                  ]}
                >
                  <Input style={{ width: "300px", float: "left" }} />
                </Form.Item>
              </Col>
            </Row>
            <br />
            <br />
            <br />
          </>
        )}
        {currentStep === 2 && (
          <>
            <h2 style={{ textAlign: "left" }}>
              Customize Institution Experience
            </h2>
            <br />
            <Form.Item
              label="Upload institution Logo"
              name="institutionLogo"
              rules={[{ required: false, message: "Please upload the logo!" }]}
            >
              <div style={{ float: "left" }}>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>

              <img
                style={{ float: "right" }}
                src={firstInstituteBigLogo}
                alt="Company Logo"
              />
            </Form.Item>
          </>
        )}
        {currentStep === 3 && (
          <>
            <h2 style={{ textAlign: "left" }}>Transaction Permissions</h2>
            <Form.Item
              label="Select transactions this institution can access"
              name="transactionPermissions"
              rules={[
                { required: true, message: "Please set the permissions!" },
              ]}
            >
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
                options={plainOptions}
                defaultValue={["Account Opening"]}
                onChange={onChange}
              />
            </Form.Item>
          </>
        )}

        <Row gutter={16}>
          <Col>
            <Form.Item>
              <Button
                type="primary"
                htmlType="cancel"
                style={{ backgroundColor: "white", color: "black" }}
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {currentStep === 3 ? "Submit" : "Continue"}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {/* Confirmation Modal */}
      <Modal
        title="Create Institution"
        open={isConfirmationVisible}
        onOk={handleFinalSubmit}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No, Cancel"
      >
        <p>
          An institution account will be created upon completion of this
          process. Do you really want to proceed?
        </p>
      </Modal>

      {/* Success Modal */}
      <Modal
        title="Account Created Successful"
        open={isSuccessVisible}
        onOk={handleSuccessClose}
        cancelButtonProps={{ style: { display: "none" } }} // Hide cancel button
        okText="OK"
      >
        <p>
          The credentials for the selected account have been successfully
          created and sent to the associated email address.
        </p>
      </Modal>

      {/* Cancel Confirmation Modal */}
      <Modal
        title="Cancel Process"
        open={isCancelConfirmationVisible}
        onOk={handleCancelConfirmation}
        onCancel={handleCancelAbort}
        okText="Yes"
        cancelText="No, Continue"
      >
        <p>Are you sure you want to cancel adding a new institution?</p>
      </Modal>

      {/* Cancel Success Modal */}
      <Modal
        title="Process Cancelled"
        open={isCancelSuccessVisible}
        onOk={handleCancelSuccessClose}
        cancelButtonProps={{ style: { display: "none" } }}
        okText="OK"
      >
        <p>You have successfully cancelled the process.</p>
      </Modal>
    </>
  );
};

export default InstitutionForm;
