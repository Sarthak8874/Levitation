import "./App.css";
import MultiStepForm from "./pages/MultiStepForm";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sumbit" element={<MultiStepForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
