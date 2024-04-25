import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Hello from "./routes/Hello";
import Time from "./routes/Time";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: "/time",
    element: <Time />,
  },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}