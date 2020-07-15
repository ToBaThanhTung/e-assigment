import React, { useState } from "react";
import { Input, Menu, Dropdown, Button } from "antd";
import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";

const QuestionTag = ({
  questionTags,
  setQuestionTags,
  questionTag,
  setQuestionTag,
}) => {
  const [newTag, setNewTag] = useState("");

  const [visible, setVisible] = useState(false);

  const handleSetNewTag = (e) => {
    if (newTag.length === 0) return;
    setQuestionTags((cur) => [...cur, newTag]);
    setQuestionTag(newTag);
    setNewTag("");
  };

  function handleMenuClick(e) {
    if (e.key !== "Add-tag") {
      setQuestionTag(e.key);
      handleVisibleChange(false);
      return;
    }
  }

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {questionTags.map((tag) => (
        <Menu.Item key={tag}>{tag}</Menu.Item>
      ))}
      <Menu.Item key="Add-tag">
        <Input
          onChange={(e) => setNewTag(e.target.value)}
          value={newTag}
          suffix={<PlusCircleOutlined onClick={handleSetNewTag} />}
        />
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <Button>
          {questionTag} <DownOutlined onClick={handleSetNewTag} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default QuestionTag;
