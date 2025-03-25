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
import { Jobs as AdminJobs } from "./components/admin/Jobs.jsx";
import { PostJobs } from "./components/admin/PostJobs.jsx";
import { Applicants } from "./components/admin/Applicants.jsx";
import { ProtectedRoute } from "./components/admin/ProtectedRoute.jsx";

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
    element: (
      <ProtectedRoute>
        <Companies />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CreateCompany />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <CompanySetup />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <AdminJobs />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <PostJobs />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />,
      </ProtectedRoute>
    ),
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
