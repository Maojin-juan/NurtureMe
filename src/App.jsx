import { HashRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout/ClientLayout";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Donation from "./pages/Donation";
import Adoption from "./pages/Adoption";
import News from "./pages/News";

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <Provider store={store}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
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
