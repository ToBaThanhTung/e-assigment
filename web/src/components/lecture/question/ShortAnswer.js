import React from "react";
import { Col, Row, Card, Input, Typography } from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;

function ShortAnswer() {
  return (
    <Card>
      <Row>
        <Title level={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut
          tellus elementum sagittis vitae.{" "}
        </Title>
      </Row>
      <Row gutter={[0, 8]}>
        <Text type="secondary">Your answer: </Text>
      </Row>
      <Row gutter={[0, 4]}>
        <TextArea rows={4} />
      </Row>
    </Card>
  );
}

export default ShortAnswer;
