import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component {
  render() {
    return (
      <div className='Form'>
        <div className='Card'>
          <Upload />
        </div>
      </div>
    )
  }
}

class Upload extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( 
    <div className="Upload">
      <span className="Title">Upload Your Cat or Dog Photo</span>
      <div className="Content">
        <div />
        <div className="Files" />
      </div>
      <div className="Actions" />
    </div>
    )
  }
}

class Dropzone extends React.Component {
  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  };
  constructor(props){ 
    super(props)
    this.fileInputRef = React.createRef()
    
  };

  render() {
    return(
      <div className="Dropzone">
        <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        />
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <span>Upload Files</span>
      </div>
    )
  }
}


ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
