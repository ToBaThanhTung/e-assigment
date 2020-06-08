import React from "react";
import { Table, Tag } from "antd";
import faker from "faker";
import _ from "lodash";

const Tags = _.times(9, (num) => `Chapter ${num}`);
const Difficulty = ["Hard", "Easy", "Medium"];

const dataSource = _.times(100, (num) => ({
  key: num,
  title: `Question ${num}`,
  difficulty: _.sample(Difficulty),
  tag: _.sampleSize(Tags, _.random(1, 3)),
}));

const columns = [
  {
    title: "#",
    dataIndex: "key",
    key: "#",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Difficulty",
    dataIndex: "difficulty",
    key: "difficulty",
    render: (difficulty) => {
      if (difficulty === "Medium")
        return <Tag color="yellow">{difficulty}</Tag>;
      if (difficulty === "Hard") return <Tag color="red">{difficulty}</Tag>;
      if (difficulty === "Easy") return <Tag color="green">{difficulty}</Tag>;
    },
  },
  {
    title: "Tag",
    dataIndex: "tag",
    key: "tag",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

function TestBank() {
  return <Table dataSource={dataSource} columns={columns} />;
}

export default TestBank;
