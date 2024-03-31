"use client";

import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const ContactUsFrom = () => {
  return (
    <Form layout="vertical">
      <div className="grid grid-cols-2 gap-2">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </div>
      <Form.Item name="subject" label="Subject" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="message" label="Message">
        <TextArea />
      </Form.Item>
      <Button className="uppercase">Submit</Button>
    </Form>
  );
};

export default ContactUsFrom;
