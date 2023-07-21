import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

interface BasicDetailsProps {
  handleNext: () => void;
  UpdateForm: (key: string, val: any) => void;
}

const BasicDetails: React.FC<BasicDetailsProps> = ({
  handleNext,
  UpdateForm,
}) => {
  
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [select, setSelect] = useState<string>("IN");
  const [phone, setPhone] = useState<string>("");
  
  const countries = ["IN","PK","US","AU","fi", "GB", "IE", "IT", "NL", "SE"];
  const customiselabel = {
    "IN": { primary: "+91"},
    "PK": { primary: "+92" },
    "US": { primary: "+1" },
    "AU": { primary: "+61"},
    "fi": { primary: "+358" },
    "GB": { primary: "+44" },
    "IE": { primary: "+353"},
    "IT": { primary: "+39" },
    "NL": { primary: "+31" },
    "SE": { primary: "+46" }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    UpdateForm("name", name);
    UpdateForm("email", email);
    UpdateForm("phone_number", phone);
    handleNext();
  };
  const handleonSelect = (code: string) => setSelect(code);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium">Basic Details</h2>
      <div className="w-[30rem]">
        <div className="flex justify-between my-2">
          <label>User's Name:</label>
          <input
            type="text"
            className="border-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Email:</label>
          <input
            type="email"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Phone number:</label>
          <ReactFlagsSelect
            selected={select}
            onSelect={handleonSelect}
            countries={countries}
            customLabels={customiselabel}
            selectedSize={14}
            optionsSize={12}
          />
          <input
            type="string"
            className="border-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 my-6 bg-black text-white rounded-md"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasicDetails;
