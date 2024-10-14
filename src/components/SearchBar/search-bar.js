import React from "react";
import "./search-bar.css";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Empty,
} from "antd";

const { Option } = Select;

const SearchBar = () => {
  return (
    <>
      {/* <div className="search-bar">
        <form className="search-form">
          <input type="text" placeholder="Search" className="search-input" />
          <select className="search-select">
            <option>Tran Type</option>
          </select>
          <select className="search-select">
            <option>Status</option>
          </select>
          <input type="date" className="search-date" />
          <input type="date" className="search-date" />
          <button className="search-button">Search</button>
        </form>
      </div> */}

      <Card style={{ marginTop: "20px", border: "none" }}>
        <Form layout="inline">
          <Form.Item>
            <Input placeholder="Search" />
          </Form.Item>
          <Form.Item>
            <Select defaultValue="Tran Type">
              <Option value="type1">Type 1</Option>
              <Option value="type2">Type 2</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Select defaultValue="Status">
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <DatePicker placeholder="Start Date" />
          </Form.Item>
          <Form.Item>
            <DatePicker placeholder="End Date" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{
                borderColor: "green",
                backgroundColor: "white",
                color: "green",
              }}
            >
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default SearchBar;
