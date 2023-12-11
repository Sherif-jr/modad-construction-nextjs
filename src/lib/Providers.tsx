"use client";

import { ConfigProvider, theme } from "antd";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { darkAlgorithm } = theme;
  return (
    <StyledComponentsRegistry>
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
          token: { colorPrimary: "#CBA052", colorPrimaryBg: "#CBA052" },
          components: { Anchor: { colorPrimary: "#CBA052" } },
        }}
      >
        {children}
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
