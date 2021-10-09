export default [
    {
        path: "/",
        name: "百度文库",
        component: () => import("../pages/home")
    },
    {
        path: "/database",
        name: "developing",
        component: () => import("../pages/database")
    }
];
