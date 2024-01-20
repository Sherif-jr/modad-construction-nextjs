"use client";

import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Card, Image, message } from "antd";
import NewItem from "./_newItem";
interface CorpResp {
  media: string[];
  _id: string;
  title: string;
  description: string;
}
const CorpRes = () => {
  const [data, setData] = useState<CorpResp>({} as CorpResp);
  const [loading, setLoading] = useState(false);
  const [notification, notificationHolder] = message.useMessage();
  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URI}api/edit-website/home/corp-responsiblity`
    );
    const { data } = await res.json();
    setData(data);
  };
  console.log(data);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchData();
      setLoading(false);
    })();
  }, []);
  return (
    <>
      <Card className="mb-10">
        <NewItem
          onAdd={() => {
            notification.success("Success!");
            fetchData();
          }}
          onError={() => {
            notification.error("Something went wrong");
          }}
        />
      </Card>
      {loading && (
        <div className="flex items-center justify-center">
          <LoadingOutlined />
        </div>
      )}

      {!loading && Object.keys(data).length > 0 && (
        <div>
          <p className="font-bold text-3xl mb-8 text-center">
            Existing details
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="mb-4">
                <h3 className="font-bold text-xl">Title: </h3>
                <p>{data.title}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">Description: </h3>
                <p>{data.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image.PreviewGroup>
                {data.media.map((media) => (
                  <div key={data?._id}>
                    <Image
                      src={media}
                      alt=""
                      wrapperClassName="w-full h-full"
                      className="object-cover aspect-square w-full h-full"
                    />
                  </div>
                ))}
              </Image.PreviewGroup>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CorpRes;
