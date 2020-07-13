import React, { useState } from "react";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined } from "@ant-design/icons";

const QuestionType = () => {
  const [type, setType] = useState("EASY");

  function handleMenuClick(e) {
    setType(e.key);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="EASY">Easy</Menu.Item>
      <Menu.Item key="MEDIUM">Medium</Menu.Item>
      <Menu.Item key="HARD">Hard</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu}>
        <Button>
          {type} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default QuestionType;
