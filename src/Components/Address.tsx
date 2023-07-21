import React, { useState } from "react";

interface AddressProps {
  handleNext: () => void;
  UpdateForm: (key: string, val: any) => void;
}

const Address: React.FC<AddressProps> = ({ handleNext, UpdateForm }) => {

  const [address_1, setaddress_1] = useState<string>("");
  const [address_2, setaddress_2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    UpdateForm("address_1", address_1);
    UpdateForm("address_2", address_2);
    UpdateForm("city", city);
    UpdateForm("state", state);
    UpdateForm("pincode", pincode);
    UpdateForm("country", country);

    handleNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium">Address</h2>
      <div className="w-[28rem]">
        <div className="flex justify-between my-2">
          <label>Address Line One:</label>
          <input
            className="border-2"
            type="text"
            value={address_1}
            onChange={(e) => setaddress_1(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Address Line Two:</label>
          <input
            className="border-2"
            type="text"
            value={address_2}
            onChange={(e) => setaddress_2(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between my-2">
          <label>City:</label>
          <input
            className="border-2"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between my-2">
          <label>State:</label>
          <input
            className="border-2"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Pincode:</label>
          <input
            className="border-2"
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Country:</label>
          <input
            className="border-2"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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

export default Address;
