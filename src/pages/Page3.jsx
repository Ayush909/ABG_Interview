import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Pages.css";

const Page3 = () => {
  const [images, setImages] = useState([]);

  const { filesDetails } = useSelector((state) => state.file);

  useEffect(() => {
    console.log(filesDetails);
    if (filesDetails.length) {
      setImages(filesDetails);
    }
  }, []);

  return (
    <div>
      {images &&
        images.map((img) => {
          return (
            <div>
              <h2>{img.name}</h2>
              <img className="images" src={img.url} alt={img.name} />
            </div>
          );
        })}
    </div>
  );
};

export default Page3;
