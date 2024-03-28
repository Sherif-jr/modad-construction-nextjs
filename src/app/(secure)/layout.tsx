import ScrollToTop from "@/components/UI/ScrollToTop";
import "../globals.css";
import { ConfigProvider } from "antd";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <StyledComponentsRegistry> */}
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: { colorPrimary: "#CBA052", colorPrimaryBg: "#CBA052" },
              components: { Anchor: { colorPrimary: "#CBA052" } },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
        {/* </StyledComponentsRegistry> */}
        <ScrollToTop />
      </body>
    </html>
  );
}
