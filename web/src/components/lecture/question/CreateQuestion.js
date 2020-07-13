import React, { useState } from "react";
import Editor from "../../shared/Editor";
import { Typography, Col, Row, Checkbox, Divider, Button } from "antd";

import times from "lodash/times";
import NumericInput from "../../shared/NumericInput";
import QuestionType from "./QuestionType";
import QuestionTag from "./QuestionTag";

const { Title, Text } = Typography;

function CreateQuestion() {
  const [numOfAnswerField, setNumOfAnswerField] = useState("");

  const [questionData, setQuestionData] = useState(null);

  const [answerData, setAnswerData] = useState({ rightAnswer: 1 });
  const submitQuestion = () => {};
  const renderAnswerField = times(numOfAnswerField, (num) => (
    <>
      <Divider
        orientation="left"
        style={{
          color: "#333",
          fontWeight: "normal",
        }}
      >
        <Text type="warning">{`Question ${num + 1}`}</Text>
      </Divider>
      <Row gutter={[0, 32]}>
        <Text>This is the right answer </Text>
        <Checkbox
          checked={answerData.rightAnswer === num + 1}
          onChange={() =>
            setAnswerData((state) => ({ ...state, rightAnswer: num + 1 }))
          }
        />
      </Row>
      <Editor
        key={`answer-${num}`}
        getEditorState={(data) =>
          setAnswerData((state) => ({ ...state, [num + 1]: data }))
        }
      />
    </>
  ));

  return (
    <>
      <Title level={4}>Question</Title>
      <QuestionType />
      <QuestionTag />
      <Text type="secondary">Input your question here</Text>
      <Editor getEditorState={(state) => setQuestionData(state)} />

      <Row>
        <Col span={12}>
          <Title level={4}>How many Answer?</Title>
        </Col>
        <Col span={12}>
          <NumericInput
            style={{ width: "200px" }}
            value={numOfAnswerField}
            onChange={(e) => setNumOfAnswerField(e)}
          />
        </Col>
      </Row>

      {renderAnswerField}
      <Row justify="center3">
        <Button onClick={submitQuestion} type="primary">
          Create
        </Button>
      </Row>
    </>
  );
}

export default CreateQuestion;
