import React, { useState } from "react";
import draftToHtml from "draftjs-to-html";
import { Col, Row, Modal, Button, Divider } from "antd";
import parse from "html-react-parser";

function QuestionRender({ question }) {
  const [visible, setVisible] = useState(false);
  const { answer, content, tag, type } = question;

  const renderContent = parse(draftToHtml(content));
  const renderAns = () => {
    let render = [];
    for (let key in answer) {
      if (typeof parseInt(answer[key]) === "number") {
        render.push(parse(draftToHtml(answer[key])));
      }
    }
    return render;
  };
  return (
    <>
      <Button onClick={() => setVisible(true)}>QuestionRender</Button>
      <Modal
        title="Preview Question"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <Row>{renderContent}</Row>
        <Row>{renderAns()}</Row>
      </Modal>
    </>
  );
}

export default QuestionRender;
