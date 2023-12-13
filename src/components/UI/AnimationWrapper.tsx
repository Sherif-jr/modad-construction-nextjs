"use client";

import { LegacyRef, useEffect, useRef, useState } from "react";
interface Props {
  show: boolean;
  from?: React.CSSProperties;
  to?: React.CSSProperties;
  unMountAnimation?: React.CSSProperties[];
  options?: number | KeyframeAnimationOptions | undefined;
  className?: string;
}
const AnimationWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  show,
  children,
  from = { opacity: 0 },
  to = { opacity: 1 },
  unMountAnimation,
  options = { duration: 500, fill: "forwards" },
  className,
}) => {
  const elementRef = useRef<HTMLSpanElement>();

  const [removeState, setRemove] = useState(!show);

  useEffect(() => {
    const childElement = elementRef.current;
    if (show) {
      setRemove(false);
      if (!childElement) return;
      childElement.animate([from, to] as Keyframe[], options);
    } else {
      if (!childElement) return;
      const animation = childElement.animate(
        (unMountAnimation as Keyframe[] | undefined) ||
          ([to, from] as Keyframe[]),
        options
      );
      animation.onfinish = () => {
        if (elementRef.current) {
          elementRef.current.style.display = "none";
        }
        setRemove(true);
      };
    }
  }, [show, removeState]);

  return (
    !removeState && (
      <span
        ref={elementRef as LegacyRef<HTMLSpanElement>}
        className={className}
      >
        {children}
      </span>
    )
  );
};
export default AnimationWrapper;
