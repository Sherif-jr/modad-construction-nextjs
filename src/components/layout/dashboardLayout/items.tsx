import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  SlidersOutlined,
  HighlightOutlined,
  FileDoneOutlined,
  FileProtectOutlined,
  ProjectOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

interface Item {
  title: string;
  path: string;
  icon: React.ReactElement;
  children?: Item[];
}
const items: Item[] = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <PieChartOutlined /> },
  {
    title: "Home",
    path: "/admin/dashboard/edit-website/home",
    icon: <HomeOutlined />,
    children: [
      {
        title: "Main Carousel",
        path: "/admin/dashboard/edit-website/home/main-carousel",
        icon: <SlidersOutlined />,
      },
      {
        title: "Highlights",
        path: "/admin/dashboard/edit-website/home/highlights",
        icon: <HighlightOutlined />,
      },
      {
        title: "Corporate Responsibility",
        path: "/admin/dashboard/edit-website/home/corporate-responsbility",
        icon: <FileProtectOutlined />,
      },
    ],
  },
  // {
  //   title: "Brands",
  //   path: "/admin/dashboard/edit-website/home/brands",
  //   icon: <DatabaseOutlined />,
  // },
  {
    title: "News",
    path: "/admin/dashboard/edit-website/home/news",
    icon: <FileDoneOutlined />,
  },
  {
    title: "Projects",
    path: "/admin/dashboard/edit-website/home/projects",
    icon: <ProjectOutlined />,
  },
];

export default items;
