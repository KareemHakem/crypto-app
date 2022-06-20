import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCryptoNews } from "../../redux/cryptoNewos/action";

import { Select, Row, Typography, Col, Avatar, Card } from "antd";

import moment from "moment";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

export const News = () => {
  const { cryptoNews, error, loading } = useSelector(
    (state) => state.coinsNews
  );

  console.log("cryptoNews", cryptoNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptoNews());
  }, [dispatch]);

  if (loading) return "loading....";
  if (error) return "error....";

  return (
    <Row gutter={[24, 24]}>
                              
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  className="news-images"
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="newsImage"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>{news.datePublished}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
