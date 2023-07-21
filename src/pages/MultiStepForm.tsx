import React, { useContext, useEffect, useState } from "react";
import BasicDetails from "../Components/BasicDetail";
import Address from "../Components/Address";
import FileUpload from "../Components/FileUpload";
import MultiFileUpload from "../Components/MultiFileUpload";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import { UserContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

type userTokenContextType = {
  userToken?: string;
  updateToken?: (token: string) => void;
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [progress, setProgress] = React.useState(0);
  const [formData, setFormdata] = React.useState({});
  const [status, setstaus] = useState<Boolean>(false);

  const { userToken } = useContext(UserContext) as userTokenContextType;

  const redirect = useNavigate();
  useEffect(() => {
    if (!userToken) {
      redirect("/");
    }
  }, []);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    setProgress(progress + 25);
  };

  const UpdateForm = (key: string, val: any) => {
    setFormdata((prevFormData) => ({
      ...prevFormData,
      [key]: val,
    }));
  };
  console.log(formData);
  if (step === 5) {
    axios
      .post("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        setstaus(true);
        console.log(res);
      })
      .catch((e) => {
        setstaus(false);
        console.log(e);
      });
  }
  const Step = () => {
    switch (step) {
      case 1:
        return <BasicDetails UpdateForm={UpdateForm} handleNext={handleNext} />;
      case 2:
        return <Address UpdateForm={UpdateForm} handleNext={handleNext} />;
      case 3:
        return <FileUpload UpdateForm={UpdateForm} handleNext={handleNext} />;
      case 4:
        return (
          <MultiFileUpload UpdateForm={UpdateForm} handleNext={handleNext} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-xl">
      <ProgressBar
        completed={progress}
        bgColor="#000000"
        width="60vh"
        margin="30px 0px"
      />
      {step === 5 ? (
        status ? (
          <>
            <div className="text-green-600">Successfully Sumbited</div>
          </>
        ) : (
          <>
            <div className="text-red-500">Failure</div>
          </>
        )
      ) : (
        ""
      )}
      {Step()}
    </div>
  );
};

export default MultiStepForm;
