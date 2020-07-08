import React, { useState } from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

function EditableText() {
  const [text, setText] = useState("Input the answer here...");
  return (
    <div style={{marginLeft: '10px'}}>
      <Paragraph editable={{ onChange: (text) => setText(text) }}>
      {text}
    </Paragraph>
    </div>
  );
}

export default EditableText;
