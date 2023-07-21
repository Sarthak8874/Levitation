import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setemail] = useState<string>("");
  const handleemailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <h1 className="text-2xl my-3">Forgort Password</h1>
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
        <button className="px-4 py-2 my-6 bg-black text-white rounded-md">
          Sent Otp
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
