import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./components/templates/Layout/Layout";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import StudentsManagement from "./components/pages/StudentsManagement/StudentsManagement";
import StudentDetail from "./components/pages/StudentDetail/StudentDetail";
import AddStudent from "./components/pages/AddStudent/AddStudent";
import EditStudent from "./components/pages/EditStudent/EditStudent";
import ReservedStudents from "./components/pages/ReservedStudents/ReservedStudents";
import ScoresManagement from "./components/pages/ScoresManagement/ScoresManagement";
import ScoreDetail from "./components/pages/ScoreDetail/ScoreDetail";
import EditScore from "./components/pages/EditScore/EditScore";
import EmailsManagement from "./components/pages/EmailsManagement/EmailsManagement";
import ClassesManagement from "./components/pages/ClassesManagement/ClassesManagement";
import StudentsClassManagement from "./components/pages/StudentsClassManagement/StudentsClassManagement";
import AddScore from "./components/pages/AddScore/AddScore";
import RouterEndpoints from "./constants/RouterEndpoints";
import Profile from "./components/pages/Profile/Profile";
import UserManagement from "./components/pages/UserManagement/UserManagement";
import AttendeeDetail from "./components/pages/AttendeeDetail/AttendeeDetail";
import ClassDetail from "./components/pages/ClassDetail/ClassDetail";
import UserPermission from "./components/pages/UserPermission/UserPermission";
import UserDetail from "./components/pages/UserDetail/UserDetail";
import SubLayout from "./components/templates/SubLayout/SubLayout";
import EmailDetail from "./components/pages/EmailDetail/EmailDetail";
import AddEmail from "./components/pages/AddEmail/AddEmail";
import EditEmail from "./components/pages/EditEmail/EditEmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // HOME PAGE
      {
        index: true,
        element: <Navigate to={RouterEndpoints.Home} />,
      },
      {
        path: RouterEndpoints.Home,
        element: <Home />,
      },

      // DASHBOARD
      {
        path: RouterEndpoints.Dashboard,
        element: <Dashboard />,
      },

      // STUDENTS MANAGEMENT
      {
        path: RouterEndpoints.StudentsManagement,
        element: <StudentsManagement />,
      },
      {
        path: RouterEndpoints.StudentDetail,
        element: <StudentDetail />,
      },
      {
        path: RouterEndpoints.AddStudent,
        element: <AddStudent />,
      },
      {
        path: RouterEndpoints.EditStudent,
        element: <EditStudent handleDataChange={() => {}} />,
      },

      {
        path: RouterEndpoints.ReservedStudents,
        element: <ReservedStudents />,
      },

      // CLASSES MANAGEMENT
      {
        path: RouterEndpoints.ClassesManagement,
        element: <ClassesManagement />,
      },
      {
        path: RouterEndpoints.StudentsClassManagement,
        element: <StudentsClassManagement />,
      },
      {
        path: RouterEndpoints.AttendeeDetail,
        element: <AttendeeDetail />,
      },
      {
        path: RouterEndpoints.ClassDetail,
        element: <ClassDetail />,
      },
      // SCORES MANAGEMENT
      {
        path: RouterEndpoints.ScoresManagement,
        element: <ScoresManagement />,
      },
      {
        path: RouterEndpoints.ScoreDetail,
        element: <ScoreDetail />,
      },
      {
        path: RouterEndpoints.AddScore,
        element: <AddScore />,
      },
      {
        path: RouterEndpoints.EditScore,
        element: <EditScore />,
      },

      // EMAIL MANAGEMENT
      {
        path: RouterEndpoints.EmailsManagement,
        element: <EmailsManagement />,
      },
      {
        path: RouterEndpoints.EmailDetail,
        element: <EmailDetail />,
      },
      {
        path: RouterEndpoints.AddEmail,
        element: <AddEmail />,
      },
      {
        path: RouterEndpoints.EditEmail,
        element: <EditEmail />,
      },
      // USER MANAGEMENT
      { path: RouterEndpoints.UsersManagement, element: <UserManagement /> },
      { path: RouterEndpoints.UserDetail, element: <UserDetail /> },
      { path: RouterEndpoints.UserPermission, element: <UserPermission /> },
    ],
  },
  // PROFILE
  {
    path: "",
    element: <SubLayout />,
    children: [
      {
        path: RouterEndpoints.Profile,
        element: <Profile />,
      },
    ],
  },

  // PUBLIC PAGES
  { path: RouterEndpoints.Login, element: <Login /> },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
