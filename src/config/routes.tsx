import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";
import ClientLogoPage from "../pages/ClientLogoPage";
import Team from "../pages/TeamPage";
import ColumnPage from "../pages/ColumnPage";
import App from "../App";
import VideoPage from "../pages/VideoPage";
import MapPage from "../pages/MapPage";
import ProtfolioPage from "../pages/ProtfolioPage";
import AboutCounter from "../components/about/AboutCounter";
import ProgressBarPage from "../pages/ProgressBarPage";
import CountersPage from "../pages/CountersPage";
import PricingTablePage from "../pages/PricingTablePage";
import GalleryPage from "../pages/GalleryPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import ProtfolioDetailsPage from "../pages/ProtfolioDetailsPage";
import BlogListPage from "../pages/BlogListPage";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "service",
        element: <ServicePage />,
      },
      {
        path: "service-details",
        element: <ServiceDetailsPage/>,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "pages",
        element: <ServicePage />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "clients-logo",
        element: <ClientLogoPage />,
      },
      {
        path: "columns",
        element: <ColumnPage />,
      },
      {
        path: "video-popup",
        element: <VideoPage />,
      },
      // {
      //   path: "blocks",
      //   element: <BlockPortfolio />,
      // },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blog",
        element: <BlogListPage />,
      },
      {
        path: "blog-details",
        element: <BlogDetailsPage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "portfolio",
        element: <ProtfolioPage />,
      },
      {
        path: "portfolio-details",
        element: <ProtfolioDetailsPage />,
      },
      {
        path: "portfolio-all",
        element: <AboutCounter />,
      },
      {
        path: "progress-bar",
        element: <ProgressBarPage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
      {
        path: "pricing-table",
        element: <PricingTablePage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export const router = createBrowserRouter(routes);
