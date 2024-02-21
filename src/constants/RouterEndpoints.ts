enum RouterEndpoints {
  // COMMON ROUTES
  Home = "/home",
  Login = "/login",
  Dashboard = "/dashboard",
  Profile = "/profile",

  // USERS MANAGEMENT
  UsersManagement = "/users",

  // STUDENTS ROUTES
  StudentsManagement = "/students",
  StudentDetail = "/student/:id",
  AddStudent = "/student/add",
  EditStudent = "/student/edit/:id",

  // RESERVED STUDENTS ROUTES
  ReservedStudents = "/reserved-students",

  // CLASSES MANAGEMENT
  ClassesManagement = "/classes",
  SyllabusManagement = "/syllabus",
  TrainingProgramManagement = "/training-program",
  TrainingCalendarManagement = "/training-calendar",
  LearningMaterialsManagement = "/learning-materials",
  CalendarManagement = "/calendar",

  // SCORES ROUTES
  ScoresManagement = "/scores",
  ScoreDetail = "/scores/:id",
  AddScore = "/score/add",
  EditScore = "/score/edit/:id",

  // EMAILS ROUTES
  EmailsManagement = "/emails",
  EmailConfiguration = "email-configuration",
  StudentsClassManagement = "StudentsClassManagement"
}

export default RouterEndpoints;
