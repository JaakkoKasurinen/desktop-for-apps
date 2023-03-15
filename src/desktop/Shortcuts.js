import React, { useState } from "react";
import '../css/style.css';

function Shortcuts() {

    const [styleCalc, setStyleCalc] = useState("icon");
    const [styleChat, setStyleChat] = useState("icon");
    const [styleTrash, setStyleTrash] = useState("icon");
    const [styleReadme, setStyleReadme] = useState("icon");

    const ChangeStyleCalc = (e) => {
        switch (e.detail) {
            case 1:
                if (styleCalc == "icon") setStyleCalc("icon-is-active")
        setStyleChat("icon")
        setStyleTrash("icon")
        setStyleReadme("icon")
                break;
                case 2:
                    console.log("Open window")
                    break;
            }
        
    };

    const ChangeStyleChat = (e) => {
        switch (e.detail) {
            case 1:
                if (styleChat == "icon") setStyleChat("icon-is-active")
        setStyleCalc("icon")
        setStyleTrash("icon")
        setStyleReadme("icon")
                break;
                case 2:
                    console.log("Open window")
                    break;
            }
        
    };


    const ChangeStyleTrash = (e) => {

        switch (e.detail) {
            case 1:
                if (styleTrash == "icon") setStyleTrash("icon-is-active")
        setStyleCalc("icon")
        setStyleChat("icon")
        setStyleReadme("icon")
                break;
                case 2:
                    console.log("Open window")
                    break;
            }

        

    };

    const ChangeStyleReadme = (e) => {

        switch (e.detail) {
        case 1:
            if (styleReadme == "icon") setStyleReadme("icon-is-active")
            setStyleCalc("icon")
            setStyleChat("icon")
            setStyleTrash("icon")
            break;
            case 2:
                console.log("Open window")
                break;
        }
        

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

            <div onClick={ChangeStyleReadme} className={styleReadme}>
                <div className="icon-graphic">
                    <div id='readme' className="icon-graphic-img"></div>
                </div>
                <div className="icon-label">
                    <div className="icon-label-title">Readme.txt</div>
                </div>
            </div>

        </div>


    );
}


export default Shortcuts;