import React from 'react';
import {useDropzone} from 'react-dropzone';

function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <img key={file.path}>
    </img>

  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <img className='img-fluid img-size' src={files.path}></img>
      </aside>
    </section>
  );
}
export default Basic;