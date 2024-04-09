import { useEffect, useState } from "react";

function useImage(fileName) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../assets/3d-weather-icons/${fileName}.png`
        );
        setImage(response.default);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImage();
  }, [fileName]);

  return image;
}

export default useImage;
