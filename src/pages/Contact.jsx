import React from 'react';
import './contact.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';


function Contact() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default Contact;