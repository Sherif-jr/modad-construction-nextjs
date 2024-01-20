"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, message } from "antd";
import NewItem from "./_newItem";
import ICarouselData from "@/interfaces/CarouselData.interface";
import SingleImageItem from "@/components/UI/SingleImageItem/SingleImageItem";
import { LoadingOutlined } from "@ant-design/icons";

const MainCarousel = () => {
  const [data, setData] = useState<ICarouselData[]>([]);
  const [loading, setLoading] = useState(true);
  const [notification, notificationHolder] = message.useMessage();
  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URI}api/edit-website/home/highlights`
    );
    const { data }: { data: ICarouselData[] } = await res.json();
    setData(data);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchData();
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {notificationHolder}
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
      {!loading && data.length === 0 && (
        <div>
          <p className="text-center">There is no saved highlights!</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data.map((carousel) => {
            const { description, published } = carousel;
            return (
              <SingleImageItem
                id={carousel._id as string}
                key={carousel._id}
                showPublishedStatus
                published={published}
                imgSrc={carousel.media}
                textFields={{ description }}
                onActionSuccess={() => {
                  notification.success("Success!");
                  fetchData();
                }}
                onError={() => {
                  notification.error("Something went wrong");
                }}
                deleteEndpoint={`${process.env.NEXT_PUBLIC_BASE_URI}api/edit-website/home/highlights`}
                settings={[
                  {
                    label: published ? (
                      <p className="text-red-400">Unpublish</p>
                    ) : (
                      <p className="text-green-400">Publish</p>
                    ),
                    key: "publish",
                    onClick: async () => {
                      const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BASE_URI}api/edit-website/home/highlights`,
                        {
                          method: "PATCH",
                          body: JSON.stringify({
                            id: carousel._id,
                            published: !carousel.published,
                          }),
                        }
                      );
                      if ((res.status !== 400, res.status !== 404)) {
                        notification.success("Success");
                        fetchData();
                      } else {
                        notification.error("Something went wrong");
                      }
                    },
                  },
                ]}
              />
            );
          })}
      </div>
    </>
  );
};

export default MainCarousel;
