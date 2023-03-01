import { useLocation, useRoutes } from "react-router-dom";
import Layout from "./layout";
import Login from "./pages/account/login";
import Register from "./pages/account/register";
import Chat from "./pages/Chat";
import Home from "./pages/home";
import Private from "./routes/private-rotue";
import PublicRoute from "./routes/public-route";
import "./scss/app.scss";

function App() {
  const { pathname } = useLocation();
  console.log({ pathname });

  let element = useRoutes([
    {
      path: "/account",
      children: [
        {
          path: "login",
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: "register",
          element: (
            <PublicRoute>
              <Register />
            </PublicRoute>
          ),
        },
      ],
    },
    {
      path: "/",
      element: (
        <Private>
          <Layout />
        </Private>
      ),
      children: [
        {
          index: true,
          element: <Chat />,
        },

        {
          path: "chat/:chatId",
          element: <Home key={pathname} />,
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
