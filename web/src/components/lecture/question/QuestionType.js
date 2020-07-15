import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const QuestionType = ({ questionType, setQuestionType }) => {
  function handleMenuClick(e) {
    setQuestionType(e.key);
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
          {questionType} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default QuestionType;
