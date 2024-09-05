import { useState, useRef } from "react";
import "./style.css";

const Upload = () => {
  const [file, setFile] = useState();
  const uploadRef = useRef();
  const progressRef = useRef();
  const statusRef = useRef();
  const loadRef = useRef();

  const handleUploadFile = () => {
    const file = uploadRef.current.files[0];
    setFile(URL.createObjectURL(file));
    let formData = new FormData();
    formData.append("image", file);
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.addEventListener("load", handleSuccess, false);
    xhr.addEventListener("error", handleError, false);
    xhr.addEventListener("abort", handleAbort, false);

    xhr.open("POST", "https://v2.conventapi.com/upload");
    xhr.send(formData);
  };

  const handleProgress = (e) => {
    loadRef.current.innerHTML = `Uploaded ${e.loaded} bytes of ${e.total}`;
    const percentage = (e.loaded / e.total) * 100;
    progressRef.current.value = Math.round(percentage);
    statusRef.current.innerHTML = `${Math.round(percentage)}% uploaded...`;
  };

  const handleSuccess = (e) => {
    statusRef.current.innerHTML = e.target.responseText;
    progressRef.current.value = 0;
  };

  const handleError = () => {
    statusRef.current.innerHTML = "upload failed try again...";
  };

  const handleAbort = () => {
    statusRef.current.innerHTML = "upload aborted please try again...";
  };

  const onSubmit = () => {};
  return (
    <div className="container-upload">
      <div className="upload-wrapper">
        <h3>File Upload</h3>
        <input onChange={handleUploadFile} type="file" name="file" ref={uploadRef} />
        <label htmlFor="upload">upload the file pdf/jpg/png</label>

        <label htmlFor="">
          progress : <progress value={"0"} max={"100"} ref={progressRef} />
        </label>
        <p ref={statusRef}></p>
        <p ref={loadRef}></p>
        <img src={file} alt="file upload" style={{ width: "100px", height: "100px" }} />
        <span className="button">
          <button onClick={onSubmit}>submit</button>
        </span>
      </div>
    </div>
  );
};

export default Upload;
