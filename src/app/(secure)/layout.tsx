import ScrollToTop from "@/components/UI/ScrollToTop";
import "../globals.css";
import { ConfigProvider } from "antd";

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: { colorPrimary: "#CBA052", colorPrimaryBg: "#CBA052" },
            components: { Anchor: { colorPrimary: "#CBA052" } },
          }}
        >
          {children}
        </ConfigProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
