import { Layout, Row, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const Navbar: React.FC = () => {
  const nav = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useAction();
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logout} key={2}>
                Выход
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => nav(RouteNames.LOGIN)} key={1}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
