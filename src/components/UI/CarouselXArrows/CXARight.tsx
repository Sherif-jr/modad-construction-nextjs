"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import ArrowsProps from "../../../interfaces/CarouselArrowProps.interface";
import { Grid } from "antd";
const { useBreakpoint } = Grid;
const CXARight: FC<ArrowsProps> = (props: ArrowsProps) => {
  const { className, style, onClick, icon, iconClassName, right, xsRight } =
    props;
  const screens = useBreakpoint();
  let rightSpace = right;
  if (rightSpace === undefined) {
    rightSpace = 98;
  }
  if (screens.xs && xsRight !== undefined) {
    rightSpace = xsRight;
  }
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        right: `${rightSpace}%`,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon || faArrowRight} className={iconClassName} />
    </div>
  );
};

export default CXARight;
