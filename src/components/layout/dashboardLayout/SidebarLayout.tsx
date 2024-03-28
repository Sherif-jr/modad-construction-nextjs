"use client";
import React, { useState } from "react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Layout, Menu, theme } from "antd";
import items from "./items";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useMessage from "antd/es/message/useMessage";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const menuItems: MenuItem[] = items.map((item) => ({
  label: <Link href={item.children ? "" : item.path} className="text-inherit hover:text-white">{item.title}</Link>,
  key: item.path,
  icon: item.icon,
  children: item.children?.map((subItem) => ({
    label: <Link href={subItem.path}>{subItem.title}</Link>,
    key: subItem.path,
    icon: subItem.icon,
  })),
}));

const SidebarLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const [message, messageContextHolder] = useMessage();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(pathName);
  const handleLogout = async () => {
    try {
      await fetch(`/api/account/logout`, {
        method: "POST",
      });
      router.push("/admin/auth/login");
    } catch (error) {
      message.error("Something went wrong");
    }
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {messageContextHolder}
      <Sider
        className="relative"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="sticky top-0"
          theme="dark"
          selectedKeys={[pathName]}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{ background: colorBgContainer }}
          className="flex items-center justify-end px-8 sticky top-0 z-50 shadow-sm"
        >
          <Dropdown
            menu={{
              items: [
                {
                  label: (
                    <div className="flex items-center" onClick={handleLogout}>
                      <LogoutOutlined />
                      Logout
                    </div>
                  ),
                  key: "logout",
                },
              ],
            }}
          >
            <div>
              <Button type="text" className="flex items-center">
                <UserOutlined />
                Admin
              </Button>
            </div>
          </Dropdown>
        </Header>
        <Content style={{ margin: 16 }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
