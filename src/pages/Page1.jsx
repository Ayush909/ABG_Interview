import React from "react";
import FileUploader from "../components/FileUploader";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      Page1
      <FileUploader />
      <Link to="/page2">Next Page</Link>
    </div>
  );
};

export default Page1;
