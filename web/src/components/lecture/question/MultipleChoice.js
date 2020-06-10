import React, { useState } from "react";
import { Col, Row, Card, Radio, Input, Typography } from "antd";

const { Title } = Typography;

const question = {
  difficulty: "EASY",
  solution: "A",
  content: ""
};

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

function MultipleChoice() {
  const [answer, setAnswer] = useState(1);

  return (
    <>
      <Card>
        <Row>
          <Title level={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut
            tellus elementum sagittis vitae.{" "}
          </Title>
        </Row>
        <Row gutter={[0, 4]}>
          <Radio.Group onChange={e => setAnswer(e.target.value)} value={answer}>
            <Radio style={radioStyle} value={1}>
              Option A
            </Radio>
            <Radio style={radioStyle} value={2}>
              Option B
            </Radio>
            <Radio style={radioStyle} value={3}>
              Option C
            </Radio>
            <Radio style={radioStyle} value={4}>
              Option D
            </Radio>
          </Radio.Group>
        </Row>
      </Card>
    </>
  );
}

export default MultipleChoice;
