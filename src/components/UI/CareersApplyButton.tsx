"use client";
import { Button, Form, Input, Modal, Upload, message } from "antd";
import { useState } from "react";

const CareersApplyButton = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Apply Now
      </Button>
      <Modal
        open={modalOpen}
        onCancel={() => {
          console.log("clicked");

          setModalOpen(false);
        }}
        classNames={{ body: "pt-6" }}
      >
        <Form layout="vertical">
          <Form.Item name="name">
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Upload
              beforeUpload={(file) => {
                console.log(file.type);
                if (file.type !== "application/pdf") {
                  message.error(`${file.name} is not a PDF file!`);
                  return Upload.LIST_IGNORE;
                } else {
                  return false;
                }
              }}
              accept=".pdf"
              maxCount={1}
            >
              <div className="w-full border rounded px-4 py-2">
                {" "}
                + Upload your CV
              </div>
            </Upload>
            <span className="text-xs text-gray-400">(max size 1mb)</span>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CareersApplyButton;
