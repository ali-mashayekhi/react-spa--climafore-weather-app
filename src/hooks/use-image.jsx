import { useEffect, useState } from "react";

function useImage(fileName, filePath) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        let response;
        if (filePath == "main-icon-set")
          response = await import(`../assets/main-icon-set/${fileName}.svg`);
        else
          response = await import(
            `../assets/secondary-icon-set/${fileName}.svg`
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
