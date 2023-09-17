import React, { useState } from "react";
import axios from "axios";

function SelfieCapture() {
  const [image, setImage] = useState(null);

  const captureSelfie = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const blob = await imageCapture.takePhoto();
      setImage(blob);
    } catch (error) {
      console.error("Error capturing selfie:", error);
    }
  };

  const uploadSelfie = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("fileData", image);

      try {
        const response = await axios.post(
          "/assessment/2yry94nc3SzaKizGs9C1/submit/selfies",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Selfie uploaded. URL:", response.data.url);
      } catch (error) {
        console.error("Error uploading selfie:", error);
      }
    } else {
      console.error("No image to upload.");
    }
  };

  return (
    <div>
      <h1>Selfie Capture</h1>
      <button onClick={captureSelfie}>Capture Selfie</button>
      <button onClick={uploadSelfie}>Upload Selfie</button>
    </div>
  );
}

export default SelfieCapture;
