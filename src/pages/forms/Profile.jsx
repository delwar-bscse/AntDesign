import { useState } from "react";
import { Form, Input, Button, Upload, ConfigProvider, message } from "antd";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { MdEdit } from "react-icons/md";

const theme = {
  components: {
    token: {
      // Global token
    },
    Input: {
      // Component token
    },
  },
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Md. Delwar Hossain",
    email: "delwar@gmail.com",
    contact: "01846875456",
  });
  const [previewImage, setPreviewImage] = useState("/public/food.png");

  const handleFileChange = ({ file }) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (values) => {
    // Handle form submission
    message.success("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex flex-col items-start justify-center p-4 pl-20 pt-40">
        <div className="rounded-xl p-6 w-full max-w-[800px]">
          {/* Profile Picture and Name */}
          <div className="flex justify-between items-end space-x-4">
            <div className="flex items-center gap-3">
              <div className="w-[140px] h-[140px] rounded-full border-2 mx-auto flex flex-col items-center relative">
                <div className="w-full h-full rounded-full">
                  <img
                    src={previewImage || "/food.jpg"}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="absolute cursor-pointer border border-gray-100 bg-black/40 w-7 h-7 p-2 rounded-lg text-center flex items-center justify-center bottom-6 right-6">
                  <Upload showUploadList={false} onChange={handleFileChange}>
                    <MdEdit className="text-white text-lg" />
                  </Upload>
                </div>
              </div>
              <h2 className="text-4xl font-semibold text-gray-800">{profile.name}</h2>
            </div>
            <div className="flex flex-col">
              <Button
                type="text"
                icon={<EditOutlined />}
                className="mt-2 border w-[150px]"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Update"}
              </Button>
            </div>
          </div>

          {/* Editable Form Fields */}
          <ConfigProvider theme={theme}>
            <Form
              name="profile-form"
              layout="vertical"
              initialValues={profile}
              onFinish={handleSubmit}
            >
              <div className="mt-6">
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[{ required: true, message: "Please input your full name!" }]}
                >
                  <Input
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="border rounded-lg p-2 h-[44px]"
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "The input is not a valid email!" },
                  ]}
                >
                  <Input
                    name="email"
                    type="email"
                    size="large"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="border rounded-lg p-2 h-[44px]"
                  />
                </Form.Item>

                <Form.Item
                  label="Contact Number"
                  name="contact"
                  rules={[{ required: true, message: "Please input your contact number!" }]}
                >
                  <Input
                    name="contact"
                    value={profile.contact}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="border rounded-lg p-2 h-[44px]"
                  />
                </Form.Item>
              </div>

              {/* Save Button */}
              {isEditing && (
                <div className="flex justify-end">
                  <Button
                    type="primary"
                    size="large"
                    icon={<SaveOutlined />}
                    className="mt-6 w-[200px]"
                    htmlType="submit"
                  >
                    Save
                  </Button>
                </div>
              )}
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default Profile;
