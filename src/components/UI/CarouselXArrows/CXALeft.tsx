"use client";
import { FC } from "react";
import ArrowsProps from "../../../interfaces/CarouselArrowProps.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CXALeft: FC<ArrowsProps> = (props: ArrowsProps) => {
  const { className, style, onClick, icon, iconClassName, left } = props;
  let leftSpace = left;
  if (leftSpace === undefined) {
    leftSpace = 2;
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
