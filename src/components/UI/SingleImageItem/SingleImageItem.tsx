import { faEllipsisVertical, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Dropdown,
  Image,
  MenuProps,
  Modal,
  Tag,
  message,
} from "antd";
import React, { FC } from "react";
interface Props {
  imgSrc: string;
  textFields: object;
  id: string;
  onActionSuccess?: () => void;
  onError?: () => void;
  deleteEndpoint: string;
  published?: boolean;
  showPublishedStatus?: boolean;
  settings?: MenuProps["items"];
}
const SingleImageItem: FC<Props> = ({
  imgSrc,
  textFields,
  id,
  onActionSuccess,
  onError,
  deleteEndpoint,
  settings,
  published,
  showPublishedStatus,
}) => {
  console.log(settings);
  const [modal, modalContxtHolder] = Modal.useModal();

  const handleDelete = () => {
    modal.warning({
      title: "Alert",
      content: "Are you sure you want to delete this item?",
      onOk: async () => {
        const res = await fetch(deleteEndpoint, {
          method: "DELETE",
          body: JSON.stringify({ id }),
        });
        if (res.status !== 200) {
          onError && onError();
        } else {
          onActionSuccess && onActionSuccess();
        }
      },
      okButtonProps: { className: "bg-primary" },
      closable: true,
    });
  };
  const youtube = imgSrc.includes("youtube");
  return (
    <Card bodyStyle={{ padding: 0 }} className="overflow-hidden">
      {modalContxtHolder}
      <div className="w-full relative">
        {showPublishedStatus && (
          <div className="absolute p-2 z-[1]">
            <Tag color={published ? "success" : "error"}>
              {published ? "Published" : "Unpublished"}
            </Tag>
          </div>
        )}
        {youtube ? (
          <iframe
            className="aspect-video"
            width="100%"
            src={imgSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        ) : (
          <Image src={imgSrc} alt="" className="aspect-video object-cover" />
        )}
      </div>
      <div className="p-4">
        {Object.entries(textFields).map(([key, value]) => (
          <div key={key}>
            <h3 className="font-bold">
              {`${key.charAt(0).toUpperCase()}${key.slice(1)}`}:
            </h3>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <div className=" p-4 border-t w-full flex justify-end items-center gap-x-4">
        <Button danger onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        {/* <Button>
          <FontAwesomeIcon icon={faCheck} />
        </Button> */}
        {settings && (
          <Dropdown trigger={["click"]} menu={{ items: settings }}>
            <Button>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </Button>
          </Dropdown>
        )}
      </div>
    </Card>
  );
};

export default SingleImageItem;
