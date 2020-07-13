import React, { useState } from "react";
import { Input, Menu, Dropdown, Button } from "antd";
import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";
import _ from "lodash";

const fakeTag = _.times(10, (num) => `Chapter ${num + 1}`);

const QuestionTag = () => {
  const [tag, setTag] = useState(fakeTag[0]);

  const [tagList, setTagList] = useState(fakeTag);

  const [newTag, setNewTag] = useState("");

  const [visible, setVisible] = useState(false);

  const handleSetNewTag = (e) => {
    setTagList((cur) => [...cur, newTag]);
    setNewTag("");
  };

  function handleMenuClick(e) {
    if (e.key !== "Add-tag") {
      setTag(e.key);
      handleVisibleChange(false);
      return;
    }
  }

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {tagList.map((tag) => (
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
          {tag} <DownOutlined onClick={handleSetNewTag} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default QuestionTag;
