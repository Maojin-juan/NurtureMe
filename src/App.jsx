import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./store/store";
import router from "./router";
import Layout from "@/components/Layout/ClientLayout";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Adoption from "./pages/Adoption/index";
import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  );
}

export default App;
