import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import NotFoundPage from "./Pages/ErrorsPage/NotFound/NotFoundPage";
import ReservedStudents from "./Pages/Admin/ReservedStudents/ReservedStudents";
import ClassesManagement from "./Pages/Trainer/ClassesManagement/ClassesManagement";
import ScoreDetail from "./Pages/Trainer/ScoreDetail/ScoreDetail";
import EmailTemplates from "./Pages/Admin/EmailTemplates/EmailTemplates";
import AddStudent from "./Pages/Admin/Students/Partials/AddStudent";
import StudentDetail from "./Pages/Admin/StudentDetail/StudentDetail";
import StudentScoresManagement from "./Pages/Trainer/StudentScoresManagement/StudentScoresManagement";
import UpdateStudentScore from "./Pages/Trainer/UpdateStudentScore/UpdateStudentScore";
import StudentByIDManagement from "./Pages/Admin/Students/StudentByIDManagement";
import StudentByClassManagement from "./Pages/Admin/Students/StudentByClassManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      //home page
      {
        index: true,
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },

      //students management
      {
        path: "/students",
        element: <StudentByIDManagement />,
      },
      {
        path: "/student/:id",
        element: <StudentDetail />,
      },
      {
        path: "/student/add",
        element: <AddStudent />,
      },
      {
        path: "/reserved-students",
        element: <ReservedStudents />,
      },

      //class management
      {
        path: "/classes",
        element: <ClassesManagement />,
      },
      {
        path: "/classes/:id",
        element: <StudentByClassManagement />,
      },

      //score management
      {
        path: "/score/:id",
        element: <ScoreDetail />,
      },
      {
        path: "/score/edit/:id",
        element: <UpdateStudentScore />,
      },
      {
        path: "/scores",
        element: <StudentScoresManagement />,
      },

      //email management
      {
        path: "/email-templates",
        element: <EmailTemplates />,
      },
    ],
  },

  //public pages
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
