import React, { useState, useEffect } from "react";
import ConvertApi from "convertapi-js";
import { storePdf } from "../store/fileSlice";
import "./FileUploader.css";

let convertApi = ConvertApi.auth("YAq7nLoc8oQUeR5M");
const FileUploader = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [pdfFile, setPdfFile] = useState();

  useEffect(() => {
    if (pdfFile) {
      saveFileToStore(pdfFile);
    }
  }, [pdfFile]);

  const saveFileToStore = async () => {
    let params = convertApi.createParams();
    params.add("file", pdfFile);
    let result = await convertApi.convert("pdf", "jpg", params);

    result.files.map((file) => {
      const imageDetails = {
        name,
        url: file.Url,
      };
      dispatch(storePdf(imageDetails));
    });
  };

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleFile = (e) => {
    if (e.target.files && e.target.files[0].type === "application/pdf") {
      setPdfFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={handleInput} />

      <input type="file" accept=".pdf" onChange={handleFile} />
    </div>
  );
};

export default FileUploader;
