import React from "react";

interface FileUploadProps {
  handleNext: () => void;
  UpdateForm: (key: string, val: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ handleNext,UpdateForm }) => {
  const [single_file, setsingle_file] = React.useState<File | null>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(single_file){
      UpdateForm("single_file",single_file)
    }
    handleNext();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium">File Upload</h2>
      <div className="w-[30rem]">
        <div className="flex justify-between my-2">
          <label>UploadFile</label>
          <input
            type="file"
            accept=".png,.pdf"
            onChange={(e) => setsingle_file(e.target.files?.[0] || null)}
            required
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 my-6 bg-black text-white rounded-md"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default FileUpload;
