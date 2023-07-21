import React, { useEffect, useState } from "react";

interface MultiFileUploadProps {
  handleNext: () => void;
  UpdateForm: (key: string, val: any) => void;
}

const MultiFileUpload: React.FC<MultiFileUploadProps> = ({
  handleNext,
  UpdateForm,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [latitude, setLatitude] = useState<Number>();
  const [longitude, setLongitude] = useState<Number>();
  const [geomessage, setgeoMessage] = useState<string>("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setgeoMessage("GeoLocation Captured");
      });
    } else {
      setgeoMessage("Geolocation is not available in this browser.");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    UpdateForm(
      "geolocation",
      `Latitude : ${latitude} Longitude : ${longitude}`
    );
    files.forEach((file, index) => {
      UpdateForm(`multi_ups${index + 1}`, file);
    });
    handleNext();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (files.length <= 4 && selectedFiles) {
      if (selectedFiles[0]) {
        setFiles([...files, selectedFiles[0]]);
      }
    } else {
      alert("File Limit Exceed : Cannot Upload More than 5 Files");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium">Multi File Upload</h2>
      <div className="w-[35rem]">
        <div className="flex justify-between my-8">
          <label>UploadFiles</label>
          <input
            type="file"
            accept=".png,.pdf"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="flex justify-center my-8">
          {" "}
          Total File Uploaded {files.length}
        </div>
      </div>
      <div className="flex justify-center">
        {geomessage.length == 0
          ? "GeoLoaction Capturing ....."
          : `${geomessage}`}
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 my-6 bg-black text-white rounded-md"
          type="submit"
        >
          Sumbit Detail
        </button>
      </div>
    </form>
  );
};

export default MultiFileUpload;
