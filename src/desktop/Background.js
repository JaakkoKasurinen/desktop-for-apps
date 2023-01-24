import '../css/Desktop.css';
import Shortcuts from './Shortcuts';
import Menubar from './Menubar';

function Background() {
    return(
        <div className="wallpaper">
            <Shortcuts/>
            <Menubar/>
        </div>
    );
}

export default Background;