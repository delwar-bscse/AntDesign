import { useState } from "react";
import {
  Table,
  Button,
  Dropdown,
  Space,
  DatePicker,
  Input,
  Radio,
  Modal,
} from "antd";
import {
  DownOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { tableData01 } from "../../datas/tableDatas01";

const Table01 = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchValue, setSearchValue] = useState(""); // Search input state
  const [selectedOffer, setSelectedOffer] = useState(null); // Offer filter state
  const [tableData, setTableData] = useState(tableData01);

  // State for Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOfferChange = (value) => {
    setSelectedOffer(value);
  };

  const filteredData = tableData
    .filter((item) => (selectedDate ? item.date === selectedDate : true))
    .filter((item) =>
      item.userName.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((item) => (selectedOffer ? item.offer === selectedOffer : true));

  const updateStatus = (key, newStatus) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, status: newStatus } : item
      )
    );
  };

  // Opens the modal and passes the row data
  const handleViewDetails = (record) => {
    setSelectedRow(record);
    setModalVisible(true);
  };

  // Closes the modal and clears selected row
  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedRow(null);
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "left",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
        <div style={{ padding: 8 }}>
          <DatePicker
            format="DD-MM-YYYY"
            onChange={(date, dateString) => {
              setSelectedKeys(dateString ? [dateString] : []);
              handleDateChange(date, dateString);
              confirm();
            }}
            placeholder="Select a date"
          />
        </div>
      ),
      onFilter: (value, record) => record.date === value,
      filterIcon: (filtered) => (
        <FilterOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
    },
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
      align: "center",
      sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber),
      multiple: 1, // Highest priority for multi-sort
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      align: "center",
    },
    {
      title: "Offer",
      dataIndex: "offer",
      key: "offer",
      align: "center",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
        <div style={{ padding: 8 }}>
          <Radio.Group
            value={selectedKeys[0] || ""}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              handleOfferChange(e.target.value);
              confirm();
            }}
          >
            <div style={{ display: "flex", flexDirection: "column"}}>
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
              <Radio value="">Reset</Radio>
            </div>
          </Radio.Group>
        </div>
      ),
      onFilter: (value, record) => record.offer === value,
      filterIcon: (filtered) => (
        <FilterOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
    },      
    {
      title: "Order Item & Qty",
      dataIndex: "orderItem",
      key: "orderItem",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (_, record) => <div>${record.price}</div>,
      sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price),
      multiple: 2, // Second priority for multi-sort
    },
    {
      title: "Service Charge",
      dataIndex: "serviceCharge",
      key: "serviceCharge",
      align: "center",
      render: (_, record) => <div>%{record.serviceCharge}</div>,
      sorter: (a, b) =>
        parseFloat(a.serviceCharge) - parseFloat(b.serviceCharge),
      multiple: 3, // Third priority for multi-sort
    },
    {
      title: "Status",
      key: "status",
      align: "center",
      render: (_, record) => (
        <Space>
          <Button type="default" onClick={() => handleViewDetails(record)}>
            View Details
          </Button>
          <Dropdown
            menu={{
              items: [
                {
                  key: "preparing",
                  label: "Preparing",
                  onClick: () => updateStatus(record.key, "Preparing"),
                },
                {
                  key: "completed",
                  label: "Completed",
                  onClick: () => updateStatus(record.key, "Completed"),
                },
                {
                  key: "cancelled",
                  label: "Cancelled",
                  onClick: () => updateStatus(record.key, "Cancelled"),
                },
              ],
            }}
          >
            <Button type="primary">
              {record.status} <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div className="w-[98%] max-w-[1400px] mx-auto py-10">
      {/* ---------------- Search & Filter Controls ---------------- */}
      <div className="flex justify-between mb-4">
        <Input
          size="large"
          placeholder="Search by User Name"
          value={searchValue}
          onChange={handleSearchChange}
          prefix={<SearchOutlined />}
          style={{ width: 500 }}
        />
      </div>

      {/* ---------------- Table ---------------- */}
      <Table columns={columns} dataSource={filteredData} bordered />

      {/* ---------------- Modal for Viewing Details ---------------- */}
      <Modal
        title=<h2 className="text-3xl font-bold text-gray-700">Order Details</h2>
        open={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedRow && (
          <div className="flex items-center py-10">
            <div className="w-[90%] mx-auto border-2 border-green-500 p-4 rounded-lg space-y-3">
              {/* Food image; fallback to a placeholder if no image URL is available */}
              <img
                src={selectedRow.image || "/food.png"}
                alt="Food"
                style={{ width: "100%", marginBottom: 16 }}
                className=" rounded-t-lg"              />
              <p>
                <strong>Date:</strong> {selectedRow.date}
              </p>
              <p>
                <strong>Order Number:</strong> {selectedRow.orderNumber}
              </p>
              <p>
                <strong>User Name:</strong> {selectedRow.userName}
              </p>
              <p>
                <strong>Location:</strong> {selectedRow.location}
              </p>
              <p>
                <strong>Offer:</strong> {selectedRow.offer}
              </p>
              <p>
                <strong>Order Item & Qty:</strong> {selectedRow.orderItem}
              </p>
              <p>
                <strong>Price:</strong> ${selectedRow.price}
              </p>
              <p>
                <strong>Service Charge:</strong> %{selectedRow.serviceCharge}
              </p>
              <p>
                <strong>Status:</strong> {selectedRow.status}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Table01;
