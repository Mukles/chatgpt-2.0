import { useRoutes } from "react-router-dom";
import Layout from "./layout";
import Login from "./pages/account/login";
import Chat from "./pages/Chat";
import Home from "./pages/home";
import "./scss/app.scss";

function App() {
  let element = useRoutes([
    {
      path: "/account",
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "chat",
          element: <Chat />,
        },
      ],
    },
  ]);

  return element;
}

export default App;
