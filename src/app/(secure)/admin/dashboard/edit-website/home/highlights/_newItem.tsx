"use client";

import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import getImageFromUpload from "@/helpers/getImageFromUpload";

const NewItem = ({
  onAdd,
  onError,
}: {
  onAdd?: () => void;
  onError?: () => void;
}) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const toggleModal = (newState: boolean) => () => {
    setModal(newState);
  };
  return (
    <>
      <Button onClick={toggleModal(true)}>Add New</Button>
      <Modal
        confirmLoading={loading}
        open={modal}
        okButtonProps={{ className: "bg-primary" }}
        onCancel={toggleModal(false)}
        onOk={async () => {
          form
            .validateFields()
            .then(async (values) => {
              setLoading(true);
              const fileData = Array.isArray(values.media)
                ? await getImageFromUpload(values.media[0])
                : undefined;
              const [file, fileName] = fileData || [undefined, undefined];
              const vals = new FormData();
              vals.append("description", values.description);
              if (file) {
                vals.append("media", file, fileName);
              } else {
                vals.append("media", values.media);
              }

              const res = await fetch("/api/edit-website/home/highlights", {
                method: "POST",
                body: vals,
              });

              if (onAdd) onAdd();
              setLoading(false);
              toggleModal(false)();
            })
            .catch((err) => {
              console.log(err);
              if (err?.errorFields && err.errorFields.length > 0) {
                return;
              }
              if (onError) onError();
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          className="pt-6"
          initialValues={{
            type: "image",
          }}
        >
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <TextArea placeholder="Description" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="media"
            label="Image"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              return e?.fileList;
            }}
          >
            <Upload
              listType="picture-card"
              maxCount={1}
              beforeUpload={() => false}
            >
              <button className="border rounded w-[100px] h-[100px]">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewItem;
