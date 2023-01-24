import React, { useState } from "react";
import '../css/Desktop.css';

function Shortcuts() {

    const [styleCalc, setStyleCalc] = useState("icon");
    const [styleChat, setStyleChat] = useState("icon");
    const [styleTrash, setStyleTrash] = useState("icon");

    const ChangeStyleCalc = () => {
        if (styleCalc == "icon") setStyleCalc("icon-is-active")
        setStyleChat("icon")
        setStyleTrash("icon")
    };

    const ChangeStyleChat = () => {
        if (styleChat == "icon") setStyleChat("icon-is-active")
        setStyleCalc("icon")
        setStyleTrash("icon")
    };


    const ChangeStyleTrash = () => {
        if (styleTrash == "icon") setStyleTrash("icon-is-active")
        setStyleCalc("icon")
        setStyleChat("icon")

    };


    return (


        <div class="desktop-icons">


            <div onClick={ChangeStyleCalc} className={styleCalc}>
                <div className="icon-graphic">
                    <div id='calculator' className="icon-graphic-img"></div>
                </div>
                <div className="icon-label">
                    <div className="icon-label-title">Calculator</div>
                </div>
            </div>



            <div onClick={ChangeStyleChat} className={styleChat}>
                <div className="icon-graphic">
                    <div id='chat' className="icon-graphic-img"></div>
                </div>
                <div className="icon-label">
                    <div className="icon-label-title">Chat</div>
                </div>
            </div>

            <div onClick={ChangeStyleTrash} className={styleTrash}>
                <div className="icon-graphic">
                    <div id='trash' className="icon-graphic-img"></div>
                </div>
                <div className="icon-label">
                    <div className="icon-label-title">Trash</div>
                </div>
            </div>

        </div>


    );
}


export default Shortcuts;