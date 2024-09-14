/* eslint-disable react/no-unescaped-entities */
import { Card, Col, Row } from "antd";
import React from "react";

const HomePage = () => {
  return (
    <div className=" w-full p-10" style={{ height: "100vh" }}>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Stories</h1>
      <p>children's Stories</p>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          {" "}
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={12} />

        <Col span={12} />
        <Col span={12} />
      </Row>
    </div>
  );
};

export default HomePage;
