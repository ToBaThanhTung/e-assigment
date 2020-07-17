import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from "../../graphql/user";
import Landing from "./Landing";
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { username: emailOrUsername, password } = values;
    signin({
      variables: {
        input: {
          emailOrUsername,
          password,
        },
      },
    });
  };

  const [signin, { loading, error }] = useMutation(SIGN_IN, {
    async onCompleted({ signIn }) {
      localStorage.setItem("token", signIn.token);
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
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/signup">register now!</a>
        </Form.Item>
      </Form>
    </Landing>
  );
};

export default SignIn;
