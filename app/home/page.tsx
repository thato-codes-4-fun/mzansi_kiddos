/* eslint-disable react/no-unescaped-entities */
import { Avatar, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const HomePage = () => {
  return (
    <div className=" w-full p-10" style={{ height: "100vh" }}>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Stories</h1>
      <p className="mb-10">children's Stories</p>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          {" "}
          <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="story image"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="The Lion and the Hare"
      description="Short storey about a lion who befriends a hare"
    />
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
