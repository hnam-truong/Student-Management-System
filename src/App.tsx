import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/main.scss";
import { ConfigProvider } from "antd";
import router from "./router";
import antConfig from "../antd-config";

const App = () => (
  <ConfigProvider theme={antConfig}>
    <RouterProvider router={router} />
    <ToastContainer />
  </ConfigProvider>
);

export default App;
