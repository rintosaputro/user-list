import UserList from "./pages/UserList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([{ path: "*", element: <UserList /> }]);

  return <RouterProvider router={router} />;
}

export default App;
