import React from "react";
import { Typography, Card, Row, Col, Input, Badge, Button } from "antd";
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
  const dispatch = useDispatch();
  return (
    <div style={{ height: "779px", width: "100%" }}>
      <div>
        <br />
        <Title>
          Add to cart Page
          <Badge count={itemCount}>
            <ShoppingCartOutlined style={{ fontSize: "40px" }} />
          </Badge>
        </Title>
        <Title level={3}>Total Amount : {totalAmount}</Title>
      </div>
      <div>
        <Row style={{ marginLeft: "25px", marginTop: "60px" }}>
          {data?.data.map((item) => (
            <Col lg={6}>
              <Card
                style={{
                  width: 300,
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
                    <Input defaultValue={0} />
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
        style={{ marginTop: "50px" }}
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
