"use client";
import { FC, useEffect } from "react";
import ArrowsProps from "../../../interfaces/CarouselArrowProps.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "antd";
const { useBreakpoint } = Grid;
const CXALeft: FC<ArrowsProps> = (props: ArrowsProps) => {
  const { className, style, onClick, icon, iconClassName, left, xsLeft } =
    props;
  const screens = useBreakpoint();
  let leftSpace = left;
  if (leftSpace === undefined) {
    leftSpace = 2;
  }
  if (screens.xs && xsLeft !== undefined) {
    leftSpace = xsLeft;
  }

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        left: `${leftSpace}%`,
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon || faArrowLeft} className={iconClassName} />
    </div>
  );
};
export default CXALeft;
