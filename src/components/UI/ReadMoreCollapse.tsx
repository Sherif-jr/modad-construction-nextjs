"use client";
import { useState } from "react";
import { Collapse } from "antd";

const ReadMoreCollapse = ({
  content,
  signature,
}: {
  content: string;
  signature?: string;
}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Collapse
      onChange={(key) => {
        if (key.length === 0) {
          setCollapsed(true);
        } else {
          setCollapsed(false);
        }
      }}
      ghost
      items={[
        {
          key: "readmore",
          label: (
            <button className="text-white select-none">
              Read {collapsed ? "more" : "less"}
            </button>
          ),
          showArrow: false,
          children: (
            <>
              <p className="text-white">{content}</p>
              {signature && <p className="text-white font-bold">{signature}</p>}
            </>
          ),
        },
      ]}
    />
  );
};

export default ReadMoreCollapse;
