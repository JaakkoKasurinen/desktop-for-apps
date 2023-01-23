
import '../css/Desktop.css';

function Shortcuts() {
    return(
        
          
          <div class="desktop-icons">
          
          {/* <button id='calculator-button'>

        </button> */}

        <div tabIndex={1} class="icon">
            <div class="icon-graphic">
                <div id='calculator' class="icon-graphic-img"></div>
            </div>
            <div class="icon-label">
                <div class="icon-label-title">Calculator</div>
            </div>
        </div>
          
        <div tabIndex={2} class="icon">
            <div class="icon-graphic">
                <div id='chat' class="icon-graphic-img"></div>
            </div>
            <div class="icon-label">
                <div class="icon-label-title">Chat</div>
            </div>
        </div>

        <div tabIndex={3} class="icon">
            <div class="icon-graphic">
                <div id='trash' class="icon-graphic-img"></div>
            </div>
            <div class="icon-label">
                <div class="icon-label-title">Trash</div>
            </div>
        </div>
          
        </div>

        
    );
}

export default Shortcuts;