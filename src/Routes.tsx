import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DASHBOARD_ROUTE_PATH, INDEX_ROUTE_PATH } from "./route-paths";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

interface OwnProps {}

type Props = OwnProps;

const RoutePaths: FunctionComponent<Props> = () => {
  return (
    <Routes>
      <Route
        path={INDEX_ROUTE_PATH}
        element={<Navigate to={DASHBOARD_ROUTE_PATH} />}
      />
      <Route path={DASHBOARD_ROUTE_PATH} element={<Dashboard />} />
      <Route path="*" element={<Navigate to={INDEX_ROUTE_PATH} />} />
    </Routes>
  );
};

export default RoutePaths;
