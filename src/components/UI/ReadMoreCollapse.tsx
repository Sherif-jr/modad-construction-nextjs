"use client";
import { useState } from "react";
import { Collapse } from "antd";

const ReadMoreCollapse = ({
  content,
  signature,
  lastLine,
}: {
  content: string;
  signature?: string;
  lastLine?: string;
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
              <p className="text-white text-justify text-base">{content}</p>
              {signature && <p className="text-white font-bold text-base mt-2 mb-1">{signature}</p>}
              {lastLine && <p className="text-white font-bold text-base">{lastLine}</p>}
            </>
          ),
        },
      ]}
    />
  );
};

export default ReadMoreCollapse;
