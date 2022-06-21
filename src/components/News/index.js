import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCryptoNews } from "../../redux/cryptoNewos/action";

import { Select, Row, Typography, Col, Avatar, Card } from "antd";
// import moment from "moment";

import { Loader } from "../Loader";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

export const News = ({ simplified }) => {
  const [newsCategory, setNewCategory] = useState("cryptocurrency");
  const { cryptoNews, error, loading } = useSelector(
    (state) => state.coinsNews
  );
  const { data } = useSelector((state) => state.coins);

  const dispatch = useDispatch();
  const count = simplified ? 6 : 15;

  useEffect(() => {
    dispatch(getCryptoNews(count, newsCategory));
  }, [dispatch, count, newsCategory]);

  if (loading) return <Loader />;
  if (error) return "error....";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
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
