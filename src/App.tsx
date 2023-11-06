import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutePaths from "./Routes.tsx";
import Layout from "./components/Layout.tsx";
const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RoutePaths />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
