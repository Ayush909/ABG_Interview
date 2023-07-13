import React from "react";
import FileUploader from "../components/FileUploader";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      Page 2
      <FileUploader />
      <Link to="/page3">Next Page</Link>
    </div>
  );
};

export default Page2;
