import '../css/Desktop.css';
import Shortcuts from './Shortcuts';
import Menubar from './Menubar';

function Background() {
    return(
        <div class="wallpaper">
            <Shortcuts/>
            <Menubar/>
        </div>
    );
}

export default Background;