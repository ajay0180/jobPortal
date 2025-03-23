import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./components/auth/Signup.jsx";
import { Login } from "./components/auth/Login.jsx";
import { Home } from "./components/Home.jsx";
import { Jobs } from "./components/Jobs.jsx";
import { Browse } from "./components/Browse.jsx";
import { Profile } from "./components/Profile.jsx";
import { JobDescription } from "./components/JobDescription.jsx";
import { Companies } from "./components/admin/Companies.jsx";
import { CreateCompany } from "./components/admin/CreateCompany.jsx";
import { CompanySetup } from "./components/admin/CompanySetup.jsx";

const appRouter = createBrowserRouter([
  //client routes...
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  //admin routes...
  {
    path: "/admin/companies",
    element: <Companies />,
  },
  {
    path: "/admin/companies/create",
    element: <CreateCompany />,
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
