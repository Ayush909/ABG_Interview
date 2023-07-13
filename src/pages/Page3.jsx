import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Pages.css";

const Page3 = () => {
  const [images, setImages] = useState([]);

  const { filesDetails } = useSelector((state) => state.file);

  useEffect(() => {
    console.log(filesDetails);
    if (filesDetails) {
      setImages(filesDetails);
    }
  }, []);

  return (
    <div>
      {Object.entries(images).map(([name, urls]) => (
        <div key={name}>
          <h1>{name}</h1>
          {urls.map((url, index) => (
            <img
              className="images"
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page3;
