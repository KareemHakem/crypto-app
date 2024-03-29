import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Row, Typography, Col, Statistic } from "antd";
import millify from "millify";

import { Cryptocurrencies } from "../Cryptocurrencies";
import { News } from "../News";
import { Loader } from "../Loader";

const { Title } = Typography;

const HomePage = () => {
  const { data, loading, error } = useSelector((state) => state.coins);

  const globalStats = data?.data?.stats;

  if (loading) return <Loader />;
  if (error) return "error.....";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats?.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={globalStats?.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h volume"
            value={globalStats?.total24hVolume}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats?.totalMarkets} />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/Cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
