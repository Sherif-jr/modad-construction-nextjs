"use client";

import { faCheck, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Form, Input, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";

const MainCarouselItem: FC = () => {
  return (
    <div>
      <Form layout="vertical">
        <Card>
          <div className="pb-4 border-b w-full mb-4 flex justify-end gap-x-4">
            <Button danger>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          </div>
          <Form.Item name="title" label="Title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea placeholder="Description" />
          </Form.Item>
          <Form.Item>
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
        </Card>
      </Form>
    </div>
  );
};

export default MainCarouselItem;
