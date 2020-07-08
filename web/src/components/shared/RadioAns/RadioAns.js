import React, { useState } from "react";
import { Typography, Radio } from "antd";
import EditableText from "../EditableText";
import _ from "lodash";

const { Text } = Typography;

const radioStyle = {
  // display: "block",
  height: "30px",
  lineHeight: "30px",
};

function RadioAns() {
  const type = "create";
  const length = 4;
  const [answer, setAnswer] = useState(1);
  const listRadio = _.times(length, (num) => (
    <Radio style={radioStyle} value={num + 1}>
      <EditableText />
    </Radio>
  ));
  console.log(listRadio);
  return (
    <Radio.Group onChange={(e) => setAnswer(e.target.value)} value={answer}>
      {listRadio}
    </Radio.Group>
  );
}

export default RadioAns;
