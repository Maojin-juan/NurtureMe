import { createHashRouter } from "react-router-dom";
import ClientLayout from "@/components/Client/ClientLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Adoption from "@/pages/Adoption";
import Donation from "@/pages/Donation";
import News from "@/pages/News";
import Store from "@/pages/Store";
import ProductDetail from "@/pages/Store/ProductDetail";

const router = createHashRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "adoption",
        element: <Adoption />,
      },
      {
        path: "donation",
        element: <Donation />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "store",
        children: [
          {
            index: true,
            element: <Store />,
          },
          {
            path: ":productId",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
