import { Button, Row } from "antd";
import React from "react";
import Image from "next/image";

import logo from "@/assets/logo2.png";
const HeaderComponent = () => {
  return (
    <div className="" style={{}}>
      <Row className="flex justify-between">
        <div style={{ width: 100, height: 100 }}>
          <Image
            src={logo}
            width={500}
            height={500}
            alt="Picture of the MzansiKiddosLogo"
          />
        </div>
        <div className="flex space-x-10 items-center" style={{ height: 100 }}>
          <a>Home</a>
          <a>About</a>
          <a>Stories</a>
          <a>Contact Us</a>
          <Button
            style={{
              marginLeft: "100px",
              backgroundColor: "orange",
              color: "white",
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            Login / Sign Up
          </Button>
          {/* <p></p> */}
        </div>
      </Row>
    </div>
  );
};

export default HeaderComponent;
