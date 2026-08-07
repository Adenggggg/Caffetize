import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("menu", "routes/menu.tsx"),
  route("menu/:slug", "routes/menu.$slug.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
