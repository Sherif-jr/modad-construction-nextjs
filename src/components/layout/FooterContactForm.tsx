"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Space } from "antd";

const FooterContactForm = () => {
  return (
    <Form layout="vertical">
      <Form.Item name="email" label="Subscribe to our newsletter">
        <Space.Compact>
          <Input placeholder="Email" />
          <Button htmlType="submit">
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Space.Compact>
      </Form.Item>
    </Form>
  );
};

export default FooterContactForm;
