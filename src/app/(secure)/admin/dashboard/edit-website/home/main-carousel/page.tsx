"use client";
import React, { useEffect, useRef, useState } from "react";
import MainCarouselItem from "./_mainCarouseltem";
import { Button, Card, message } from "antd";
import NewItem from "./_newItem";
import { LoadingOutlined } from "@ant-design/icons";
import ICarouselData from "@/interfaces/CarouselData.interface";
import SingleImageItem from "@/components/UI/SingleImageItem/SingleImageItem";

const MainCarousel = () => {
  const [data, setData] = useState<ICarouselData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [notification, notificationHolder] = message.useMessage();
  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URI}api/edit-website/home/main-carousel`
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
      {!loading && (!data || data.length === 0) && (
        <div>
          <p className="text-center">There is no saved carousels!</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data.map((carousel) => {
            const { title, description, action, published } = carousel;
            return (
              <SingleImageItem
                id={carousel._id as string}
                key={carousel._id}
                showPublishedStatus
                published={published}
                imgSrc={carousel.media}
                textFields={{ title, description, action }}
                onActionSuccess={() => {
                  notification.success("Success!");
                  fetchData();
                }}
                onError={() => {
                  notification.error("Something went wrong");
                }}
                deleteEndpoint={`${process.env.NEXT_PUBLIC_BASE_URI}api/edit-website/home/main-carousel`}
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
                        `${process.env.NEXT_PUBLIC_BASE_URI}api/edit-website/home/main-carousel`,
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
