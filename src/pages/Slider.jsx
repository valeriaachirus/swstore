import React, {useState, useEffect} from 'react';
import "./about.css";
import {data} from "./data"
import chef1 from "/imgs/chef1.jpg";
import chef from "/imgs/chef.webp";
import waitress from "/imgs/waitress.jpg";
import manager from "/imgs/manager.jpg";
import { makeStyles } from '@mui/styles';
import { width } from '@mui/system';
import ReactCardFlip, {YOUR_BACK_COMPONENT, YOUR_FRONT_CCOMPONENT} from 'react-card-flip';
import "./slider.css";

const Slider = () => {
  const [flip1, setFlip1] = useState(false)
  const [flip2, setFlip2] = useState(false)
  const [flip3, setFlip3] = useState(false)
  const [flip4, setFlip4] = useState(false)

  return (
    <>
      <div
        style={{ 
          display:"flex",
          flexDirection: "row",
          position: 'absolute',
          left: 0,
          width: '98.9vw',
          justifyContent: 'center'
        }}
      >
        <div
          onMouseEnter={() => setFlip1(true)}
          onMouseLeave={() => setFlip1(false)}
          >
          <ReactCardFlip isFlipped={flip1} flipDirection="horizontal" style={{height: '100vh'}}>
            <div 
              style={{width: '25vw', height: '88vh'}}>
              <div style={{width: '100%', height: '88vh'}}>
                  <div style={{
                    backgroundImage: `url(${chef1})`, 
                    backgroundSize: "cover",
                    height: "100%"
                  }}>
                    
                  </div>
                  <div></div>
              </div>
          
            </div>

            <div 
              style={{width: '25vw', height: '88vh'}}>
              <div style={{width: '100%', height: '88vh', position: 'relative'}}>
                  <div style={{
                    backgroundImage: `url(${chef1})`, 
                    backgroundSize: "cover",
                    filter: 'blur(13px)',
                    height: "100%"
                  }}>

                  </div>
                  <div 
                    style={{
                      position: 'absolute', 
                      left: 0, 
                      top: 0,
                      display: 'flex', 
                      flexDirection: 'row',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                  <div className='textBox'>
                     <div className='textTitle'>
                      <ul>
                       <li>Function: Baker</li>
                        <li>Name: Christian Lor</li>
                         </ul>
                         </div>
                         <div className='ipsumText'>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique dignissim facilisis. Etiam pharetra ante sit amet sagittis mattis. 
                          Suspendisse condimentum augue eget arcu gravida tempus."
                     </div>
                  </div> 
                  </div>
              </div>
          
            </div>
          </ReactCardFlip>
        </div>
        <div
          onMouseEnter={() => setFlip2(true)}
          onMouseLeave={() => setFlip2(false)}
          >
          <ReactCardFlip isFlipped={flip2} flipDirection="horizontal" style={{height: '100vh'}}>
            <div 
              style={{width: '24vw', height: '88vh'}}>
              <div style={{width: '100%', height: '88vh'}}>
                  <div style={{
                    backgroundImage: `url(${chef})`, 
                    backgroundSize: "cover",
                    height: "100%"
                  }}>
                  </div>
                  <div></div>
              </div>
          
            </div>

            <div 
              style={{width: '24vw', height: '88vh'}}>
              <div style={{width: '100%', height: '88vh', position: 'relative'}}>
                  <div style={{
                    backgroundImage: `url(${chef})`, 
                    backgroundSize: "cover",
                    filter: 'blur(13px)',
                    height: "100%"
                  }}>

                  </div>
                  <div 
                    style={{
                      position: 'absolute', 
                      left: 0, 
                      top: 0,
                      display: 'flex', 
                      flexDirection: 'row',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                  <div className='textBox'>
                     <div className='textTitle'>
                      <ul>
                       <li>Function: Baker</li>
                        <li>Name: Daniel Li</li>
                         </ul>
                         </div>
                       <div className='ipsumText'>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique dignissim facilisis. Etiam pharetra ante sit amet sagittis mattis. 
                          Suspendisse condimentum augue eget arcu gravida tempus."
                     </div>
                  </div>
                  </div>
              </div>
          
            </div>
          </ReactCardFlip>
        </div>
        <div
          onMouseEnter={() => setFlip3(true)}
          onMouseLeave={() => setFlip3(false)}
          >
          <ReactCardFlip isFlipped={flip3} flipDirection="horizontal" style={{height: '100vh'}}>
            <div 
              style={{width: '24vw', height: '88vh'}}>
              <div style={{width: '100%', height: '88vh'}}>
                  <div style={{
                    backgroundImage: `url(${waitress})`, 
                    backgroundSize: "cover",
                    height: "100%"
                  }}>
                  </div>
                  <div></div>
              </div>
          
            </div>

            <div 
              style={{width: '24vw', height: '88vh'}}>
              <div style={{width: '100%', height: '88vh', position: 'relative'}}>
                  <div style={{
                    backgroundImage: `url(${waitress})`, 
                    backgroundSize: "cover",
                    filter: 'blur(13px)',
                    height: "100%"
                  }}>

                  </div>
                  <div 
                    style={{
                      position: 'absolute', 
                      left: 0, 
                      top: 0,
                      display: 'flex', 
                      flexDirection: 'row',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <div className='textBox'>
                     <div className='textTitle'>
                      <ul>
                       <li>Function: Manager</li>
                        <li>Name: Marina Chris</li>
                         </ul>
                         </div>
                         <div className='ipsumText'>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique dignissim facilisis. Etiam pharetra ante sit amet sagittis mattis. 
                          Suspendisse condimentum augue eget arcu gravida tempus."
                     </div>
                  </div>
                  </div>
              </div>
          
            </div>
          </ReactCardFlip>
        </div>
        <div
          onMouseEnter={() => setFlip4(true)}
          onMouseLeave={() => setFlip4(false)}
          >
          <ReactCardFlip isFlipped={flip4} flipDirection="horizontal" style={{height: '100vh'}}>
            <div 
              style={{width: '24.5vw', height: '88vh'}}>
              <div style={{width: '100%', height: '88vh'}}>
                  <div style={{
                    backgroundImage: `url(${manager})`, 
                    backgroundSize: "cover",
                    height: "100%"
                  }}>
                  </div>
                  <div></div>
              </div>
          
            </div>

            <div 
              style={{width: '24.5vw', height: '88vh'}}>
              <div style={{width: '100%', height: '88vh', position: 'relative'}}>
                  <div style={{
                    backgroundImage: `url(${manager})`, 
                    backgroundSize: "cover",
                    filter: 'blur(13px)',
                    height: "100%"
                  }}>

                  </div>
                  <div 
                    style={{
                      position: 'absolute', 
                      left: 0, 
                      top: 0,
                      display: 'flex', 
                      flexDirection: 'row',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                   <div className='textBox'>
                     <div className='textTitle'>
                      <ul>
                       <li>Function: Waitress</li>
                        <li>Name: Daniela Ale</li>
                         </ul>
                         </div>
                         <div className='ipsumText'>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique dignissim facilisis. Etiam pharetra ante sit amet sagittis mattis. 
                          Suspendisse condimentum augue eget arcu gravida tempus."
                     </div>
                  </div>
                  </div>
              </div>
          
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </>
  )
};

export default Slider;