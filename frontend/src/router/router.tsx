import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ProjectList } from "../pages/ProjectList";
import { Tasks } from "../pages/Tasks";
import { TaskDetail } from "../pages/TaskDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProjectList />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "tasks/:_id",
        element: <TaskDetail />,
      },
    ],
  },
]);
