import React from "react";
import "./stats-card.css";
import { Row, Col, Card } from "antd";
import firstCardLogo from "../../assets/Bank.png";
import secondCardLogo from "../../assets/Bank_2.png";
import thirdCardLogo from "../../assets/Bank_3.png";

const StatsCards = () => {
  return (
    <>
      <Row>
        <Col>
          <Card
            style={{
              width: 264,
              height: 127.4,
              marginRight: 20,
            }}
          >
            <img className="" src={firstCardLogo} alt="Company Logo" />
            <h2>0</h2>
            <p>Total institutions</p>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              backgroundColor: "#38b2ac",
              color: "#fff",
              width: 264,
              height: 127.4,
              marginRight: 20,
            }}
          >
            <img className="" src={secondCardLogo} alt="Company Logo" />
            <h2 style={{ color: "#fff" }}>0</h2>
            <p>Active</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              backgroundColor: "#E35B64",
              color: "#fff",
              width: 264,
              height: 127.4,
            }}
          >
            <img className="" src={thirdCardLogo} alt="Company Logo" />
            <h2 style={{ color: "#fff" }}>0</h2>
            <p>Deactivated</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StatsCards;
