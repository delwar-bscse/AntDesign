import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router";
import { MdOutlineDashboard } from "react-icons/md";

const items = [
  {
    key: "sub1",
    label: <NavLink to="/">Dashboard</NavLink>,
    icon: <MdOutlineDashboard />
  },
  {
    key: "sub2",
    label: "Tables",
    icon: <MailOutlined />,
    children: [
      {
        key: "1",
        label: <NavLink to="/table1" >Table 1</NavLink>,
      },
      {
        key: "2",
        label:  <NavLink to="/table2" >Table 1</NavLink>,
      },
      {
        key: "3",
        label:  <NavLink to="/table3" >Table 1</NavLink>,
      },
      {
        key: "4",
        label:  <NavLink to="/table4" >Table 1</NavLink>,
      },
    ],
  },
  {
    key: "sub3",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "sub4",
        label: "Submenu",
        children: [
          {
            key: "7",
            label: "Option 7",
          },
          {
            key: "8",
            label: "Option 8",
          },
        ],
      },
    ],
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
];

const Sidebar = () => {
  const [theme, setTheme] = useState("light");
  const [current, setCurrent] = useState("1");
  
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <div className="text-6xl uppercase font-bold text-center py-20 bg-white text-gray-700">Logo</div>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
