import React from 'react';
import { useState } from 'react';
import '../css/style.css';

function Windows() {

    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});

    const DragStart = (e) => {
        
        console.log(e.screenX)
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left)
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top)
        setDragging(true);

        
    };

    const DragEnd = () => {
        setDragging(false);
    };

    const Dragging = (e) => {
        
        if(dragging){
            var left = e.screenX - diffX;
            var top = e.screenY - diffY;
            setStyles({left: left,
                     top: top})
        }
        console.log(dragging)
       
    };



    return (
        <div className='window is-active' style={styles}  >
            <div className='window-bar' onMouseDown={DragStart} onMouseMove={Dragging} onMouseUp={DragEnd} >
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
            <div className='window-content'>
            <div className='window-border'>
                <div className='window-program'>
                    
                        {/* <div className='window-bg'></div> */}
                        <div className='window-container'>
                            <div className='notepad'>
                                <p>Tässä on jotain tekstiä ja kerrontaa mitä täällä voi tehä mäyt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='window-resizer'></div>
        </div>
    )
}

export default Windows;


