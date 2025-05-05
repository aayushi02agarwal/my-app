import React, { useState } from "react";
import { Menu, Button } from "antd";
import Icon from "@ant-design/icons";
// import './style.css';
//@ts-ignore
import { ReactComponent as logo } from "../../assets/logo.svg";
import { CustomIcon } from "./customIcon";
import { Link } from "react-scroll";
import type { MenuProps } from "antd";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";
import { reactive, watch, h } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import { HomeOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

function AppHeader(props: any) {
  const tabs = [
    {
      key: 0,
      label: "Home",
      icon: <HomeOutlined />,
    },
    {
      key: 1,
      label: "About Me",
      icon: <HomeOutlined />,
    },
    {
      key: 2,
      label: "Experience",
      icon: <HomeOutlined />,
    },
    {
      key: 3,
      label: "Projects",
      icon: <HomeOutlined />,
    },
    ,
    {
      key: 4,
      label: "Testimonials",
      icon: <HomeOutlined />,
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("testtt", `Tab clicked: ${e.key}`);
    props.handleTabChange(e.key);
  };

  const [state, setState] = useState({ collapsed: false });

  const toggleCollapsed = () => {
    setState({ collapsed: !state.collapsed });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <Menu
            mode="horizontal"
            selectedKeys={[props.selectedTab.toString()]}
            overflowedIndicator={<MenuOutlined />}
          >
            {tabs.map((tab: any) => (
              <Menu.Item key={tab.key}>
                <Link
                  activeClass="active"
                  to={tab.key}
                  spy={true}
                  smooth={true}
                  duration={100}
                  onClick={() => {
                    props.handleTabChange(tab.key);
                  }}
                >
                  {tab.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>

      {/* <div className="small-header">
        <Menu
          defaultSelectedKeys={[props.selectedTab.toString()]}
          mode="inline"
          theme="dark"
          inlineCollapsed={state.collapsed}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
              </span>
            }
          >
            {tabs.map((tab: any) => (
              <Menu.Item
                key={tab.key}
                onClick={() => {
                  props.handleTabChange(tab.key);
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </div> */}
    </>
  );
}

export default AppHeader;
