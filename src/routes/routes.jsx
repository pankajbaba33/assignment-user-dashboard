import Dashboard from "../pages/Dashboard";
import UserDetails from "../pages/UserDetails";
import UserForm from "../components/UserForm";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/create-new-user",
    element: <UserForm />,
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
  },
];

export default routes;