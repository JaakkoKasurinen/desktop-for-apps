import React from 'react';
import '../css/style.css';

function Windows() {

  return (
    <div className='window is-active'>
        <div className='window-bar'>
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
                            <div className='table-cell middle'>X</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='window-content'>
            
                <div className='window-program'>
                    {/* <div className='window-bg'></div> */}
                    <div className='window-container'>
                        <div className='notepad'>
                           <p>Tässä on jotain tekstiä ja kerrontaa mitä täällä voi tehä mäyt</p> 
                        </div>
                    </div>
                </div>
           
        </div>
        <div className='window-resizer'></div>
    </div>
  )
}

export default Windows;

