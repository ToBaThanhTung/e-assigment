import React, { useState } from "react";
import { Form, Input, Tooltip, Checkbox, Button, message } from "antd";

import { QuestionCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/react-hooks";
import Landing from "./Landing";
import { SIGN_UP, GET_AUTH_USER } from "../../graphql/user";
import { useHistory } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();

  console.log(props);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { fullName, username, email, password } = values;

    signup({
      variables: {
        input: {
          fullName,
          username,
          email,
          password,
        },
      },
    }).then(async ({ data }) => {
      localStorage.setItem("token", data.signUp.token);
      await props.refetch();
      history.push("/lecture");
    });
  };

  const [signup, { loading, error }] = useMutation(SIGN_UP, {
    async onCompleted({ signUp }) {
      localStorage.setItem("token", signUp.token);
      await props.refetch();
      history.push("/lecture");
    },
  });

  if (loading) {
    return <Landing>Loading...</Landing>;
  }

  if (error) {
    message.error(error.message);
  }

  return (
    <Landing>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{}}
        scrollToFirstError
      >
        <Form.Item
          name="username"
          label={
            <span>
              Username&nbsp;
              <Tooltip title="your identify">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fullName"
          label={
            <span>
              Full Name&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your full name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Pass"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Pass"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Should accept agreement"),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Landing>
  );
};

export default SignUp;
