import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import millify from "millify";
import { Card, Row, Col, Input } from "antd";

import { getCoins } from "../../redux/coins/action";

import { Loader } from "../Loader";

export const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, loading, error } = useSelector((state) => state.coins);
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  console.log("cryptos", cryptos);

  useEffect(() => {
    dispatch(getCoins(count));
  }, [dispatch, count]);

  useEffect(() => {
    const filterData = data?.data?.coins.filter((coin) =>
      coin?.name?.toLowerCase().includes(search?.toLocaleLowerCase())
    );
    console.log("filterData", filterData);
    setCryptos(filterData);
  }, [data?.data?.coins, search]);

  if (loading) return <Loader />;
  if (error) return "error...";
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search for the crypto"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-containers">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency?.rank}
          >
            <Link to={`/crypto/${currency?.uuid}`}>
              <Card
                title={`${currency?.rank}. ${currency?.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency?.iconUrl}
                    alt="cryptoImage"
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency?.price)}</p>
                <p>Market Cap: {millify(currency?.marketCap)}</p>
                <p>Daily Change: {millify(currency?.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
