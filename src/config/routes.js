import { lazy } from "react";
const Home = lazy(() => import("../components/Homepage"));
const Routes = [
    {
        path: "/",
        component: Home,
        exact: true
    }
];

export default Routes;
