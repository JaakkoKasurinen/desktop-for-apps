import React from "react";
import { ResizableBox } from "react-resizable";
import '../css/style.css';

function Resizable() {
return(
    <ResizableBox className="box" width={200} height={200}>
<span className="text">{"<ResizableBox>, same as above."}</span>
    </ResizableBox>
);
}

export default Resizable;