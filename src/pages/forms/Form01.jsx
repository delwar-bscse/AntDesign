import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  message,
  Checkbox,
  Upload
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

const Form01 = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    console.log("Form Submitted with Values:", values);
    message.success("Form successfully submitted!");
  };

  const normFile = (e) => {
    // e.file is the uploaded file
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const beforeUpload = (file) => {
    const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isImage) {
      message.error('You can only upload JPEG or PNG files!');
    }
    return isImage;
  };

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }

    setFileList(info.fileList);
  };

  return (
    <div className="my-10">
      <div className="w-full max-w-[600px] mx-auto border border-gray-400 p-10 rounded-lg">
        <h2 className="text-3xl text-center font-semibold py-5">
          Create an Account
        </h2>
        <Form
          form={form}
          name="create-an-account-form"
          onFinish={onFinish}
          initialValues={{
            gender: "male",
          }}
          style={{ width: "100%" }}
          layout="vertical"
        >
          {/* Full Name */}
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "The input is not a valid email!",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          {/* Password */}
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords that you entered do not match!")
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          {/* Gender */}
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Select placeholder="Select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          {/* Date of Birth */}
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true, message: "Please select your date of birth!" }]}
          >
            <DatePicker placeholder="Select your date of birth" style={{ width: "100%" }} />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
              {
                pattern: /^[0-9]{11}$/,
                message: "Phone number must be 11 digits!",
              },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          {/* Profile Image Upload */}
          <Form.Item
            name="profileImage"
            label="Profile Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Upload a profile image (JPEG, PNG)"
            rules={[
              {
                required: true,
                message: "Please upload a profile image!",
              },
            ]}
          >
            <Upload
              name="profileImage"
              listType="picture"
              beforeUpload={beforeUpload}
              maxCount={1} // Allow only 1 image upload
              fileList={fileList}
              onChange={handleChange}
              showUploadList={{ showRemoveIcon: true }}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          {/* Terms and Conditions */}
          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject("Should accept terms and conditions"),
              },
            ]}
          >
            <Checkbox>
              I have read and agree to the{" "}
              <a href="/terms">terms and conditions</a>
            </Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Form01;
