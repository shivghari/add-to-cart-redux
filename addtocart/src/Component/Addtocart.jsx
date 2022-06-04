import React from "react";
import { Typography, Card, Row, Col, Input, Badge, Button, Affix } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import data from "./data.json";
import { useDispatch, useSelector } from "react-redux";
import { incr, decr, clearCart } from "../features/CartSlice";

const { Meta } = Card;
const { Title } = Typography;

function Addtocart() {
  console.log(data);
  const itemCount = useSelector((state) => state.cart.itemCount);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const itemList = useSelector((state) => state.cart.itemList);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%" }}>
      <div>
        <Affix offsetTop={0}>
          <div
            style={{
              position: "sticky",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              margin: "auto",
              paddingTop: "15px",
              backgroundColor: "#eae4e4",
              // borderBottom: "3px solid black",
            }}
          >
            <Title>Add to cart Page</Title>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Badge count={itemCount}>
                <ShoppingCartOutlined style={{ fontSize: "40px" }} />
              </Badge>
              <Title level={3} style={{ paddingLeft: "10px" }}>
                Total Amount : {totalAmount}
              </Title>
            </div>
          </div>
        </Affix>
      </div>
      <div>
        <Row
          style={{
            marginTop: "60px",
            // width: "90%",
            // margin: "auto",
            margin: "30px",
          }}
          gutter={[32, 32]}
        >
          {data?.data.map((item) => (
            <Col lg={6} sm={12} xs={24}>
              <Card
                style={{
                  padding: "20px",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <PlusOutlined
                    style={{ fontSize: "25px" }}
                    onClick={() => {
                      dispatch(
                        incr({
                          price: item.price,
                          name: item.name,
                          id: item.id,
                        })
                      );
                    }}
                  />,
                  <Col>
                    <Input defaultValue={0} value={itemList[item.id]} />
                  </Col>,
                  <MinusOutlined
                    style={{ fontSize: "25px" }}
                    onClick={() => {
                      dispatch(
                        decr({
                          price: item.price,
                          name: item.name,
                          id: item.id,
                        })
                      );
                    }}
                  />,
                ]}
                hoverable
              >
                <Meta title={item.name} description={item.desc} />
                <Title style={{ paddingTop: "20px" }} level={3}>
                  {item.price} ₹
                </Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Button
        type="primary"
        style={{ marginTop: "50px", marginBottom: "30px" }}
        onClick={() => {
          dispatch(clearCart());
        }}
        size="large"
      >
        Clear Cart
      </Button>
    </div>
  );
}

export default Addtocart;
