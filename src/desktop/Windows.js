import {React, useState} from 'react';
import Draggable from 'react-draggable';
import Measure from 'react-measure';
import { useRef } from "react";
import useDimensions from "react-cool-dimensions";
import '../css/style.css';
import { Resizable, ResizableBox } from 'react-resizable';

function Windows() {

    const [style, setStyle] = useState({width: 200, height: 200});

   const onResize = (event, {element, size, handle}) => {
        setStyle({width: style.width, height: style.height});
      };


    return (

        <Draggable
         handle='.window-bar'
        >

        <ResizableBox width={200} height={200}
        minConstraints={[150, 150]}
        >

        


     <div className='window is-active'>
            
            <div className='window-bar'  >
                <div className='window-bar-container'>
                    <div className='window-bar-handle'></div>
                    <div className='window-bar-icon'>
                        <div className='table'>
                            <div className='table-cell middle'>
                                <div className='icon-graphic-img'></div>
                            </div>
                        </div>
                    </div>
                    <div className='window-bar-label'>
                        <div className='table'>
                            <div className='table-cell middle'>
                                <span>Readme.txt</span>
                            </div>
                        </div>
                    </div>
                    <div className='window-bar-controls'>
                        <div className='window-bar-controls-btn'>
                            <div className='window-bar-controls-btn-hotspot'></div>
                            <div className='table'>
                                <div className='table-cell middle'>
                                    <span>X</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='window-resizer'></div> */}
            <div className='window-content'>
            <div className='window-border'>
                <div className='window-program'>
                    
                        {/* <div className='window-bg'></div> */}
                        <div className='window-container'>
                            <div className='notepad'>
                                <p>Hi! My width is</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        
       
        </ResizableBox>
       
         </Draggable> 
       
    )
}

export default Windows;


