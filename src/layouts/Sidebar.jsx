import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router";
import { MdOutlineDashboard } from "react-icons/md";
import { ImTable } from "react-icons/im";
import { FaWpforms } from "react-icons/fa6";
import { AiOutlineBarChart } from "react-icons/ai";

const items = [
  {
    key: "sub1",
    label: <NavLink to="/">Dashboard</NavLink>,
    icon: <MdOutlineDashboard />
  },
  {
    key: "sub2",
    label: "Tables",
    icon: <ImTable />,
    children: [
      {
        key: "1",
        label: <NavLink to="/table1" >Table 01</NavLink>,
      },
      {
        key: "2",
        label:  <NavLink to="/table2" >Table 02</NavLink>,
      },
      {
        key: "3",
        label:  <NavLink to="/table3" >Table 03</NavLink>,
      },
      {
        key: "4",
        label:  <NavLink to="/table4" >Table 04</NavLink>,
      },
    ],
  },
  {
    key: "sub3",
    label: "Forms",
    icon: <FaWpforms />,
    children: [
      {
        key: "9",
        label: <NavLink to="/form1" >Form 01</NavLink>,
      },
      {
        key: "10",
        label: <NavLink to="/form2" >Form 02</NavLink>,
      },
      {
        key: "11",
        label: <NavLink to="/form3" >Form 03</NavLink>,
      },
      {
        key: "12",
        label: <NavLink to="/form4" >Form 04</NavLink>,
      },
    ],
  },
  {
    key: "sub4",
    label: "Charts",
    icon: <AiOutlineBarChart />,
    children: [
      {
        key: "5",
        label: "Chart 5",
      },
      {
        key: "6",
        label: "Chart 6",
      },
      {
        key: "sub5",
        label: "More Charts",
        children: [
          {
            key: "7",
            label: "Chart 7",
          },
          {
            key: "8",
            label: "Chart 8",
          },
        ],
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
