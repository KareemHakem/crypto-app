import React from "react";
import Typography from "antd/lib/typography";
import { Space } from "antd";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        cryptoverse <br />
        All reights reserverd
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};
