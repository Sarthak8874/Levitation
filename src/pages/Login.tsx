import axios from "axios";
import React, { useState } from "react";
import { UserContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

type userTokenContextType = {
  userToken?: string;
  updateToken?: (token: string) => void;
};

const LoginPage = () => {
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ErrorMessage, setErrorMessage] = useState<string>("");
  const [progress, setProgress] = useState(0);

  const redirect = useNavigate();

  const { updateToken } = React.useContext(UserContext) as userTokenContextType;

  const handleemailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value);
  };
  const handlepasswordchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email);
   setProgress(20)
    if (!result || password == "") {
      alert("Enter Valid Email or Password");
      setProgress(100)
    } else {
      setProgress(40)
      axios
        .post("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          setProgress(80)
          if (updateToken) {
            updateToken(res?.data?.authToken);
            setProgress(100)
            redirect("/sumbit");
          }
        })
        .catch(() => {
          setProgress(100)
          setErrorMessage("Invalid Email or Password");
        });
    }
  };
  return (
    <>
      <LoadingBar
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        color="#000000"
      />
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-2xl my-3">Login</h1>
        <div className="text-red-500">
          {ErrorMessage && "Invalid Email or Password"}
        </div>
        <div className="flex flex-col w-[18rem]">
          <div className="my-4 flex justify-between">
            Email :
            <input
              type="email"
              className="px-2 py-2 border-2"
              value={email}
              onChange={handleemailchange}
              required
            />
          </div>
          <div className="my-4 flex justify-between">
            Password :
            <input
              type="password"
              className="px-2 py-2 border-2"
              value={password}
              onChange={handlepasswordchange}
              required
            />
          </div>
          <button
            className="px-4 py-2 my-6 bg-black text-white rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
