enum RouterEndpoints {
  // COMMON ROUTES
  Home = "/home",
  Login = "/login",
  Dashboard = "/dashboard",
  Profile = "/profile",

  // USERS MANAGEMENT
  UsersManagement = "/users",
  UserDetail = "/user/:id",
  AddUser = "/user/add",
  EditUser = "/user/edit",
  UserPermission = "/user/permission",

  // STUDENTS ROUTES
  StudentsManagement = "/students",
  AttendeeDetail = "/student/:id",
  StudentDetail = "/class100/student/:id",
  AddStudent = "/student/add",
  EditStudent = "/student/edit/:id",

  // RESERVED STUDENTS ROUTES
  ReservedStudents = "/reserved-students",

  // CLASSES MANAGEMENT
  ClassesManagement = "/classes",
  StudentsClassManagement = "/class100",
  SyllabusManagement = "/syllabus",
  TrainingProgramManagement = "/training-program",
  TrainingCalendarManagement = "/training-calendar",
  LearningMaterialsManagement = "/learning-materials",
  CalendarManagement = "/calendar",
  ClassDetail = "/class/:id",

  // SCORES ROUTES
  ScoresManagement = "/class100/scores",
  ScoreDetail = "/class100/scores/:id",
  AddScore = "/class100/score/add",
  EditScore = "/class100/score/edit/:id",

  // EMAILS ROUTES
  EmailsManagement = "/emails",
  EmailConfiguration = "/email-configuration",
}

export default RouterEndpoints;
