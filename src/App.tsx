import "./App.css";
import MultiStepForm from "./pages/MultiStepForm";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sumbit" element={<MultiStepForm />} />
          <Route path="/forgotpassword" element = {<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
