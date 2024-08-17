import { useState, useRef } from "react";

const Upload = () => {
  const [file, setFile] = useState();
  const uploadRef = useRef();
  const progressRef = useRef();

  const onSubmit = () => {};
  return (
    <div>
      <h3>File Upload</h3>
      <div className="upload-wrapper">
        <input type="file" name="file" ref={uploadRef} />
        <label htmlFor="upload">upload the file pdf/jpg/png</label>

        <p>
          progress : <progress value={"0"} max={"100"} ref={progressRef} />
        </p>

        <img src={file} alt="file upload" />
      </div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default Upload;
