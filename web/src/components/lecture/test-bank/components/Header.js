import React from "react";
import { Row, Col, Typography, Input } from "antd";

const { Title } = Typography;
const { Search } = Input;

function Header() {
  return (
    <>
      <Row gutter={[0, 4]}>
        <Col span={8}>
          <Title level={2}>Test Bank</Title>
        </Col>
        <Col span={8} offset={8}>
          <Row justify="end">
            {" "}
            <Search
              placeholder="Something..."
              // onSearch={onSearch}
              style={{ width: 200 }}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Header;
