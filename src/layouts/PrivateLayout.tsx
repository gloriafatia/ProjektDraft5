import React, { useState, useContext } from "react";
import {
  PauseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  EuroCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { icons } from "antd/es/image/PreviewGroup";

const { Header, Sider, Content } = Layout;

interface Props {
  children?: React.ReactNode;
}

export const PrivateLayout = ({
  children,
  ...restProps
}: Props): JSX.Element => {
  const { user, setAuth }: any = useAuth();
  const logout = async () => {
    setAuth({});
    navigate("/LoginPage");
  };
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleUserButtonClick = () => {
    if (user) {
      setAuth({});
      navigate("/LoginPage");
    } else {
      navigate("/LoginPage");
    }
  };

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={({ key }) => {
            if (key === "logout") {
              handleUserButtonClick();
            } else {
              navigate(key);
            }
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "/",
              icon: <PauseOutlined />,
              label: "Dashboard",
            },
            {
              key: "/UserManagement",
              icon: <UsergroupAddOutlined />,
              label: "UserManagement",
            },
            {
              key: "/Transactions",
              icon: <EuroCircleOutlined />,
              label: "Transactions",
            },
          ]}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            style={{ width: 200, border: 0 }}
            icon={<LogoutOutlined />}
            onClick={handleUserButtonClick}
          >
            {user}
          </Button>
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, margin: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            height: "100%",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            overflow: "auto",
            maxHeight: "calc(100vh - 85px)",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
