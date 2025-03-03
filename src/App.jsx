import { HashRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "@/components/Layout/ClientLayout";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Adoption from "./pages/Adoption/index";
import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <Provider store={store}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/adoption" element={<Adoption />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Layout>
        </Provider>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
