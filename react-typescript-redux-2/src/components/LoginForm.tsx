import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { rules } from "../utils/rules";

const LoginForm: React.FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAction();
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const submit = () => {
    login(username, password);
  };
  return (
    <Form
      name="basic"
      onFinish={submit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
