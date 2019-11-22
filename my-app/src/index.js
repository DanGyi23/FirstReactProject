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


ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
