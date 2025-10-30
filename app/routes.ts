import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("institutes", "routes/institutes.tsx"),
    route("members", "routes/members.tsx"),
] satisfies RouteConfig;
