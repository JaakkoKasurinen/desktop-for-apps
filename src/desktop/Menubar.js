import { useState } from 'react';
import '../css/Menubar.css';

function Menubar() {

    const [styleMenu, setStyleMenu] = useState('menu-start');
    const [showStartMenu, setShowStartMenu] = useState(false);

    const MenuStartClicked = () => {
        if (styleMenu == "menu-start")
        {
            setStyleMenu("menu-start is-active");
            setShowStartMenu(true);
        }
        else
        {
            setStyleMenu("menu-start");
            setShowStartMenu(false);
        }

        
    };


    return (
        <div className="menu-bar">
{/* Avautuu jos menu-start klikataan ja sulkeutuu toisella klikkauksella */}
            {showStartMenu ? 
            <div className='start-menu'>
                <div className='start-menu-container'>
                    <div className='menu-sidebar'>
                        <div className='menu-sidebar-logo'></div>
                    </div>
                <div className='menu-items'>
                    <ul>
                        <li>
                            <div className='menu-item-container'>
                                <span className='menu-item-icon'>
                                    <span className='menu-item-icon-graphic'></span>
                                </span>
                                <span className='label'>Esimerkki</span>
                            </div>
                        </li>
                        <li>
                            <div className='menu-item-container'>
                                <span className='menu-item-icon'>
                                    <span className='menu-item-icon-graphic'></span>
                                </span>
                                <span className='label'>Esimerkki</span>
                            </div>
                        </li>
                        <li className='spacer'>
        <div className='menu-item-container'></div>
                        </li>
                        <li>
                            <div className='menu-item-container'>
                                <span className='menu-item-icon'>
                                    <span className='menu-item-icon-graphic'></span>
                                </span>
                                <span className='label'>Esimerkki2</span>
                            </div>
                        </li>
                        <li className='spacer'>
        <div className='menu-item-container'></div>
                        </li>
                        <li>
                            <div className='menu-item-container'>
                                <span className='menu-item-icon'>
                                    <span className='menu-item-icon-graphic'></span>
                                </span>
                                <span className='label'>Esimerkki3</span>
                            </div>
                        </li>
                    </ul>
                </div>

                </div>

            </div>
            
        : <span/>}

{/* start-menu loppuu */}
            

            <div className="menu-bar-container">

                <div className="menu-bar-items">

                    <div className="menu-bar-item menu-bar-item-start">
                        <div onClick={MenuStartClicked} className={styleMenu}>
                            <div className="table">
                                <div className="table-cell middle">
                                    <div className="start-img"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="menu-bar-item menu-bar-item-programs">
                        <div className="menu-programs">
                            <div className="menu-program">
                                <div className="menu-program-container">
                                    {/*Tämä muodostuu uuden ikkunan avautuessa  */}
                                    <div className="program-icon">
                                        <div className="program-icon-img"></div>
                                    </div>

                                    <div className="program-label">
                                        <span>Esimerkki</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu-bar-item menu-bar-item-tasks">
                        <div className="menu-bar-tasks">
                            <div className="menu-bar-task-items"></div>
                            <div className="menu-bar-clock">
                                <div className="table">
                                    {/* Kellon aika koodilla */}
                                    <div className="table-cell middle">17:13</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Menubar;