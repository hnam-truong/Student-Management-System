import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/main.scss";
import router from "./router";

const App = () => (
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);

export default App;
