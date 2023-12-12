import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default interface ArrowsProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler | undefined;
  icon?: IconDefinition;
  left?: number;
  xsLeft?: number;
  xsRight?: number;
  right?: number;
  iconClassName?: string;
}
