import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home";
import RouteLayout from "./components/routelayout";
import Contact from "./components/contact";
import Profile from "./components/profile";
import ErrorPage from "./components/errorpage";
import Projectdetail from "./components/projectdetail";
import Projectlayout from "./components/projectlayout";
import MainRouteLayout from "./components/mainRouteLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainRouteLayout />}>
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="projects" element={<Projectlayout />}>
        <Route path=":id" element={<Projectdetail />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
